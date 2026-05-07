'use client';

import { useState, useRef, useEffect } from 'react';
import { ConversationList, type ConversationListRef } from '@/components/conversation-list';
import { MessageView } from '@/components/message-view';

type Conversation = {
  id: string;
  phoneNumber: string;
  contactName?: string;
};

export default function Home() {
  const [selectedConversation, setSelectedConversation] = useState<Conversation>();
  const conversationListRef = useRef<ConversationListRef>(null);

  // Read initial phone number from URL (passed by the CRM or from a reload)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchPhone = params.get('search');
    
    if (searchPhone) {
      // The conversation list might take a moment to fetch from the API
      const interval = setInterval(() => {
        const success = conversationListRef.current?.selectByPhoneNumber(searchPhone);
        if (success) clearInterval(interval);
      }, 500);
      
      // Stop trying after 5 seconds to prevent infinite polling
      setTimeout(() => clearInterval(interval), 5000);
      return () => clearInterval(interval);
    }
  }, []);

  // Update URL when conversation changes so reloads don't lose state
  useEffect(() => {
    const url = new URL(window.location.href);
    if (selectedConversation) {
      url.searchParams.set('search', selectedConversation.phoneNumber);
    } else {
      url.searchParams.delete('search');
    }
    window.history.replaceState({}, '', url.toString());
  }, [selectedConversation]);

  const handleTemplateSent = async (phoneNumber: string) => {
    // Refresh the conversation list and get the updated conversations
    const conversations = await conversationListRef.current?.refresh();

    // Find and select the conversation for the phone number
    if (conversations) {
      const conversation = conversations.find(conv => conv.phoneNumber === phoneNumber);
      if (conversation) {
        setSelectedConversation(conversation);
      }
    }
  };

  const handleBackToList = () => {
    setSelectedConversation(undefined);
  };

  return (
    <div className="h-dvh flex">
      <ConversationList
        ref={conversationListRef}
        onSelectConversation={setSelectedConversation}
        selectedConversationId={selectedConversation?.id}
        isHidden={!!selectedConversation}
      />
      <MessageView
        conversationId={selectedConversation?.id}
        phoneNumber={selectedConversation?.phoneNumber}
        contactName={selectedConversation?.contactName}
        onTemplateSent={handleTemplateSent}
        onBack={handleBackToList}
        isVisible={!!selectedConversation}
      />
    </div>
  );
}
