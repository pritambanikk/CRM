'use client';

import { useEffect, useState, forwardRef, useImperativeHandle, useCallback } from 'react';
import { format, isValid, isToday, isYesterday } from 'date-fns';
import { RefreshCw, Search, Pencil, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAutoPolling } from '@/hooks/use-auto-polling';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const SENDER_KEY = 'inbox_sender_identity';

type Conversation = {
  id: string;
  phoneNumber: string;
  status: string;
  lastActiveAt: string;
  phoneNumberId: string;
  metadata?: Record<string, unknown>;
  contactName?: string;
  messagesCount?: number;
  lastMessage?: {
    content: string;
    direction: string;
    type?: string;
  };
};

function formatConversationDate(timestamp: string): string {
  try {
    const date = new Date(timestamp);
    if (!isValid(date)) return '';

    if (isToday(date)) return format(date, 'HH:mm');
    if (isYesterday(date)) return 'Yesterday';
    return format(date, 'MMM d');
  } catch {
    return '';
  }
}

function getAvatarInitials(contactName?: string, phoneNumber?: string): string {
  if (contactName) {
    const words = contactName.trim().split(/\s+/);
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return contactName.slice(0, 2).toUpperCase();
  }

  if (phoneNumber) {
    const digits = phoneNumber.replace(/\D/g, '');
    return digits.slice(-2);
  }

  return '??';
}

type Props = {
  onSelectConversation: (conversation: Conversation) => void;
  selectedConversationId?: string;
  isHidden?: boolean;
  /** Called whenever the user saves a new "Sending as" identity (standalone mode only) */
  onSenderChange?: (sender: string) => void;
};

export type ConversationListRef = {
  refresh: () => Promise<Conversation[]>;
  selectByPhoneNumber: (phoneNumber: string) => boolean;
};

export const ConversationList = forwardRef<ConversationListRef, Props>(
  ({ onSelectConversation, selectedConversationId, isHidden = false, onSenderChange }, ref) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // ── Sender identity (standalone inbox only) ──────────────────────────────
  const [senderIdentity, setSenderIdentity] = useState('');
  const [isEditingSender, setIsEditingSender] = useState(false);
  const [draftSender, setDraftSender] = useState('');
  const [isPanelMode, setIsPanelMode] = useState(false);

  // ACL: Role-based access control via URL params from parent CRM
  const [aclMode, setAclMode] = useState<'all' | 'restricted'>('all');
  const [allowedPhoneNumbers, setAllowedPhoneNumbers] = useState<string[]>([]);

  // Read ACL + panel mode from URL query parameters (set by the CRM iframe src)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const acl = params.get('acl');
    const panelMode = params.get('mode') === 'panel';
    setIsPanelMode(panelMode);

    if (acl === 'restricted') {
      setAclMode('restricted');
      const phones = params.get('phones');
      if (phones) {
        setAllowedPhoneNumbers(phones.split(',').filter(Boolean));
      }
    } else {
      // Default to 'all' (standalone access or explicit acl=all)
      setAclMode('all');
    }

    // Load persisted sender identity for standalone mode
    if (!panelMode) {
      const saved = localStorage.getItem(SENDER_KEY) ?? '';
      setSenderIdentity(saved);
      if (saved) onSenderChange?.(saved);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchConversations = useCallback(async () => {
    try {
      const response = await fetch('/api/conversations');
      const data = await response.json();
      setConversations(data.data || []);
    } catch (error) {
      console.error('Error fetching conversations:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchConversations();
  }, [fetchConversations]);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchConversations();
  };

  const handleSenderSave = () => {
    const trimmed = draftSender.trim();
    setSenderIdentity(trimmed);
    localStorage.setItem(SENDER_KEY, trimmed);
    onSenderChange?.(trimmed);
    setIsEditingSender(false);
  };

  const handleSenderEdit = () => {
    setDraftSender(senderIdentity);
    setIsEditingSender(true);
  };

  const handleSenderCancel = () => {
    setIsEditingSender(false);
  };

  // Auto-polling for conversations (every 10 seconds)
  const { isPolling } = useAutoPolling({
    interval: 10000,
    enabled: true,
    onPoll: fetchConversations
  });

  // Strip leading '+' and whitespace so comparisons work regardless of how
  // the number is stored in the CRM vs. what the WhatsApp API returns.
  const normalizePhone = (p: string) => p.replace(/^\+/, '').trim();

  const selectByPhoneNumber = (phoneNumber: string) => {
    const normalised = normalizePhone(phoneNumber);
    const conversation = conversations.find(
      conv => normalizePhone(conv.phoneNumber) === normalised
    );
    if (conversation) {
      onSelectConversation(conversation);
      return true;
    }
    return false;
  };

  useImperativeHandle(ref, () => ({
    refresh: async () => {
      setRefreshing(true);
      const response = await fetch('/api/conversations');
      const data = await response.json();
      const newConversations = data.data || [];
      setConversations(newConversations);
      setRefreshing(false);
      return newConversations;
    },
    selectByPhoneNumber
  }));

  const filteredConversations = conversations.filter((conv) => {
    // ACL filter: if restricted, only show allowed phone numbers
    if (aclMode === 'restricted') {
      const convNorm = normalizePhone(conv.phoneNumber);
      const isAllowed = allowedPhoneNumbers.some(num => {
        const numNorm = normalizePhone(num);
        return convNorm.includes(numNorm) || numNorm.includes(convNorm);
      });
      if (!isAllowed) return false;
    }

    const query = searchQuery.toLowerCase();
    return (
      conv.phoneNumber.toLowerCase().includes(query) ||
      conv.contactName?.toLowerCase().includes(query)
    );
  });

  if (loading) {
    return (
      <div className={cn(
        "w-full md:w-96 md:border-r border-[#d1d7db] bg-white flex flex-col",
        isHidden && "hidden md:flex"
      )}>
        <div className="p-4 border-b border-[#d1d7db] bg-[#f0f2f5] safe-area-top">
          <div className="flex items-center justify-between mb-3">
            <Skeleton className="h-7 w-20" />
            <Skeleton className="h-9 w-24" />
          </div>
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>
        <div className="flex-1 p-3 space-y-3">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="flex gap-3 p-3">
              <Skeleton className="h-12 w-12 rounded-full flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-48" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "w-full md:w-96 md:border-r border-[#d1d7db] bg-white flex flex-col",
      isHidden && "hidden md:flex"
    )}>
      <div className="p-4 border-b border-[#d1d7db] bg-[#f0f2f5] safe-area-top">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold text-[#111b21]">Chats</h1>
            {isPolling && (
              <div
                className="h-2 w-2 rounded-full bg-green-500 animate-pulse"
                title="Auto-updating"
              />
            )}
          </div>
          <Button
            onClick={handleRefresh}
            disabled={refreshing}
            variant="ghost"
            size="icon"
            className="text-[#667781] hover:bg-[#d1d7db]/30"
          >
            <RefreshCw className={cn("h-4 w-4", refreshing && "animate-spin")} />
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#667781]" />
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search or start new chat"
            className="pl-9 bg-white border-[#d1d7db] focus-visible:ring-[#00a884] rounded-lg"
          />
        </div>

        {/* ── Sender identity (standalone mode only) ──────────────────── */}
        {!isPanelMode && (
          <div className="mt-2">
            {isEditingSender ? (
              <div className="flex items-center gap-1">
                <Input
                  autoFocus
                  value={draftSender}
                  onChange={(e) => setDraftSender(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSenderSave();
                    if (e.key === 'Escape') handleSenderCancel();
                  }}
                  placeholder="Name · Role (e.g. Pritam · Front Desk)"
                  className="h-7 text-xs bg-white border-[#d1d7db] focus-visible:ring-[#00a884] rounded"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-7 w-7 flex-shrink-0 text-[#00a884] hover:bg-[#d1d7db]/30"
                  onClick={handleSenderSave}
                >
                  <Check className="h-3.5 w-3.5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-7 w-7 flex-shrink-0 text-[#667781] hover:bg-[#d1d7db]/30"
                  onClick={handleSenderCancel}
                >
                  <X className="h-3.5 w-3.5" />
                </Button>
              </div>
            ) : (
              <button
                onClick={handleSenderEdit}
                className="flex items-center gap-1.5 text-xs text-[#667781] hover:text-[#111b21] transition-colors w-full text-left group"
              >
                <Pencil className="h-3 w-3 flex-shrink-0 opacity-60 group-hover:opacity-100" />
                <span className="truncate">
                  {senderIdentity
                    ? <><span className="text-[#667781]">Sending as:</span> <span className="font-medium text-[#111b21]">{senderIdentity}</span></>
                    : <span className="italic opacity-75">Set your name for message tracking</span>
                  }
                </span>
              </button>
            )}
          </div>
        )}
      </div>

      <ScrollArea className="flex-1 h-0 overflow-hidden">
        {filteredConversations.length === 0 ? (
          <div className="p-4 text-center text-[#667781]">
            {searchQuery ? 'No conversations found' : 'No conversations yet'}
          </div>
        ) : (
          <div className="w-full overflow-hidden">
          {filteredConversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => onSelectConversation(conversation)}
              className={cn(
                'w-full p-3 pr-4 border-b border-[#e9edef] hover:bg-[#f0f2f5] text-left transition-colors relative overflow-hidden',
                selectedConversationId === conversation.id && 'bg-[#f0f2f5]'
              )}
            >
              <div className="flex gap-3 items-start overflow-hidden">
                <Avatar className="h-12 w-12 flex-shrink-0">
                  <AvatarFallback className="bg-[#d1d7db] text-[#111b21] text-sm font-medium">
                    {getAvatarInitials(conversation.contactName, conversation.phoneNumber)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0 flex justify-between items-start gap-4 overflow-hidden">
                  <div className="flex-1 min-w-0 overflow-hidden">
                    <p className="font-medium text-[#111b21] truncate">
                      {conversation.contactName || conversation.phoneNumber}
                    </p>
                    {conversation.lastMessage && (
                      <p className="text-sm text-[#667781] truncate mt-0.5">
                        {conversation.lastMessage.direction === 'outbound' && (
                          <span className="text-[#53bdeb]">✓ </span>
                        )}
                        {conversation.lastMessage.content}
                      </p>
                    )}
                  </div>
                  <span className="text-xs text-[#667781] flex-shrink-0 mt-0.5 ml-4">
                    {formatConversationDate(conversation.lastActiveAt)}
                  </span>
                </div>
              </div>
            </button>
          ))
          }
          </div>
        )}
      </ScrollArea>
    </div>
  );
});

ConversationList.displayName = 'ConversationList';
