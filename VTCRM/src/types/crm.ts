export type ServiceType = 'legal-notice' | 'consultation' | 'document-drafting' | 'corporate-retainer';

export type LeadStatus =
  | 'NEW_LEAD'
  | 'CONTACTED'
  | 'ADVANCE_PAID'
  | 'COMPLETED'
  | 'USER_DROPPED'
  | 'NOT_INTERESTED';

export type TicketStatus =
  | 'WORK_UNDER_PROCESS'
  | 'CLIENT_NOT_RESPONDING'
  | 'DRAFT_SENT_TO_CLIENT'
  | 'REVISION_REQUESTED'
  | 'WORK_COMPLETED'
  | 'PENDING_APPROVAL'
  | 'ARCHIVED'
  | 'REJECTED';

export type UserRole = 'super_admin' | 'front_desk' | 'lawyer';

export interface Lead {
  id: string; // Sticking with id as primary key for frontend mapping
  custom_id: string;
  name: string;
  location: string;
  whatsapp_number: string;
  service: ServiceType;
  description: string;
  payment_status: 'pending' | 'partial' | 'paid';
  status: LeadStatus;
  advance_amount: number;
  mark_advance_paid: boolean;
  payment_amount: number;
  payment_id: string | null;
  assigned_lawyer_id: string | null;
  lead_score: number;
  created_at: string;
  updated_at: string;
  followup_count: number;
  followup_history?: string | any[];
  communication_notes?: string | {
    notes: { id: string, text: string, created_by: string, created_at: string }[];
    call_logs: { id: string, text: string, created_by: string, created_at: string }[];
    meetings: { id: string, text: string, created_by: string, created_at: string }[];
    activity_logs?: { id: string, action: string, details: string, created_by: string, created_at: string }[];
  };
  conversion_source?: 'manual' | 'website';
  converted_at_followup?: number;
  converted_by?: string;
  converted_at?: string;
}

export interface Ticket {
  ticket_id: string;
  client_id: string;
  client_name: string;
  lawyer_id: string;
  lawyer_name: string;
  service_type: ServiceType;
  description: string;
  status: TicketStatus;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  amount: number;
  advance_paid: number;
  /**
   * Controls who can send WhatsApp messages for this ticket:
   *   'lawyer_only'      – only super_admin + assigned lawyer can respond
   *   'pending_approval' – everyone can respond (lawyer submitted for review)
   *   'archived'         – only super_admin + front_desk can respond; lawyer is view-only
   */
  chat_custody?: 'open' | 'lawyer_only' | 'pending_approval' | 'archived';
  followup_history?: string | any[];
  communication_notes?: string | {
    notes: { id: string, text: string, created_by: string, created_at: string }[];
    call_logs: { id: string, text: string, created_by: string, created_at: string }[];
    meetings: { id: string, text: string, created_by: string, created_at: string }[];
    activity_logs?: { id: string, action: string, details: string, created_by: string, created_at: string }[];
  };
  documents?: string | { id: string, name: string, link: string, uploaded_by: string, uploaded_at: string }[];
  created_at: string;
  updated_at: string;
}

export interface Note {
  id: string;
  entity_id: string;
  note: string;
  created_by: string;
  created_at: string;
}

export interface FollowUp {
  id: string;
  lead_id: string;
  lead_name: string;
  lead_service: ServiceType;
  entity_type: 'lead' | 'ticket';
  attempt: number;
  type: 'call' | 'whatsapp';
  scheduled_at: string;
  completed: boolean;
  completed_at?: string;
  completed_by?: string;
  note?: string;
}

export interface ActivityLog {
  id: string;
  entity_id: string;
  action: string;
  details: string;
  created_by: string;
  created_at: string;
}

export interface CRMUser {
  id: string;
  name: string;
  role: UserRole;
  email: string;
}

export interface Document {
  id: string;
  ticket_id: string;
  name: string;
  type: string;
  size: string;
  uploaded_by: string;
  uploaded_at: string;
}

export const SERVICE_LABELS: Record<ServiceType, string> = {
  'legal-notice': 'Legal Notice',
  'consultation': 'Consultation',
  'document-drafting': 'Document Drafting',
  'corporate-retainer': 'Corporate Retainer',
};

export const SERVICE_PRICES: Record<ServiceType, number> = {
  'legal-notice': 1499,
  'consultation': 999,
  'document-drafting': 2499,
  'corporate-retainer': 9999,
};

export const LEAD_STATUS_LABELS: Record<LeadStatus, string> = {
  'NEW_LEAD': 'New Lead',
  'CONTACTED': 'Contacted',
  'ADVANCE_PAID': 'Advance Paid',
  'COMPLETED': 'Completed',
  'USER_DROPPED': 'User Dropped',
  'NOT_INTERESTED': 'Not Interested',
};

export const TICKET_STATUS_LABELS: Record<TicketStatus, string> = {
  'WORK_UNDER_PROCESS': 'Work Under Process',
  'CLIENT_NOT_RESPONDING': 'Client Not Responding',
  'DRAFT_SENT_TO_CLIENT': 'Draft Sent to Client',
  'REVISION_REQUESTED': 'Revision Requested',
  'WORK_COMPLETED': 'Work Completed',
  'PENDING_APPROVAL': 'Pending Approval',
  'ARCHIVED': 'Archived',
  'REJECTED': 'Rejected',
};

export const KANBAN_STATUSES: LeadStatus[] = [
  'NEW_LEAD',
  'CONTACTED',
];

export const FOLLOWUP_SCHEDULE = [
  { attempt: 1, type: 'call' as const, label: 'Immediate call', delay: '5 min' },
  { attempt: 2, type: 'whatsapp' as const, label: 'WhatsApp message', delay: '30 min' },
  { attempt: 3, type: 'call' as const, label: 'Call again', delay: 'Same day' },
  { attempt: 4, type: 'whatsapp' as const, label: 'WhatsApp next day', delay: 'Next day' },
  { attempt: 5, type: 'call' as const, label: 'Call after 3 days', delay: '3 days' },
  { attempt: 6, type: 'whatsapp' as const, label: 'Final reminder', delay: '5 days' },
];
