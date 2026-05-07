import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCRM } from '@/contexts/CRMContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Briefcase, Ticket, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { TicketStatusBadge, ServiceBadge, PriorityBadge } from '@/components/StatusBadges';
import { formatDistanceToNow } from 'date-fns';

const TeamManagement = () => {
  const navigate = useNavigate();
  const { users, tickets } = useCRM();

  const lawyers = useMemo(() => {
    return users.filter(u => u.role === 'lawyer').map(lawyer => {
      const cases = tickets.filter(t => t.lawyer_id === lawyer.id);
      const active = cases.filter(t => !['ARCHIVED', 'WORK_COMPLETED'].includes(t.status));
      const completed = cases.filter(t => ['ARCHIVED', 'WORK_COMPLETED'].includes(t.status));
      const pending = cases.filter(t => t.status === 'PENDING_APPROVAL');
      const revenue = cases.reduce((s, t) => s + (Number(t.advance_paid) || 0), 0);
      return { ...lawyer, cases, active, completed, pending, revenue };
    });
  }, [users, tickets]);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-40 bg-card/95 backdrop-blur-lg border-b px-5 py-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="font-display font-bold text-lg">Team Management</h1>
            <p className="text-xs text-muted-foreground">{lawyers.length} lawyers</p>
          </div>
        </div>
      </div>

      <div className="px-5 py-4 space-y-4 max-w-lg mx-auto">
        {lawyers.map(lawyer => (
          <Card key={lawyer.id} className="p-4">
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                {lawyer.name.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">{lawyer.name}</p>
                <p className="text-[11px] text-muted-foreground">{lawyer.email}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="text-center p-2 bg-info/5 rounded-lg border border-info/10">
                <Ticket className="w-3.5 h-3.5 mx-auto mb-0.5 text-info" />
                <p className="text-sm font-bold">{lawyer.active.length}</p>
                <p className="text-[9px] text-muted-foreground">Active</p>
              </div>
              <div className="text-center p-2 bg-warning/5 rounded-lg border border-warning/10">
                <Clock className="w-3.5 h-3.5 mx-auto mb-0.5 text-warning" />
                <p className="text-sm font-bold">{lawyer.pending.length}</p>
                <p className="text-[9px] text-muted-foreground">Pending</p>
              </div>
              <div className="text-center p-2 bg-success/5 rounded-lg border border-success/10">
                <CheckCircle className="w-3.5 h-3.5 mx-auto mb-0.5 text-success" />
                <p className="text-sm font-bold">{lawyer.completed.length}</p>
                <p className="text-[9px] text-muted-foreground">Done</p>
              </div>
              <div className="text-center p-2 bg-primary/5 rounded-lg border border-primary/10">
                <Briefcase className="w-3.5 h-3.5 mx-auto mb-0.5 text-primary" />
                <p className="text-sm font-bold">{lawyer.cases.length}</p>
                <p className="text-[9px] text-muted-foreground">Total</p>
              </div>
            </div>

            {/* Active Tickets */}
            {lawyer.active.length > 0 && (
              <div className="space-y-1.5">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">Active Tickets</p>
                {lawyer.active.map(ticket => (
                  <button
                    key={ticket.ticket_id}
                    onClick={() => navigate(`/ticket/${ticket.ticket_id}`)}
                    className="w-full flex items-center gap-2.5 p-2.5 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all text-left"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate">{ticket.client_name}</p>
                      <p className="text-[10px] text-muted-foreground">{ticket.ticket_id}</p>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <ServiceBadge service={ticket.service_type} />
                      <TicketStatusBadge status={ticket.status} />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamManagement;
