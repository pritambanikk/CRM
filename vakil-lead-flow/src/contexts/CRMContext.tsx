import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { Lead, Ticket, FollowUp, Note, ActivityLog, CRMUser, UserRole, Document, FOLLOWUP_SCHEDULE } from '@/types/crm';
import { format } from 'date-fns';

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
  handleLoginSuccess: (tokenPayload: any) => void;
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

import userPool from '@/lib/cognito';

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

  // Current user state populated from AWS token
  const [currentUser, setCurrentUser] = useState<CRMUser>({ 
    id: `usr_loading_${Date.now()}`, 
    name: 'Loading User...', 
    role: 'front_desk', 
    email: '' 
  });
  
  // Dynamic users state
  const [users, setUsers] = useState<CRMUser[]>([]);

  // Check AWS Cognito Session on Load
  useEffect(() => {
    const cognitoUser = userPool.getCurrentUser();
    if (cognitoUser) {
      cognitoUser.getSession((err: any, session: any) => {
        if (err || !session.isValid()) {
          setIsAuthenticated(false);
          setIsAuthLoading(false);
          return;
        }
        
        setIsAuthenticated(true);
        const idPayload = session.getIdToken().decodePayload();
        const accessPayload = session.getAccessToken().decodePayload();
        const payload = { ...idPayload, ...accessPayload };
        
        console.log('Session Loaded - ID Token:', idPayload);
        console.log('Session Loaded - Access Token:', accessPayload);
        
        // Extract Cognito Groups for RBAC
        const groups = payload['cognito:groups'] || [];
        const customRole = (payload['custom:role'] || '').toLowerCase();
        const normalizedGroups = groups.map((g: string) => g.toLowerCase());
        
        let resolvedRole: UserRole = 'front_desk';
        if (normalizedGroups.includes('super_admin') || normalizedGroups.includes('superadmin') || customRole === 'super_admin') {
          resolvedRole = 'super_admin';
        } else if (normalizedGroups.includes('lawyer') || normalizedGroups.includes('lawyers') || customRole === 'lawyer') {
          resolvedRole = 'lawyer';
        } else if (normalizedGroups.includes('front_desk') || normalizedGroups.includes('frontdesk') || customRole === 'front_desk') {
          resolvedRole = 'front_desk';
        }
        
        setCurrentRole(resolvedRole);
        setCurrentUser({
          id: payload['cognito:username'] || payload.username || payload.sub || `usr_${Date.now()}`,
          name: [payload.given_name, payload.family_name === '-' ? null : payload.family_name].filter(Boolean).join(' ') || payload.name || payload['cognito:username'] || payload.email || 'Authorized User',
          role: resolvedRole,
          email: payload.email || payload['cognito:username'] || ''
        });
        
        setIsAuthLoading(false);
      });
    } else {
      setIsAuthenticated(false);
      setIsAuthLoading(false);
    }
  }, []);

  const handleLoginSuccess = (payload: any) => {
    setIsAuthenticated(true);
    // Extract Cognito Groups for RBAC
    const groups = payload['cognito:groups'] || [];
    const customRole = (payload['custom:role'] || '').toLowerCase();
    const normalizedGroups = groups.map((g: string) => g.toLowerCase());
    
    let resolvedRole: UserRole = 'front_desk';
    if (normalizedGroups.includes('super_admin') || normalizedGroups.includes('superadmin') || customRole === 'super_admin') {
      resolvedRole = 'super_admin';
    } else if (normalizedGroups.includes('lawyer') || normalizedGroups.includes('lawyers') || customRole === 'lawyer') {
      resolvedRole = 'lawyer';
    } else if (normalizedGroups.includes('front_desk') || normalizedGroups.includes('frontdesk') || customRole === 'front_desk') {
      resolvedRole = 'front_desk';
    }
    
    setCurrentRole(resolvedRole);
    setCurrentUser({
      id: payload['cognito:username'] || payload.username || payload.sub || `usr_${Date.now()}`,
      name: [payload.given_name, payload.family_name === '-' ? null : payload.family_name].filter(Boolean).join(' ') || payload.name || payload['cognito:username'] || payload.email || 'Authorized User',
      role: resolvedRole,
      email: payload.email || payload['cognito:username'] || ''
    });
  };

  const logout = () => {
    const cognitoUser = userPool.getCurrentUser();
    if (cognitoUser) {
      cognitoUser.signOut();
    }
    setIsAuthenticated(false);
  };

  const fetchLeads = async () => {
    try {
      const response = await fetch('https://lqxvick4h8.execute-api.us-east-1.amazonaws.com/leads');
      if (!response.ok) throw new Error('Failed to fetch leads');
      const data = await response.json();
      const normalizedData = data.map((l: any) => ({
        ...l,
        status: !l.status || l.status.toLowerCase() === 'new' ? 'NEW_LEAD' : l.status
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
    try {
      const response = await fetch('https://lqxvick4h8.execute-api.us-east-1.amazonaws.com/tickets');
      if (!response.ok) throw new Error('Failed to fetch tickets');
      const data = await response.json();
      // Normalize API data: amount/advance_paid come as strings from PostgreSQL
      const normalized = data.map((t: any) => ({
        ...t,
        amount: parseFloat(t.amount) || 0,
        advance_paid: parseFloat(t.advance_paid) || 0,
        created_at: t.created_at ? t.created_at.replace(' ', 'T') : new Date().toISOString(),
        updated_at: t.updated_at ? t.updated_at.replace(' ', 'T') : new Date().toISOString(),
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
      const response = await fetch('https://lqxvick4h8.execute-api.us-east-1.amazonaws.com/lawyers');
      if (!response.ok) throw new Error('Failed to fetch lawyers from DB');
      const data = await response.json();
      
      const mappedLawyers: CRMUser[] = data.map((l: any) => ({
        id: l.cognito_id || l.id,
        name: l.name || 'Unknown Lawyer',
        email: l.email || '',
        role: 'lawyer'
      }));
      
      setUsers(mappedLawyers);
    } catch (error) {
      console.error('Error fetching lawyers:', error);
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchLeads();
    fetchTickets();
    fetchLawyers();
    const fetchFollowUps = async () => {
      try {
        const response = await fetch('https://yp1ehsqhh1.execute-api.us-east-1.amazonaws.com/followup');
        if (!response.ok) throw new Error('Failed to fetch follow-ups');
        const data = await response.json();
        setFollowUps(data);
      } catch (error) {
        console.error('Error fetching follow-ups:', error);
        setFollowUps([]);
      }
    };
    fetchFollowUps();
  }, []);

  const addLeadToServer = async (leadData: Omit<Lead, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const response = await fetch('https://lqxvick4h8.execute-api.us-east-1.amazonaws.com/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData)
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const newLead = await response.json();
      
      // The current AWS API setup returns the exact payload sent (201 Created), 
      // which does not include the DB-generated `id`, `created_at`, or `updated_at`.
      // We must provide fallback values for the local state so the UI (like LeadsDashboard) 
      // doesn't crash when trying to parse `lead.created_at`.
      const completeLead: Lead = {
        id: newLead.id || `l_${Date.now()}`,
        created_at: newLead.created_at || new Date().toISOString(),
        updated_at: newLead.updated_at || new Date().toISOString(),
        ...newLead,
        status: !newLead.status || String(newLead.status).toLowerCase() === 'new' ? 'NEW_LEAD' : newLead.status
      };
      
      // Update local state 
      setLeads(prev => [completeLead, ...prev]);
    } catch (error) {
      console.error("Failed to add lead to server:", error);
      throw error;
    }
  };

  const updateLeadInServer = async (id: string, updates: Partial<Lead>) => {
    try {
      
      const response = await fetch('https://lqxvick4h8.execute-api.us-east-1.amazonaws.com/leads', {
        // Send PUT request to update the record
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lead_id: id, ...updates })
      });
      
      if (!response.ok) {
        let errorMsg = `API error: ${response.status}`;
        try {
          const errorData = await response.json();
          errorMsg += ` - ${JSON.stringify(errorData)}`;
          
          if (errorMsg.includes("No valid fields provided for update")) {
            console.warn("Backend does not support updating some fields yet. Applying locally:", updates);
            setLeads(prev => prev.map(l => l.id === id ? { ...l, ...updates } : l));
            return;
          }
        } catch (e) {
          // No JSON body
        }
        throw new Error(errorMsg);
      }
      
      // Update local state by merging the updates
      setLeads(prev => prev.map(l => l.id === id ? { ...l, ...updates } : l));
    } catch (error) {
      console.error("Failed to update lead in server:", error);
      throw error;
    }
  };

  const addTicketToServer = async (ticketData: Omit<Ticket, 'created_at' | 'updated_at'>) => {
    try {
      
      const response = await fetch('https://lqxvick4h8.execute-api.us-east-1.amazonaws.com/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ticketData)
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const newTicket = await response.json();
      
      const completeTicket: Ticket = {
        ticket_id: newTicket.ticket_id || ticketData.ticket_id || `t_${Date.now()}`,
        client_id: ticketData.client_id,
        client_name: ticketData.client_name,
        lawyer_id: ticketData.lawyer_id,
        lawyer_name: ticketData.lawyer_name,
        service_type: ticketData.service_type,
        description: ticketData.description,
        status: ticketData.status,
        priority: ticketData.priority,
        amount: parseFloat(newTicket.amount) || ticketData.amount,
        advance_paid: parseFloat(newTicket.advance_paid) || ticketData.advance_paid,
        communication_notes: newTicket.communication_notes || ticketData.communication_notes,
        followup_history: newTicket.followup_history || ticketData.followup_history,
        created_at: newTicket.created_at ? newTicket.created_at.replace(' ', 'T') : new Date().toISOString(),
        updated_at: newTicket.updated_at ? newTicket.updated_at.replace(' ', 'T') : new Date().toISOString(),
      };
      
      setTickets(prev => [completeTicket, ...prev]);
    } catch (error) {
      console.error("Failed to add ticket to server:", error);
      throw error;
    }
  };

  const updateTicketInServer = async (id: string, updates: Partial<Ticket>) => {
    try {
      const response = await fetch('https://lqxvick4h8.execute-api.us-east-1.amazonaws.com/tickets', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ticket_id: id, ...updates })
      });
      
      if (!response.ok) {
        let errorMsg = `API error: ${response.status}`;
        try {
          const errorData = await response.json();
          errorMsg += ` - ${JSON.stringify(errorData)}`;
          if (errorMsg.includes("No valid fields provided for update")) {
            console.warn("Backend does not support updating some fields yet. Applying locally:", updates);
            setTickets(prev => prev.map(t => t.ticket_id === id ? { ...t, ...updates } : t));
            return;
          }
        } catch (e) {}
        throw new Error(errorMsg);
      }
      
      setTickets(prev => prev.map(t => t.ticket_id === id ? { ...t, ...updates } : t));
    } catch (error) {
      console.error("Failed to update ticket in server:", error);
      throw error;
    }
  };
  
  // --- Follow-up Derivation Logic ---
  const getScheduledAt = (baseDate: string, attempt: number) => {
    const date = new Date(baseDate);
    if (isNaN(date.getTime())) return new Date().toISOString();

    switch (attempt) {
      case 1: return new Date(date.getTime() + 5 * 60000).toISOString(); // 5 min
      case 2: return new Date(date.getTime() + 30 * 60000).toISOString(); // 30 min
      case 3: return new Date(date.getTime() + 4 * 3600000).toISOString(); // 4 hours
      case 4: return new Date(date.getTime() + 24 * 3600000).toISOString(); // 24 hours
      case 5: return new Date(date.getTime() + 3 * 86400000).toISOString(); // 3 days
      case 6: return new Date(date.getTime() + 5 * 86400000).toISOString(); // 5 days
      default: return date.toISOString();
    }
  };

  const allDueFollowUps = useMemo(() => {
    // Combine leads and tickets for a unified followup view
    const combined = [
      ...leads.map(l => ({ ...l, isLead: true })),
      ...tickets.map(t => ({ ...t, id: t.ticket_id, isLead: false }))
    ];

    return combined
      .filter(l => {
        // Exclude terminal lead statuses unless they have explicitly scheduled followups
        const terminalStatuses = ['COMPLETED', 'NOT_INTERESTED', 'USER_DROPPED'];
        if (terminalStatuses.includes(l.status)) return false;
        return true;
      })
      .flatMap(item => {
        // Step 1: Parse History
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
        
        // Step 2: Extract ALL explicitly scheduled tasks
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

        // Step 3: Fallback - Only for LEADS in active stages (not tickets or paid leads)
        // Tickets should only show followups if explicitly scheduled
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
          scheduled_at: scheduled_at,
          completed: false,
        }];
      }) as FollowUp[];
  }, [leads, tickets]);

  const addFollowUpToServer = async (targetId: string, record: any) => {
    
    // 1. Find the client (search leads and tickets)
    const lead = leads.find(l => l.id === targetId);
    const ticket = tickets.find(t => t.ticket_id === targetId);
    const client = lead || ticket;
    
    if (!client) {
      console.error('CRMContext: Client not found for ID', targetId);
      throw new Error('Client not found');
    }
    
    // 2. Parse existing history
    let history: any[] = [];
    try {
      if (client.followup_history) {
        history = typeof client.followup_history === 'string' 
          ? JSON.parse(client.followup_history) 
          : client.followup_history;
      }
    } catch (e) {
      console.error('Error parsing follow-up history:', e);
      // If parsing fails, treat history as empty for merging purposes
      history = []; 
    }
    
    // 3. Merge logic: If record with same attempt exists, update it. Otherwise append.
    let updatedHistory;
    const existingIndex = history.findIndex((h: any) => h.attempt === record.attempt);
    
    if (existingIndex >= 0) {
      updatedHistory = [...history];
      updatedHistory[existingIndex] = { ...updatedHistory[existingIndex], ...record };
    } else {
      updatedHistory = [...history, record];
    }
    
    // 4. Prepare payload for dedicated follow-up API
    const payload: any = {
      lead_name: lead?.name || ticket?.client_name,
      lead_service: lead?.service || ticket?.service_type,
      followup_history: updatedHistory
    };
    if (ticket) {
      payload.ticket_id = targetId;
    } else {
      payload.lead_id = targetId;
    }
    
    console.log('CRMContext: Hitting Follow-up API with nested data:', payload);
    
    try {
      // Step A: Send to dedicated follow-up API
      const response = await fetch('https://yp1ehsqhh1.execute-api.us-east-1.amazonaws.com/followup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) throw new Error(`Follow-up API error: ${response.status}`);
      
      // Step B: Sync back to Lead/Ticket in the main DB
      const stringifiedHistory = JSON.stringify(updatedHistory);
        if (lead) {
          await updateLeadInServer(targetId, { 
            followup_history: JSON.stringify(updatedHistory),
            followup_count: record.attempt,
            updated_at: new Date().toISOString()
          });
          const logDetails = record.completed ? `Follow-up #${record.attempt} completed` : `Follow-up #${record.attempt} scheduled for ${format(new Date(record.scheduled_at), 'MMM d, h:mm a')}`;
          await addActivityLog(targetId, record.completed ? 'Follow-up Done' : 'Follow-up Scheduled', logDetails);
        } else if (ticket) {
          await updateTicketInServer(targetId, { 
            followup_history: JSON.stringify(updatedHistory),
            updated_at: new Date().toISOString()
          });
          const logDetails = record.completed ? `Follow-up #${record.attempt} completed` : `Follow-up #${record.attempt} scheduled for ${format(new Date(record.scheduled_at), 'MMM d, h:mm a')}`;
          await addActivityLog(targetId, record.completed ? 'Follow-up Done' : 'Follow-up Scheduled', logDetails);
        }

      // Update local follow-ups state for legacy usage if needed
      setFollowUps(prev => [{...record, lead_id: targetId}, ...prev]);
      
      // Step C: Re-fetch everything to ensure total sync
      console.log('CRMContext: Re-fetching leads and tickets after follow-up update');
      await Promise.all([fetchLeads(), fetchTickets()]);
      
    } catch (error) {
      console.error("Failed to add follow-up:", error);
      throw error;
    }
  };

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
              allLogs.push({
                ...log,
                entity_id: id
              });
            });
          }
        } catch (e) {
          // Ignore parse errors for older data
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
      await updateLeadInServer(entityId, { communication_notes: JSON.stringify(updatedNotes) });
    } else if (ticket) {
      await updateTicketInServer(entityId, { communication_notes: JSON.stringify(updatedNotes) });
    }
  };

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
      setActivityLogs: () => {}, // No-op, managed via addActivityLog
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
      fetchLawyers
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
