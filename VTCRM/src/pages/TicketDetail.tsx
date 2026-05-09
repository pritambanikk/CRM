import { useState } from 'react';
import { createPaymentLink } from '@/lib/cashfree';
import { useParams, useNavigate } from 'react-router-dom';
import { useCRM } from '@/contexts/CRMContext';
import { QuickActions } from '@/components/QuickActions';
import { WhatsAppChatPanel } from '@/components/WhatsAppChatPanel';
import { TicketStatusBadge, ServiceBadge, PriorityBadge } from '@/components/StatusBadges';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, IndianRupee, FileText, Clock, Scale, Upload, Phone, MessageCircle, Pencil, Check, X, SendHorizonal, ShieldCheck, ShieldX, Lock } from 'lucide-react';
import { TICKET_STATUS_LABELS, TicketStatus } from '@/types/crm';
import { formatDistanceToNow, format } from 'date-fns';
import { toast } from 'sonner';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

type NoteType = 'note' | 'call_log' | 'meeting';

const noteTypeLabels: Record<NoteType, string> = {
  note: 'Note',
  call_log: 'Call Log',
  meeting: 'Meeting',
};

const noteTypeColors: Record<NoteType, string> = {
  note: 'bg-muted/50',
  call_log: 'bg-success/5 border border-success/20',
  meeting: 'bg-primary/5 border border-primary/20',
};

const TicketDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tickets, isLoadingTickets, updateTicketInServer, activityLogs, setActivityLogs, currentRole, currentUser, leads, users, addFollowUpToServer, addActivityLog } = useCRM();
  const [newNote, setNewNote] = useState('');
  const [noteType, setNoteType] = useState<NoteType>('note');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [editingNoteText, setEditingNoteText] = useState('');
  const [docName, setDocName] = useState('');
  const [docLink, setDocLink] = useState('');
  const [editingDocId, setEditingDocId] = useState<string | null>(null);
  const [editingDocLink, setEditingDocLink] = useState('');
  const [rejectionNote, setRejectionNote] = useState('');
  const [showRejectForm, setShowRejectForm] = useState(false);

  // ── WhatsApp chat panel state ──────────────────────────────────────────────
  const [chatPanelOpen, setChatPanelOpen] = useState(false);
  const [chatPreloadMessage, setChatPreloadMessage] = useState<string | undefined>();

  if (isLoadingTickets) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const ticket = tickets.find(t => t.ticket_id === id);
  if (!ticket) return <div className="p-4 text-center">Ticket not found</div>;

  const parsedNotes = typeof ticket.communication_notes === 'string'
    ? JSON.parse(ticket.communication_notes)
    : (ticket.communication_notes || { notes: [], call_logs: [], meetings: [] });

  const unifiedNotes = [
    ...(parsedNotes.notes || []).map((n: any) => ({ ...n, type: 'note' as NoteType })),
    ...(parsedNotes.call_logs || []).map((n: any) => ({ ...n, type: 'call_log' as NoteType })),
    ...(parsedNotes.meetings || []).map((n: any) => ({ ...n, type: 'meeting' as NoteType }))
  ].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

  const ticketLogs = activityLogs.filter(a => a.entity_id === id).sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

  // Parse documents from ticket JSON (persisted in DB)
  const ticketDocs: { id: string, name: string, link: string, uploaded_by: string, uploaded_at: string }[] =
    typeof ticket.documents === 'string'
      ? JSON.parse(ticket.documents)
      : (ticket.documents || []);
  const canManagePayments = currentRole !== 'lawyer';

  // ── Chat custody logic ────────────────────────────────────────────────────
  const chatPhone = leads.find(l => l.id === ticket.client_id)?.whatsapp_number || '';
  const custody = (ticket.chat_custody || 'lawyer_only') as 'open' | 'lawyer_only' | 'pending_approval' | 'archived';

  /**
   * Can the current user send messages in this ticket's WhatsApp chat?
   *
   *   lawyer_only      → super_admin + assigned lawyer only
   *   pending_approval → everyone (lawyer submitted for review; front_desk restored)
   *   archived         → super_admin + front_desk only (lawyer is view-only)
   */
  const canSendInChat = (() => {
    if (currentRole === 'super_admin') return true;
    if (custody === 'lawyer_only') {
      return currentRole === 'lawyer' && currentUser.id === ticket.lawyer_id;
    }
    if (custody === 'pending_approval') {
      return true; // front_desk + lawyer + admin all can respond
    }
    if (custody === 'archived') {
      return currentRole === 'front_desk'; // lawyer is view-only after archiving
    }
    return true;
  })();

  const handleStatusChange = async (status: string) => {
    const oldStatus = ticket.status;
    const finalStatus = (status === 'WORK_COMPLETED' && currentRole !== 'lawyer') ? 'ARCHIVED' : status;

    // ── Chat custody transitions ───────────────────────────────────────────
    let newCustody: 'lawyer_only' | 'pending_approval' | undefined;
    if (finalStatus === 'PENDING_APPROVAL') {
      // Lawyer sends work for review → front-desk chat window restores
      newCustody = 'pending_approval';
    } else if (
      oldStatus === 'PENDING_APPROVAL' &&
      finalStatus !== 'PENDING_APPROVAL' &&
      finalStatus !== 'ARCHIVED' &&
      finalStatus !== 'WORK_COMPLETED'
    ) {
      // Front-desk rejects / sends back → lawyer regains exclusive custody
      newCustody = 'lawyer_only';
    }

    try {
      await updateTicketInServer(id!, {
        status: finalStatus as TicketStatus,
        updated_at: new Date().toISOString(),
        ...(newCustody && { chat_custody: newCustody }),
      });
    } catch (e) {
      toast.error('Failed to update status');
      return;
    }

    const action = finalStatus === 'ARCHIVED' && status === 'WORK_COMPLETED'
      ? 'Ticket Completed & Archived'
      : 'Status Changed';
    const details = `${TICKET_STATUS_LABELS[oldStatus]} → ${TICKET_STATUS_LABELS[finalStatus as TicketStatus]}`;

    addActivityLog(id!, action, details);
    toast.success(finalStatus === 'ARCHIVED' ? 'Ticket completed and archived!' : `Status updated to ${TICKET_STATUS_LABELS[finalStatus as TicketStatus]}`);

    // Notify front-desk that chat is restored when sent for approval
    if (newCustody === 'pending_approval' && chatPhone) {
      try {
        const inboxBase = import.meta.env.VITE_INBOX_URL?.replace(/\/$/, '');
        if (inboxBase) {
          await fetch(`${inboxBase}/api/notify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              phone: chatPhone,
              message: `Hi ${ticket.client_name}, your work has been reviewed by ${ticket.lawyer_name} and is pending your approval. Our team will be in touch with you shortly.`,
            }),
          });
        }
      } catch (notifyErr) {
        console.warn('[handleStatusChange] Notify API failed (non-critical):', notifyErr);
      }
    }
  };

  const handleAddNote = async () => {
    if (!newNote.trim()) return;
    
    const newEntry = {
      id: `n${Date.now()}`,
      text: newNote,
      created_by: `${currentUser.name}-${currentUser.role === 'super_admin' ? 'Superadmin' : currentUser.role === 'front_desk' ? 'Frontdesk' : 'Lawyer'}`,
      created_at: new Date().toISOString(),
    };
    
    const newLog = {
      id: `a${Date.now()}`,
      action: noteTypeLabels[noteType] + ' Added',
      details: newNote.substring(0, 80) + (newNote.length > 80 ? '...' : ''),
      created_by: currentUser.name,
      created_at: new Date().toISOString()
    };

    const updatedNotes = {
      ...parsedNotes,
      notes: noteType === 'note' ? [newEntry, ...(parsedNotes.notes || [])] : (parsedNotes.notes || []),
      call_logs: noteType === 'call_log' ? [newEntry, ...(parsedNotes.call_logs || [])] : (parsedNotes.call_logs || []),
      meetings: noteType === 'meeting' ? [newEntry, ...(parsedNotes.meetings || [])] : (parsedNotes.meetings || []),
      activity_logs: [newLog, ...(parsedNotes.activity_logs || [])]
    };

    try {
      await updateTicketInServer(id!, { communication_notes: JSON.stringify(updatedNotes) });
      setNewNote('');
      toast.success(`${noteTypeLabels[noteType]} added`);
    } catch (e) {
      toast.error('Failed to add note');
    }
  };

  const handleAddPayment = async () => {
    const amount = parseFloat(paymentAmount);
    if (isNaN(amount) || amount <= 0) {
      toast.error('Enter a valid amount');
      return;
    }
    try {
      await updateTicketInServer(id!, { advance_paid: Number(ticket.advance_paid || 0) + amount, updated_at: new Date().toISOString() });
      addActivityLog(id!, 'Payment Recorded', `₹${amount.toLocaleString('en-IN')} payment received`);
      toast.success(`₹${amount.toLocaleString('en-IN')} payment recorded`);
      setPaymentAmount('');
    } catch (e) {
      toast.error('Failed to record payment');
    }
  };

  const handleDocumentAdd = async () => {
    if (!docName.trim() || !docLink.trim()) {
      toast.error('Enter both document name and link');
      return;
    }
    const newDoc = {
      id: `d${Date.now()}`,
      name: docName.trim(),
      link: docLink.trim(),
      uploaded_by: `${currentUser.name}-${currentUser.role === 'super_admin' ? 'Superadmin' : currentUser.role === 'front_desk' ? 'Frontdesk' : 'Lawyer'}`,
      uploaded_at: new Date().toISOString(),
    };
    const updatedDocs = [...ticketDocs, newDoc];
    try {
      await updateTicketInServer(id!, { documents: JSON.stringify(updatedDocs) });
      addActivityLog(id!, 'Document Added', docName.trim());
      toast.success(`"${docName.trim()}" added`);
      setDocName('');
      setDocLink('');
    } catch (e) {
      toast.error('Failed to add document');
    }
  };

  const handleDocumentEditSave = async (docId: string) => {
    if (!editingDocLink.trim()) return;
    const updatedDocs = ticketDocs.map(d => d.id === docId ? { ...d, link: editingDocLink.trim() } : d);
    try {
      await updateTicketInServer(id!, { documents: JSON.stringify(updatedDocs) });
      setEditingDocId(null);
      toast.success('Document link updated');
    } catch (e) {
      toast.error('Failed to update document');
    }
  };

  // Lawyer-specific status options (can't mark as WORK_COMPLETED directly — needs front desk approval)
  // Lawyer can't mark as WORK_COMPLETED, ARCHIVED, or PENDING_APPROVAL directly via dropdown
  const statusOptions = currentRole === 'lawyer'
    ? Object.entries(TICKET_STATUS_LABELS).filter(([key]) => !['WORK_COMPLETED', 'PENDING_APPROVAL', 'ARCHIVED', 'REJECTED'].includes(key))
    : Object.entries(TICKET_STATUS_LABELS).filter(([key]) => !['PENDING_APPROVAL', 'REJECTED', 'ARCHIVED'].includes(key));

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-card/95 backdrop-blur-lg border-b px-5 py-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1 min-w-0">
            <h1 className="font-display font-bold text-base truncate">{ticket.client_name}</h1>
            <p className="text-[11px] text-muted-foreground font-mono">{ticket.ticket_id}</p>
          </div>
          <PriorityBadge priority={ticket.priority} />
        </div>
      </div>

      <div className="px-5 py-4 space-y-4 max-w-lg mx-auto">
        {/* Quick Actions */}
        {/* Show custody badge when front-desk is locked out */}
        {/* front_desk: locked while lawyer has custody */}
        {currentRole === 'front_desk' && custody === 'lawyer_only' && (
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-destructive/8 border border-destructive/20 text-xs text-destructive font-medium">
            <Lock className="w-3.5 h-3.5" />
            Chat assigned to lawyer — you can view messages but cannot respond until the ticket is sent for approval.
          </div>
        )}
        {/* everyone: ticket is awaiting review */}
        {custody === 'pending_approval' && (
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-700 font-medium">
            Ticket sent for approval — everyone can now respond.
          </div>
        )}
        {/* lawyer: locked after archiving */}
        {currentRole === 'lawyer' && custody === 'archived' && (
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-destructive/8 border border-destructive/20 text-xs text-destructive font-medium">
            <Lock className="w-3.5 h-3.5" />
            Ticket archived — you can view the chat but front desk now handles client communication.
          </div>
        )}

        <QuickActions
          whatsapp_number={chatPhone}
          name={ticket.client_name}
          service={ticket.service_type}
          leadId={ticket.client_id}
          onOpenWhatsApp={(preloadMsg) => {
            // Always open the panel — readonly prop handles the lock.
            // Never fall back to /inbox which bypasses custody.
            setChatPreloadMessage(canSendInChat ? preloadMsg : undefined);
            setChatPanelOpen(true);
          }}
          onFollowup={async (date, note) => {
            console.log('TicketDetail: onFollowup triggered by QuickActions', { date, note });
            const history = ticket.followup_history ? (typeof ticket.followup_history === 'string' ? JSON.parse(ticket.followup_history) : ticket.followup_history) : [];
            const record = {
              attempt: history.length + 1,
              type: 'call',
              scheduled_at: date.toISOString(),
              completed: false,
              note: note
            };
            toast.promise(addFollowUpToServer(id!, record), {
              loading: 'Scheduling follow-up...',
              success: 'Follow-up scheduled!',
              error: 'Failed to schedule'
            });
          }}
        />

        {/* Ticket Info */}
        <Card className="p-4 space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <ServiceBadge service={ticket.service_type} />
            <TicketStatusBadge status={ticket.status} />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Scale className="w-4 h-4 shrink-0" /><span>{ticket.lawyer_name}</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground flex-wrap">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>Created: {format(new Date(ticket.created_at), 'dd MMM yyyy, hh:mm a')}</span>
              <span>•</span>
              <span>Updated: {format(new Date(ticket.updated_at), 'dd MMM yyyy, hh:mm a')}</span>
            </div>
          </div>
          {ticket.description && (
            <p className="text-sm text-muted-foreground border-t pt-2">{ticket.description}</p>
          )}
        </Card>

        {/* Reassign Lawyer - only for front_desk/super_admin */}
        {canManagePayments && (
          <Card className="p-4">
            <label className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5" /> Assigned Lawyer
            </label>
            <Select
              value={ticket.lawyer_id}
              onValueChange={async (newLawyerId) => {
                const newLawyer = users.find(u => u.id === newLawyerId);
                if (!newLawyer) return;
                const oldLawyerName = ticket.lawyer_name;
                try {
                  await updateTicketInServer(id!, { lawyer_id: newLawyerId, lawyer_name: newLawyer.name, updated_at: new Date().toISOString() });
                  addActivityLog(id!, 'Lawyer Reassigned', `${oldLawyerName} → ${newLawyer.name}`);
                  toast.success(`Reassigned to ${newLawyer.name}`);
                } catch (e) {
                  toast.error('Failed to reassign lawyer');
                }
              }}
            >
              <SelectTrigger className="h-11 rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {users.filter(u => u.role === 'lawyer').map(lawyer => (
                  <SelectItem key={lawyer.id} value={lawyer.id}>{lawyer.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Card>
        )}

        {canManagePayments && (
          <Card className="p-4">
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <IndianRupee className="w-4 h-4" /> Payment Details
            </h3>
            <div className="flex items-center justify-between bg-muted/50 rounded-lg p-3 mb-3">
              <div>
                <p className="text-[10px] text-muted-foreground">Total Paid</p>
                <p className="text-lg font-bold font-display">
                  ₹{ticket.advance_paid.toLocaleString('en-IN')}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <IndianRupee className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  className="pl-8 h-11 rounded-xl text-sm"
                  min={1}
                />
              </div>
              <Button className="h-11 rounded-xl px-4" onClick={handleAddPayment} disabled={!paymentAmount}>
                Record
              </Button>
            </div>
          </Card>
        )}

        {/* Approval Workflow */}
        {currentRole === 'lawyer' && !['PENDING_APPROVAL', 'ARCHIVED'].includes(ticket.status) && (
          <Card className="p-4">
            <Button
              className="w-full h-11 rounded-xl gap-2"
              onClick={async () => {
                try {
                  await updateTicketInServer(id!, {
                    status: 'PENDING_APPROVAL',
                    chat_custody: 'pending_approval',
                    updated_at: new Date().toISOString(),
                  });
                  addActivityLog(id!, 'Sent for Approval', 'Ticket sent to front desk for approval');
                  toast.success('Ticket sent for approval');
                } catch (e) {
                  toast.error('Failed to send for approval');
                }
              }}
            >
              <SendHorizonal className="w-4 h-4" /> Send for Approval
            </Button>
            <p className="text-[10px] text-muted-foreground mt-2 text-center">
              This will notify the front desk to review and approve this ticket
            </p>
          </Card>
        )}

        {currentRole === 'lawyer' && ticket.status === 'PENDING_APPROVAL' && (
          <Card className="p-4 border-warning/30 bg-warning/5">
            <p className="text-sm font-semibold text-warning text-center">⏳ Awaiting Front Desk Approval</p>
          </Card>
        )}

        {currentRole === 'lawyer' && ticket.status === 'REJECTED' && (
          <Card className="p-4 border-destructive/30 bg-destructive/5">
            <p className="text-sm font-semibold text-destructive mb-1">❌ Ticket Rejected</p>
            <p className="text-xs text-muted-foreground">Please review the notes below for the rejection reason, make changes, and resubmit.</p>
            <Button
              className="w-full h-10 rounded-xl gap-2 mt-3"
              onClick={async () => {
                try {
                  await updateTicketInServer(id!, { status: 'WORK_UNDER_PROCESS', updated_at: new Date().toISOString() });
                  addActivityLog(id!, 'Reopened after Rejection', 'Lawyer resumed work on rejected ticket');
                  toast.success('Ticket reopened for revision');
                } catch (e) {
                  toast.error('Failed to reopen ticket');
                }
              }}
            >
              Resume Work
            </Button>
          </Card>
        )}

        {/* Front desk approval actions */}
        {currentRole !== 'lawyer' && ticket.status === 'PENDING_APPROVAL' && (
          <Card className="p-4 border-warning/30 bg-warning/5">
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Approval Required
            </h3>
            <p className="text-xs text-muted-foreground mb-3">This ticket has been submitted by the lawyer for review.</p>
            {!showRejectForm ? (
              <div className="flex gap-2">
                <Button
                  className="flex-1 h-10 rounded-xl gap-2 bg-success hover:bg-success/90 text-success-foreground"
                  onClick={async () => {
                    try {
                      await updateTicketInServer(id!, {
                        status: 'ARCHIVED',
                        chat_custody: 'archived',
                        updated_at: new Date().toISOString(),
                      });
                      addActivityLog(id!, 'Ticket Approved & Archived', `Approved by ${currentUser.name}`);
                      toast.success('Ticket approved and archived');
                    } catch (e) {
                      toast.error('Failed to approve ticket');
                    }
                  }}
                >
                  <Check className="w-4 h-4" /> Approve & Archive
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-10 rounded-xl gap-2 border-destructive/30 text-destructive hover:bg-destructive/10"
                  onClick={() => setShowRejectForm(true)}
                >
                  <X className="w-4 h-4" /> Reject
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                <Textarea
                  placeholder="Reason for rejection (required)..."
                  value={rejectionNote}
                  onChange={(e) => setRejectionNote(e.target.value)}
                  className="min-h-[60px] text-sm rounded-xl resize-none"
                  rows={2}
                />
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    className="flex-1 h-9 rounded-xl"
                    onClick={() => { setShowRejectForm(false); setRejectionNote(''); }}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="flex-1 h-9 rounded-xl bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                    disabled={!rejectionNote.trim()}
                    onClick={async () => {
                      try {
                        const rejEntry = {
                          id: `n${Date.now()}`,
                          text: `❌ Rejection Reason: ${rejectionNote.trim()}`,
                          created_by: `${currentUser.name}-${currentUser.role === 'super_admin' ? 'Superadmin' : currentUser.role === 'front_desk' ? 'Frontdesk' : 'Lawyer'}`,
                          created_at: new Date().toISOString(),
                        };
                        const newLog = {
                          id: `a${Date.now()}`,
                          action: 'Ticket Rejected',
                          details: rejectionNote.trim().substring(0, 80),
                          created_by: currentUser.name,
                          created_at: new Date().toISOString()
                        };
                        const updatedNotes = {
                          ...parsedNotes,
                          notes: [rejEntry, ...(parsedNotes.notes || [])],
                          activity_logs: [newLog, ...(parsedNotes.activity_logs || [])]
                        };
                        
                        await updateTicketInServer(id!, { status: 'REJECTED', updated_at: new Date().toISOString(), communication_notes: JSON.stringify(updatedNotes) });
                        setShowRejectForm(false);
                        setRejectionNote('');
                        toast.error('Ticket rejected');
                      } catch (e) {
                        toast.error('Failed to reject ticket');
                      }
                    }}
                  >

                    Confirm Rejection
                  </Button>
                </div>
              </div>
            )}
          </Card>
        )}

        {/* Status Update - hide when pending approval or archived */}
        {!['PENDING_APPROVAL', 'ARCHIVED', 'REJECTED'].includes(ticket.status) && (
          <Card className="p-4">
            <label className="text-xs font-semibold text-muted-foreground mb-2 block">Update Status</label>
            <Select value={ticket.status} onValueChange={handleStatusChange}>
              <SelectTrigger className="h-11 rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map(([key, label]) => (
                  <SelectItem key={key} value={key}>{label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {currentRole === 'lawyer' && (
              <p className="text-[10px] text-muted-foreground mt-2">
                Use "Send for Approval" when work is complete
              </p>
            )}
          </Card>
        )}

        {/* Documents */}
        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4" /> Documents ({ticketDocs.length})
          </h3>

          {/* Add document form */}
          <div className="space-y-2 mb-3 p-3 bg-muted/30 rounded-xl">
            <Input
              placeholder="Document name (e.g., Draft Notice)"
              value={docName}
              onChange={(e) => setDocName(e.target.value)}
              className="h-9 rounded-lg text-sm"
            />
            <div className="flex gap-2">
              <Input
                placeholder="Paste document link (URL)"
                value={docLink}
                onChange={(e) => setDocLink(e.target.value)}
                className="h-9 rounded-lg text-sm flex-1"
              />
              <Button size="sm" className="h-9 rounded-lg px-4" onClick={handleDocumentAdd} disabled={!docName.trim() || !docLink.trim()}>
                Add
              </Button>
            </div>
          </div>

          {ticketDocs.length > 0 ? (
            <div className="space-y-2">
              {ticketDocs.map(doc => (
                <div key={doc.id} className="bg-muted/50 rounded-lg p-2.5">
                  {editingDocId === doc.id ? (
                    <div className="space-y-2">
                      <p className="text-xs font-medium">{doc.name}</p>
                      <div className="flex gap-1.5">
                        <Input
                          value={editingDocLink}
                          onChange={(e) => setEditingDocLink(e.target.value)}
                          className="h-8 rounded-lg text-xs flex-1"
                          placeholder="Document link"
                        />
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-lg" onClick={() => setEditingDocId(null)}>
                          <X className="w-3.5 h-3.5" />
                        </Button>
                        <Button size="sm" className="h-8 w-8 p-0 rounded-lg" onClick={() => handleDocumentEditSave(doc.id)}>
                          <Check className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium truncate">{doc.name}</p>
                        <a href={doc.link} target="_blank" rel="noopener noreferrer" className="text-[11px] text-primary hover:underline truncate block">{doc.link}</a>
                        <p className="text-[10px] text-muted-foreground">{doc.uploaded_by} • {format(new Date(doc.uploaded_at), 'dd MMM yyyy, hh:mm a')}</p>
                      </div>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button size="sm" variant="outline" className="h-7 text-[10px] gap-1 px-2 shrink-0 border-success/30 text-success hover:bg-success/10 hover:text-success">
                            <IndianRupee className="w-3 h-3" /> Req. Balance
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-72 p-3" align="end">
                          <p className="text-xs font-semibold mb-2">Request Balance Payment</p>
                          <p className="text-[10px] text-muted-foreground mb-3">
                            Enter the balance amount to automatically generate a Cashfree payment link and send it.
                          </p>
                          <div className="space-y-2">
                            <Input
                              type="number"
                              placeholder="Enter amount (₹)"
                              id={`payamount-${doc.id}`}
                              className="h-9 text-xs"
                              min="1"
                            />
                            <Button
                              className="w-full h-9 text-xs bg-success hover:bg-success/90"
                              disabled={!canSendInChat}
                              title={!canSendInChat ? 'Chat is locked — lawyer has custody' : undefined}
                              onClick={async (e) => {
                                const btn = e.currentTarget;
                                const originalText = btn.innerHTML;
                                const amountStr = (document.getElementById(`payamount-${doc.id}`) as HTMLInputElement)?.value;
                                const amount = parseFloat(amountStr);
                                if (!amount || amount <= 0) {
                                  toast.error('Please enter a valid amount');
                                  return;
                                }
                                
                                try {
                                  btn.innerHTML = '<span class="animate-pulse">Generating...</span>';
                                  btn.disabled = true;
                                  
                                  const phone = leads.find(l => l.id === ticket.client_id)?.whatsapp_number || '9999999999';
                                  const payLink = await createPaymentLink(amount, ticket.client_name, phone, `Balance payment for ${doc.name}`);

                                  const msg = `The Assigned lawyer ${ticket.lawyer_name} has drafted the notice ${doc.link} and will now be sent by post. You're requested to complete the balance payment using this link ${payLink}`;
                                  addActivityLog(id!, 'WhatsApp Initiated', `Requested ₹${amount} balance payment for ${doc.name}`);
                                  // Open inline chat panel with pre-loaded message
                                  setChatPreloadMessage(msg);
                                  setChatPanelOpen(true);
                                } catch (err: any) {
                                  toast.error(err.message || 'Failed to generate link');
                                } finally {
                                  btn.innerHTML = originalText;
                                  btn.disabled = false;
                                }
                              }}
                            >
                              <MessageCircle className="w-3.5 h-3.5 mr-1" /> Generate & Send WhatsApp
                            </Button>
                          </div>
                        </PopoverContent>
                      </Popover>
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0 rounded-md shrink-0" onClick={() => { setEditingDocId(doc.id); setEditingDocLink(doc.link); }}>
                        <Pencil className="w-3 h-3 text-muted-foreground" />
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-muted-foreground text-center py-4">No documents yet</p>
          )}
        </Card>

        {/* Communication Log / Notes */}
        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <MessageCircle className="w-4 h-4" /> Communication & Notes
          </h3>

          {/* Note type selector */}
          <div className="flex gap-1.5 mb-2.5">
            {(Object.entries(noteTypeLabels) as [NoteType, string][]).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setNoteType(key)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all ${
                  noteType === key
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted/60 text-muted-foreground hover:bg-muted'
                }`}
              >
                {key === 'call_log' ? '📞 ' : key === 'meeting' ? '🤝 ' : '📝 '}{label}
              </button>
            ))}
          </div>

          <div className="flex gap-2 mb-3">
            <Textarea
              placeholder={
                noteType === 'call_log' ? 'Log call details... (duration, outcome, next steps)'
                : noteType === 'meeting' ? 'Log meeting notes... (attendees, discussion, action items)'
                : 'Add a note...'
              }
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              className="min-h-[44px] text-sm rounded-xl resize-none"
              rows={2}
            />
            <Button className="h-auto rounded-xl px-4" onClick={handleAddNote}>Add</Button>
          </div>

          <div className="space-y-2">
            {unifiedNotes.map(note => (
              <div key={note.id} className={`rounded-lg p-2.5 ${noteTypeColors[note.type as NoteType]}`}>
                {editingNoteId === note.id ? (
                  <div className="space-y-2">
                    <Textarea
                      value={editingNoteText}
                      onChange={(e) => setEditingNoteText(e.target.value)}
                      className="min-h-[44px] text-sm rounded-xl resize-none"
                      rows={2}
                    />
                    <div className="flex gap-1.5 justify-end">
                      <Button size="sm" variant="ghost" className="h-7 w-7 p-0 rounded-lg" onClick={() => setEditingNoteId(null)}>
                        <X className="w-3.5 h-3.5" />
                      </Button>
                      <Button size="sm" className="h-7 w-7 p-0 rounded-lg" onClick={async () => {
                        if (!editingNoteText.trim()) return;
                        
                        const updatedNotes = {
                          notes: (parsedNotes.notes || []).map((n: any) => n.id === note.id ? { ...n, text: editingNoteText } : n),
                          call_logs: (parsedNotes.call_logs || []).map((n: any) => n.id === note.id ? { ...n, text: editingNoteText } : n),
                          meetings: (parsedNotes.meetings || []).map((n: any) => n.id === note.id ? { ...n, text: editingNoteText } : n)
                        };

                        try {
                          await updateTicketInServer(id!, { communication_notes: JSON.stringify(updatedNotes) });
                          setEditingNoteId(null);
                          toast.success('Note updated');
                        } catch (e) {
                          toast.error('Failed to update note');
                        }
                      }}>
                        <Check className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm flex-1 ml-1 pt-0.5 whitespace-pre-wrap">{note.text}</p>
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0 rounded-md shrink-0" onClick={() => { setEditingNoteId(note.id); setEditingNoteText(note.text); }}>
                        <Pencil className="w-3 h-3 text-muted-foreground" />
                      </Button>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-1">{note.created_by} • {format(new Date(note.created_at), 'dd MMM yyyy, hh:mm a')}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Activity Timeline */}
        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4" /> Case Timeline
          </h3>
          {ticketLogs.length > 0 ? (
            <div className="space-y-3">
              {ticketLogs.map((log, i) => (
                <div key={log.id} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    {i < ticketLogs.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                  </div>
                  <div className="pb-3">
                    <p className="text-xs font-semibold">{log.action}</p>
                    <p className="text-[11px] text-muted-foreground">{log.details}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{log.created_by} • {format(new Date(log.created_at), 'dd MMM yyyy, hh:mm a')}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-muted-foreground text-center py-4">No activity yet</p>
          )}
        </Card>
      </div>

      {/* ── Inline WhatsApp chat panel ───────────────────────────────────── */}
      <WhatsAppChatPanel
        open={chatPanelOpen}
        onClose={() => { setChatPanelOpen(false); setChatPreloadMessage(undefined); }}
        phone={chatPhone}
        name={ticket.client_name}
        readonly={!canSendInChat}
        custody={custody}
        preloadMessage={chatPreloadMessage}
        sender={`${currentUser.name} · ${currentRole === 'super_admin' ? 'Super Admin' : currentRole === 'front_desk' ? 'Front Desk' : 'Lawyer'}`}
      />
    </div>
  );
};

export default TicketDetail;
