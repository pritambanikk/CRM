import { NextResponse } from 'next/server';
import { whatsappClient, PHONE_NUMBER_ID } from '@/lib/whatsapp-client';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const to = formData.get('to') as string;
    const body = formData.get('body') as string;
    const file = formData.get('file') as File | null;
    // Sender label from CRM (e.g. "Pritam · Super Admin") — internal only, never sent to user
    const sentBy = (formData.get('sent_by') as string | null) || null;

    if (!to) {
      return NextResponse.json(
        { error: 'Missing required field: to' },
        { status: 400 }
      );
    }

    let result;

    if (file) {
      const fileType = file.type.split('/')[0];
      const mediaType = fileType === 'application' ? 'document' : fileType;

      const uploadResult = await whatsappClient.media.upload({
        phoneNumberId: PHONE_NUMBER_ID,
        type: mediaType as 'image' | 'video' | 'audio' | 'document',
        file,
        fileName: file.name
      });

      if (mediaType === 'image') {
        result = await whatsappClient.messages.sendImage({
          phoneNumberId: PHONE_NUMBER_ID,
          to,
          image: { id: uploadResult.id, caption: body || undefined }
        });
      } else if (mediaType === 'video') {
        result = await whatsappClient.messages.sendVideo({
          phoneNumberId: PHONE_NUMBER_ID,
          to,
          video: { id: uploadResult.id, caption: body || undefined }
        });
      } else if (mediaType === 'audio') {
        result = await whatsappClient.messages.sendAudio({
          phoneNumberId: PHONE_NUMBER_ID,
          to,
          audio: { id: uploadResult.id }
        });
      } else {
        result = await whatsappClient.messages.sendDocument({
          phoneNumberId: PHONE_NUMBER_ID,
          to,
          document: { id: uploadResult.id, caption: body || undefined, filename: file.name }
        });
      }
    } else if (body) {
      result = await whatsappClient.messages.sendText({
        phoneNumberId: PHONE_NUMBER_ID,
        to,
        body
      });
    } else {
      return NextResponse.json(
        { error: 'Either body or file is required' },
        { status: 400 }
      );
    }

    // Persist sender attribution if provided
    if (sentBy) {
      const messageId =
        (result as any)?.messages?.[0]?.id ??
        (result as any)?.id ??
        null;
      if (messageId) {
        // Fire-and-forget — don't block the response on this
        supabase
          .from('message_senders')
          .insert({ whatsapp_message_id: messageId, sent_by: sentBy })
          .then(({ error }) => {
            if (error) console.warn('[send] Failed to store sender:', error.message);
          });
      }
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
