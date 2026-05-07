import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCRM } from '@/contexts/CRMContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, TrendingUp, IndianRupee, Ticket, BarChart3, MapPin, Briefcase, Clock, PhoneCall, AlertTriangle, UserCheck, XCircle } from 'lucide-react';
import { SERVICE_LABELS, TICKET_STATUS_LABELS, LEAD_STATUS_LABELS } from '@/types/crm';

const Analytics = () => {
  const navigate = useNavigate();
  const { leads, tickets, users, followUps } = useCRM();

  const stats = useMemo(() => {
    const total = leads.length;
    const converted = leads.filter(l => ['ADVANCE_PAID', 'COMPLETED'].includes(l.status)).length;
    const conversionRate = total > 0 ? Math.round((converted / total) * 100) : 0;
    const revenue = tickets.reduce((sum, t) => sum + (Number(t.advance_paid) || 0), 0);
    const totalBilled = tickets.reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
    const collectionRate = totalBilled > 0 ? Math.round((revenue / totalBilled) * 100) : 0;
    const activeTickets = tickets.filter(t => !['ARCHIVED', 'WORK_COMPLETED'].includes(t.status)).length;

    // By service
    const byService = Object.entries(SERVICE_LABELS).map(([key, label]) => ({
      service: label,
      key,
      leads: leads.filter(l => l.service === key).length,
      tickets: tickets.filter(t => t.service_type === key).length,
      revenue: tickets.filter(t => t.service_type === key).reduce((s, t) => s + (Number(t.advance_paid) || 0), 0),
    }));

    // By city
    const cityMap: Record<string, number> = {};
    leads.forEach(l => { cityMap[l.location] = (cityMap[l.location] || 0) + 1; });
    const topCities = Object.entries(cityMap).sort((a, b) => b[1] - a[1]).slice(0, 5);

    // Lawyer performance
    const lawyers = users.filter(u => u.role === 'lawyer').map(l => {
      const lTickets = tickets.filter(t => t.lawyer_id === l.id);
      const active = lTickets.filter(t => !['ARCHIVED', 'WORK_COMPLETED'].includes(t.status)).length;
      const completed = lTickets.filter(t => ['ARCHIVED', 'WORK_COMPLETED'].includes(t.status)).length;
      const rev = lTickets.reduce((s, t) => s + (Number(t.advance_paid) || 0), 0);
      return { name: l.name, active, completed, total: lTickets.length, revenue: rev };
    });

    // Ticket status distribution
    const ticketStatusDist = Object.entries(TICKET_STATUS_LABELS).map(([status, label]) => ({
      status: label,
      count: tickets.filter(t => t.status === status).length,
    })).filter(s => s.count > 0);

    // Follow-up stats
    const completedFollowUps = followUps.filter(f => f.completed).length;
    const totalFollowUps = followUps.length;
    const followUpRate = totalFollowUps > 0 ? Math.round((completedFollowUps / totalFollowUps) * 100) : 0;

    return { total, converted, conversionRate, revenue, totalBilled, collectionRate, activeTickets, byService, topCities, lawyers, ticketStatusDist, followUpRate, completedFollowUps, totalFollowUps };
  }, [leads, tickets, users, followUps]);

  // ── Front Desk Performance Analytics ──
  const frontDeskStats = useMemo(() => {
    const fdUsers = users.filter(u => u.role === 'front_desk');
    const completedFUs = followUps.filter(f => f.completed && f.completed_at);

    // 1. Response Time: avg time from scheduled_at to completed_at for attempt 1
    const firstAttempts = completedFUs.filter(f => f.attempt === 1);
    const responseTimes = firstAttempts.map(f => {
      const scheduled = new Date(f.scheduled_at).getTime();
      const completed = new Date(f.completed_at!).getTime();
      return Math.max(0, (completed - scheduled) / 60000); // minutes
    });
    const avgResponseTime = responseTimes.length > 0
      ? Math.round(responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length)
      : 0;

    // 2. Follow-up Compliance: completed on time vs overdue vs skipped
    const allScheduled = followUps.length;
    const completedOnTime = followUps.filter(f => {
      if (!f.completed || !f.completed_at) return false;
      const scheduled = new Date(f.scheduled_at).getTime();
      const completed = new Date(f.completed_at).getTime();
      return completed - scheduled <= 3600000; // within 1 hour
    }).length;
    const completedLate = completedFUs.length - completedOnTime;
    const pending = followUps.filter(f => !f.completed).length;
    const complianceRate = allScheduled > 0 ? Math.round((completedOnTime / allScheduled) * 100) : 0;

    // 3. Drop-off Funnel: at which follow-up stage leads are lost
    const deadLeads = leads.filter(l => ['NOT_INTERESTED', 'USER_DROPPED'].includes(l.status));
    const dropOffByStage: Record<number, { count: number; status: string }> = {};
    deadLeads.forEach(l => {
      const stage = l.followup_count || 0;
      if (!dropOffByStage[stage]) dropOffByStage[stage] = { count: 0, status: '' };
      dropOffByStage[stage].count++;
    });
    const dropOffStages = Array.from({ length: 7 }, (_, i) => ({
      stage: i,
      label: i === 0 ? 'Before 1st follow-up' : `After follow-up #${i}`,
      dropped: dropOffByStage[i]?.count || 0,
    })).filter(s => s.dropped > 0);

    // 4. Per-staff breakdown
    const perStaff = fdUsers.map(u => {
      const staffFUs = completedFUs.filter(f => f.completed_by === u.name);
      const staffFirstAttempts = staffFUs.filter(f => f.attempt === 1);
      const staffResponseTimes = staffFirstAttempts.map(f => {
        const scheduled = new Date(f.scheduled_at).getTime();
        const completed = new Date(f.completed_at!).getTime();
        return Math.max(0, (completed - scheduled) / 60000);
      });
      const avgResp = staffResponseTimes.length > 0
        ? Math.round(staffResponseTimes.reduce((a, b) => a + b, 0) / staffResponseTimes.length)
        : 0;

      const staffOnTime = staffFUs.filter(f => {
        const scheduled = new Date(f.scheduled_at).getTime();
        const completed = new Date(f.completed_at!).getTime();
        return completed - scheduled <= 3600000;
      }).length;

      const conversions = leads.filter(l =>
        l.conversion_source === 'manual' && l.converted_by === u.name
      ).length;

      return {
        name: u.name,
        totalFollowUps: staffFUs.length,
        avgResponseMin: avgResp,
        onTimeRate: staffFUs.length > 0 ? Math.round((staffOnTime / staffFUs.length) * 100) : 0,
        conversions,
      };
    });

    return { avgResponseTime, complianceRate, completedOnTime, completedLate, pending, allScheduled, dropOffStages, perStaff, deadLeads: deadLeads.length };
  }, [leads, users, followUps]);

  const mainCards = [
    { label: 'Total Leads', value: stats.total, icon: Users, color: 'text-primary', bg: 'bg-primary/10' },
    { label: 'Conversion', value: `${stats.conversionRate}%`, icon: TrendingUp, color: 'text-success', bg: 'bg-success/10' },
    { label: 'Revenue', value: `₹${stats.revenue.toLocaleString('en-IN')}`, icon: IndianRupee, color: 'text-warning', bg: 'bg-warning/10' },
    { label: 'Collection Rate', value: `${stats.collectionRate}%`, icon: BarChart3, color: 'text-info', bg: 'bg-info/10' },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-40 bg-card/95 backdrop-blur-lg border-b px-5 py-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="font-display font-bold text-lg">Analytics</h1>
            <p className="text-xs text-muted-foreground">Performance metrics & insights</p>
          </div>
        </div>
      </div>

      <div className="px-5 py-4 space-y-4 max-w-lg mx-auto">
        {/* Main Stats */}
        <div className="grid grid-cols-2 gap-2.5">
          {mainCards.map(s => (
            <Card key={s.label} className="p-3.5">
              <div className="flex items-center gap-2 mb-1">
                <div className={`w-7 h-7 rounded-lg ${s.bg} flex items-center justify-center`}>
                  <s.icon className={`w-3.5 h-3.5 ${s.color}`} />
                </div>
                <span className="text-[11px] text-muted-foreground">{s.label}</span>
              </div>
              <p className="text-xl font-bold font-display">{s.value}</p>
            </Card>
          ))}
        </div>

        {/* ═══ FRONT DESK PERFORMANCE ═══ */}
        <div className="pt-2">
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-2">
            <UserCheck className="w-3.5 h-3.5" /> Front Desk Performance
          </h2>
        </div>

        {/* Response Time & Compliance */}
        <div className="grid grid-cols-2 gap-2.5">
          <Card className="p-3.5">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-warning/10 flex items-center justify-center">
                <PhoneCall className="w-3.5 h-3.5 text-warning" />
              </div>
              <span className="text-[11px] text-muted-foreground">Avg Response</span>
            </div>
            <p className="text-xl font-bold font-display">{frontDeskStats.avgResponseTime}m</p>
            <p className="text-[10px] text-muted-foreground">Time to 1st contact</p>
          </Card>
          <Card className="p-3.5">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-success/10 flex items-center justify-center">
                <Clock className="w-3.5 h-3.5 text-success" />
              </div>
              <span className="text-[11px] text-muted-foreground">Compliance</span>
            </div>
            <p className="text-xl font-bold font-display">{frontDeskStats.complianceRate}%</p>
            <p className="text-[10px] text-muted-foreground">On-time follow-ups</p>
          </Card>
        </div>

        {/* Follow-up Compliance Breakdown */}
        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4" /> Follow-up Compliance
          </h3>
          <div className="space-y-2.5">
            {[
              { label: 'On Time', count: frontDeskStats.completedOnTime, color: 'bg-success', textColor: 'text-success' },
              { label: 'Late', count: frontDeskStats.completedLate, color: 'bg-warning', textColor: 'text-warning' },
              { label: 'Pending', count: frontDeskStats.pending, color: 'bg-destructive', textColor: 'text-destructive' },
            ].map(item => (
              <div key={item.label}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs">{item.label}</span>
                  <span className={`text-xs font-semibold ${item.textColor}`}>{item.count}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all`}
                    style={{ width: `${(item.count / Math.max(frontDeskStats.allScheduled, 1)) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Drop-off Funnel */}
        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-1 flex items-center gap-2">
            <XCircle className="w-4 h-4 text-destructive" /> Drop-off Analysis
          </h3>
          <p className="text-[11px] text-muted-foreground mb-3">{frontDeskStats.deadLeads} leads lost — at which stage?</p>
          {frontDeskStats.dropOffStages.length > 0 ? (
            <div className="space-y-2">
              {frontDeskStats.dropOffStages.map(s => (
                <div key={s.stage} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-destructive/10 text-destructive text-[11px] font-bold flex items-center justify-center shrink-0">
                    {s.stage}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs">{s.label}</span>
                      <span className="text-xs font-semibold text-destructive">{s.dropped}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-destructive/60 rounded-full transition-all"
                        style={{ width: `${(s.dropped / Math.max(frontDeskStats.deadLeads, 1)) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-muted-foreground text-center py-4">No dropped leads yet</p>
          )}
        </Card>

        {/* Per-Staff Leaderboard */}
        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Users className="w-4 h-4" /> Staff Performance
          </h3>
          <div className="space-y-3">
            {frontDeskStats.perStaff.map((staff, i) => (
              <div key={staff.name} className="p-3 bg-muted/30 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                    <span className="text-sm font-medium">{staff.name}</span>
                  </div>
                  <span className="text-[11px] text-success font-semibold">{staff.conversions} conversions</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-background rounded-lg p-1.5">
                    <p className="text-sm font-bold">{staff.totalFollowUps}</p>
                    <p className="text-[9px] text-muted-foreground">Follow-ups</p>
                  </div>
                  <div className="bg-background rounded-lg p-1.5">
                    <p className="text-sm font-bold">{staff.avgResponseMin}m</p>
                    <p className="text-[9px] text-muted-foreground">Avg Response</p>
                  </div>
                  <div className="bg-background rounded-lg p-1.5">
                    <p className="text-sm font-bold">{staff.onTimeRate}%</p>
                    <p className="text-[9px] text-muted-foreground">On Time</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* ═══ GENERAL ANALYTICS ═══ */}
        <div className="pt-2">
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">General Analytics</h2>
        </div>

        {/* Revenue by Service */}
        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <IndianRupee className="w-4 h-4" /> Revenue by Service
          </h3>
          <div className="space-y-3">
            {stats.byService.map(s => (
              <div key={s.key}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium">{s.service}</span>
                  <span className="text-xs font-semibold">₹{s.revenue.toLocaleString('en-IN')}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${(s.revenue / Math.max(stats.revenue, 1)) * 100}%` }}
                  />
                </div>
                <p className="text-[10px] text-muted-foreground mt-0.5">{s.leads} leads • {s.tickets} tickets</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Conversion Funnel */}
        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" /> Conversion Funnel
          </h3>
          {(() => {
            const stages = [
              { label: 'Total Leads', count: stats.total, color: 'bg-info' },
              { label: 'Contacted', count: leads.filter(l => l.status !== 'NEW_LEAD').length, color: 'bg-primary' },
              { label: 'Converted', count: stats.converted, color: 'bg-success' },
            ];
            return (
              <div className="space-y-2">
                {stages.map((stage) => (
                  <div key={stage.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs">{stage.label}</span>
                      <span className="text-xs font-semibold">{stage.count}</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${stage.color} rounded-full transition-all`}
                        style={{ width: `${(stage.count / Math.max(stats.total, 1)) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </Card>

        {/* Ticket Status Distribution */}
        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Ticket className="w-4 h-4" /> Ticket Distribution
          </h3>
          <div className="space-y-2">
            {stats.ticketStatusDist.map(s => (
              <div key={s.status} className="flex items-center justify-between py-1.5">
                <span className="text-xs">{s.status}</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${(s.count / Math.max(tickets.length, 1)) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold w-6 text-right">{s.count}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Lawyer Performance */}
        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Briefcase className="w-4 h-4" /> Lawyer Performance
          </h3>
          <div className="space-y-3">
            {stats.lawyers.map(l => (
              <div key={l.name} className="p-2.5 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium">{l.name}</span>
                  <span className="text-xs text-muted-foreground">₹{l.revenue.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-center gap-3 text-[11px]">
                  <span className="text-info">{l.active} active</span>
                  <span className="text-success">{l.completed} completed</span>
                  <span className="text-muted-foreground">{l.total} total</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Follow-up Efficiency */}
        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4" /> Follow-up Efficiency
          </h3>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <p className="text-2xl font-bold font-display">{stats.followUpRate}%</p>
              <p className="text-[11px] text-muted-foreground">Completion rate</p>
            </div>
            <div className="text-right text-xs text-muted-foreground">
              <p>{stats.completedFollowUps} completed</p>
              <p>{stats.totalFollowUps - stats.completedFollowUps} pending</p>
            </div>
          </div>
        </Card>

        {/* Top Cities */}
        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Top Cities
          </h3>
          <div className="space-y-2">
            {stats.topCities.map(([city, count], i) => (
              <div key={city} className="flex items-center justify-between py-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center">{i + 1}</span>
                  <span className="text-sm">{city}</span>
                </div>
                <span className="text-xs text-muted-foreground">{count} leads</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
