import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCRM } from '@/contexts/CRMContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TicketStatusBadge, ServiceBadge, PriorityBadge } from '@/components/StatusBadges';
import { QuickActions } from '@/components/QuickActions';
import { formatDistanceToNow, format } from 'date-fns';
import { FileText, IndianRupee, Plus, Bell, Archive } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from 'sonner';
import { TICKET_STATUS_LABELS, TicketStatus } from '@/types/crm';

type QuickFilter = 'all' | TicketStatus | 'payment_pending' | string;

const Tickets = () => {
  const { tickets, isLoadingTickets, updateTicketInServer, currentRole, currentUser, users, leads, addFollowUpToServer } = useCRM();
  const [activeFilter, setActiveFilter] = useState<QuickFilter>('all');

  // Build all IDs that represent the current lawyer user (Cognito sub + username from lawyers API)
  const myLawyerIds = useMemo(() => {
    if (currentRole !== 'lawyer') return new Set<string>();
    const ids = new Set<string>([currentUser.id]);
    // Also match by email since currentUser.id (Cognito sub) differs from lawyer_id (Cognito username)
    users
      .filter(u => u.role === 'lawyer' && u.email === currentUser.email)
      .forEach(u => ids.add(u.id));
    return ids;
  }, [currentRole, currentUser, users]);

  const roleFiltered = currentRole === 'lawyer'
    ? tickets.filter(t => myLawyerIds.has(t.lawyer_id))
    : tickets;

  const lawyers = useMemo(() => {
    const ids = new Set(roleFiltered.map(t => t.lawyer_id));
    return users.filter(u => ids.has(u.id));
  }, [roleFiltered, users]);

  const filtered = useMemo(() => {
    // Hide archived by default unless specifically filtered
    const base = activeFilter === 'ARCHIVED' ? roleFiltered : roleFiltered.filter(t => t.status !== 'ARCHIVED');
    if (activeFilter === 'all') return base;
    if (activeFilter === 'payment_pending') return base.filter(t => t.advance_paid < t.amount);
    if (activeFilter.startsWith('lawyer_')) {
      const lawyerId = activeFilter.replace('lawyer_', '');
      return base.filter(t => t.lawyer_id === lawyerId);
    }
    if (activeFilter === 'ARCHIVED') return roleFiltered.filter(t => t.status === 'ARCHIVED');
    return base.filter(t => t.status === activeFilter);
  }, [roleFiltered, activeFilter]);

  const archivedCount = roleFiltered.filter(t => t.status === 'ARCHIVED').length;

  const statusFilters: { key: QuickFilter; label: string }[] = [
    { key: 'all', label: 'All' },
    ...Object.entries(TICKET_STATUS_LABELS)
      .filter(([k]) => !['ARCHIVED', 'REJECTED'].includes(k))
      .map(([k, v]) => ({ key: k as QuickFilter, label: v })),
    ...(currentRole !== 'lawyer' ? [{ key: 'payment_pending' as QuickFilter, label: 'Payment Pending' }] : []),
    ...lawyers.map(l => ({ key: `lawyer_${l.id}` as QuickFilter, label: l.name.replace('Adv. ', '') })),
  ];

  const pendingApprovalCount = currentRole !== 'lawyer'
    ? roleFiltered.filter(t => t.status === 'PENDING_APPROVAL').length
    : 0;

  if (isLoadingTickets) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-40 bg-card/95 backdrop-blur-lg border-b px-5 py-3 space-y-2.5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display font-bold text-lg">{'My Tickets'}</h1>
            <p className="text-xs text-muted-foreground">{filtered.length} {activeFilter !== 'all' ? 'filtered' : 'active'}</p>
          </div>
          <button
            onClick={() => setActiveFilter(activeFilter === 'ARCHIVED' ? 'all' : 'ARCHIVED')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${activeFilter === 'ARCHIVED'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted/60 text-muted-foreground hover:bg-muted'
              }`}
          >
            <Archive className="w-3.5 h-3.5" />
            Archive{archivedCount > 0 ? ` (${archivedCount})` : ''}
          </button>
        </div>

        {/* Pending Approval Banner */}
        {currentRole !== 'lawyer' && pendingApprovalCount > 0 && (
          <button
            onClick={() => setActiveFilter('PENDING_APPROVAL')}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${activeFilter === 'PENDING_APPROVAL'
              ? 'bg-warning/20 text-warning border border-warning/30'
              : 'bg-warning/10 text-warning hover:bg-warning/15 border border-warning/20'
              }`}
          >
            <Bell className="w-4 h-4 shrink-0" />
            <span className="flex-1 text-left">{pendingApprovalCount} ticket{pendingApprovalCount > 1 ? 's' : ''} awaiting approval</span>
            <span className="bg-warning text-warning-foreground text-xs font-bold px-2 py-0.5 rounded-full">{pendingApprovalCount}</span>
          </button>
        )}
        <div className="flex gap-1.5 overflow-x-auto pb-0.5 -mx-1 px-1 no-scrollbar">
          {statusFilters.map(f => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all ${activeFilter === f.key
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted/60 text-muted-foreground hover:bg-muted'
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-5 py-4 space-y-3 max-w-lg mx-auto">
        {filtered.map(ticket => {
          const docs = typeof ticket.documents === 'string' ? JSON.parse(ticket.documents) : (ticket.documents || []);
          const clientPhone = leads.find(l => l.id === ticket.client_id)?.whatsapp_number || '';
          return (
            <TicketCard
              key={ticket.ticket_id}
              ticket={ticket}
              docs={docs}
              clientPhone={clientPhone}
              canManagePayments={currentRole !== 'lawyer'}
              addFollowUpToServer={addFollowUpToServer}
              leads={leads}
              onUpdatePayment={async (amount) => {
                try {
                  await updateTicketInServer(ticket.ticket_id, {
                    advance_paid: Number(ticket.advance_paid || 0) + amount,
                    updated_at: new Date().toISOString()
                  });
                } catch (error) {
                  toast.error('Failed to update payment');
                  console.error(error);
                }
              }}
            />
          );
        })}
        {filtered.length === 0 && (
          <p className="text-center text-sm text-muted-foreground py-8">No tickets found</p>
        )}
      </div>
    </div>
  );
};
const TicketCard = ({
  ticket,
  docs,
  clientPhone,
  canManagePayments,
  addFollowUpToServer,
  leads,
  onUpdatePayment,
}: {
  ticket: any;
  docs: any[];
  clientPhone: string;
  canManagePayments: boolean;
  addFollowUpToServer: any;
  leads: any[];
  onUpdatePayment: (amount: number) => void;
}) => {
  const navigate = useNavigate();
  const [paymentAmount, setPaymentAmount] = useState('');
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleAddPayment = () => {
    const amount = parseFloat(paymentAmount);
    if (isNaN(amount) || amount <= 0) {
      toast.error('Enter a valid amount');
      return;
    }
    if (amount > 10_00_000) {
      toast.error('Amount cannot exceed ₹10,00,000');
      return;
    }
    onUpdatePayment(amount);
    toast.success(`₹${amount.toLocaleString('en-IN')} payment recorded`, {
      description: `Total paid: ₹${(Number(ticket.advance_paid || 0) + amount).toLocaleString('en-IN')}`,
    });
    setPaymentAmount('');
    setPopoverOpen(false);
  };

  return (
    <Card className="p-3.5 cursor-pointer active:scale-[0.98] transition-all hover:shadow-md" onClick={() => navigate(`/ticket/${ticket.ticket_id}`)}>
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <h3 className="text-sm font-semibold">{ticket.client_name}</h3>
          <p className="text-[10px] text-muted-foreground font-mono">{ticket.ticket_id}</p>
        </div>
        <TicketStatusBadge status={ticket.status} />
      </div>

      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <ServiceBadge service={ticket.service_type} />
        <PriorityBadge priority={ticket.priority} />
      </div>

      {/* Payment Info - only visible to front_desk and super_admin */}
      {canManagePayments && (
        <div className="flex items-center justify-between bg-muted/50 rounded-lg p-2.5 mb-2">
          <div>
            <p className="text-[10px] text-muted-foreground">Payment</p>
            <p className="text-sm font-semibold">
              ₹{ticket.advance_paid.toLocaleString('en-IN')}
            </p>
          </div>
          <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
            <PopoverTrigger asChild>
              <Button size="sm" variant="outline" className="h-8 rounded-lg gap-1 text-xs">
                <Plus className="w-3.5 h-3.5" /> Add Payment
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-3" align="end">
              <p className="text-xs font-semibold mb-2">Record Payment</p>
              <div className="relative mb-2">
                <IndianRupee className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  className="pl-8 h-10 rounded-lg text-sm"
                  min={1}
                />
              </div>
              <Button className="w-full h-9 rounded-lg text-xs" onClick={handleAddPayment} disabled={!paymentAmount}>
                Record ₹{paymentAmount ? parseFloat(paymentAmount).toLocaleString('en-IN') : '0'}
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      )}

      <p className="text-xs text-muted-foreground mb-2">{ticket.description}</p>

      <div className="flex items-center gap-2 text-[10px] text-muted-foreground mb-2 flex-wrap">
        <span>Lawyer: {ticket.lawyer_name}</span>
        <span>•</span>
        <span>Updated: {format(new Date(ticket.updated_at), 'dd MMM yyyy, hh:mm a')}</span>
      </div>

      {docs.length > 0 && (
        <div className="flex items-center gap-1.5 mb-2">
          <FileText className="w-3 h-3 text-muted-foreground" />
          <span className="text-[10px] text-muted-foreground">{docs.length} document{docs.length > 1 ? 's' : ''}</span>
        </div>
      )}
      <QuickActions
        whatsapp_number={clientPhone}
        name={ticket.client_name}
        service={ticket.service_type}
        leadId={ticket.client_id}
        onFollowup={async (date, note) => {
          console.log('Tickets: onFollowup triggered by QuickActions', { date, note });
          const history = ticket.followup_history ? (typeof ticket.followup_history === 'string' ? JSON.parse(ticket.followup_history) : ticket.followup_history) : [];
          const record = {
            attempt: history.length + 1,
            type: 'call',
            scheduled_at: date.toISOString(),
            completed: false,
            note: note
          };
          toast.promise(addFollowUpToServer(ticket.ticket_id, record), {
            loading: 'Scheduling follow-up...',
            success: 'Follow-up scheduled!',
            error: 'Failed to schedule'
          });
        }}
        compact
      />
    </Card>
  );
};

export default Tickets;


