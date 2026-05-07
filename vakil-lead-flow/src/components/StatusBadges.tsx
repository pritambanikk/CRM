import { cn } from '@/lib/utils';
import { LeadStatus, TicketStatus, ServiceType, LEAD_STATUS_LABELS, TICKET_STATUS_LABELS, SERVICE_LABELS } from '@/types/crm';

const leadStatusColors: Record<LeadStatus, string> = {
  NEW_LEAD: 'bg-info/15 text-info',
  CONTACTED: 'bg-primary/15 text-primary',
  ADVANCE_PAID: 'bg-success/15 text-success',
  COMPLETED: 'bg-success/15 text-success',
  USER_DROPPED: 'bg-muted text-muted-foreground',
  NOT_INTERESTED: 'bg-destructive/15 text-destructive',
};

const ticketStatusColors: Record<TicketStatus, string> = {
  WORK_UNDER_PROCESS: 'bg-info/15 text-info',
  CLIENT_NOT_RESPONDING: 'bg-warning/15 text-warning',
  DRAFT_SENT_TO_CLIENT: 'bg-primary/15 text-primary',
  REVISION_REQUESTED: 'bg-warning/15 text-warning',
  WORK_COMPLETED: 'bg-success/15 text-success',
  PENDING_APPROVAL: 'bg-warning/15 text-warning',
  ARCHIVED: 'bg-muted text-muted-foreground',
  REJECTED: 'bg-destructive/15 text-destructive',
};

const serviceColors: Record<ServiceType, string> = {
  'legal-notice': 'bg-destructive/10 text-destructive',
  'consultation': 'bg-info/10 text-info',
  'document-drafting': 'bg-primary/10 text-primary',
  'corporate-retainer': 'bg-success/10 text-success',
};

export const LeadStatusBadge = ({ status }: { status: LeadStatus }) => (
  <span className={cn('inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold', leadStatusColors[status])}>
    {LEAD_STATUS_LABELS[status]}
  </span>
);

export const TicketStatusBadge = ({ status }: { status: TicketStatus }) => (
  <span className={cn('inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold', ticketStatusColors[status])}>
    {TICKET_STATUS_LABELS[status]}
  </span>
);

export const ServiceBadge = ({ service }: { service: ServiceType }) => (
  <span className={cn('inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold', serviceColors[service])}>
    {SERVICE_LABELS[service]}
  </span>
);

export const LeadScoreIndicator = ({ score }: { score: number }) => {
  const color = score >= 80 ? 'text-success' : score >= 60 ? 'text-warning' : 'text-destructive';
  const bg = score >= 80 ? 'bg-success/15' : score >= 60 ? 'bg-warning/15' : 'bg-destructive/15';
  return (
    <span className={cn('inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold', color, bg)}>
      {score}%
    </span>
  );
};

export const PriorityBadge = ({ priority }: { priority: string }) => {
  const colors: Record<string, string> = {
    low: 'bg-muted text-muted-foreground',
    medium: 'bg-info/15 text-info',
    high: 'bg-warning/15 text-warning',
    urgent: 'bg-destructive/15 text-destructive',
  };
  return (
    <span className={cn('inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold capitalize', colors[priority] || colors.medium)}>
      {priority}
    </span>
  );
};
