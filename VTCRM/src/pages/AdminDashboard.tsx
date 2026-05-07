import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCRM } from '@/contexts/CRMContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import vakiltechLogo from '@/assets/vakiltech-logo.png';
import {
  Users, TrendingUp, IndianRupee, Ticket, Clock, AlertTriangle,
  BarChart3, Shield, Bell, ChevronRight, Briefcase, ScrollText, Archive, UserCheck, Globe,
} from 'lucide-react';
import { TICKET_STATUS_LABELS, FOLLOWUP_SCHEDULE } from '@/types/crm';
import { formatDistanceToNow } from 'date-fns';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { leads, tickets, allDueFollowUps, activityLogs, users, isLoadingLeads, isLoadingTickets } = useCRM();

  const [timeFilter, setTimeFilter] = useState<'7' | '14' | '30' | 'all'>('all');

  const stats = useMemo(() => {
    const cutoffDate = new Date();
    if (timeFilter !== 'all') {
      cutoffDate.setDate(cutoffDate.getDate() - parseInt(timeFilter));
    }

    const filteredLeads = timeFilter === 'all' ? leads : leads.filter(l => new Date(l.created_at) >= cutoffDate);
    const filteredTickets = timeFilter === 'all' ? tickets : tickets.filter(t => new Date(t.created_at) >= cutoffDate);

    const totalLeads = filteredLeads.length;
    const newLeads = filteredLeads.filter(l => l.status === 'NEW_LEAD').length;
    const converted = filteredLeads.filter(l => ['ADVANCE_PAID', 'COMPLETED'].includes(l.status)).length;
    const conversionRate = totalLeads > 0 ? Math.round((converted / totalLeads) * 100) : 0;
    const revenue = filteredTickets.reduce((sum, t) => sum + (Number(t.advance_paid) || 0), 0);
    const totalBilled = filteredTickets.reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
    const pendingPayments = totalBilled - revenue;
    const activeTickets = filteredTickets.filter(t => !['ARCHIVED', 'WORK_COMPLETED'].includes(t.status)).length;
    const pendingApproval = filteredTickets.filter(t => t.status === 'PENDING_APPROVAL').length;
    const archivedTickets = filteredTickets.filter(t => t.status === 'ARCHIVED').length;
    const overdueFollowUps = allDueFollowUps.filter(f => !f.completed && new Date(f.scheduled_at) < new Date()).length;
    const dueToday = allDueFollowUps.filter(f => !f.completed && new Date(f.scheduled_at) <= new Date(Date.now() + 3600000)).length;

    // Conversion source breakdown
    const convertedLeads = filteredLeads.filter(l => ['ADVANCE_PAID', 'COMPLETED'].includes(l.status));
    const manualConversions = convertedLeads.filter(l => l.conversion_source === 'manual');
    const websiteConversions = convertedLeads.filter(l => l.conversion_source === 'website');
    const unknownConversions = convertedLeads.filter(l => !l.conversion_source);

    // Follow-up stage breakdown for manual conversions
    const followUpStageBreakdown: Record<number, { count: number; label: string }> = {};
    FOLLOWUP_SCHEDULE.forEach(step => {
      followUpStageBreakdown[step.attempt] = { count: 0, label: `#${step.attempt} ${step.label}` };
    });
    // Stage 0 = converted before any follow-up
    followUpStageBreakdown[0] = { count: 0, label: 'Before any follow-up' };
    manualConversions.forEach(l => {
      const stage = l.converted_at_followup ?? 0;
      if (followUpStageBreakdown[stage]) {
        followUpStageBreakdown[stage].count++;
      }
    });

    // Lawyer performance
    const lawyers = users.filter(u => u.role === 'lawyer');
    const lawyerStats = lawyers.map(l => {
      const cases = filteredTickets.filter(t => t.lawyer_id === l.id);
      const active = cases.filter(t => !['ARCHIVED', 'WORK_COMPLETED'].includes(t.status)).length;
      const completed = cases.filter(t => ['ARCHIVED', 'WORK_COMPLETED'].includes(t.status)).length;
      const pending = cases.filter(t => t.status === 'PENDING_APPROVAL').length;
      return { ...l, active, completed, pending, total: cases.length };
    });

    return {
      totalLeads, newLeads, converted, conversionRate,
      revenue, pendingPayments, activeTickets, pendingApproval,
      archivedTickets, overdueFollowUps, dueToday, lawyerStats,
      manualConversions: manualConversions.length,
      websiteConversions: websiteConversions.length,
      unknownConversions: unknownConversions.length,
      followUpStageBreakdown,
      filteredTickets,
    };
  }, [leads, tickets, allDueFollowUps, users, timeFilter]);

  const recentActivity = useMemo(() => {
    let filteredLogs = activityLogs;
    if (timeFilter !== 'all') {
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - parseInt(timeFilter));
      filteredLogs = activityLogs.filter(a => new Date(a.created_at) >= cutoffDate);
    }
    return [...filteredLogs]
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .slice(0, 8);
  }, [activityLogs, timeFilter]);

  const kpiCards = [
    { label: 'Total Leads', value: stats.totalLeads, icon: Users, color: 'text-primary', bg: 'bg-primary/10' },
    { label: 'Conversion', value: `${stats.conversionRate}%`, icon: TrendingUp, color: 'text-success', bg: 'bg-success/10' },
    { label: 'Revenue', value: `₹${stats.revenue.toLocaleString('en-IN')}`, icon: IndianRupee, color: 'text-warning', bg: 'bg-warning/10' },
    { label: 'Active Tickets', value: stats.activeTickets, icon: Ticket, color: 'text-info', bg: 'bg-info/10' },
  ];

  const quickLinks = [
    { label: 'Leads', desc: `${stats.newLeads} new`, icon: Users, to: '/leads', color: 'text-primary' },
    { label: 'Tickets', desc: `${stats.activeTickets} active`, icon: Ticket, to: '/tickets', color: 'text-info' },
    { label: 'Follow-ups', desc: `${stats.dueToday} due`, icon: Clock, to: '/followups', color: 'text-warning' },
    { label: 'Analytics', desc: 'Reports', icon: BarChart3, to: '/analytics', color: 'text-success' },
    { label: 'Team', desc: `${stats.lawyerStats.length} lawyers`, icon: Briefcase, to: '/team', color: 'text-primary' },
    { label: 'Audit Trail', desc: 'All logs', icon: ScrollText, to: '/audit', color: 'text-muted-foreground' },
  ];

  if (isLoadingLeads || isLoadingTickets) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-40 bg-card/95 backdrop-blur-lg border-b px-5 py-3">
        <div className="flex items-center justify-between">
          <img src={vakiltechLogo} alt="Vakiltech" className="h-10 w-auto" loading="eager" />
          <div className="flex items-center gap-2">
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value as any)}
              className="text-xs bg-muted border-none rounded-md px-2 py-1 outline-none text-muted-foreground font-medium"
            >
              <option value="7">Last 7 days</option>
              <option value="14">Last 14 days</option>
              <option value="30">Last 30 days</option>
              <option value="all">All time</option>
            </select>
            <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
              <Shield className="w-3 h-3" /> Admin
            </span>
          </div>
        </div>
      </div>

      <div className="px-5 py-4 space-y-4 max-w-lg mx-auto">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-2.5">
          {kpiCards.map(s => (
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

        {/* Pending Approval Alert */}
        {stats.pendingApproval > 0 && (
          <button
            onClick={() => navigate('/tickets')}
            className="w-full flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-warning/10 border border-warning/20 text-warning text-sm font-medium transition-all hover:bg-warning/15"
          >
            <Bell className="w-4 h-4 shrink-0" />
            <span className="flex-1 text-left">{stats.pendingApproval} ticket{stats.pendingApproval > 1 ? 's' : ''} awaiting approval</span>
            <span className="bg-warning text-warning-foreground text-xs font-bold px-2 py-0.5 rounded-full">{stats.pendingApproval}</span>
          </button>
        )}

        {/* Overdue Follow-ups Alert */}
        {stats.overdueFollowUps > 0 && (
          <button
            onClick={() => navigate('/followups')}
            className="w-full flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium transition-all hover:bg-destructive/15"
          >
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span className="flex-1 text-left">{stats.overdueFollowUps} overdue follow-up{stats.overdueFollowUps > 1 ? 's' : ''}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}

        {/* Quick Navigation */}
        <div className="grid grid-cols-3 gap-2">
          {quickLinks.map(link => (
            <button
              key={link.label}
              onClick={() => navigate(link.to)}
              className="flex flex-col items-center gap-1 p-3 rounded-xl bg-card border hover:bg-muted/50 transition-all"
            >
              <link.icon className={`w-5 h-5 ${link.color}`} />
              <span className="text-xs font-semibold">{link.label}</span>
              <span className="text-[10px] text-muted-foreground">{link.desc}</span>
            </button>
          ))}
        </div>

        {/* Financial Summary */}
        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <IndianRupee className="w-4 h-4" /> Financial Overview
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-success/5 rounded-lg p-3 border border-success/10">
              <p className="text-[10px] text-muted-foreground">Collected</p>
              <p className="text-lg font-bold font-display text-success">₹{stats.revenue.toLocaleString('en-IN')}</p>
            </div>
            <div className="bg-warning/5 rounded-lg p-3 border border-warning/10">
              <p className="text-[10px] text-muted-foreground">Pending</p>
              <p className="text-lg font-bold font-display text-warning">₹{stats.pendingPayments.toLocaleString('en-IN')}</p>
            </div>
          </div>
        </Card>

        {/* Conversion Source Analytics */}
        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" /> Conversion Breakdown
          </h3>
          
          {/* Source split */}
          <div className="grid grid-cols-2 gap-2.5 mb-4">
            <div className="bg-primary/5 rounded-lg p-3 border border-primary/10 text-center">
              <UserCheck className="w-4 h-4 mx-auto mb-1 text-primary" />
              <p className="text-lg font-bold font-display">{stats.manualConversions}</p>
              <p className="text-[10px] text-muted-foreground">Manual (Front Desk)</p>
            </div>
            <div className="bg-info/5 rounded-lg p-3 border border-info/10 text-center">
              <Globe className="w-4 h-4 mx-auto mb-1 text-info" />
              <p className="text-lg font-bold font-display">{stats.websiteConversions}</p>
              <p className="text-[10px] text-muted-foreground">Website (Self-pay)</p>
            </div>
          </div>

          {stats.converted > 0 && (
            <div className="mb-4">
              <div className="flex h-3 rounded-full overflow-hidden">
                {stats.manualConversions > 0 && (
                  <div
                    className="bg-primary h-full transition-all"
                    style={{ width: `${(stats.manualConversions / stats.converted) * 100}%` }}
                  />
                )}
                {stats.websiteConversions > 0 && (
                  <div
                    className="bg-info h-full transition-all"
                    style={{ width: `${(stats.websiteConversions / stats.converted) * 100}%` }}
                  />
                )}
                {stats.unknownConversions > 0 && (
                  <div
                    className="bg-muted h-full transition-all"
                    style={{ width: `${(stats.unknownConversions / stats.converted) * 100}%` }}
                  />
                )}
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[10px] text-primary font-semibold">{Math.round((stats.manualConversions / stats.converted) * 100)}% manual</span>
                <span className="text-[10px] text-info font-semibold">{Math.round((stats.websiteConversions / stats.converted) * 100)}% website</span>
              </div>
            </div>
          )}

          {/* Follow-up stage breakdown for manual conversions */}
          {stats.manualConversions > 0 && (
            <div>
              <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Manual Conversions by Follow-up Stage
              </p>
              <div className="space-y-1.5">
                {Object.entries(stats.followUpStageBreakdown)
                  .filter(([_, data]) => data.count > 0)
                  .sort(([a], [b]) => Number(a) - Number(b))
                  .map(([stage, data]) => (
                    <div key={stage} className="flex items-center gap-2">
                      <div className="w-16 text-right">
                        <span className="text-[10px] text-muted-foreground">Stage {stage}</span>
                      </div>
                      <div className="flex-1 h-2.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all"
                          style={{ width: `${(data.count / stats.manualConversions) * 100}%` }}
                        />
                      </div>
                      <div className="w-6 text-right">
                        <span className="text-xs font-bold">{data.count}</span>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="mt-2 space-y-1">
                {Object.entries(stats.followUpStageBreakdown)
                  .filter(([_, data]) => data.count > 0)
                  .sort(([a], [b]) => Number(a) - Number(b))
                  .map(([stage, data]) => (
                    <p key={stage} className="text-[10px] text-muted-foreground">
                      <span className="font-medium text-foreground">{data.count}</span> converted at: {data.label}
                    </p>
                  ))}
              </div>
            </div>
          )}
        </Card>

        {/* Lawyer Workload */}
        <Card className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Team Workload
            </h3>
            <Button variant="ghost" size="sm" className="h-7 text-xs rounded-lg" onClick={() => navigate('/team')}>
              View All <ChevronRight className="w-3 h-3 ml-1" />
            </Button>
          </div>
          <div className="space-y-2.5">
            {stats.lawyerStats.map(l => (
              <div key={l.id} className="flex items-center justify-between py-2 border-b last:border-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                    {l.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{l.name}</p>
                    <p className="text-[10px] text-muted-foreground">{l.total} total tickets</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="text-info font-semibold">{l.active} active</span>
                  {l.pending > 0 && <span className="text-warning font-semibold">{l.pending} pending</span>}
                  <span className="text-success font-semibold">{l.completed} done</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <ScrollText className="w-4 h-4" /> Recent Activity
            </h3>
            <Button variant="ghost" size="sm" className="h-7 text-xs rounded-lg" onClick={() => navigate('/audit')}>
              View All <ChevronRight className="w-3 h-3 ml-1" />
            </Button>
          </div>
          <div className="space-y-2.5">
            {recentActivity.map(log => (
              <div key={log.id} className="flex gap-2.5">
                <div className="flex flex-col items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <div className="w-px flex-1 bg-border mt-1" />
                </div>
                <div className="pb-2.5">
                  <p className="text-xs font-semibold">{log.action}</p>
                  <p className="text-[11px] text-muted-foreground">{log.details}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {log.created_by} • {formatDistanceToNow(new Date(log.created_at), { addSuffix: true })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Ticket Status Summary */}
        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Ticket className="w-4 h-4" /> Ticket Status Summary
          </h3>
          <div className="space-y-2">
            {Object.entries(TICKET_STATUS_LABELS).map(([status, label]) => {
              const count = stats.filteredTickets.filter(t => t.status === status).length;
              if (count === 0) return null;
              return (
                <div key={status} className="flex items-center justify-between py-1.5">
                  <span className="text-xs">{label}</span>
                  <span className="text-xs font-semibold bg-muted px-2 py-0.5 rounded-full">{count}</span>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
