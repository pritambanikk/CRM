import { useCRM } from '@/contexts/CRMContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserRole } from '@/types/crm';
import { useNavigate } from 'react-router-dom';
import { BarChart3, Ticket, Users, Shield, Briefcase, ChevronRight, LogOut } from 'lucide-react';

const roleLabels: Record<UserRole, string> = {
  super_admin: 'Super Admin',
  front_desk: 'Front Desk',
  lawyer: 'Lawyer',
};



const MorePage = () => {
  const { currentRole, currentUser, logout } = useCRM();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    ...(currentRole !== 'lawyer' ? [{ label: 'Tickets', icon: <Ticket className="w-4 h-4" />, onClick: () => navigate('/tickets') }] : []),
    ...(currentRole === 'super_admin' ? [
      { label: 'Analytics', icon: <BarChart3 className="w-4 h-4" />, onClick: () => navigate('/analytics') },
      { label: 'Team Management', icon: <Users className="w-4 h-4" />, onClick: () => navigate('/team') },
      { label: 'Audit Trail', icon: <Shield className="w-4 h-4" />, onClick: () => navigate('/audit') },
      { label: 'Pipeline', icon: <Briefcase className="w-4 h-4" />, onClick: () => navigate('/pipeline') },
    ] : []),
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 z-40 bg-card/95 backdrop-blur-lg border-b px-4 py-3">
        <h1 className="font-display font-bold text-lg">More</h1>
      </div>

      <div className="px-4 py-4 space-y-4 max-w-lg mx-auto">
        {/* Current User */}
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
              {currentUser.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold">{currentUser.name}</p>
              <p className="text-[11px] text-muted-foreground">{roleLabels[currentRole]} • {currentUser.email}</p>
            </div>
          </div>
        </Card>



        {/* Menu Items */}
        {menuItems.length > 0 && (
          <Card className="overflow-hidden">
            {menuItems.map((item, i) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-sm text-left hover:bg-muted/50 transition-colors ${i < menuItems.length - 1 ? 'border-b' : ''}`}
                onClick={item.onClick}
              >
                <span className="text-muted-foreground">{item.icon}</span>
                <span className="flex-1">{item.label}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            ))}
          </Card>
        )}

        {/* Logout Button */}
        <div className="pt-4">
          <Button variant="destructive" className="w-full gap-2 rounded-xl h-12 font-medium" onClick={handleLogout}>
            <LogOut className="w-5 h-5" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MorePage;

