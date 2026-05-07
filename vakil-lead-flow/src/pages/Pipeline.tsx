import { useMemo } from 'react';
import { useCRM } from '@/contexts/CRMContext';
import { LeadScoreIndicator, ServiceBadge } from '@/components/StatusBadges';
import { Card } from '@/components/ui/card';
import { LEAD_STATUS_LABELS, Lead, LeadStatus } from '@/types/crm';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Clock, MessageCircle, Phone, Users } from 'lucide-react';

interface PipelineColumn {
  key: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  leads: Lead[];
}

const Pipeline = () => {
  const { leads, tickets } = useCRM();
  const navigate = useNavigate();

  const columns: PipelineColumn[] = useMemo(() => {
    const newLeads = leads.filter(l => l.status === 'NEW_LEAD');
    const contacted = leads.filter(l => l.status === 'CONTACTED');
    const inFollowUp = leads.filter(l =>
      l.status === 'CONTACTED' && l.followup_count > 0 && l.followup_count < 6
    );
    // Contacted but no follow-ups yet (pure contacted)
    const pureContacted = leads.filter(l =>
      l.status === 'CONTACTED' && l.followup_count === 0
    );
    const converted = leads.filter(l =>
      ['ADVANCE_PAID', 'COMPLETED'].includes(l.status)
    );

    return [
      {
        key: 'new',
        label: 'New Leads',
        icon: <Users className="w-3.5 h-3.5" />,
        color: 'border-t-info',
        leads: newLeads,
      },
      {
        key: 'contacted',
        label: 'Contacted',
        icon: <Phone className="w-3.5 h-3.5" />,
        color: 'border-t-primary',
        leads: pureContacted,
      },
      {
        key: 'followup',
        label: 'In Follow-up',
        icon: <Clock className="w-3.5 h-3.5" />,
        color: 'border-t-warning',
        leads: inFollowUp,
      },
      {
        key: 'converted',
        label: 'Converted',
        icon: <CheckCircle2 className="w-3.5 h-3.5" />,
        color: 'border-t-success',
        leads: converted,
      },
    ];
  }, [leads]);

  const totalActive = columns.reduce((sum, col) => sum + col.leads.length, 0);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-40 bg-card/95 backdrop-blur-lg border-b px-5 py-3">
        <h1 className="font-display font-bold text-lg">Sales Pipeline</h1>
        <p className="text-xs text-muted-foreground">{totalActive} leads across stages</p>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-4 py-4 min-w-max">
          {columns.map(col => (
            <div key={col.key} className="w-[260px] flex-shrink-0">
              <div className={`bg-card rounded-xl border border-t-2 ${col.color} overflow-hidden`}>
                <div className="px-3 py-2.5 border-b flex items-center gap-2">
                  <span className="text-muted-foreground">{col.icon}</span>
                  <h3 className="text-xs font-semibold flex-1">{col.label}</h3>
                  <span className="text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full font-medium">{col.leads.length}</span>
                </div>
                <div className="p-2 space-y-2 min-h-[100px] max-h-[60vh] overflow-y-auto">
                  {col.leads.map(lead => (
                    <div
                      key={lead.id}
                      onClick={() => {
                        if (['ADVANCE_PAID', 'COMPLETED'].includes(lead.status)) {
                          // Find the matching ticket
                          const ticket = tickets.find(t => t.client_id === lead.id);
                          if (ticket) {
                            navigate(`/ticket/${ticket.ticket_id}`);
                            return;
                          }
                        }
                        navigate(`/lead/${lead.id}`);
                      }}
                      className="bg-background rounded-lg p-2.5 cursor-pointer border border-transparent hover:border-border transition-all hover:shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs font-semibold truncate">{lead.name}</p>
                        <LeadScoreIndicator score={lead.lead_score} />
                      </div>
                      <ServiceBadge service={lead.service} />
                      <div className="flex items-center justify-between mt-1.5">
                        <p className="text-[10px] text-muted-foreground">
                          Follow-ups: {lead.followup_count}/6
                        </p>
                        {col.key === 'converted' && (
                          <span className="text-[9px] font-semibold text-success bg-success/10 px-1.5 py-0.5 rounded-full">Ticket Created</span>
                        )}
                      </div>
                    </div>
                  ))}
                  {col.leads.length === 0 && (
                    <p className="text-[11px] text-muted-foreground text-center py-6">No leads</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pipeline;
