import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Switch } from '@/components/ui/switch';
import vakiltechLogo from '@/assets/vakiltech-logo.png';
import { useCRM } from '@/contexts/CRMContext';
import { format, isToday, isYesterday, startOfDay, formatDistanceToNow } from 'date-fns';
import { LeadCard } from '@/components/LeadCard';
import { LeadStatusBadge, ServiceBadge, TicketStatusBadge } from '@/components/StatusBadges';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { Search, Users, Clock, AlertTriangle, TrendingUp, Plus, Archive, Ticket } from 'lucide-react';
import { LeadStatus, LEAD_STATUS_LABELS, ServiceType, SERVICE_LABELS, TICKET_STATUS_LABELS } from '@/types/crm';
import { toast } from 'sonner';

const LeadsDashboard = () => {
  const { leads, setLeads, allDueFollowUps, tickets, addLeadToServer, isLoadingLeads } = useCRM();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [serviceFilter, setServiceFilter] = useState<string>('all');
  const [newLeadOpen, setNewLeadOpen] = useState(false);
  const [newLead, setNewLead] = useState({ name: '', whatsapp_number: '', location: '', service: '' as string, description: '' });
  const [showArchived, setShowArchived] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const stats = useMemo(() => {
    const newLeads = leads.filter(l => l.status === 'NEW_LEAD').length;
    const dueTodayCount = allDueFollowUps.filter(f => !f.completed && new Date(f.scheduled_at) <= new Date()).length;
    const overdueCount = allDueFollowUps.filter(f => !f.completed && new Date(f.scheduled_at) < new Date(Date.now() - 3600000)).length;
    const converted = leads.filter(l => ['ADVANCE_PAID', 'COMPLETED'].includes(l.status)).length;
    return { newLeads, dueTodayCount, overdueCount, converted };
  }, [leads, allDueFollowUps]);

  const HIDDEN_STATUSES = ['ADVANCE_PAID', 'COMPLETED', 'NOT_INTERESTED', 'USER_DROPPED'];

  // Separate active vs archived (dead) leads
  const activeLeads = useMemo(() => {
    if (showArchived) {
      return leads.filter(l => ['NOT_INTERESTED', 'USER_DROPPED'].includes(l.status));
    }
    return leads.filter(l => !HIDDEN_STATUSES.includes(l.status));
  }, [leads, showArchived]);

  const filtered = useMemo(() => {
    return activeLeads.filter(l => {
      if (search) {
        const q = search.toLowerCase();
        const searchable = [l.name, l.custom_id, l.whatsapp_number, l.location, l.description, l.service].join(' ').toLowerCase();
        if (!searchable.includes(q)) return false;
      }
      if (statusFilter !== 'all' && l.status !== statusFilter) return false;
      if (serviceFilter !== 'all' && l.service !== serviceFilter) return false;
      return true;
    }).sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }, [activeLeads, search, statusFilter, serviceFilter]);

  const groupedByDay = useMemo(() => {
    const groups: { label: string; date: Date; leads: typeof filtered }[] = [];
    const map = new Map<string, typeof filtered>();

    filtered.forEach(lead => {
      const day = startOfDay(new Date(lead.created_at)).toISOString();
      if (!map.has(day)) map.set(day, []);
      map.get(day)!.push(lead);
    });

    map.forEach((leads, dayIso) => {
      const date = new Date(dayIso);
      let label: string;
      if (isToday(date)) label = 'Today';
      else if (isYesterday(date)) label = 'Yesterday';
      else label = format(date, 'EEEE, d MMM yyyy');
      groups.push({ label, date, leads });
    });

    return groups.sort((a, b) => b.date.getTime() - a.date.getTime());
  }, [filtered]);

  // Universal search: searches ALL leads + tickets when search is active
  const isSearching = search.trim().length > 0;
  const universalResults = useMemo(() => {
    if (!isSearching) return { allLeads: [], matchedTickets: [] };
    const q = search.toLowerCase();
    const allLeads = leads.filter(l => {
      const searchable = [l.name, l.custom_id, l.whatsapp_number, l.location, l.description, l.service, l.status].join(' ').toLowerCase();
      return searchable.includes(q);
    });
    const matchedTickets = tickets.filter(t => {
      const searchable = [t.ticket_id, t.client_name, t.lawyer_name, t.service_type, t.description, t.status].join(' ').toLowerCase();
      return searchable.includes(q);
    });
    return { allLeads, matchedTickets };
  }, [isSearching, search, leads, tickets]);

  const navigate = useNavigate();

  if (isLoadingLeads) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center pb-20">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-muted-foreground text-sm font-medium">Syncing with AWS RDS...</p>
      </div>
    );
  }

  const statCards = [
    { label: 'New Leads', value: stats.newLeads, icon: Users, color: 'text-info' },
    { label: 'Follow-ups Due', value: stats.dueTodayCount, icon: Clock, color: 'text-warning' },
    { label: 'Overdue', value: stats.overdueCount, icon: AlertTriangle, color: 'text-destructive' },
    { label: 'Converted', value: stats.converted, icon: TrendingUp, color: 'text-success' },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-40 bg-card/95 backdrop-blur-lg border-b px-5 py-3 flex items-center justify-between">
        <img src={vakiltechLogo} alt="Vakiltech" className="h-10 w-auto" loading="eager" />
        <Button size="sm" className="h-9 rounded-xl gap-1.5 text-xs" onClick={() => setNewLeadOpen(true)}>
          <Plus className="w-3.5 h-3.5" /> New Lead
        </Button>
      </div>

      <div className="px-5 py-4 space-y-4 max-w-lg mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          {statCards.map(s => (
            <Card key={s.label} className="p-2.5 text-center">
              <s.icon className={`w-4 h-4 mx-auto mb-1 ${s.color}`} />
              <p className="text-lg font-bold font-display">{s.value}</p>
              <p className="text-[9px] text-muted-foreground leading-tight">{s.label}</p>
            </Card>
          ))}
        </div>

        {/* Search & Filters */}
        <div className="space-y-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search leads, tickets, clients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 h-11 rounded-xl"
            />
          </div>
          <div className="flex gap-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="h-9 rounded-xl text-xs flex-1">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                {Object.entries(LEAD_STATUS_LABELS).map(([k, v]) => (
                  <SelectItem key={k} value={k}>{v}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={serviceFilter} onValueChange={setServiceFilter}>
              <SelectTrigger className="h-9 rounded-xl text-xs flex-1">
                <SelectValue placeholder="Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Services</SelectItem>
                {Object.entries(SERVICE_LABELS).map(([k, v]) => (
                  <SelectItem key={k} value={k}>{v}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between bg-muted/40 rounded-xl px-3 py-2">
            <div className="flex items-center gap-2">
              <Archive className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Show Dropped / Not Interested</span>
            </div>
            <Switch checked={showArchived} onCheckedChange={setShowArchived} />
          </div>
        </div>

        {/* Universal Search Results */}
        {isSearching ? (
          <div className="space-y-4">
            {/* Matched Leads */}
            {universalResults.allLeads.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">Leads ({universalResults.allLeads.length})</p>
                  <div className="flex-1 border-t border-border/50" />
                </div>
                <div className="space-y-2.5">
                  {universalResults.allLeads.map(lead => (
                    <LeadCard key={lead.id} lead={lead} />
                  ))}
                </div>
              </div>
            )}

            {/* Matched Tickets */}
            {universalResults.matchedTickets.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">Tickets ({universalResults.matchedTickets.length})</p>
                  <div className="flex-1 border-t border-border/50" />
                </div>
                <div className="space-y-2.5">
                  {universalResults.matchedTickets.map(ticket => (
                    <Card
                      key={ticket.ticket_id}
                      className="p-3.5 cursor-pointer active:scale-[0.98] transition-all hover:shadow-md border-border/60"
                      onClick={() => navigate(`/ticket/${ticket.ticket_id}`)}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <h3 className="font-semibold text-sm truncate">{ticket.client_name}</h3>
                            <span className="font-mono text-[10px] text-muted-foreground">{ticket.ticket_id}</span>
                          </div>
                          <p className="text-[11px] text-muted-foreground">Lawyer: {ticket.lawyer_name}</p>
                        </div>
                        <TicketStatusBadge status={ticket.status} />
                      </div>
                      <div className="flex items-center gap-2">
                        <ServiceBadge service={ticket.service_type} />
                        <span className="text-[11px] text-muted-foreground ml-auto">
                          ₹{ticket.advance_paid.toLocaleString('en-IN')} / ₹{ticket.amount.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          Updated: {format(new Date(ticket.updated_at), 'dd MMM yyyy, hh:mm a')}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {universalResults.allLeads.length === 0 && universalResults.matchedTickets.length === 0 && (
              <p className="text-center text-sm text-muted-foreground py-8">No results found</p>
            )}
          </div>
        ) : (
          /* Regular Lead List */
          <div className="space-y-4">
            {groupedByDay.map(group => (
              <div key={group.label}>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">{group.label}</p>
                  <div className="flex-1 border-t border-border/50" />
                  <span className="text-[10px] text-muted-foreground">{group.leads.length}</span>
                </div>
                <div className="space-y-2.5">
                  {group.leads.map(lead => (
                    <LeadCard key={lead.id} lead={lead} />
                  ))}
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-sm text-muted-foreground py-8">No leads found</p>
            )}
          </div>
        )}
      </div>

      {/* New Lead Dialog */}
      <Dialog open={newLeadOpen} onOpenChange={setNewLeadOpen}>
        <DialogContent className="max-w-sm rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-base">Add New Lead</DialogTitle>
            <DialogDescription className="text-xs">Enter lead details to create a new enquiry.</DialogDescription>
          </DialogHeader>
          <div className="space-y-3 pt-1">
            <Input
              placeholder="Full Name *"
              value={newLead.name}
              onChange={(e) => setNewLead(prev => ({ ...prev, name: e.target.value }))}
              className="h-11 rounded-xl text-sm"
            />
            <Input
              placeholder="WhatsApp Number (e.g. 919876543210) *"
              value={newLead.whatsapp_number}
              onChange={(e) => setNewLead(prev => ({ ...prev, whatsapp_number: e.target.value }))}
              className="h-11 rounded-xl text-sm"
            />
            <Input
              placeholder="Location *"
              value={newLead.location}
              onChange={(e) => setNewLead(prev => ({ ...prev, location: e.target.value }))}
              className="h-11 rounded-xl text-sm"
            />
            <Select value={newLead.service} onValueChange={(val) => setNewLead(prev => ({ ...prev, service: val }))}>
              <SelectTrigger className="h-11 rounded-xl text-sm">
                <SelectValue placeholder="Select Service *" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(SERVICE_LABELS).map(([k, v]) => (
                  <SelectItem key={k} value={k}>{v}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Description (optional)"
              value={newLead.description}
              onChange={(e) => setNewLead(prev => ({ ...prev, description: e.target.value }))}
              className="min-h-[60px] text-sm rounded-xl resize-none"
              rows={2}
            />
            <Button
              className="w-full h-11 rounded-xl"
              disabled={!newLead.name || !newLead.whatsapp_number || !newLead.location || !newLead.service || isSubmitting}
              onClick={async () => {
                setIsSubmitting(true);
                try {
                  const customId = `${newLead.name.toLowerCase().split(' ')[0]}-${Math.floor(Math.random() * 10000)}`;
                  
                  // Send to AWS API via Context
                  await addLeadToServer({
                    custom_id: customId,
                    name: newLead.name,
                    location: newLead.location,
                    whatsapp_number: newLead.whatsapp_number,
                    service: newLead.service as ServiceType,
                    description: newLead.description,
                    payment_status: 'pending',
                    status: 'NEW_LEAD' as LeadStatus,
                    advance_amount: 0,
                    mark_advance_paid: false,
                    payment_amount: 0,
                    payment_id: null,
                    assigned_lawyer_id: null,
                    lead_score: Math.floor(Math.random() * 30) + 50,
                    followup_count: 0,
                  });
                  
                  toast.success(`Lead "${newLead.name}" created!`);
                  setNewLead({ name: '', whatsapp_number: '', location: '', service: '', description: '' });
                  setNewLeadOpen(false);
                } catch (error) {
                  toast.error("Failed to create lead. Please try again.");
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
              {isSubmitting ? 'Creating...' : 'Create Lead'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LeadsDashboard;
