import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCRM } from '@/contexts/CRMContext';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import vakiltechLogo from '@/assets/vakiltech-logo.png';
import { Shield, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { handleLoginSuccess } = useCRM();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error(error.message || 'Login failed. Please check your credentials.');
        return;
      }

      if (!data.user) {
        toast.error('Login failed. No user returned.');
        return;
      }

      // Fetch the user's role from crm_users table
      const { data: crmUser, error: roleError } = await supabase
        .from('crm_users')
        .select('role, name')
        .eq('id', data.user.id)
        .single();

      if (roleError || !crmUser) {
        // Default to front_desk if no role record found
        handleLoginSuccess({
          id: data.user.id,
          email: data.user.email || '',
          name: data.user.user_metadata?.name || data.user.email || 'User',
          role: 'front_desk',
        });
      } else {
        handleLoginSuccess({
          id: data.user.id,
          email: data.user.email || '',
          name: crmUser.name || data.user.email || 'User',
          role: crmUser.role,
        });
      }

      toast.success('Login Successful');
      navigate('/');
    } catch (err: any) {
      console.error('Login Error:', err);
      toast.error(err?.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex lg:grid lg:grid-cols-2 bg-muted/30 lg:bg-background">
      {/* Left side - Aesthetic Graphic & Quote (Hidden on Mobile) */}
      <div className="hidden lg:flex flex-col justify-between bg-primary p-12 text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent opacity-50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-black/20 to-transparent opacity-40 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex items-center gap-2">
          <div className="bg-white p-2 rounded-xl shadow-sm">
            <img src={vakiltechLogo} alt="Vakiltech" className="h-8 w-auto" />
          </div>
        </div>

        <div className="relative z-10 max-w-md mt-auto mb-10">
          <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-6">
            "Every lead is a problem we're trying to solve"
          </h2>
          <p className="text-primary-foreground/90 text-lg">
            Empowering legal teams to seamlessly manage enquiries, track follow-ups, and convert leads with intelligence.
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-between text-sm text-primary-foreground/80 border-t border-primary-foreground/20 pt-6">
          <p>© {new Date().getFullYear()} VakilTech CRM. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-4 lg:p-12 relative w-full">
        <div className="w-full max-w-[400px] bg-card lg:bg-transparent p-8 lg:p-0 rounded-3xl lg:rounded-none shadow-xl lg:shadow-none border lg:border-none relative z-10 overflow-hidden">

          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-primary/10 to-transparent lg:hidden pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="text-center lg:text-left space-y-2">
              <div className="lg:hidden flex justify-center mb-6">
                <img src={vakiltechLogo} alt="Vakiltech" className="h-10 w-auto" />
              </div>

              <div className="lg:hidden mb-8 relative">
                <div className="absolute inset-0 bg-primary/5 rounded-2xl transform -rotate-1"></div>
                <div className="relative bg-background p-4 rounded-2xl border shadow-sm flex flex-col items-center text-center">
                  <p className="text-[13px] font-medium text-foreground/80 italic leading-tight">
                    "Every lead is a problem we're trying to solve"
                  </p>
                </div>
              </div>

              <h1 className="text-3xl font-display font-semibold tracking-tight text-foreground">
                Welcome back
              </h1>
              <p className="text-sm text-muted-foreground">
                Please enter your credentials to access your account.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 pt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@vakiltech.com"
                  className="h-12 px-4 rounded-xl bg-muted/50 border-transparent focus-visible:bg-background focus-visible:ring-2 focus-visible:ring-primary/20 transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => toast.info('Please contact your Admin to reset your password.')}
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="h-12 pl-4 pr-12 rounded-xl bg-muted/50 border-transparent focus-visible:bg-background focus-visible:ring-2 focus-visible:ring-primary/20 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-1 top-1 h-10 w-10 rounded-lg hover:bg-muted/80 flex items-center justify-center text-muted-foreground transition-colors"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 rounded-xl gap-2 font-medium text-base mt-2 shadow-lg shadow-primary/20"
                disabled={isLoading || !email || !password}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Shield className="w-4 h-4" /> Authenticate
                  </>
                )}
              </Button>
            </form>

            <p className="text-xs text-center text-muted-foreground mt-8">
              Secured by vakiltech. By logging in you agree to our terms of service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
