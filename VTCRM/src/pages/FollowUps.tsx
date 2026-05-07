import { useMemo, useState, useEffect } from 'react';
import { useCRM } from '@/contexts/CRMContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ServiceBadge } from '@/components/StatusBadges';
import { Phone, MessageCircle, CheckCircle2, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const FollowUps = () => {
  const { leads, tickets, allDueFollowUps, addFollowUpToServer, currentUser, currentRole, users, addActivityLog } = useCRM();
  const navigate = useNavigate();
  const now = useMemo(() => new Date(), []);

  const myLawyerIds = useMemo(() => {
    if (currentRole !== 'lawyer') return new Set<string>();
    const ids = new Set<string>([currentUser.id]);
    users
      .filter(u => u.role === 'lawyer' && u.email === currentUser.email)
      .forEach(u => ids.add(u.id));
    return ids;
  }, [currentRole, currentUser, users]);

  const filteredFollowUps = useMemo(() => {
    if (currentRole === 'super_admin' || currentRole === 'front_desk') return allDueFollowUps;
    
    return allDueFollowUps.filter(fu => {
      const lead = leads.find(l => l.id === fu.lead_id);
      const ticket = tickets.find(t => t.ticket_id === fu.lead_id);
      
      const isAssignedToMe = (lead?.assigned_lawyer_id && myLawyerIds.has(lead.assigned_lawyer_id)) || 
                             (ticket?.lawyer_id && myLawyerIds.has(ticket.lawyer_id));
      return isAssignedToMe;
    });
  }, [allDueFollowUps, currentRole, leads, tickets, myLawyerIds]);

  const { dueToday, overdue, upcoming } = useMemo(() => {
    // 1 hour buffer for "Due Today"
    const BUFFER = 3600000;
    
    const overdueItems = filteredFollowUps.filter(f => new Date(f.scheduled_at) < new Date(now.getTime() - BUFFER));
    const dueTodayItems = filteredFollowUps.filter(f => {
      const scheduled = new Date(f.scheduled_at);
      return scheduled >= new Date(now.getTime() - BUFFER) && scheduled <= now;
    });
    const upcomingItems = filteredFollowUps.filter(f => {
      const scheduled = new Date(f.scheduled_at);
      return scheduled > now;
    });

    return { 
      dueToday: dueTodayItems, 
      overdue: overdueItems, 
      upcoming: upcomingItems 
    };
  }, [filteredFollowUps, now]);

  const [tab, setTab] = useState<'due' | 'overdue' | 'upcoming'>('due');

  // Auto-switch tab once data loads if the current tab is empty
  useEffect(() => {
    if (overdue.length > 0) setTab('overdue');
    else if (dueToday.length > 0) setTab('due');
    else if (upcoming.length > 0) setTab('upcoming');
  }, [allDueFollowUps.length > 0]);

  const items = tab === 'due' ? dueToday : tab === 'overdue' ? overdue : upcoming;

  const markComplete = (fu: any) => {
    console.log('FollowUps: marking lead complete:', fu.lead_id);
    const record = {
      attempt: fu.attempt,
      type: fu.type,
      scheduled_at: fu.scheduled_at,
      completed: true,
      completed_at: new Date().toISOString(),
      completed_by: `${currentUser.name}-${currentRole === 'super_admin' ? 'Superadmin' : currentRole === 'front_desk' ? 'Frontdesk' : 'Lawyer'}`,
      note: fu.note || undefined,
    };

    toast.promise(
      addFollowUpToServer(fu.lead_id, record),
      {
        loading: 'Updating follow-up...',
        success: 'Follow-up completed!',
        error: 'Failed to update'
      }
    );
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-40 bg-card/95 backdrop-blur-lg border-b px-4 py-3">
        <h1 className="font-display font-bold text-lg">Follow-ups</h1>
        <p className="text-xs text-muted-foreground">{dueToday.length + overdue.length + upcoming.length} total tasks</p>
      </div>

      <div className="px-4 py-4 space-y-4 max-w-lg mx-auto">
        {/* Tabs */}
        <div className="flex gap-2">
          <Button
            variant={tab === 'overdue' ? 'default' : 'secondary'}
            className={`flex-1 h-10 rounded-xl text-xs ${tab !== 'overdue' && overdue.length > 0 ? 'text-destructive border-destructive/20 border font-bold' : ''}`}
            onClick={() => setTab('overdue')}
          >
            Overdue ({overdue.length})
          </Button>
          <Button
            variant={tab === 'due' ? 'default' : 'secondary'}
            className="flex-1 h-10 rounded-xl text-xs"
            onClick={() => setTab('due')}
          >
            Due ({dueToday.length})
          </Button>
          <Button
            variant={tab === 'upcoming' ? 'default' : 'secondary'}
            className="flex-1 h-10 rounded-xl text-xs"
            onClick={() => setTab('upcoming')}
          >
            Upcoming ({upcoming.length})
          </Button>
        </div>

        {/* Follow-up List */}
        <div className="space-y-2.5">
          {items.map(fu => {
            const phone = fu.entity_type === 'lead' ? leads.find(l => l.id === fu.lead_id)?.whatsapp_number : '';
            return (
              <Card key={fu.id} className="p-3.5" onClick={() => navigate(`/${fu.entity_type}/${fu.lead_id}`)}>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-sm font-semibold">{fu.lead_name}</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <ServiceBadge service={fu.lead_service} />
                      <span className="text-[10px] text-muted-foreground">
                        Attempt {fu.attempt}/6
                      </span>
                    </div>
                  </div>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                    new Date(fu.scheduled_at) < now ? 'bg-destructive/10 text-destructive' : 'bg-info/10 text-info'
                  }`}>
                    {formatDistanceToNow(new Date(fu.scheduled_at), { addSuffix: true })}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-2" onClick={(e) => e.stopPropagation()}>
                  {fu.type === 'call' ? (
                    <Button size="sm" className="h-9 rounded-xl bg-success text-success-foreground hover:bg-success/90 flex-1 gap-1.5" onClick={() => {
                      addActivityLog(fu.lead_id, 'Call Initiated', `Initiated scheduled call to +${phone}`);
                      window.open(`tel:+${phone}`, '_self');
                    }}>
                      <Phone className="w-3.5 h-3.5" /> Call Now
                    </Button>
                  ) : (
                    <Button size="sm" className="h-9 rounded-xl bg-success text-success-foreground hover:bg-success/90 flex-1 gap-1.5" onClick={() => {
                      addActivityLog(fu.lead_id, 'WhatsApp Initiated', `Initiated scheduled WhatsApp message to +${phone}`);
                      navigate(`/inbox?search=${phone}`);
                    }}>
                      <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                    </Button>
                  )}
                  <Button size="sm" variant="secondary" className="h-9 rounded-xl gap-1.5" onClick={() => markComplete(fu)}>
                    <CheckCircle2 className="w-3.5 h-3.5" /> Done
                  </Button>
                </div>

                {fu.note && (
                  <p className="text-[11px] text-muted-foreground mt-2 bg-muted/50 rounded-lg p-2">{fu.note}</p>
                )}
              </Card>
            );
          })}
          {items.length === 0 && (
            <div className="text-center py-12">
              <CheckCircle2 className="w-10 h-10 mx-auto text-success mb-2" />
              <p className="text-sm text-muted-foreground">
                {tab === 'due' ? 'All caught up! No follow-ups due.' : 
                 tab === 'overdue' ? 'No overdue follow-ups!' :
                 'No upcoming follow-ups scheduled.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FollowUps;
