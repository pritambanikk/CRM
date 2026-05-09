'use client';

import { useState, useRef, useEffect } from 'react';
import { ConversationList, type ConversationListRef } from '@/components/conversation-list';
import { MessageView } from '@/components/message-view';

type Conversation = {
  id: string;
  phoneNumber: string;
  contactName?: string;
};

// ── Read URL params synchronously at module level ─────────────────────────────
// This file is only ever loaded on the client (dynamic ssr:false in page.tsx),
// so `window` is always defined here — no typeof guard needed.
function getInitialPanelState() {
  const p = new URLSearchParams(window.location.search);
  const isPanelMode = p.get('mode') === 'panel';
  return {
    isPanelMode,
    readonly: isPanelMode && p.get('readonly') === 'true',
    custody: isPanelMode ? (p.get('custody') ?? undefined) : undefined,
    preload: isPanelMode && p.get('preload') ? decodeURIComponent(p.get('preload')!) : undefined,
    phone: isPanelMode ? (p.get('phone') ?? undefined) : undefined,
    searchPhone: !isPanelMode ? (p.get('search') ?? undefined) : undefined,
    sender: isPanelMode && p.get('sender') ? decodeURIComponent(p.get('sender')!) : undefined,
  };
}

const initial = getInitialPanelState();
const normalizePhone = (p: string) => p.replace(/^\+/, '').trim();

export default function HomeClient() {
  const [selectedConversation, setSelectedConversation] = useState<Conversation>();
  // Set to true when the phone-number lookup poll times out with no match found.
  // Signals MessageView to show "no prior conversation" UI instead of a spinner.
  const [phoneNotFound, setPhoneNotFound] = useState(false);
  // Sender identity set by the user in standalone mode via the ConversationList header chip
  const [standaloneSender, setStandaloneSender] = useState<string | undefined>(undefined);

  const isPanelMode = initial.isPanelMode;
  const panelReadonly = initial.readonly;
  const panelCustodyLabel = initial.custody;
  const panelPreloadMessage = initial.preload;
  const panelSender = initial.sender;

  const conversationListRef = useRef<ConversationListRef>(null);

  // ── Auto-select conversation by phone once the list has loaded ───────────────
  useEffect(() => {
    const targetPhone = isPanelMode
      ? (initial.phone ? normalizePhone(initial.phone) : undefined)
      : (initial.searchPhone ? normalizePhone(initial.searchPhone) : undefined);

    if (!targetPhone) return;

    const maxWait = isPanelMode ? 10000 : 5000;
    const interval = setInterval(() => {
      const success = conversationListRef.current?.selectByPhoneNumber(targetPhone);
      if (success) clearInterval(interval);
    }, 400);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      // If we still have no conversation after waiting, surface it to the UI.
      // Only flip if we still haven't resolved a conversation.
      setPhoneNotFound(true);
    }, maxWait);
    return () => { clearInterval(interval); clearTimeout(timeout); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Persist selected conversation in URL (normal mode only) ──────────────────
  useEffect(() => {
    if (isPanelMode) return;
    const url = new URL(window.location.href);
    if (selectedConversation) {
      url.searchParams.set('search', selectedConversation.phoneNumber);
    } else {
      url.searchParams.delete('search');
    }
    window.history.replaceState({}, '', url.toString());
  }, [selectedConversation, isPanelMode]);

  const handleTemplateSent = async (phoneNumber: string) => {
    const conversations = await conversationListRef.current?.refresh();
    if (conversations) {
      const norm = normalizePhone(phoneNumber);
      const conversation = conversations.find(
        conv => normalizePhone(conv.phoneNumber) === norm
      );
      if (conversation) setSelectedConversation(conversation);
    }
  };

  const handleBackToList = () => {
    setSelectedConversation(undefined);
  };

  // ── Panel mode: full-width message view only ─────────────────────────────────
  if (isPanelMode) {
    return (
      <div className="h-dvh flex">
        {/*
          ConversationList is CSS-hidden but fully mounted so it fetches
          conversations and we can call selectByPhoneNumber on its ref.
        */}
        <div className="hidden">
          <ConversationList
            ref={conversationListRef}
            onSelectConversation={setSelectedConversation}
            selectedConversationId={selectedConversation?.id}
            isHidden={true}
            onSenderChange={setStandaloneSender}
          />
        </div>
        <MessageView
          conversationId={selectedConversation?.id}
          phoneNumber={selectedConversation?.phoneNumber}
          contactName={selectedConversation?.contactName}
          onTemplateSent={handleTemplateSent}
          isVisible={true}
          readonly={panelReadonly}
          custodyLabel={panelCustodyLabel}
          preloadMessage={panelPreloadMessage}
          sender={panelSender}
          targetPhone={initial.phone ? normalizePhone(initial.phone) : undefined}
          phoneNotFound={phoneNotFound && !selectedConversation}
        />
      </div>
    );
  }

  // ── Normal / full-inbox mode ─────────────────────────────────────────────────
  return (
    <div className="h-dvh flex">
      <ConversationList
        ref={conversationListRef}
        onSelectConversation={setSelectedConversation}
        selectedConversationId={selectedConversation?.id}
        isHidden={!!selectedConversation}
        onSenderChange={setStandaloneSender}
      />
      <MessageView
        conversationId={selectedConversation?.id}
        phoneNumber={selectedConversation?.phoneNumber}
        contactName={selectedConversation?.contactName}
        onTemplateSent={handleTemplateSent}
        onBack={handleBackToList}
        isVisible={!!selectedConversation}
        sender={standaloneSender || undefined}
      />
    </div>
  );
}
