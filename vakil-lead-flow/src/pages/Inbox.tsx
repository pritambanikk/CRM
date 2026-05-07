import React, { useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { MessageSquareOff } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useCRM } from '@/contexts/CRMContext';

const Inbox = () => {
  const inboxUrlBase = import.meta.env.VITE_INBOX_URL;
  const location = useLocation();
  const { currentUser, currentRole, leads, tickets, users } = useCRM();

  // Determine if the current user has full access (sees all chats)
  const hasFullAccess = currentRole === 'super_admin' || currentRole === 'front_desk';

  // For lawyers: collect all phone numbers from leads/tickets assigned to them
  const allowedPhoneNumbers = useMemo(() => {
    if (hasFullAccess) return null; // null = show all

    // Get all user IDs that match this lawyer (same email can have multiple IDs)
    const myLawyerIds = new Set<string>([currentUser.id]);
    users
      .filter(u => u.role === 'lawyer' && u.email === currentUser.email)
      .forEach(u => myLawyerIds.add(u.id));

    const phoneSet = new Set<string>();

    // Leads assigned to this lawyer
    leads.forEach(lead => {
      if (lead.assigned_lawyer_id && myLawyerIds.has(lead.assigned_lawyer_id)) {
        phoneSet.add(lead.whatsapp_number);
      }
    });

    // Tickets assigned to this lawyer
    tickets.forEach(ticket => {
      if (ticket.lawyer_id && myLawyerIds.has(ticket.lawyer_id)) {
        const lead = leads.find(l => l.id === ticket.client_id);
        if (lead) {
          phoneSet.add(lead.whatsapp_number);
        }
      }
    });

    return Array.from(phoneSet);
  }, [hasFullAccess, currentUser, currentRole, leads, tickets, users]);

  // Build the final iframe URL with ACL params baked in
  const inboxUrl = useMemo(() => {
    if (!inboxUrlBase) return '';

    const base = inboxUrlBase.replace(/\/$/, '');
    const existingParams = new URLSearchParams(location.search);

    // Add ACL mode
    if (hasFullAccess) {
      existingParams.set('acl', 'all');
    } else {
      existingParams.set('acl', 'restricted');
      if (allowedPhoneNumbers && allowedPhoneNumbers.length > 0) {
        existingParams.set('phones', allowedPhoneNumbers.join(','));
      }
    }

    return `${base}?${existingParams.toString()}`;
  }, [inboxUrlBase, location.search, hasFullAccess, allowedPhoneNumbers]);

  if (!inboxUrl) {
    return (
      <div className="h-[calc(100vh-4rem)] flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-6 flex flex-col items-center text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
            <MessageSquareOff className="w-6 h-6 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Inbox Not Configured</h2>
            <p className="text-sm text-muted-foreground">
              Please set the <code className="bg-muted px-1 py-0.5 rounded">VITE_INBOX_URL</code> environment variable to your deployed whatsapp-cloud-inbox URL.
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-background pb-[calc(4rem+env(safe-area-inset-bottom))]">
      <iframe
        src={inboxUrl}
        className="w-full h-full border-0"
        title="WhatsApp Inbox"
        allow="microphone; camera"
      />
    </div>
  );
};

export default Inbox;
