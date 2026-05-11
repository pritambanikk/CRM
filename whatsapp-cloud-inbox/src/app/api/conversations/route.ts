import { NextResponse } from 'next/server';
import {
  buildKapsoFields,
  type ConversationKapsoExtensions,
  type ConversationRecord
} from '@kapso/whatsapp-cloud-api';
import { whatsappClient, PHONE_NUMBER_ID } from '@/lib/whatsapp-client';
import { supabase } from '@/lib/supabase';

function parseDirection(kapso?: ConversationKapsoExtensions): 'inbound' | 'outbound' {
  if (!kapso) return 'inbound';
  const inboundAt = typeof kapso.lastInboundAt === 'string' ? Date.parse(kapso.lastInboundAt) : Number.NaN;
  const outboundAt = typeof kapso.lastOutboundAt === 'string' ? Date.parse(kapso.lastOutboundAt) : Number.NaN;
  if (Number.isFinite(inboundAt) && Number.isFinite(outboundAt)) return inboundAt >= outboundAt ? 'inbound' : 'outbound';
  if (Number.isFinite(inboundAt)) return 'inbound';
  if (Number.isFinite(outboundAt)) return 'outbound';
  return 'inbound';
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const parsedLimit = Number.parseInt(searchParams.get('limit') ?? '', 10);
    const limit = Number.isFinite(parsedLimit) && parsedLimit > 0 ? Math.min(parsedLimit, 100) : 50;

    // ── Fetch from Kapso (source of truth for conversation metadata) ──────
    const response = await whatsappClient.conversations.list({
      phoneNumberId: PHONE_NUMBER_ID,
      ...(status && { status: status as 'active' | 'ended' }),
      limit,
      fields: buildKapsoFields([
        'contact_name',
        'messages_count',
        'last_message_type',
        'last_message_text',
        'last_inbound_at',
        'last_outbound_at'
      ])
    });

    // ── Transform ─────────────────────────────────────────────────────────
    const transformed = response.data.map((conversation: ConversationRecord) => {
      const kapso = conversation.kapso;
      const lastMessageText = typeof kapso?.lastMessageText === 'string' ? kapso.lastMessageText : undefined;
      const lastMessageType = typeof kapso?.lastMessageType === 'string' ? kapso.lastMessageType : undefined;
      const direction = parseDirection(kapso);

      return {
        _kapsoId: conversation.id,
        _phoneNumber: conversation.phoneNumber ?? '',
        phoneNumber: conversation.phoneNumber ?? '',
        status: conversation.status ?? 'unknown',
        lastActiveAt: typeof conversation.lastActiveAt === 'string' ? conversation.lastActiveAt : undefined,
        phoneNumberId: conversation.phoneNumberId ?? PHONE_NUMBER_ID,
        metadata: conversation.metadata ?? {},
        contactName: typeof kapso?.contactName === 'string' ? kapso.contactName : undefined,
        messagesCount: typeof kapso?.messagesCount === 'number' ? kapso.messagesCount : undefined,
        lastMessage: lastMessageText
          ? { content: lastMessageText, direction, type: lastMessageType }
          : undefined,
      };
    });

    // ── Sync to Supabase (upsert by phone_number) and collect UUIDs ───────
    const upsertPayloads = transformed.map(c => ({
      kapso_id: c._kapsoId,
      phone_number: c._phoneNumber,
      phone_number_id: c.phoneNumberId,
      contact_name: c.contactName ?? null,
      status: c.status,
      last_active_at: c.lastActiveAt ?? null,
      last_message_content: c.lastMessage?.content?.slice(0, 500) ?? null,
      last_message_direction: c.lastMessage?.direction ?? null,
      last_message_type: c.lastMessage?.type ?? null,
      messages_count: c.messagesCount ?? 0,
      updated_at: new Date().toISOString(),
    }));

    // Filter out any conversations with empty phone numbers before upserting
    const validPayloads = upsertPayloads.filter(p => p.phone_number && p.phone_number.trim() !== '');

    const { data: supabaseRows, error: upsertError } = await supabase
      .from('wa_conversations')
      .upsert(validPayloads, { onConflict: 'phone_number', ignoreDuplicates: false })
      .select('id, phone_number');

    if (upsertError) {
      console.error('[conversations] Supabase upsert error:', JSON.stringify(upsertError));
    }

    // Build phone → UUID map
    const phoneToUUID: Record<string, string> = {};
    for (const row of supabaseRows ?? []) {
      phoneToUUID[row.phone_number] = row.id;
    }

    // ── Return with Supabase UUID as the conversation `id` ────────────────
    const finalData = transformed.map(c => ({
      id: phoneToUUID[c._phoneNumber] ?? c._kapsoId,
      kapsoId: c._kapsoId,
      phoneNumber: c.phoneNumber,
      status: c.status,
      lastActiveAt: c.lastActiveAt,
      phoneNumberId: c.phoneNumberId,
      metadata: c.metadata,
      contactName: c.contactName,
      messagesCount: c.messagesCount,
      lastMessage: c.lastMessage,
    }));

    return NextResponse.json({ data: finalData, paging: response.paging });
  } catch (error: unknown) {
    console.error('Error fetching conversations:', error);
    const e = error instanceof Error ? error : new Error(String(error));
    return NextResponse.json(
      { error: 'Failed to fetch conversations', details: e.message, stack: e.stack },
      { status: 500 }
    );
  }
}
