import { NextResponse } from 'next/server';
import { whatsappClient, PHONE_NUMBER_ID } from '@/lib/whatsapp-client';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const to = formData.get('to') as string;
    const body = formData.get('body') as string;
    const file = formData.get('file') as File | null;
    const sentBy = (formData.get('sent_by') as string | null) || null;

    if (!to) {
      return NextResponse.json({ error: 'Missing required field: to' }, { status: 400 });
    }

    let result;
    let messageType = 'text';
    let hasMedia = false;
    let mediaFilename: string | null = null;
    let mediaMimeType: string | null = null;

    if (file) {
      const fileType = file.type.split('/')[0];
      const mediaType = fileType === 'application' ? 'document' : fileType;
      messageType = mediaType;
      hasMedia = true;
      mediaFilename = file.name;
      mediaMimeType = file.type;

      const uploadResult = await whatsappClient.media.upload({
        phoneNumberId: PHONE_NUMBER_ID,
        type: mediaType as 'image' | 'video' | 'audio' | 'document',
        file,
        fileName: file.name
      });

      if (mediaType === 'image') {
        result = await whatsappClient.messages.sendImage({
          phoneNumberId: PHONE_NUMBER_ID, to,
          image: { id: uploadResult.id, caption: body || undefined }
        });
      } else if (mediaType === 'video') {
        result = await whatsappClient.messages.sendVideo({
          phoneNumberId: PHONE_NUMBER_ID, to,
          video: { id: uploadResult.id, caption: body || undefined }
        });
      } else if (mediaType === 'audio') {
        result = await whatsappClient.messages.sendAudio({
          phoneNumberId: PHONE_NUMBER_ID, to,
          audio: { id: uploadResult.id }
        });
      } else {
        result = await whatsappClient.messages.sendDocument({
          phoneNumberId: PHONE_NUMBER_ID, to,
          document: { id: uploadResult.id, caption: body || undefined, filename: file.name }
        });
      }
    } else if (body) {
      result = await whatsappClient.messages.sendText({ phoneNumberId: PHONE_NUMBER_ID, to, body });
    } else {
      return NextResponse.json({ error: 'Either body or file is required' }, { status: 400 });
    }

    // ── Persist to Supabase (fire-and-forget, non-blocking) ──────────────
    const res = result as { id?: string; messages?: { id: string }[] } | undefined;
    const messageId = res?.messages?.[0]?.id ?? res?.id ?? null;

    if (messageId) {
      // Find or create the conversation row in Supabase by phone number
      const saveToSupabase = async () => {
        // Upsert conversation
        const { data: conv, error: convError } = await supabase
          .from('wa_conversations')
          .upsert(
            {
              phone_number: to,
              phone_number_id: PHONE_NUMBER_ID,
              last_active_at: new Date().toISOString(),
              last_message_content: (body || mediaFilename || '[Media]').slice(0, 500),
              last_message_direction: 'outbound',
              last_message_type: messageType,
              status: 'active',
              updated_at: new Date().toISOString(),
            },
            { onConflict: 'phone_number', ignoreDuplicates: false }
          )
          .select('id')
          .single();

        if (convError) {
          console.error('[send] wa_conversations upsert error:', JSON.stringify(convError));
          return;
        }
        if (!conv?.id) {
          console.error('[send] wa_conversations upsert returned no id for phone:', to);
          return;
        }

        // Insert outbound message
        const { error: msgError } = await supabase.from('wa_messages').upsert(
          {
            id: messageId,
            conversation_id: conv.id,
            direction: 'outbound',
            content: body || mediaFilename || '[Media]',
            message_type: messageType,
            has_media: hasMedia,
            media_filename: mediaFilename,
            media_mime_type: mediaMimeType,
            phone_number: to,
            status: 'sent',
            sent_by: sentBy,
            created_at: new Date().toISOString(),
            received_at: new Date().toISOString(),
          },
          { onConflict: 'id', ignoreDuplicates: true }
        );
        if (msgError) {
          console.error('[send] wa_messages upsert error:', JSON.stringify(msgError));
        }

        // Also write to legacy message_senders table for backward compat
        if (sentBy) {
          await supabase
            .from('message_senders')
            .insert({ whatsapp_message_id: messageId, sent_by: sentBy })
            .then(({ error }) => {
              if (error) console.warn('[send] Failed to store sender:', error.message);
            });
        }
      };

      saveToSupabase().catch(err => console.warn('[send] Supabase save error:', err));
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
