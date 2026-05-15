import { useState } from 'react';
import { Phone, MessageCircle, Link2, Calendar as CalendarIcon, ChevronRight, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { ServiceType, SERVICE_LABELS } from '@/types/crm';
import { useCRM } from '@/contexts/CRMContext';

interface WhatsAppTemplate {
  id: string;
  label: string;
  stage: string;
  templateName: string;
  getVariables: (name: string, service?: string) => string[];
  getMessage: (name: string, service?: string) => string;
}

const whatsappTemplates: WhatsAppTemplate[] = [
  {
    id: 'intro',
    label: 'Introduction',
    stage: 'New Lead',
    templateName: 'introduction',
    getVariables: (name, service) => [name, service || 'your legal query'],
    getMessage: (name, service) =>
      `Hi ${name}, this is Vakiltech. Thank you for reaching out to us regarding ${service || 'your legal query'}. We'd love to help you. Could you share some more details so we can assist you better?`,
  },
  {
    id: 'followup_1',
    label: 'First Follow-up',
    stage: 'Follow-up',
    templateName: 'first_followup',
    getVariables: (name, service) => [name, service || 'legal services'],
    getMessage: (name, service) =>
      `Hi ${name}, just following up on your enquiry about ${service || 'legal services'} with Vakiltech. We have expert lawyers ready to assist you. Would you like to schedule a quick call to discuss?`,
  },
  {
    id: 'followup_2',
    label: 'Gentle Reminder',
    stage: 'Follow-up',
    templateName: 'gentle_reminder',
    getVariables: (name) => [name],
    getMessage: (name) =>
      `Hi ${name}, hope you're doing well! We noticed you were interested in our legal services. Our team is available to help whenever you're ready. Just reply to this message and we'll get back to you right away.`,
  },
  {
    id: 'payment_reminder',
    label: 'Payment Reminder',
    stage: 'Payment',
    templateName: 'payment_reminder',
    getVariables: (name, service) => [name, service || 'legal matter'],
    getMessage: (name, service) =>
      `Hi ${name}, thank you for choosing Vakiltech for your ${service || 'legal matter'}. To proceed with your case, kindly complete the advance payment using the link shared earlier. If you have any questions, feel free to ask!`,
  },
  {
    id: 'payment_received',
    label: 'Payment Confirmation',
    stage: 'Payment',
    templateName: 'payment_received',
    getVariables: (name, service) => [name, service || 'your case'],
    getMessage: (name, service) =>
      `Hi ${name}, we've received your advance payment for ${service || 'your case'}. Our lawyer will be assigned shortly and will reach out to you. Thank you for trusting Vakiltech!`,
  },
  {
    id: 'final_reminder',
    label: 'Final Reminder',
    stage: 'Last Attempt',
    templateName: 'final_reminder',
    getVariables: (name) => [name],
    getMessage: (name) =>
      `Hi ${name}, this is a final follow-up from Vakiltech regarding your legal query. We'd hate to see you miss out on expert legal help. If you're still interested, please reply and we'll prioritize your case. Otherwise, feel free to reach out anytime in the future!`,
  },
];

interface QuickActionsProps {
  whatsapp_number: string;
  name: string;
  service?: ServiceType;
  leadId?: string;
  onPaymentLink?: () => void;
  onFollowup?: (date: Date, note?: string) => void;
  compact?: boolean;
  /**
   * If provided, clicking WhatsApp opens the inline chat panel via this callback
   * instead of navigating to the global /inbox page.
   * Receives the optional pre-populated message text.
   */
  onOpenWhatsApp?: (preloadMessage?: string) => void;
}

export const QuickActions = ({ whatsapp_number, name, service, leadId, onPaymentLink, onFollowup, compact, onOpenWhatsApp }: QuickActionsProps) => {
  const navigate = useNavigate();
  const { addActivityLog } = useCRM();
  const [followupDate, setFollowupDate] = useState<Date>();
  const [followupTime, setFollowupTime] = useState('09:00');
  const [followupNote, setFollowupNote] = useState('');
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [waPopoverOpen, setWaPopoverOpen] = useState(false);
  const [templateConfirmOpen, setTemplateConfirmOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<WhatsAppTemplate | null>(null);
  const [isSendingTemplate, setIsSendingTemplate] = useState(false);

  const serviceLabel = service ? SERVICE_LABELS[service] : undefined;

  // Always work with a clean number for links and logs
  const cleanNumber = whatsapp_number.replace(/^\+/, '').trim();

  const handleCall = () => {
    if (leadId) addActivityLog(leadId, 'Call Initiated', `Initiated call to +${cleanNumber}`);
    window.open(`tel:+${cleanNumber}`, '_self');
  };

  const openWhatsApp = (message: string, isTemplate: boolean = false, templateLabel?: string) => {
    if (leadId) {
      addActivityLog(leadId, 'WhatsApp Initiated', isTemplate ? `Sent template "${templateLabel}" to +${cleanNumber}` : `Initiated direct WhatsApp chat with +${cleanNumber}`);
    }

    if (onOpenWhatsApp) {
      // Inline panel mode: open panel with the message pre-loaded
      onOpenWhatsApp(message);
      if (isTemplate) toast.success(`"${templateLabel}" template loaded in chat.`);
      return;
    }

    // Fallback: copy to clipboard and navigate to the global inbox
    navigator.clipboard?.writeText(message).catch(() => {});
    navigate(`/inbox?search=${cleanNumber}`);
    toast.info('Message copied! Paste it in the Inbox chat.', {
      description: `Opening chat for +${cleanNumber}`,
    });
  };

  const handleWhatsAppDirect = () => {
    openWhatsApp(`Hi ${name}, this is Vakiltech. `);
  };

  const handleWhatsAppTemplateClick = (template: WhatsAppTemplate) => {
    setSelectedTemplate(template);
    setWaPopoverOpen(false);
    setTemplateConfirmOpen(true);
  };

  const confirmSendTemplate = async () => {
    if (!selectedTemplate) return;
    setIsSendingTemplate(true);
    const vars = selectedTemplate.getVariables(name, serviceLabel);
    
    try {
      const inboxUrl = import.meta.env.VITE_INBOX_URL?.replace(/\/$/, '');
      if (!inboxUrl) {
        throw new Error('VITE_INBOX_URL is not configured');
      }

      const response = await fetch(`${inboxUrl}/api/templates/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: '91' + cleanNumber.replace(/^91/, ''), // Ensure exactly one 91 prefix
          templateName: selectedTemplate.templateName,
          languageCode: 'en_US', // default language
          parameters: vars,
          parameterInfo: {
            parameters: vars.map((_, i) => ({
              name: String(i + 1),
              component: 'BODY'
            }))
          }
        })
      });

      if (!response.ok) {
        let errMessage = 'Failed to send template. Meta API might have rejected it.';
        try {
          const errData = await response.json();
          if (errData?.details) {
            errMessage = typeof errData.details === 'object' ? JSON.stringify(errData.details) : errData.details;
          } else if (errData?.error) {
            errMessage = typeof errData.error === 'object' ? JSON.stringify(errData.error) : errData.error;
          }
        } catch (_) {}
        throw new Error(errMessage);
      }

      toast.success(`Template "${selectedTemplate.label}" sent successfully!`);
      
      if (leadId) {
        addActivityLog(leadId, 'WhatsApp Initiated', `Sent template "${selectedTemplate.label}" to +${cleanNumber}`);
      }

      // Open chat panel so they can see the sent template
      if (onOpenWhatsApp) {
        onOpenWhatsApp(undefined);
      } else {
        navigate(`/inbox?search=${cleanNumber}`);
      }

    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to send template.');
      console.error(error);
    } finally {
      setIsSendingTemplate(false);
      setTemplateConfirmOpen(false);
      setSelectedTemplate(null);
    }
  };

  const handlePaymentLink = () => {
    toast.success('Payment link copied to clipboard!', { description: `vakil.tech/pay/${name.toLowerCase().split(' ')[0]}` });
    onPaymentLink?.();
  };

  const handleScheduleFollowup = () => {
    if (!followupDate) {
      toast.error('Please select a date');
      return;
    }
    const finalDate = new Date(followupDate);
    if (followupTime) {
      const [hours, minutes] = followupTime.split(':').map(Number);
      finalDate.setHours(hours, minutes, 0, 0);
    }
    console.log('QuickActions: Invoking onFollowup prop with:', { finalDate, followupNote });
    onFollowup?.(finalDate, followupNote || undefined);
    toast.success('Follow-up scheduled!', {
      description: format(followupDate, 'PPP') + (followupNote ? ` — ${followupNote}` : ''),
    });
    setFollowupDate(undefined);
    setFollowupNote('');
    setPopoverOpen(false);
  };

  const whatsappButton = (
    <Popover open={waPopoverOpen} onOpenChange={setWaPopoverOpen}>
      <PopoverTrigger asChild>
        {compact ? (
          <Button size="icon" variant="ghost" className="h-9 w-9 rounded-xl bg-success/10 text-success hover:bg-success/20">
            <MessageCircle className="w-4 h-4" />
          </Button>
        ) : (
          <Button className="h-11 rounded-xl bg-success text-success-foreground hover:bg-success/90 flex flex-col gap-0 px-1">
            <MessageCircle className="w-4 h-4" />
            <span className="text-[10px]">WhatsApp</span>
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-72 p-0" align="start" side="top">
        <div className="p-3 pb-2">
          <p className="text-xs font-semibold mb-0.5">Send WhatsApp Message</p>
          <p className="text-[10px] text-muted-foreground">Choose a template or send custom</p>
        </div>
        <div className="px-2 pb-2">
          <button
            onClick={() => { handleWhatsAppDirect(); setWaPopoverOpen(false); }}
            className="w-full flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-muted/60 transition-colors text-left"
          >
            <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4 text-success" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium">Custom Message</p>
              <p className="text-[10px] text-muted-foreground">Write your own message</p>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
          </button>
        </div>
        <div className="border-t px-2 py-2 space-y-0.5 max-h-64 overflow-y-auto">
          {whatsappTemplates.map(template => (
            <button
              key={template.id}
              onClick={() => handleWhatsAppTemplateClick(template)}
              className="w-full flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-muted/60 transition-colors text-left"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="text-xs font-medium">{template.label}</p>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">{template.stage}</span>
                </div>
                <p className="text-[10px] text-muted-foreground mt-0.5 line-clamp-2">
                  {template.getMessage(name, serviceLabel)}
                </p>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );

  const followupButton = (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>
        {compact ? (
          <Button size="icon" variant="ghost" className="h-9 w-9 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80">
            <CalendarIcon className="w-4 h-4" />
          </Button>
        ) : (
          <Button className="h-11 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80 flex flex-col gap-0 px-1">
            <CalendarIcon className="w-4 h-4" />
            <span className="text-[10px]">Follow-up</span>
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="center" side="top">
        <div className="p-3 space-y-3">
          <Calendar
            mode="single"
            selected={followupDate}
            onSelect={setFollowupDate}
            disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
            initialFocus
            className={cn("p-0 pointer-events-auto")}
          />
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground w-12">Time</span>
            <Input
              type="time"
              value={followupTime}
              onChange={(e) => setFollowupTime(e.target.value)}
              className="h-9 rounded-lg text-sm flex-1"
            />
          </div>
          <Textarea
            placeholder="Add a note (optional)"
            value={followupNote}
            onChange={(e) => setFollowupNote(e.target.value)}
            className="min-h-[44px] text-sm rounded-xl resize-none"
            rows={2}
          />
          <Button
            className="w-full h-10 rounded-xl"
            onClick={handleScheduleFollowup}
            disabled={!followupDate}
          >
            Schedule {followupDate ? format(followupDate, 'MMM d') : 'Follow-up'}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );

  const templateConfirmDialog = (
    <AlertDialog open={templateConfirmOpen} onOpenChange={setTemplateConfirmOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Send {selectedTemplate?.label} Template?</AlertDialogTitle>
          <AlertDialogDescription>
            This will immediately send the official Meta WhatsApp template directly to the client.
            <br /><br />
            <strong>Preview:</strong>
            <br />
            <span className="text-foreground block mt-2 p-3 bg-muted rounded-md text-sm whitespace-pre-wrap text-left">
              {selectedTemplate?.getMessage(name, serviceLabel)}
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isSendingTemplate}>Cancel</AlertDialogCancel>
          <AlertDialogAction 
            onClick={(e) => {
              e.preventDefault();
              confirmSendTemplate();
            }}
            disabled={isSendingTemplate}
            className="bg-[#00a884] hover:bg-[#008f6f] text-white"
          >
            {isSendingTemplate ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Template'
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );

  if (compact) {
    return (
      <div className="flex items-center gap-1.5">
        <Button size="icon" variant="ghost" className="h-9 w-9 rounded-xl bg-success/10 text-success hover:bg-success/20" onClick={handleCall}>
          <Phone className="w-4 h-4" />
        </Button>
        {whatsappButton}
        <Button size="icon" variant="ghost" className="h-9 w-9 rounded-xl bg-primary/10 text-primary hover:bg-primary/20" onClick={handlePaymentLink}>
          <Link2 className="w-4 h-4" />
        </Button>
        {followupButton}
        {templateConfirmDialog}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      <Button className="h-11 rounded-xl bg-success text-success-foreground hover:bg-success/90 flex flex-col gap-0 px-1" onClick={handleCall}>
        <Phone className="w-4 h-4" />
        <span className="text-[10px]">Call</span>
      </Button>
      {whatsappButton}
      <Button className="h-11 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 flex flex-col gap-0 px-1" onClick={handlePaymentLink}>
        <Link2 className="w-4 h-4" />
        <span className="text-[10px]">Pay Link</span>
      </Button>
      {followupButton}
      {templateConfirmDialog}
    </div>
  );
};
