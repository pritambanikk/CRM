import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { Lead, Ticket, FollowUp, Note, ActivityLog, CRMUser, UserRole, Document, FOLLOWUP_SCHEDULE } from '@/types/crm';
import { format } from 'date-fns';
import { supabase } from '@/lib/supabase';

interface CRMContextType {
  currentUser: CRMUser;
  currentRole: UserRole;
  setCurrentRole: (role: UserRole) => void;
  leads: Lead[];
  setLeads: React.Dispatch<React.SetStateAction<Lead[]>>;
  isLoadingLeads: boolean;
  isAuthenticated: boolean;
  isAuthLoading: boolean;
  logout: () => void;
  handleLoginSuccess: (payload: any) => void;
  updateLeadInServer: (id: string, updates: Partial<Lead>) => Promise<void>;
  tickets: Ticket[];
  setTickets: React.Dispatch<React.SetStateAction<Ticket[]>>;
  followUps: FollowUp[];
  allDueFollowUps: FollowUp[];
  setFollowUps: React.Dispatch<React.SetStateAction<FollowUp[]>>;
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  activityLogs: ActivityLog[];
  setActivityLogs: React.Dispatch<React.SetStateAction<ActivityLog[]>>;
  users: CRMUser[];
  documents: Document[];
  setDocuments: React.Dispatch<React.SetStateAction<Document[]>>;
  addLeadToServer: (leadData: Omit<Lead, 'id' | 'created_at' | 'updated_at'>) => Promise<void>;
  isLoadingTickets: boolean;
  addTicketToServer: (ticketData: Omit<Ticket, 'created_at' | 'updated_at'>) => Promise<void>;
  updateTicketInServer: (id: string, updates: Partial<Ticket>) => Promise<void>;
  addFollowUpToServer: (clientId: string, record: any) => Promise<void>;
  addActivityLog: (entityId: string, action: string, details: string) => Promise<void>;
  fetchLeads: () => Promise<void>;
  fetchTickets: () => Promise<void>;
  fetchLawyers: () => Promise<void>;
}

const CRMContext = createContext<CRMContextType | undefined>(undefined);

export const CRMProvider = ({ children }: { children: ReactNode }) => {
  const [currentRole, setCurrentRole] = useState<UserRole>('front_desk');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoadingLeads, setIsLoadingLeads] = useState(true);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoadingTickets, setIsLoadingTickets] = useState(true);
  const [followUps, setFollowUps] = useState<FollowUp[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);
  const [documents, setDocuments] = useState<Document[]>([]);

  const [currentUser, setCurrentUser] = useState<CRMUser>({
    id: `usr_loading_${Date.now()}`,
    name: 'Loading User...',
    role: 'front_desk',
    email: ''
  });

  const [users, setUsers] = useState<CRMUser[]>([]);

  // ─── Auth: Check Supabase Session on Load ───────────────────────────────────
  useEffect(() => {
    let mounted = true;

    // getSession() reads from localStorage — no network call, always fast.
    // We wrap in try/catch so any failure (env vars missing, etc.) still
    // unblocks the UI instead of hanging on "Verifying Session..." forever.
    const initSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (!mounted) return;
        if (error) throw error;

        if (session?.user) {
          await resolveUserFromSession(session.user);
        } else {
          setIsAuthenticated(false);
          setIsAuthLoading(false);
        }
      } catch (err) {
        console.error('Session init failed:', err);
        if (mounted) {
          setIsAuthenticated(false);
          setIsAuthLoading(false);
        }
      }
    };

    initSession();

    // Listen for login / logout / token refresh AFTER initial load
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      if (session?.user) {
        resolveUserFromSession(session.user); // intentionally not awaited
      } else {
        setIsAuthenticated(false);
        setCurrentUser({ id: '', name: '', role: 'front_desk', email: '' });
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const resolveUserFromSession = async (authUser: any) => {
    try {
      const { data: crmUser } = await supabase
        .from('crm_users')
        .select('role, name')
        .eq('id', authUser.id)
        .single();

      const role: UserRole = (crmUser?.role as UserRole) || 'front_desk';
      const name = crmUser?.name || authUser.user_metadata?.name || authUser.email || 'User';

      setCurrentRole(role);
      setCurrentUser({
        id: authUser.id,
        name,
        role,
        email: authUser.email || '',
      });
      setIsAuthenticated(true);
    } catch (err) {
      console.error('Failed to resolve user role:', err);
      setIsAuthenticated(true);
      setCurrentUser({
        id: authUser.id,
        name: authUser.email || 'User',
        role: 'front_desk',
        email: authUser.email || '',
      });
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleLoginSuccess = (payload: any) => {
    // Called immediately after successful login (before onAuthStateChange fires)
    // to populate the UI without a second round-trip delay.
    const role: UserRole = (payload.role as UserRole) || 'front_desk';
    setCurrentRole(role);
    setCurrentUser({
      id: payload.id || payload.sub || '',
      name: payload.name || payload.email || 'User',
      role,
      email: payload.email || '',
    });
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    setLeads([]);
    setTickets([]);
    setUsers([]);
  };

  // ─── Data Fetching ───────────────────────────────────────────────────────────

  const fetchLeads = async () => {
    setIsLoadingLeads(true);
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      const normalizedData = (data || []).map((l: any) => ({
        ...l,
        status: !l.status || l.status.toLowerCase() === 'new' ? 'NEW_LEAD' : l.status,
        // Supabase returns JSONB already parsed — no need for JSON.parse
        followup_history: l.followup_history ?? [],
        communication_notes: l.communication_notes ?? null,
      }));

      setLeads(normalizedData);
    } catch (error) {
      console.error('Error fetching leads:', error);
      setLeads([]);
    } finally {
      setIsLoadingLeads(false);
    }
  };

  const fetchTickets = async () => {
    setIsLoadingTickets(true);
    try {
      const { data, error } = await supabase
        .from('tickets')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      const normalized = (data || []).map((t: any) => ({
        ...t,
        amount: parseFloat(t.amount) || 0,
        advance_paid: parseFloat(t.advance_paid) || 0,
        followup_history: t.followup_history ?? [],
        communication_notes: t.communication_notes ?? null,
        documents: t.documents ?? [],
      }));

      setTickets(normalized);
    } catch (error) {
      console.error('Error fetching tickets:', error);
      setTickets([]);
    } finally {
      setIsLoadingTickets(false);
    }
  };

  const fetchLawyers = async () => {
    try {
      const { data, error } = await supabase
        .from('crm_users')
        .select('id, name, email, role')
        .eq('role', 'lawyer');

      if (error) throw error;

      const mappedLawyers: CRMUser[] = (data || []).map((l: any) => ({
        id: l.id,
        name: l.name || 'Unknown Lawyer',
        email: l.email || '',
        role: 'lawyer',
      }));

      setUsers(mappedLawyers);
    } catch (error) {
      console.error('Error fetching lawyers:', error);
      setUsers([]);
    }
  };

  // Fetch data only when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
      fetchTickets();
      fetchLawyers();
    }
  }, [isAuthenticated]);

  // ─── Leads CRUD ─────────────────────────────────────────────────────────────

  const addLeadToServer = async (leadData: Omit<Lead, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('leads')
        .insert([leadData])
        .select()
        .single();

      if (error) throw error;

      const completeLead: Lead = {
        ...data,
        status: !data.status || data.status.toLowerCase() === 'new' ? 'NEW_LEAD' : data.status,
      };

      setLeads(prev => [completeLead, ...prev]);
    } catch (error) {
      console.error('Failed to add lead:', error);
      throw error;
    }
  };

  const updateLeadInServer = async (id: string, updates: Partial<Lead>) => {
    try {
      const { error } = await supabase
        .from('leads')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;

      setLeads(prev => prev.map(l => l.id === id ? { ...l, ...updates } : l));
    } catch (error) {
      console.error('Failed to update lead:', error);
      throw error;
    }
  };

  // ─── Tickets CRUD ────────────────────────────────────────────────────────────

  const addTicketToServer = async (ticketData: Omit<Ticket, 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('tickets')
        .insert([ticketData])
        .select()
        .single();

      if (error) throw error;

      const completeTicket: Ticket = {
        ...data,
        amount: parseFloat(data.amount) || ticketData.amount,
        advance_paid: parseFloat(data.advance_paid) || ticketData.advance_paid,
      };

      setTickets(prev => [completeTicket, ...prev]);
    } catch (error) {
      console.error('Failed to add ticket:', error);
      throw error;
    }
  };

  const updateTicketInServer = async (id: string, updates: Partial<Ticket>) => {
    try {
      const { error } = await supabase
        .from('tickets')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('ticket_id', id);

      if (error) throw error;

      setTickets(prev => prev.map(t => t.ticket_id === id ? { ...t, ...updates } : t));
    } catch (error) {
      console.error('Failed to update ticket:', error);
      throw error;
    }
  };

  // ─── Follow-up Logic ─────────────────────────────────────────────────────────

  const getScheduledAt = (baseDate: string, attempt: number) => {
    const date = new Date(baseDate);
    if (isNaN(date.getTime())) return new Date().toISOString();
    switch (attempt) {
      case 1: return new Date(date.getTime() + 5 * 60000).toISOString();
      case 2: return new Date(date.getTime() + 30 * 60000).toISOString();
      case 3: return new Date(date.getTime() + 4 * 3600000).toISOString();
      case 4: return new Date(date.getTime() + 24 * 3600000).toISOString();
      case 5: return new Date(date.getTime() + 3 * 86400000).toISOString();
      case 6: return new Date(date.getTime() + 5 * 86400000).toISOString();
      default: return date.toISOString();
    }
  };

  const allDueFollowUps = useMemo(() => {
    const combined = [
      ...leads.map(l => ({ ...l, isLead: true })),
      ...tickets.map(t => ({ ...t, id: t.ticket_id, isLead: false }))
    ];

    return combined
      .filter(l => {
        const terminalStatuses = ['COMPLETED', 'NOT_INTERESTED', 'USER_DROPPED'];
        if (terminalStatuses.includes(l.status)) return false;
        return true;
      })
      .flatMap(item => {
        let history: any[] = [];
        try {
          if (item.followup_history) {
            history = typeof item.followup_history === 'string'
              ? JSON.parse(item.followup_history)
              : item.followup_history;
          }
        } catch (e) {
          history = [];
        }

        const scheduledTasks = history.filter((h: any) => h.completed === false || h.completed === 'false');
        if (scheduledTasks.length > 0) {
          return scheduledTasks.map((task: any) => ({
            id: `history-${item.id}-${task.attempt}`,
            lead_id: item.id,
            lead_name: item.isLead ? (item as any).name : (item as any).client_name,
            lead_service: item.isLead ? (item as any).service : (item as any).service_type,
            entity_type: item.isLead ? 'lead' : 'ticket',
            attempt: task.attempt,
            type: task.type || 'call',
            scheduled_at: task.scheduled_at,
            completed: false,
            note: task.note
          }));
        }

        if (!item.isLead || item.status === 'ADVANCE_PAID') return [];

        const completedCount = history.filter((h: any) => h.completed === true || h.completed === 'true').length;
        const nextAttempt = completedCount + 1;
        if (nextAttempt > 6) return [];

        const step = FOLLOWUP_SCHEDULE.find(s => s.attempt === nextAttempt);
        if (!step) return [];

        const scheduled_at = getScheduledAt(item.updated_at || item.created_at, nextAttempt);

        return [{
          id: `derived-${item.id}-${nextAttempt}`,
          lead_id: item.id,
          lead_name: (item as any).name,
          lead_service: (item as any).service,
          entity_type: 'lead',
          attempt: nextAttempt,
          type: step.type,
          scheduled_at,
          completed: false,
        }];
      }) as FollowUp[];
  }, [leads, tickets]);

  const addFollowUpToServer = async (targetId: string, record: any) => {
    const lead = leads.find(l => l.id === targetId);
    const ticket = tickets.find(t => t.ticket_id === targetId);
    const client = lead || ticket;

    if (!client) {
      console.error('CRMContext: Client not found for ID', targetId);
      throw new Error('Client not found');
    }

    let history: any[] = [];
    try {
      if (client.followup_history) {
        history = typeof client.followup_history === 'string'
          ? JSON.parse(client.followup_history)
          : client.followup_history;
      }
    } catch (e) {
      history = [];
    }

    let updatedHistory;
    const existingIndex = history.findIndex((h: any) => h.attempt === record.attempt);
    if (existingIndex >= 0) {
      updatedHistory = [...history];
      updatedHistory[existingIndex] = { ...updatedHistory[existingIndex], ...record };
    } else {
      updatedHistory = [...history, record];
    }

    try {
      if (lead) {
        await updateLeadInServer(targetId, {
          followup_history: updatedHistory as any,
          followup_count: record.attempt,
          updated_at: new Date().toISOString()
        });
        const logDetails = record.completed
          ? `Follow-up #${record.attempt} completed`
          : `Follow-up #${record.attempt} scheduled for ${format(new Date(record.scheduled_at), 'MMM d, h:mm a')}`;
        await addActivityLog(targetId, record.completed ? 'Follow-up Done' : 'Follow-up Scheduled', logDetails);
      } else if (ticket) {
        await updateTicketInServer(targetId, {
          followup_history: updatedHistory as any,
          updated_at: new Date().toISOString()
        });
        const logDetails = record.completed
          ? `Follow-up #${record.attempt} completed`
          : `Follow-up #${record.attempt} scheduled for ${format(new Date(record.scheduled_at), 'MMM d, h:mm a')}`;
        await addActivityLog(targetId, record.completed ? 'Follow-up Done' : 'Follow-up Scheduled', logDetails);
      }

      setFollowUps(prev => [{ ...record, lead_id: targetId }, ...prev]);

      await Promise.all([fetchLeads(), fetchTickets()]);
    } catch (error) {
      console.error('Failed to add follow-up:', error);
      throw error;
    }
  };

  // ─── Activity Log ────────────────────────────────────────────────────────────

  const activityLogs = useMemo(() => {
    const allLogs: ActivityLog[] = [];

    [...leads, ...tickets].forEach(item => {
      const id = (item as any).id || (item as any).ticket_id;
      if (item.communication_notes) {
        try {
          const parsed = typeof item.communication_notes === 'string'
            ? JSON.parse(item.communication_notes)
            : item.communication_notes;

          if (parsed.activity_logs && Array.isArray(parsed.activity_logs)) {
            parsed.activity_logs.forEach((log: any) => {
              allLogs.push({ ...log, entity_id: id });
            });
          }
        } catch (e) {
          // ignore parse errors
        }
      }
    });

    return allLogs.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }, [leads, tickets]);

  const addActivityLog = async (entityId: string, action: string, details: string) => {
    const lead = leads.find(l => l.id === entityId);
    const ticket = tickets.find(t => t.ticket_id === entityId);
    const item = lead || ticket;

    if (!item) return;

    let parsedNotes: any = { notes: [], call_logs: [], meetings: [], activity_logs: [] };
    try {
      if (item.communication_notes) {
        parsedNotes = typeof item.communication_notes === 'string'
          ? JSON.parse(item.communication_notes)
          : item.communication_notes;
      }
    } catch (e) {
      console.error('Error parsing communication notes for log:', e);
    }

    const newLog = {
      id: `a${Date.now()}`,
      action,
      details,
      created_by: currentUser.name,
      created_at: new Date().toISOString()
    };

    const updatedNotes = {
      ...parsedNotes,
      activity_logs: [newLog, ...(parsedNotes.activity_logs || [])]
    };

    if (lead) {
      await updateLeadInServer(entityId, { communication_notes: updatedNotes as any });
    } else if (ticket) {
      await updateTicketInServer(entityId, { communication_notes: updatedNotes as any });
    }
  };

  // ─── Context Value ───────────────────────────────────────────────────────────

  return (
    <CRMContext.Provider value={{
      currentUser,
      currentRole,
      setCurrentRole,
      isAuthenticated,
      isAuthLoading,
      logout,
      handleLoginSuccess,
      leads,
      setLeads,
      isLoadingLeads,
      tickets,
      setTickets,
      followUps,
      allDueFollowUps,
      setFollowUps,
      notes,
      setNotes,
      activityLogs,
      setActivityLogs: () => {},
      users,
      documents,
      setDocuments,
      addLeadToServer,
      updateLeadInServer,
      isLoadingTickets,
      addTicketToServer,
      updateTicketInServer,
      addFollowUpToServer,
      addActivityLog,
      fetchLeads,
      fetchTickets,
      fetchLawyers,
    }}>
      {children}
    </CRMContext.Provider>
  );
};

export const useCRM = () => {
  const ctx = useContext(CRMContext);
  if (!ctx) throw new Error('useCRM must be used within CRMProvider');
  return ctx;
};
