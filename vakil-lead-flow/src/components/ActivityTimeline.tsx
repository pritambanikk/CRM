import { ActivityLog } from '@/types/crm';
import { formatDistanceToNow, format } from 'date-fns';
import { Phone, MessageCircle, CreditCard, UserCheck, FileText, RefreshCw, CheckCircle2 } from 'lucide-react';

const actionIcons: Record<string, React.ReactNode> = {
  'Lead Created': <RefreshCw className="w-3.5 h-3.5" />,
  'Call Made': <Phone className="w-3.5 h-3.5" />,
  'WhatsApp Sent': <MessageCircle className="w-3.5 h-3.5" />,
  'Payment Received': <CreditCard className="w-3.5 h-3.5" />,
  'Lawyer Assigned': <UserCheck className="w-3.5 h-3.5" />,
  'Draft Sent': <FileText className="w-3.5 h-3.5" />,
  'Work Completed': <CheckCircle2 className="w-3.5 h-3.5" />,
  'Status Changed': <RefreshCw className="w-3.5 h-3.5" />,
  'Note Added': <FileText className="w-3.5 h-3.5" />,
};

export const ActivityTimeline = ({ logs }: { logs: ActivityLog[] }) => {
  if (logs.length === 0) return <p className="text-sm text-muted-foreground py-4 text-center">No activity yet</p>;

  return (
    <div className="space-y-0">
      {logs.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).map((log, i) => (
        <div key={log.id} className="flex gap-3 py-2.5">
          <div className="flex flex-col items-center">
            <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-muted-foreground shrink-0">
              {actionIcons[log.action] || <RefreshCw className="w-3.5 h-3.5" />}
            </div>
            {i < logs.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
          </div>
          <div className="flex-1 pb-1">
            <p className="text-xs font-semibold">{log.action}</p>
            <p className="text-[11px] text-muted-foreground">{log.details}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">
              {log.created_by} • {format(new Date(log.created_at), 'dd MMM yyyy, hh:mm a')}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
