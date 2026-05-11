import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

/**
 * GET /api/debug
 * Tests Supabase connectivity and write access from the running Vercel environment.
 * Remove or restrict this endpoint once the issue is diagnosed.
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

  // Test 1: SELECT from wa_conversations
  const { data: selectData, error: selectError } = await supabase
    .from('wa_conversations')
    .select('id')
    .limit(1);
  results.select_wa_conversations = selectError
    ? { error: selectError.message, code: selectError.code }
    : { ok: true, rows: selectData?.length ?? 0 };

  // Test 2: INSERT into wa_conversations
  const testPhone = `debug_${Date.now()}`;
  const { data: insertData, error: insertError } = await supabase
    .from('wa_conversations')
    .insert({ phone_number: testPhone, status: 'active' })
    .select('id')
    .single();
  results.insert_wa_conversations = insertError
    ? { error: insertError.message, code: insertError.code, hint: insertError.hint }
    : { ok: true, id: insertData?.id };

  // Test 3: UPSERT into wa_conversations (the actual path used by conversations API)
  const { data: upsertData, error: upsertError } = await supabase
    .from('wa_conversations')
    .upsert(
      { phone_number: testPhone, contact_name: 'debug_upsert', status: 'active', updated_at: new Date().toISOString() },
      { onConflict: 'phone_number', ignoreDuplicates: false }
    )
    .select('id, phone_number');
  results.upsert_wa_conversations = upsertError
    ? { error: upsertError.message, code: upsertError.code, hint: upsertError.hint }
    : { ok: true, rows: upsertData?.length };

  // Test 4: INSERT into wa_messages (requires a valid conversation_id)
  if (insertData?.id) {
    const { error: msgError } = await supabase
      .from('wa_messages')
      .insert({
        id: `debug_msg_${Date.now()}`,
        conversation_id: insertData.id,
        direction: 'inbound',
        content: 'debug test',
        message_type: 'text',
        has_media: false,
        created_at: new Date().toISOString(),
      });
    results.insert_wa_messages = msgError
      ? { error: msgError.message, code: msgError.code, hint: msgError.hint }
      : { ok: true };

    // Cleanup
    await supabase.from('wa_conversations').delete().eq('phone_number', testPhone);
  }

  return NextResponse.json(results, { status: 200 });
}
