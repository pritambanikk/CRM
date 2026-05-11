import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { createHmac, timingSafeEqual } from 'crypto';

// Use service-role key if available for webhook writes, fall back to anon
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY!
);

const VERIFY_TOKEN = process.env.WEBHOOK_VERIFY_TOKEN || 'vakiltech-whatsapp-webhook';
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET ?? '';

// ── Signature verification ───────────────────────────────────────────────────
// Kapso signs the raw body with HMAC-SHA256 using your secret.
// The header value is either "sha256=<hex>" or just "<hex>".
async function verifySignature(request: Request, rawBody: string): Promise<boolean> {
  if (!WEBHOOK_SECRET) {
    console.warn('[webhook] No WEBHOOK_SECRET set — skipping signature check');
    return true;
  }

  const signature = request.headers.get('x-webhook-signature') ?? '';
  if (!signature) {
    console.warn('[webhook] Missing X-Webhook-Signature header');
    return false;
  }

  // Strip optional "sha256=" prefix
  const hexSignature = signature.startsWith('sha256=')
    ? signature.slice(7)
    : signature;

  const expected = createHmac('sha256', WEBHOOK_SECRET)
    .update(rawBody, 'utf8')
    .digest('hex');

  // Timing-safe comparison to prevent timing attacks
  try {
    const sigBuf = Buffer.from(hexSignature, 'hex');
    const expBuf = Buffer.from(expected, 'hex');
    if (sigBuf.length !== expBuf.length) return false;
    return timingSafeEqual(sigBuf, expBuf);
  } catch {
    return false;
  }
}

// ── GET: Meta/Kapso webhook verification handshake ──────────────────────────
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('[webhook] Verified successfully');
    return new Response(challenge, { status: 200 });
  }

  console.warn('[webhook] Verification failed — token mismatch');
  return new Response('Forbidden', { status: 403 });
}

// ── POST: Incoming messages from Kapso/Meta ──────────────────────────────────
export async function POST(request: Request) {
  try {
    // Read raw body as text first (needed for signature verification)
    const rawBody = await request.text();

    // ── Verify signature ──────────────────────────────────────────────────
    // Log the signature header so we can verify the format in Vercel logs
    const sigHeader = request.headers.get('x-webhook-signature') ?? '(none)';
    const isValid = await verifySignature(request, rawBody);
    if (!isValid) {
      // Log but don't reject — allows us to see if events are arriving while we debug
      console.warn('[webhook] Signature mismatch — header:', sigHeader, '| body length:', rawBody.length);
    } else {
      console.log('[webhook] Signature verified OK');
    }

    // ── Parse and process ─────────────────────────────────────────────────
    const body = JSON.parse(rawBody) as WebhookPayload;

    // Acknowledge immediately — Meta requires a 200 within 5s
    await processWebhookPayload(body);

    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error('[webhook] Error processing payload:', error);
    // Still return 200 so Meta doesn't retry endlessly
    return NextResponse.json({ status: 'ok' });
  }
}

// ── Webhook payload types ────────────────────────────────────────────────────
type WebhookContact = { wa_id?: string; profile?: { name?: string } };
type WebhookMessage = {
  from?: string; id?: string; timestamp?: string; type?: string;
  text?: { body?: string };
  image?: { id?: string; mime_type?: string; caption?: string };
  video?: { id?: string; mime_type?: string; caption?: string };
  audio?: { id?: string; mime_type?: string };
  document?: { id?: string; mime_type?: string; filename?: string; caption?: string };
  sticker?: { id?: string; mime_type?: string };
  reaction?: { emoji?: string; message_id?: string };
  location?: { name?: string; latitude?: number; longitude?: number };
};
type WebhookStatus = { id?: string; status?: string };
type WebhookValue = {
  metadata?: { phone_number_id?: string };
  contacts?: WebhookContact[];
  messages?: WebhookMessage[];
  statuses?: WebhookStatus[];
};
type WebhookChange = { field?: string; value?: WebhookValue };
type WebhookEntry = { changes?: WebhookChange[] };
type WebhookPayload = { object?: string; entry?: WebhookEntry[] };

// ── Core processor ───────────────────────────────────────────────────────────
async function processWebhookPayload(payload: WebhookPayload) {
  if (payload.object !== 'whatsapp_business_account') return;

  for (const entry of payload.entry ?? []) {
    for (const change of entry.changes ?? []) {
      if (change.field !== 'messages') continue;

      const value = change.value;
      const phoneNumberId: string = value?.metadata?.phone_number_id ?? '';

      // ── Contact name lookup (keyed by wa_id) ──────────────────────────
      const contactMap: Record<string, string> = {};
      for (const contact of value?.contacts ?? []) {
        if (contact.wa_id && contact.profile?.name) {
          contactMap[contact.wa_id] = contact.profile.name;
        }
      }

      // ── Process inbound messages ──────────────────────────────────────
      for (const msg of value?.messages ?? []) {
        await handleInboundMessage(msg, phoneNumberId, contactMap);
      }

      // ── Process delivery/read status updates ─────────────────────────
      for (const status of value?.statuses ?? []) {
        await handleStatusUpdate(status);
      }
    }
  }
}

// ── Inbound message handler ──────────────────────────────────────────────────
async function handleInboundMessage(
  msg: WebhookMessage,
  phoneNumberId: string,
  contactMap: Record<string, string>
) {
  const phoneNumber: string = msg.from ?? '';
  const messageId: string = msg.id ?? '';
  const timestamp: number = parseInt(msg.timestamp ?? '0', 10);
  const createdAt = new Date(timestamp * 1000).toISOString();
  const contactName: string = contactMap[phoneNumber] ?? '';
  const messageType: string = msg.type ?? 'text';

  // ── Extract content and media info ──────────────────────────────────
  let content = '';
  let hasMedia = false;
  let mediaId: string | null = null;
  let mediaFilename: string | null = null;
  let mediaMimeType: string | null = null;
  let caption: string | null = null;
  let reactionEmoji: string | null = null;
  let reactedToMessageId: string | null = null;

  switch (messageType) {
    case 'text':
      content = msg.text?.body ?? '';
      break;
    case 'image':
      hasMedia = true;
      mediaId = msg.image?.id ?? null;
      mediaMimeType = msg.image?.mime_type ?? 'image/jpeg';
      caption = msg.image?.caption ?? null;
      content = caption ?? '[Image]';
      break;
    case 'video':
      hasMedia = true;
      mediaId = msg.video?.id ?? null;
      mediaMimeType = msg.video?.mime_type ?? 'video/mp4';
      caption = msg.video?.caption ?? null;
      content = caption ?? '[Video]';
      break;
    case 'audio':
      hasMedia = true;
      mediaId = msg.audio?.id ?? null;
      mediaMimeType = msg.audio?.mime_type ?? 'audio/ogg';
      content = '[Audio]';
      break;
    case 'document':
      hasMedia = true;
      mediaId = msg.document?.id ?? null;
      mediaMimeType = msg.document?.mime_type ?? 'application/octet-stream';
      mediaFilename = msg.document?.filename ?? null;
      caption = msg.document?.caption ?? null;
      content = caption ?? mediaFilename ?? '[Document]';
      break;
    case 'sticker':
      hasMedia = true;
      mediaId = msg.sticker?.id ?? null;
      mediaMimeType = msg.sticker?.mime_type ?? 'image/webp';
      content = '[Sticker]';
      break;
    case 'reaction':
      reactionEmoji = msg.reaction?.emoji ?? null;
      reactedToMessageId = msg.reaction?.message_id ?? null;
      content = reactionEmoji ?? '[Reaction]';
      break;
    case 'location':
      content = `[Location: ${msg.location?.name ?? `${msg.location?.latitude},${msg.location?.longitude}`}]`;
      break;
    default:
      content = `[${messageType}]`;
  }

  console.log('[webhook] Processing message:', messageId, 'from:', phoneNumber, 'type:', messageType);

  // ── Upsert conversation ──────────────────────────────────────────────
  const { data: conv, error: convError } = await supabase
    .from('wa_conversations')
    .upsert(
      {
        phone_number: phoneNumber,
        phone_number_id: phoneNumberId,
        contact_name: contactName || undefined,
        last_active_at: createdAt,
        last_message_content: content.slice(0, 500),
        last_message_direction: 'inbound',
        last_message_type: messageType,
        status: 'active',
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'phone_number', ignoreDuplicates: false }
    )
    .select('id')
    .single();

  if (convError || !conv) {
    console.error('[webhook] Failed to upsert conversation:', JSON.stringify(convError));
    return;
  }
  console.log('[webhook] Conversation upserted, id:', conv.id);

  // ── Insert message (ignore duplicates — idempotent) ──────────────────
  const { error: msgError } = await supabase
    .from('wa_messages')
    .upsert(
      {
        id: messageId,
        conversation_id: conv.id,
        direction: 'inbound',
        content,
        message_type: messageType,
        has_media: hasMedia,
        media_id: mediaId,
        media_filename: mediaFilename,
        media_mime_type: mediaMimeType,
        phone_number: phoneNumber,
        caption,
        reaction_emoji: reactionEmoji,
        reacted_to_message_id: reactedToMessageId,
        raw: msg,
        created_at: createdAt,
        received_at: new Date().toISOString(),
      },
      { onConflict: 'id', ignoreDuplicates: true }
    );

  if (msgError) {
    console.error('[webhook] Failed to insert message:', msgError);
  }

  // ── Increment message count ─────────────────────────────────────────
  try {
    await supabase.rpc('increment_wa_message_count', { conv_id: conv.id });
  } catch {
    // non-critical, ignore
  }
}

// ── Status update handler ────────────────────────────────────────────────────
async function handleStatusUpdate(status: WebhookStatus) {
  const messageId: string = status.id ?? '';
  const newStatus: string = status.status ?? '';

  if (!messageId || !newStatus) return;

  await supabase
    .from('wa_messages')
    .update({ status: newStatus })
    .eq('id', messageId);
}
