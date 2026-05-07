import { Lead, Ticket, Note, FollowUp, ActivityLog, CRMUser, Document } from '@/types/crm';

export const mockUsers: CRMUser[] = [
  { id: 'u1', name: 'Priya Sharma', role: 'super_admin', email: 'priya@vakiltech.com' },
  { id: 'u2', name: 'Rahul Verma', role: 'front_desk', email: 'rahul@vakiltech.com' },
  { id: 'u5', name: 'Sneha Gupta', role: 'front_desk', email: 'sneha@vakiltech.com' },
  { id: 'u3', name: 'Adv. Meera Patel', role: 'lawyer', email: 'meera@vakiltech.com' },
  { id: 'u4', name: 'Adv. Arjun Singh', role: 'lawyer', email: 'arjun@vakiltech.com' },
];

export const mockLeads: Lead[] = [];
export const mockTickets: Ticket[] = [];
export const mockNotes: Note[] = [];
export const mockFollowUps: FollowUp[] = [];
export const mockActivityLogs: ActivityLog[] = [];
export const mockDocuments: Document[] = [];
