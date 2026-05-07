import { useMemo, useState } from 'react';
import { useCRM } from '@/contexts/CRMContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SERVICE_LABELS } from '@/types/crm';
import { format } from 'date-fns';
import { ArrowLeft, IndianRupee, CheckCircle2, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const LAWYER_RATES: Record<string, number> = {
  LEGAL_CONSULTATION: 149,
  LEGAL_NOTICE: 400,
  DOCUMENT_DRAFTING: 250,
  CORPORATE_RETAINER: 750,
};

const Billing = () => {
  const { tickets, currentRole, currentUser } = useCRM();
  const navigate = useNavigate();
  const [paidIds, setPaidIds] = useState<Set<string>>(new Set());

  const isLawyer = currentRole === 'lawyer';

  // Build payout entries from archived tickets
  const payouts = useMemo(() => {
    const archivedTickets = tickets.filter(t => t.status === 'ARCHIVED');
    const relevant = isLawyer
      ? archivedTickets.filter(t => t.lawyer_id === currentUser.id)
      : archivedTickets;

    return relevant.map(t => ({
      ticketId: t.ticket_id,
      clientName: t.client_name,
      lawyerName: t.lawyer_name,
      service: t.service_type,
      rate: LAWYER_RATES[t.service_type] || 0,
      date: t.updated_at || t.created_at,
      paid: paidIds.has(t.ticket_id),
    }));
  }, [tickets, isLawyer, currentUser.id, paidIds]);

  const totalEarnings = payouts.reduce((sum, p) => sum + (Number(p.rate) || 0), 0);
  const totalPaid = payouts.filter(p => p.paid).reduce((sum, p) => sum + (Number(p.rate) || 0), 0);
  const totalPending = totalEarnings - totalPaid;

  const markAsPaid = (ticketId: string) => {
    setPaidIds(prev => new Set([...prev, ticketId]));
    toast.success('Payout marked as paid');
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-40 bg-card/95 backdrop-blur-lg border-b px-5 py-3 flex items-center gap-3">
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h1 className="text-base font-semibold">{isLawyer ? 'My Earnings' : 'Billing & Payouts'}</h1>
      </div>

      <div className="px-5 py-4 space-y-4 max-w-lg mx-auto">
        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-2">
          <Card className="p-3 text-center">
            <IndianRupee className="w-4 h-4 mx-auto mb-1 text-primary" />
            <p className="text-lg font-bold">₹{totalEarnings.toLocaleString('en-IN')}</p>
            <p className="text-[9px] text-muted-foreground">Total</p>
          </Card>
          <Card className="p-3 text-center">
            <CheckCircle2 className="w-4 h-4 mx-auto mb-1 text-success" />
            <p className="text-lg font-bold">₹{totalPaid.toLocaleString('en-IN')}</p>
            <p className="text-[9px] text-muted-foreground">Paid</p>
          </Card>
          <Card className="p-3 text-center">
            <Clock className="w-4 h-4 mx-auto mb-1 text-warning" />
            <p className="text-lg font-bold">₹{totalPending.toLocaleString('en-IN')}</p>
            <p className="text-[9px] text-muted-foreground">Pending</p>
          </Card>
        </div>

        {/* Payout List */}
        <div className="space-y-2.5">
          {payouts.length === 0 && (
            <p className="text-center text-sm text-muted-foreground py-8">No completed cases yet</p>
          )}
          {payouts.map(p => (
            <Card key={p.ticketId} className="p-3.5">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm truncate">{p.clientName}</h3>
                  <p className="text-[11px] text-muted-foreground">
                    {p.lawyerName} · {SERVICE_LABELS[p.service] || p.service}
                  </p>
                </div>
                <Badge variant={p.paid ? 'default' : 'secondary'} className="text-[10px]">
                  {p.paid ? 'Paid' : 'Pending'}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-muted-foreground">{p.ticketId}</span>
                  <span className="text-[10px] text-muted-foreground">
                    {format(new Date(p.date), 'd MMM yyyy')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm">₹{p.rate.toLocaleString('en-IN')}</span>
                  {!isLawyer && !p.paid && (
                    <Button size="sm" variant="outline" className="h-7 text-[10px] rounded-lg" onClick={() => markAsPaid(p.ticketId)}>
                      Mark Paid
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Billing;
