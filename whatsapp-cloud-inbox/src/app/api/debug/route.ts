import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { whatsappClient, PHONE_NUMBER_ID } from '@/lib/whatsapp-client';

/**
 * GET /api/debug
 * Full pipeline diagnostic — shows exactly what each layer returns.
 */
export async function GET() {
  const results: Record<string, unknown> = {
    env: {
      SUPABASE_URL: process.env.SUPABASE_URL ? '✓ set' : '✗ MISSING',
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY ? '✓ set' : '✗ MISSING',
      WEBHOOK_SECRET: process.env.WEBHOOK_SECRET ? '✓ set' : '✗ MISSING',
      KAPSO_API_KEY: process.env.KAPSO_API_KEY ? '✓ set' : '✗ MISSING',
      PHONE_NUMBER_ID: process.env.PHONE_NUMBER_ID || '✗ MISSING',
    }
  };

  // ── 1. What's in wa_conversations? ───────────────────────────────────────
  const { data: convRows, error: convErr } = await supabase
    .from('wa_conversations')
    .select('id, kapso_id, phone_number, last_message_content, last_message_direction')
    .order('created_at', { ascending: false })
    .limit(10);
  results.wa_conversations = convErr
    ? { error: convErr.message }
    : { count: convRows?.length ?? 0, rows: convRows };

  // ── 2. What's in wa_messages? ────────────────────────────────────────────
  const { data: msgRows, error: msgErr } = await supabase
    .from('wa_messages')
    .select('id, conversation_id, direction, content, message_type, created_at')
    .order('created_at', { ascending: false })
    .limit(10);
  results.wa_messages = msgErr
    ? { error: msgErr.message }
    : { count: msgRows?.length ?? 0, rows: msgRows };

  // ── 3. What does Kapso conversations list return? ────────────────────────
  try {
    const kapsoResp = await whatsappClient.conversations.list({
      phoneNumberId: PHONE_NUMBER_ID,
      limit: 10,
    });
    results.kapso_conversations = {
      count: kapsoResp.data?.length ?? 0,
      conversations: (kapsoResp.data ?? []).map((c: Record<string, unknown>) => ({
        id: c.id,
        phoneNumber: c.phoneNumber,
        status: c.status,
      })),
    };
  } catch (e) {
    results.kapso_conversations = { error: String(e) };
  }

  // ── 4. Upsert simulation — does phone_number → UUID lookup work? ─────────
  try {
    const kapsoResp2 = await whatsappClient.conversations.list({
      phoneNumberId: PHONE_NUMBER_ID,
      limit: 10,
    });
    const phones = (kapsoResp2.data ?? [])
      .map((c: Record<string, unknown>) => c.phoneNumber as string)
      .filter(Boolean);

    const { data: upsertCheck, error: upsertCheckErr } = await supabase
      .from('wa_conversations')
      .select('id, phone_number')
      .in('phone_number', phones);

    results.phone_to_uuid_lookup = upsertCheckErr
      ? { error: upsertCheckErr.message }
      : {
          phones_from_kapso: phones,
          matched_in_supabase: upsertCheck?.map(r => ({
            phone: r.phone_number, uuid: r.id,
          })),
        };
  } catch (e) {
    results.phone_to_uuid_lookup = { error: String(e) };
  }

  // ── 5. Messages fetch for each known conversation ────────────────────────
  const convIds = (convRows ?? []).map((r: { id: string }) => r.id);
  if (convIds.length > 0) {
    const checks: Record<string, unknown> = {};
    for (const cid of convIds.slice(0, 3)) {
      const { data, error } = await supabase
        .from('wa_messages')
        .select('id, direction, content, created_at')
        .eq('conversation_id', cid)
        .order('created_at', { ascending: false })
        .limit(5);
      checks[cid] = error ? { error: error.message } : { count: data?.length ?? 0, messages: data };
    }
    results.messages_per_conversation = checks;
  }

  return NextResponse.json(results, { status: 200 });
}
