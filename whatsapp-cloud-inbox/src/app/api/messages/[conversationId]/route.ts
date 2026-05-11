import { NextResponse } from 'next/server';
import {
  buildKapsoFields,
  type KapsoMessageExtensions,
  type MediaData,
  type MetaMessage,
  type ConversationRecord
} from '@kapso/whatsapp-cloud-api';
import { whatsappClient, PHONE_NUMBER_ID } from '@/lib/whatsapp-client';
import { supabase } from '@/lib/supabase';

// ── Helpers (kept for Kapso seed path) ──────────────────────────────────────

type MessageTypeData = { filename?: string; mimeType?: string; messageId?: string };
type WithOptionalTimestamp = { lastMessageTimestamp?: unknown };

function toIsoString(timestamp: unknown, fallback?: unknown): string {
  const n = (v: unknown): number | null => {
    if (typeof v === 'number' && Number.isFinite(v)) return v;
    if (typeof v === 'string' && v.trim()) { const n2 = Number(v); if (Number.isFinite(n2)) return n2; }
    return null;
  };
  const s = n(timestamp);
  if (s !== null) return new Date(s * 1000).toISOString();
  if (typeof fallback === 'string' && !isNaN(Date.parse(fallback))) return new Date(fallback).toISOString();
  return new Date().toISOString();
}

function normaliseContent(content: KapsoMessageExtensions['content']): string | undefined {
  if (!content) return undefined;
  if (typeof content === 'string') return content;
  if (typeof content === 'object' && 'text' in content) {
    const t = (content as { text?: unknown }).text;
    if (typeof t === 'string') return t;
  }
  return undefined;
}

function extractTypeData(v: KapsoMessageExtensions['messageTypeData']): MessageTypeData | undefined {
  if (!v || typeof v !== 'object') return undefined;
  const { filename, mimeType, messageId } = v as MessageTypeData;
  return {
    filename: typeof filename === 'string' ? filename : undefined,
    mimeType: typeof mimeType === 'string' ? mimeType : undefined,
    messageId: typeof messageId === 'string' ? messageId : undefined,
  };
}

function extractMedia(m: MediaData | undefined) {
  return {
    filename: typeof m?.filename === 'string' ? m.filename : undefined,
    contentType: typeof m?.contentType === 'string' ? m.contentType : undefined,
    byteSize: typeof m?.byteSize === 'number' ? m.byteSize : undefined,
  };
}

// ── Supabase row type (matches wa_messages schema) ──────────────────────────
type WaMessageRow = {
  id: string;
  conversation_id?: string;
  direction?: string;
  content?: string | null;
  created_at?: string;
  status?: string | null;
  phone_number?: string | null;
  has_media?: boolean;
  media_url?: string | null;
  media_mime_type?: string | null;
  media_filename?: string | null;
  media_id?: string | null;
  reaction_emoji?: string | null;
  reacted_to_message_id?: string | null;
  message_type?: string | null;
  caption?: string | null;
  sent_by?: string | null;
};

// ── Map a Supabase wa_messages row → frontend message shape ─────────────────
function supabaseRowToMessage(row: WaMessageRow, sentByMap: Record<string, string> = {}) {
  return {
    id: row.id,
    direction: row.direction,
    content: row.content ?? '',
    createdAt: row.created_at,
    status: row.status ?? undefined,
    phoneNumber: row.phone_number ?? '',
    hasMedia: row.has_media ?? false,
    mediaData: row.media_url
      ? { url: row.media_url, contentType: row.media_mime_type, filename: row.media_filename }
      : undefined,
    reactionEmoji: row.reaction_emoji ?? null,
    reactedToMessageId: row.reacted_to_message_id ?? null,
    filename: row.media_filename ?? null,
    mimeType: row.media_mime_type ?? null,
    messageType: row.message_type ?? 'text',
    caption: row.caption ?? null,
    sentBy: sentByMap[row.id] ?? row.sent_by ?? null,
    metadata: row.media_id ? { mediaId: row.media_id } : {},
  };
}

// ── Seed Supabase from Kapso for a conversation (first-open) ─────────────────
async function seedFromKapso(
  conversationId: string,
  kapsoId: string,
  limit: number,
  after?: string
): Promise<{ messages: WaMessageRow[]; paging: unknown }> {
  const response = await whatsappClient.messages.listByConversation({
    phoneNumberId: PHONE_NUMBER_ID,
    conversationId: kapsoId,
    limit,
    after,
    fields: buildKapsoFields([
      'direction', 'status', 'processing_status', 'phone_number', 'has_media',
      'media_data', 'media_url', 'whatsapp_conversation_id', 'contact_name',
      'message_type_data', 'content', 'flow_response', 'flow_token', 'flow_name', 'order_text'
    ])
  });

  const rows = response.data.map((msg: MetaMessage) => {
    const { image, video, audio, document, sticker, text, reaction, kapso } = msg;
    const kx = kapso as KapsoMessageExtensions | undefined;
    const typeData = extractTypeData(kx?.messageTypeData);
    const kapsoMedia = extractMedia(kx?.mediaData);
    const mediaId = image?.id ?? video?.id ?? audio?.id ?? document?.id ?? sticker?.id
      ?? (typeof kx?.mediaData?.id === 'string' ? kx.mediaData.id : undefined);
    const mediaUrl = image?.link ?? video?.link ?? audio?.link ?? document?.link ?? sticker?.link
      ?? (typeof kx?.mediaUrl === 'string' ? kx.mediaUrl : undefined)
      ?? (typeof kx?.mediaData?.url === 'string' ? kx.mediaData.url : undefined);
    const hasMedia = Boolean(kx?.hasMedia) || Boolean(mediaId)
      || ['image', 'video', 'audio', 'document', 'sticker'].includes(msg.type);
    const kapsoContent = normaliseContent(kx?.content);
    const textBody = typeof text?.body === 'string' ? text.body : undefined;
    const reactionEmoji = typeof reaction?.emoji === 'string' ? reaction.emoji : undefined;
    const fallbackCaption = (typeof image?.caption === 'string' && image.caption)
      || (typeof video?.caption === 'string' && video.caption)
      || (typeof document?.caption === 'string' && document.caption) || undefined;
    const lmt = (kx as WithOptionalTimestamp | undefined)?.lastMessageTimestamp;
    const createdAt = toIsoString(msg.timestamp, lmt);
    const direction = typeof kx?.direction === 'string' ? kx.direction : 'inbound';
    const content = kapsoContent ?? textBody ?? reactionEmoji ?? fallbackCaption ?? '';

    return {
      id: msg.id,
      conversation_id: conversationId,
      direction,
      content,
      message_type: msg.type,
      has_media: hasMedia,
      media_id: mediaId ?? null,
      media_url: mediaUrl ?? null,
      media_filename: document?.filename ?? typeData?.filename ?? kapsoMedia.filename ?? null,
      media_mime_type: typeData?.mimeType ?? kapsoMedia.contentType ?? null,
      media_size: kapsoMedia.byteSize ?? null,
      phone_number: typeof kx?.phoneNumber === 'string' ? kx.phoneNumber : (msg as Record<string, unknown>).from as string | null ?? null,
      status: typeof kx?.status === 'string' ? kx.status : null,
      reaction_emoji: reactionEmoji ?? null,
      reacted_to_message_id: typeof reaction?.messageId === 'string' ? reaction.messageId
        : typeData?.messageId ?? null,
      caption: fallbackCaption ?? null,
      raw: msg,
      created_at: createdAt,
      received_at: new Date().toISOString(),
    };
  });

  // Batch upsert into Supabase (ignore duplicates)
  if (rows.length > 0) {
    await supabase
      .from('wa_messages')
      .upsert(rows, { onConflict: 'id', ignoreDuplicates: true });
  }

  return { messages: rows, paging: response.paging };
}

// ── GET /api/messages/[conversationId] ───────────────────────────────────────
export async function GET(
  request: Request,
  { params }: { params: Promise<{ conversationId: string }> }
) {
  const { conversationId } = await params;
  try {
    const { searchParams } = new URL(request.url);
    const parsedLimit = Number.parseInt(searchParams.get('limit') ?? '', 10);
    const limit = Number.isFinite(parsedLimit) && parsedLimit > 0 ? Math.min(parsedLimit, 100) : 25;
    const after = searchParams.get('after') || undefined; // cursor for older messages

    // ── 1. Try reading from Supabase ─────────────────────────────────────
    let query = supabase
      .from('wa_messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: false })
      .limit(limit);

    // "after" is used for pagination — in Supabase we use created_at as cursor
    if (after) {
      // after is a base64-encoded ISO timestamp from previous page
      try {
        const afterTs = Buffer.from(after, 'base64').toString('utf8');
        query = query.lt('created_at', afterTs);
      } catch {
        // ignore bad cursor
      }
    }

    const { data: rows, error } = await query;

    // ── 2. If Supabase has data, serve it ─────────────────────────────────
    if (!error && rows && rows.length > 0) {
      // Fetch sender attribution for outbound messages
      const outboundIds = rows.filter(r => r.direction === 'outbound').map(r => r.id);
      let senderMap: Record<string, string> = {};
      if (outboundIds.length > 0) {
        const { data: senderRows } = await supabase
          .from('message_senders')
          .select('whatsapp_message_id, sent_by')
          .in('whatsapp_message_id', outboundIds);
        if (senderRows) {
          senderMap = Object.fromEntries(senderRows.map(r => [r.whatsapp_message_id, r.sent_by]));
        }
      }

      const messages = rows.map(r => supabaseRowToMessage(r, senderMap));

      // Build next cursor (oldest timestamp in this page)
      const oldest = rows[rows.length - 1];
      const nextCursor = oldest
        ? Buffer.from(oldest.created_at).toString('base64')
        : null;

      // Check if there are older messages
      const { count } = await supabase
        .from('wa_messages')
        .select('*', { count: 'exact', head: true })
        .eq('conversation_id', conversationId)
        .lt('created_at', oldest?.created_at ?? new Date().toISOString());

      const hasMore = (count ?? 0) > 0;

      return NextResponse.json({
        data: messages,
        paging: hasMore && nextCursor
          ? { cursors: { after: nextCursor } }
          : { cursors: {} }
      });
    }

    // ── 3. Supabase is empty — seed from Kapso (first-open for this chat) ──
    const { data: convRow } = await supabase
      .from('wa_conversations')
      .select('kapso_id, phone_number')
      .eq('id', conversationId)
      .single();

    let kapsoId: string | null = convRow?.kapso_id ?? null;

    // kapso_id may be null if the conversation was created by the webhook
    // (which doesn't know the Kapso conversation ID). Try to find it from
    // the Kapso conversations list using the stored phone number.
    if (!kapsoId && convRow?.phone_number) {
      try {
        const convList = await whatsappClient.conversations.list({
          phoneNumberId: PHONE_NUMBER_ID,
          limit: 100,
        });
        const phone = convRow.phone_number;
        const match = (convList.data as ConversationRecord[]).find(
          (c) => c.phoneNumber === phone || c.phoneNumber === `+${phone}` || `+${c.phoneNumber}` === phone
        );
        if (match?.id) {
          kapsoId = match.id;
          // Persist so future loads skip this lookup
          await supabase
            .from('wa_conversations')
            .update({ kapso_id: kapsoId })
            .eq('id', conversationId);
        }
      } catch {
        // Kapso lookup failed — will return empty below
      }
    }

    if (!kapsoId) {
      return NextResponse.json({ data: [], paging: { cursors: {} } });
    }

    const { messages: seededRows, paging } = await seedFromKapso(
      conversationId, kapsoId, limit, after
    );

    // Fetch sender attribution for outbound messages from the seed
    const outboundIds = seededRows.filter(r => r.direction === 'outbound').map(r => r.id);
    let senderMap: Record<string, string> = {};
    if (outboundIds.length > 0) {
      const { data: senderRows } = await supabase
        .from('message_senders')
        .select('whatsapp_message_id, sent_by')
        .in('whatsapp_message_id', outboundIds);
      if (senderRows) {
        senderMap = Object.fromEntries(senderRows.map(r => [r.whatsapp_message_id, r.sent_by]));
      }
    }

    const messages = seededRows.map(r => supabaseRowToMessage(r, senderMap));

    return NextResponse.json({ data: messages, paging });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages', conversationId },
      { status: 500 }
    );
  }
}
