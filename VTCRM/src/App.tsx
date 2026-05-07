import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CRMProvider, useCRM } from "@/contexts/CRMContext";
import { BottomNav } from "@/components/BottomNav";
import LeadsDashboard from "./pages/LeadsDashboard";
import Billing from "./pages/Billing";
import LeadDetail from "./pages/LeadDetail";
import Pipeline from "./pages/Pipeline";
import FollowUps from "./pages/FollowUps";
import Tickets from "./pages/Tickets";
import TicketDetail from "./pages/TicketDetail";
import Analytics from "./pages/Analytics";
import AdminDashboard from "./pages/AdminDashboard";
import TeamManagement from "./pages/TeamManagement";
import AuditTrail from "./pages/AuditTrail";
import MorePage from "./pages/MorePage";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Inbox from "./pages/Inbox";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isAuthLoading } = useCRM();

  if (isAuthLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-muted-foreground text-sm font-medium">Verifying Session...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const HomePage = () => {
  const { currentRole } = useCRM();
  if (currentRole === 'lawyer') return <Navigate to="/tickets" replace />;
  if (currentRole === 'super_admin') return <Navigate to="/admin" replace />;
  return <LeadsDashboard />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CRMProvider>
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
            <Route path="/leads" element={<ProtectedRoute><LeadsDashboard /></ProtectedRoute>} />
            <Route path="/lead/:id" element={<ProtectedRoute><LeadDetail /></ProtectedRoute>} />
            <Route path="/pipeline" element={<ProtectedRoute><Pipeline /></ProtectedRoute>} />
            <Route path="/followups" element={<ProtectedRoute><FollowUps /></ProtectedRoute>} />
            <Route path="/tickets" element={<ProtectedRoute><Tickets /></ProtectedRoute>} />
            <Route path="/ticket/:id" element={<ProtectedRoute><TicketDetail /></ProtectedRoute>} />
            <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
            <Route path="/team" element={<ProtectedRoute><TeamManagement /></ProtectedRoute>} />
            <Route path="/audit" element={<ProtectedRoute><AuditTrail /></ProtectedRoute>} />
            <Route path="/billing" element={<ProtectedRoute><Billing /></ProtectedRoute>} />
            <Route path="/inbox" element={<ProtectedRoute><Inbox /></ProtectedRoute>} />
            <Route path="/more" element={<ProtectedRoute><MorePage /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BottomNav />
        </BrowserRouter>
      </CRMProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
