import { Sheet, SheetContent } from '@/components/ui/sheet';
import { MessageCircle, Lock } from 'lucide-react';
import { useMemo } from 'react';

interface WhatsAppChatPanelProps {
  open: boolean;
  onClose: () => void;
  /** Phone number WITHOUT leading '+' (e.g. "919876543210") */
  phone: string;
  /** Display name shown in the panel header */
  name?: string;
  /** When true the chat input is locked and a custody banner is shown */
  readonly?: boolean;
  /** 'lawyer_only' | 'pending_approval' – drives the lock message in the inbox */
  custody?: 'open' | 'lawyer_only' | 'pending_approval' | 'archived';
  /** Pre-fill the message composer with this text */
  preloadMessage?: string;
  /** "Name · Role" label stored against every outbound message — internal only */
  sender?: string;
}

const CUSTODY_BADGE: Record<string, { label: string; color: string }> = {
  lawyer_only: {
    label: 'Lawyer assigned – view only',
    color: 'bg-destructive/10 text-destructive border-destructive/20',
  },
  pending_approval: {
    label: 'Sent for approval – everyone can respond',
    color: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  archived: {
    label: 'Archived – front desk handles communication',
    color: 'bg-destructive/10 text-destructive border-destructive/20',
  },
  open: {
    label: 'Open chat',
    color: 'bg-success/10 text-success border-success/20',
  },
};

export const WhatsAppChatPanel = ({
  open,
  onClose,
  phone,
  name,
  readonly = false,
  custody,
  preloadMessage,
  sender,
}: WhatsAppChatPanelProps) => {
  const inboxBase = import.meta.env.VITE_INBOX_URL?.replace(/\/$/, '');

  // Always work with a clean number (no leading '+') for API and URL params.
  // Display adds exactly one '+' for the user.
  const cleanPhone = phone.replace(/^\+/, '').trim();
  const displayPhone = cleanPhone ? `+${cleanPhone}` : '';

  const iframeUrl = useMemo(() => {
    if (!inboxBase || !cleanPhone) return '';
    const params = new URLSearchParams({
      mode: 'panel',
      phone: cleanPhone,           // always without '+' so URL encoding is clean
      readonly: String(readonly),
    });
    if (custody) params.set('custody', custody);
    if (preloadMessage) params.set('preload', encodeURIComponent(preloadMessage));
    if (sender) params.set('sender', encodeURIComponent(sender));
    return `${inboxBase}?${params.toString()}`;
  }, [inboxBase, cleanPhone, readonly, custody, preloadMessage, sender]);

  const badge = custody ? CUSTODY_BADGE[custody] : undefined;

  if (!inboxBase) return null;

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-[440px] p-0 flex flex-col gap-0 [&>button]:top-3 [&>button]:right-3"
      >
        {/* ── Panel header ─────────────────────────────────────────────────── */}
        <div className="flex items-center gap-3 px-4 py-3 border-b flex-shrink-0">
          <div className="w-9 h-9 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
            {readonly
              ? <Lock className="w-4 h-4 text-destructive" />
              : <MessageCircle className="w-5 h-5 text-success" />
            }
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate leading-tight">{name || displayPhone}</p>
            <p className="text-xs text-muted-foreground truncate">{displayPhone}</p>
          </div>
        </div>

        {/* ── Custody status badge ─────────────────────────────────────────── */}
        {badge && custody && custody !== 'open' && (
          <div className={`px-4 py-2 border-b text-xs font-medium flex items-center gap-1.5 border ${badge.color}`}>
            {readonly && <Lock className="w-3 h-3" />}
            {badge.label}
          </div>
        )}

        {/* ── Inbox iframe ─────────────────────────────────────────────────── */}
        <div className="flex-1 min-h-0">
          {iframeUrl ? (
            <iframe
              key={iframeUrl}          // re-mount when URL changes
              src={iframeUrl}
              className="w-full h-full border-0"
              title="WhatsApp Chat"
              allow="microphone; camera"
            />
          ) : (
            <div className="h-full flex items-center justify-center text-sm text-muted-foreground p-4 text-center">
              WhatsApp inbox not configured. Set <code className="bg-muted px-1 rounded">VITE_INBOX_URL</code>.
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
