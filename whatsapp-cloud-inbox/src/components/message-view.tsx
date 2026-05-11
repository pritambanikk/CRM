'use client';

import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { format, isValid, isToday, isYesterday, differenceInHours } from 'date-fns';
import { RefreshCw, Paperclip, Send, X, AlertCircle, MessageSquare, XCircle, ListTree, ArrowLeft, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MediaMessage } from '@/components/media-message';
import { TemplateSelectorDialog } from '@/components/template-selector-dialog';
import { InteractiveMessageDialog } from '@/components/interactive-message-dialog';
import { supabaseBrowser } from '@/lib/supabase-browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import type { MediaData } from '@kapso/whatsapp-cloud-api';

type Message = {
  id: string;
  direction: 'inbound' | 'outbound';
  content: string;
  createdAt: string;
  status?: string;
  phoneNumber: string;
  hasMedia: boolean;
  sentBy?: string | null;
  mediaData?: {
    url: string;
    contentType?: string;
    filename?: string;
  } | (MediaData & { url: string });
  reactionEmoji?: string | null;
  reactedToMessageId?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  messageType?: string;
  caption?: string | null;
  metadata?: {
    mediaId?: string;
    caption?: string;
  };
};

function formatMessageTime(timestamp: string): string {
  try {
    const date = new Date(timestamp);
    if (isValid(date)) {
      return format(date, 'HH:mm');
    }
    return '';
  } catch {
    return '';
  }
}

function formatDateDivider(timestamp: string): string {
  try {
    const date = new Date(timestamp);
    if (!isValid(date)) return '';

    if (isToday(date)) return 'Today';
    if (isYesterday(date)) return 'Yesterday';
    return format(date, 'MMMM d, yyyy');
  } catch {
    return '';
  }
}

function shouldShowDateDivider(currentMsg: Message, prevMsg: Message | null): boolean {
  if (!prevMsg) return true;

  try {
    const currentDate = new Date(currentMsg.createdAt);
    const prevDate = new Date(prevMsg.createdAt);

    if (!isValid(currentDate) || !isValid(prevDate)) return false;

    return format(currentDate, 'yyyy-MM-dd') !== format(prevDate, 'yyyy-MM-dd');
  } catch {
    return false;
  }
}

function isWithin24HourWindow(messages: Message[]): boolean {
  // Find the last inbound message
  const inboundMessages = messages.filter(msg => msg.direction === 'inbound');

  if (inboundMessages.length === 0) {
    // No inbound messages yet - only templates allowed
    return false;
  }

  const lastInboundMessage = inboundMessages[inboundMessages.length - 1];

  try {
    const lastMessageDate = new Date(lastInboundMessage.createdAt);
    if (!isValid(lastMessageDate)) return false;

    const hoursSinceLastMessage = differenceInHours(new Date(), lastMessageDate);
    return hoursSinceLastMessage < 24;
  } catch {
    return false; // In case of error, only allow templates
  }
}

function getDisabledInputMessage(messages: Message[]): string {
  const inboundMessages = messages.filter(msg => msg.direction === 'inbound');

  if (inboundMessages.length === 0) {
    return "User hasn't messaged yet. Send a template message or wait for them to reply.";
  }

  return "Last message was over 24 hours ago. Send a template message or wait for the user to message you.";
}

type Props = {
  conversationId?: string;
  phoneNumber?: string;
  contactName?: string;
  onTemplateSent?: (phoneNumber: string) => Promise<void>;
  onBack?: () => void;
  isVisible?: boolean;
  /** When true, the message input is hidden and a lock banner is shown */
  readonly?: boolean;
  /** Human-readable reason shown in the lock banner (e.g. "lawyer_only") */
  custodyLabel?: string;
  /** Pre-fill the message input with this text */
  preloadMessage?: string;
  /**
   * The phone number we were asked to open (from URL params).
   * Used when no existing conversation is found so we can still send a template.
   */
  targetPhone?: string;
  /**
   * True when the conversation-list poll timed out without finding the number.
   * Switches the loading spinner to a "no prior chat — send a template" screen.
   */
  phoneNotFound?: boolean;
  /**
   * "Name · Role" of the CRM user viewing this panel.
   * Stored against every outbound message for internal attribution — never sent to the customer.
   */
  sender?: string;
};

const CUSTODY_MESSAGES: Record<string, string> = {
  lawyer_only: 'This chat is handled by the assigned lawyer. You can view messages but cannot respond until the ticket is sent for approval.',
  pending_approval: 'Ticket sent for approval — you can now respond.',
  archived: 'Ticket archived — front desk now handles client communication. You can view the chat but cannot send messages.',
  open: 'Chat is open.',
};

function cleanMediaContent(content: string | undefined): string {
  if (!content) return '';
  if (content === '[Image attached]' || content === '[Document attached]' || content === '[Video attached]') return '';
  
  // Remove the long generated URL format but keep anything else (like "Transcript: ...")
  let cleaned = content.replace(/^(Document|Image|Video|Audio) attached \([^\)]+\) \[Size: [^\]]+\] URL: https?:\/\/[^\s]+/i, '');

  return cleaned.trim();
}

// Global cache to enable instant UI switching between conversations
type CacheEntry = {
  messages: Message[];
  nextCursor: string | null;
  hasMore: boolean;
};
const messageCache: Record<string, CacheEntry> = {};

export function MessageView({ conversationId, phoneNumber, contactName, onTemplateSent, onBack, isVisible = false, readonly = false, custodyLabel, preloadMessage, sender, targetPhone, phoneNotFound = false }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const [sending, setSending] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [canSendRegularMessage, setCanSendRegularMessage] = useState(true);
  const [showTemplateDialog, setShowTemplateDialog] = useState(false);
  const [showInteractiveDialog, setShowInteractiveDialog] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(true);
  const [loadingOlder, setLoadingOlder] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const nextCursorRef = useRef<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previousMessageCountRef = useRef(0);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLoadOlder = async () => {
    if (!hasMore || loadingOlder) return;
    
    const viewport = messagesContainerRef.current?.querySelector('[data-radix-scroll-area-viewport]');
    const prevScrollHeight = viewport?.scrollHeight || 0;

    setLoadingOlder(true);
    await fetchMessages(true);

    setTimeout(() => {
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight - prevScrollHeight;
      }
    }, 0);
  };

  const fetchMessages = useCallback(async (loadOlder = false) => {
    if (!conversationId) return;

    try {
      const url = new URL(`/api/messages/${conversationId}`, window.location.origin);
      url.searchParams.set('limit', '25');
      if (loadOlder && nextCursorRef.current) {
        url.searchParams.set('after', nextCursorRef.current);
      }

      const response = await fetch(url.toString());
      const data = await response.json();
      
      const returnedCount = data.data?.length || 0;

      // Separate reactions from regular messages
      const reactions = (data.data || []).filter((msg: Message) => msg.messageType === 'reaction');
      const regularMessages = (data.data || []).filter((msg: Message) => msg.messageType !== 'reaction');

      // Create a map of message ID to reaction emoji
      const reactionMap = new Map<string, string>();
      reactions.forEach((reaction: Message) => {
        if (reaction.reactedToMessageId && reaction.reactionEmoji) {
          reactionMap.set(reaction.reactedToMessageId, reaction.reactionEmoji);
        }
      });

      // Attach reactions to their corresponding messages
      const messagesWithReactions = regularMessages.map((msg: Message) => {
        const reaction = reactionMap.get(msg.id);
        return reaction ? { ...msg, reactionEmoji: reaction } : msg;
      });

      const sortedMessages = messagesWithReactions.sort((a: Message, b: Message) => {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      });

      const newNextCursor = data.paging?.cursors?.after || null;
      // If we got fewer than the requested limit, we've reached the very beginning of the chat
      const newHasMore = !!newNextCursor && returnedCount === 25;
      
      let mergedMessages = sortedMessages;

      setMessages((prev) => {
        const newMap = new Map(prev.map((m: Message) => [m.id, m]));
        sortedMessages.forEach((m: Message) => newMap.set(m.id, m));
        mergedMessages = Array.from(newMap.values()).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        
        previousMessageCountRef.current = mergedMessages.length;
        return mergedMessages;
      });
      
      if (loadOlder) {
        nextCursorRef.current = newNextCursor;
        setHasMore(newHasMore);
      } else if (!nextCursorRef.current && newNextCursor) {
        nextCursorRef.current = newNextCursor;
        setHasMore(true);
      }

      // Update cache
      messageCache[conversationId] = {
        messages: mergedMessages,
        nextCursor: nextCursorRef.current,
        hasMore: loadOlder ? newHasMore : !!nextCursorRef.current
      };

    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
      setLoadingOlder(false);
    }
  }, [conversationId]);

  useEffect(() => {
    if (conversationId) {
      const cache = messageCache[conversationId];
      if (cache) {
        setMessages(cache.messages);
        nextCursorRef.current = cache.nextCursor;
        setHasMore(cache.hasMore);
        setLoading(false);
      } else {
        setMessages([]);
        nextCursorRef.current = null;
        setHasMore(true);
        setLoading(true);
      }
      // Always fetch fresh data in background
      fetchMessages(false);
    }
  }, [conversationId, fetchMessages]);

  useEffect(() => {
    // Only auto-scroll if user is near bottom
    if (isNearBottom) {
      scrollToBottom();
    }
  }, [messages, isNearBottom]);

  useEffect(() => {
    setCanSendRegularMessage(isWithin24HourWindow(messages));
  }, [messages]);

  // Track if user is near bottom of scroll using onScrollCapture on the ScrollArea

  // Find the latest inbound message ID to send read receipts
  const lastInboundMessageId = useMemo(() => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].direction === 'inbound') {
        return messages[i].id;
      }
    }
    return null;
  }, [messages]);

  // Send read receipt when a new inbound message is viewed
  useEffect(() => {
    if (lastInboundMessageId) {
      fetch('/api/messages/read', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messageId: lastInboundMessageId })
      }).catch(console.error);
    }
  }, [lastInboundMessageId]);

  // Pre-fill message input from URL param (panel mode)
  useEffect(() => {
    if (preloadMessage && !readonly) {
      setMessageInput(preloadMessage);
    }
  }, [preloadMessage, readonly]);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchMessages(false);
  };

  // ── Supabase Realtime: push new messages without polling ────────────────
  useEffect(() => {
    if (!conversationId) return;

    const channel = supabaseBrowser
      .channel(`wa_messages:${conversationId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'wa_messages',
          filter: `conversation_id=eq.${conversationId}`,
        },
        (payload) => {
          const row = payload.new as any;
          if (!row?.id) return;

          // Merge new message into state without a full re-fetch
          setMessages((prev) => {
            if (prev.some((m) => m.id === row.id)) return prev;
            const newMsg: Message = {
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
              sentBy: row.sent_by ?? null,
              metadata: row.media_id ? { mediaId: row.media_id } : {},
            };
            const updated = [...prev, newMsg].sort(
              (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
            // Update cache
            if (messageCache[conversationId]) {
              messageCache[conversationId].messages = updated;
            }
            return updated;
          });
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'wa_messages',
          filter: `conversation_id=eq.${conversationId}`,
        },
        (payload) => {
          const row = payload.new as any;
          if (!row?.id) return;
          // Update status (e.g. sent → delivered → read)
          setMessages((prev) =>
            prev.map((m: Message) =>
              m.id === row.id
                ? { ...m, status: row.status ?? m.status }
                : m
            )
          );
        }
      )
      .subscribe();

    return () => {
      supabaseBrowser.removeChannel(channel);
    };
  }, [conversationId]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);

    // Create preview for images
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFilePreview(null);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFilePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if ((!messageInput.trim() && !selectedFile) || !phoneNumber || sending) return;

    setSending(true);
    try {
      const formData = new FormData();
      formData.append('to', phoneNumber);
      if (messageInput.trim()) {
        formData.append('body', messageInput);
      }
      if (selectedFile) {
        formData.append('file', selectedFile);
      }
      if (sender) {
        formData.append('sent_by', sender);
      }

      await fetch('/api/messages/send', {
        method: 'POST',
        body: formData
      });

      setMessageInput('');
      handleRemoveFile();
      await fetchMessages();
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setSending(false);
    }
  };

  const handleTemplateSent = async () => {
    await fetchMessages();

    // Notify parent to refresh conversation list and select this conversation
    if (phoneNumber && onTemplateSent) {
      await onTemplateSent(phoneNumber);
    }
  };

  if (!conversationId) {
    // ── Case 1: Normal mode — no conversation selected yet ──────────────────
    if (!isVisible) {
      return (
        <div className="flex-1 hidden md:flex items-center justify-center bg-[#efeae2]">
          <p className="text-muted-foreground">Select a conversation to view messages</p>
        </div>
      );
    }

    // ── Case 2: Panel mode, poll timed out — no prior conversation exists ────
    // WhatsApp Business API rule: you can only initiate with an approved template.
    // Show a clear explanation and a direct "Send template" button.
    if (phoneNotFound) {
      const displayPhone = targetPhone ? `+${targetPhone}` : 'this number';
      return (
        <div className="flex-1 flex flex-col bg-[#efeae2]">
          {/* Minimal header so the panel doesn't look broken */}
          <div className="p-3 border-b border-[#d1d7db] bg-[#f0f2f5]">
            <h2 className="text-base font-medium text-[#111b21] truncate">
              {contactName || displayPhone}
            </h2>
            {contactName && <p className="text-xs text-[#667781]">{displayPhone}</p>}
          </div>

          <div className="flex-1 flex items-center justify-center p-6">
            <div className="max-w-xs text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#f0f2f5] flex items-center justify-center mx-auto">
                <MessageSquare className="h-7 w-7 text-[#667781]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#111b21] mb-1">No conversation yet</p>
                <p className="text-xs text-[#667781] leading-relaxed">
                  {displayPhone} hasn&apos;t messaged your account.{' '}
                  <strong>WhatsApp only allows outbound messages via approved templates</strong>{' '}
                  until the customer replies.
                </p>
              </div>
              <Button
                onClick={() => setShowTemplateDialog(true)}
                className="bg-[#00a884] hover:bg-[#008f6f] w-full"
                size="sm"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Send template to {displayPhone}
              </Button>
            </div>
          </div>

          <TemplateSelectorDialog
            open={showTemplateDialog}
            onOpenChange={setShowTemplateDialog}
            phoneNumber={targetPhone || ''}
            onTemplateSent={async () => {
              if (targetPhone && onTemplateSent) await onTemplateSent(targetPhone);
            }}
          />
        </div>
      );
    }

    // ── Case 3: Panel mode, still looking up the conversation ───────────────
    return (
      <div className="flex-1 flex items-center justify-center bg-[#efeae2]">
        <div className="flex flex-col items-center gap-3 text-[#667781]">
          <div className="w-8 h-8 border-[3px] border-[#00a884] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm">Opening chat…</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={cn(
        "flex-1 flex flex-col bg-[#efeae2]",
        !isVisible && "hidden md:flex"
      )}>
        <div className="p-3 border-b border-[#d1d7db] bg-[#f0f2f5] safe-area-top">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 flex-1">
              {onBack && (
                <Button
                  onClick={onBack}
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-[#667781] hover:bg-[#f0f2f5]"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              )}
              <div className="flex-1">
                <Skeleton className="h-5 w-40 mb-1" />
                <Skeleton className="h-3 w-32" />
              </div>
            </div>
            <Skeleton className="h-9 w-24 rounded-lg" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="max-w-[900px] mx-auto space-y-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={cn('flex mb-2', i % 2 === 0 ? 'justify-end' : 'justify-start')}>
                <div className={cn(
                  'max-w-[85%] md:max-w-[70%] rounded-lg px-3 py-2 shadow-sm',
                  i % 2 === 0 ? 'rounded-br-none' : 'rounded-bl-none'
                )}>
                  <Skeleton className="h-4 mb-2" style={{ width: `${Math.random() * 150 + 150}px` }} />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "flex-1 flex flex-col bg-[#efeae2]",
      !isVisible && "hidden md:flex"
    )}>
      <div className="p-3 border-b border-[#d1d7db] bg-[#f0f2f5] safe-area-top">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            {onBack && (
              <Button
                onClick={onBack}
                variant="ghost"
                size="icon"
                className="md:hidden text-[#667781] hover:bg-[#f0f2f5] flex-shrink-0"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            )}
            <div className="flex-1 min-w-0">
              <h2 className="text-base font-medium text-[#111b21] truncate">{contactName || phoneNumber || 'Conversation'}</h2>
              {contactName && phoneNumber && (
                <p className="text-xs text-[#667781] truncate">{phoneNumber}</p>
              )}
            </div>
          </div>
          <Button
            onClick={handleRefresh}
            disabled={refreshing}
            variant="ghost"
            size="icon"
            className="text-[#667781] hover:bg-[#f0f2f5]"
          >
            <RefreshCw className={cn("h-4 w-4", refreshing && "animate-spin")} />
          </Button>
        </div>
      </div>

      <ScrollArea 
        ref={messagesContainerRef} 
        className="flex-1 h-0 p-4"
        onScrollCapture={(e) => {
          const target = e.target as HTMLElement;
          if (target.hasAttribute('data-radix-scroll-area-viewport')) {
            const { scrollTop, scrollHeight, clientHeight } = target;
            const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
            setIsNearBottom(distanceFromBottom < 150);
            
            // Auto-load older messages when user scrolls near the top
            if (scrollTop < 100 && hasMore && !loadingOlder) {
              handleLoadOlder();
            }
          }
        }}
      >
        <div className="max-w-[900px] mx-auto">
        
        {hasMore && !loading && messages.length > 0 && (
          <div className="py-2 flex justify-center">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handleLoadOlder()}
              disabled={loadingOlder}
              className="bg-white/80 text-xs shadow-sm hover:bg-white rounded-full h-8 px-4"
            >
              {loadingOlder ? (
                <RefreshCw className="h-3 w-3 animate-spin mr-2" />
              ) : null}
              {loadingOlder ? 'Loading older messages...' : 'Load older messages'}
            </Button>
          </div>
        )}

        {messages.length === 0 ? (
          <p className="text-center text-muted-foreground">No messages yet</p>
        ) : (
          messages.map((message, index) => {
            const prevMessage = index > 0 ? messages[index - 1] : null;
            const showDateDivider = shouldShowDateDivider(message, prevMessage);

            return (
              <div key={message.id}>
                {showDateDivider && (
                  <div className="flex justify-center my-4">
                    <Badge variant="secondary" className="shadow-sm">
                      {formatDateDivider(message.createdAt)}
                    </Badge>
                  </div>
                )}

                <div
                  className={cn(
                    'flex mb-2',
                    message.direction === 'outbound' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      'max-w-[85%] md:max-w-[70%] rounded-lg px-3 py-2 relative shadow-sm',
                      message.direction === 'outbound'
                        ? 'bg-[#d9fdd3] text-[#111b21] rounded-br-none'
                        : 'bg-white text-[#111b21] rounded-bl-none'
                    )}
                  >
                    {message.hasMedia && message.mediaData?.url ? (
                      <div className="mb-2">
                        {message.messageType === 'sticker' ? (
                          <img
                            src={message.mediaData.url}
                            alt="Sticker"
                            className="max-w-[150px] max-h-[150px] h-auto"
                          />
                        ) : message.mediaData.contentType?.startsWith('image/') || message.messageType === 'image' ? (
                          <img
                            src={message.mediaData.url}
                            alt="Media"
                            className="rounded max-w-full h-auto max-h-96"
                          />
                        ) : message.mediaData.contentType?.startsWith('video/') || message.messageType === 'video' ? (
                          <video
                            src={message.mediaData.url}
                            controls
                            className="rounded max-w-full h-auto max-h-96"
                          />
                        ) : message.mediaData.contentType?.startsWith('audio/') || message.messageType === 'audio' ? (
                          <audio src={message.mediaData.url} controls className="w-full" />
                        ) : (
                          <a
                            href={message.mediaData.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              'flex items-center gap-2 text-sm underline cursor-pointer hover:opacity-80',
                              message.direction === 'outbound' ? 'text-[#00a884]' : 'text-[#00a884]'
                            )}
                          >
                            📎 {message.mediaData.filename || message.filename || 'Download file'}
                          </a>
                        )}
                      </div>
                    ) : message.metadata?.mediaId && message.messageType ? (
                      <div className="mb-2">
                        <MediaMessage
                          mediaId={message.metadata.mediaId}
                          messageType={message.messageType}
                          caption={message.caption}
                          filename={message.filename}
                          isOutbound={message.direction === 'outbound'}
                        />
                      </div>
                    ) : null}

                    {message.caption && (
                      <p className="text-sm break-all whitespace-pre-wrap mb-1">
                        {message.caption}
                      </p>
                    )}

                    {cleanMediaContent(message.content) && (
                      <p className="text-sm break-all whitespace-pre-wrap">
                        {cleanMediaContent(message.content)}
                      </p>
                    )}

                    {message.direction === 'outbound' && message.sentBy && (
                      <p className="text-[10px] text-[#667781] italic mb-0.5">{message.sentBy}</p>
                    )}
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="text-[11px] text-[#667781]">
                        {formatMessageTime(message.createdAt)}
                      </span>

                      {message.messageType && (
                        <span className="text-[11px] text-[#667781] opacity-60">
                          · {message.messageType}
                        </span>
                      )}

                      {message.direction === 'outbound' && message.status && (
                        <>
                          {message.status === 'failed' ? (
                            <XCircle className="h-3.5 w-3.5 text-red-500" />
                          ) : (
                            <span className="text-xs text-[#53bdeb]">
                              {message.status === 'read' ? '✓✓' :
                               message.status === 'delivered' ? '✓✓' :
                               message.status === 'sent' ? '✓' : ''}
                            </span>
                          )}
                        </>
                      )}
                    </div>

                    {message.direction === 'outbound' && message.status === 'failed' && (
                      <div className="mt-1">
                        <span className="text-[11px] text-red-500 flex items-center gap-1">
                          Not delivered
                        </span>
                      </div>
                    )}

                    {message.reactionEmoji && (
                      <div className="absolute -bottom-2 -right-2 bg-background rounded-full px-1.5 py-0.5 text-sm shadow-sm border">
                        {message.reactionEmoji}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      <div className="border-t border-[#d1d7db] bg-[#f0f2f5] safe-area-bottom">
        {readonly ? (
          // ── Custody lock banner ────────────────────────────────────────────
          <div className="p-3 max-w-[900px] mx-auto w-full">
            <div className="bg-[#fff0f0] border border-[#ffb3b3] rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-[#c0392b] flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#111b21] mb-0.5">Chat locked</p>
                  <p className="text-xs text-[#667781]">
                    {custodyLabel
                      ? (CUSTODY_MESSAGES[custodyLabel] ?? 'You do not have permission to send messages in this chat.')
                      : 'You do not have permission to send messages in this chat.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : canSendRegularMessage ? (
          <>
            {selectedFile && (
              <div className="p-3 border-b border-[#d1d7db] bg-white">
                <div className="flex items-start gap-3">
                  {filePreview ? (
                    <img src={filePreview} alt="Preview" className="w-16 h-16 object-cover rounded" />
                  ) : (
                    <div className="w-16 h-16 bg-[#f0f2f5] rounded flex items-center justify-center">
                      <Paperclip className="h-6 w-6 text-[#667781]" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#111b21] truncate">{selectedFile.name}</p>
                    <p className="text-xs text-[#667781]">{(selectedFile.size / 1024).toFixed(1)} KB</p>
                  </div>
                  <Button
                    onClick={handleRemoveFile}
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="text-[#667781]"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            <form onSubmit={handleSendMessage} className="p-3 max-w-[900px] mx-auto w-full flex gap-2 items-center">
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileSelect}
                accept="image/*,video/*,audio/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="hidden"
              />
              <Button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={sending}
                variant="ghost"
                size="icon"
                className="text-[#667781] hover:bg-[#d1d7db]/30"
                title="Upload file"
              >
                <Paperclip className="h-5 w-5" />
              </Button>
              <Button
                type="button"
                onClick={() => setShowInteractiveDialog(true)}
                disabled={sending}
                size="icon"
                variant="ghost"
                className="text-[#667781] hover:text-[#00a884] hover:bg-[#f0f2f5]"
                title="Send interactive message"
              >
                <ListTree className="h-5 w-5" />
              </Button>
              <Input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Type a message"
                disabled={sending}
                className="flex-1 bg-white border-[#d1d7db] focus-visible:ring-[#00a884] rounded-lg"
              />
              <Button
                type="submit"
                disabled={sending || (!messageInput.trim() && !selectedFile)}
                size="icon"
                className="bg-[#00a884] hover:bg-[#008f6f] rounded-full"
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </>
        ) : (
          <div className="p-3 max-w-[900px] mx-auto w-full">
            <div className="bg-[#fff4cc] border border-[#e9c46a] rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-[#8b7000] flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#111b21] mb-3">
                    {getDisabledInputMessage(messages)}
                  </p>
                  <Button
                    onClick={() => setShowTemplateDialog(true)}
                    className="bg-[#00a884] hover:bg-[#008f6f]"
                    size="sm"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send template
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <TemplateSelectorDialog
        open={showTemplateDialog}
        onOpenChange={setShowTemplateDialog}
        phoneNumber={phoneNumber || ''}
        onTemplateSent={handleTemplateSent}
      />

      <InteractiveMessageDialog
        open={showInteractiveDialog}
        onOpenChange={setShowInteractiveDialog}
        conversationId={conversationId}
        phoneNumber={phoneNumber}
        onMessageSent={fetchMessages}
      />
    </div>
  );
}
