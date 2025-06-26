
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { Leaf, Mail, AlertCircle, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export function AuthForm() {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('signin');
  const { signIn, signUp, signInWithGoogle } = useAuth();

  // Sign In Form State
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });

  // Sign Up Form State
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    role: 'supervisor' as 'admin' | 'supervisor',
  });

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await signIn(signInData.email, signInData.password);
      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          toast.error('Invalid email or password. Please check your credentials and try again.');
        } else {
          toast.error(error.message || 'Failed to sign in');
        }
      } else {
        toast.success('Successfully signed in!');
      }
    } catch (error: any) {
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (signUpData.password !== signUpData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (signUpData.password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);

    try {
      const { error } = await signUp(
        signUpData.email,
        signUpData.password,
        {
          full_name: signUpData.fullName,
          role: signUpData.role,
        }
      );

      if (error) {
        if (error.message.includes('User already registered')) {
          toast.error('An account with this email already exists. Please sign in instead.');
        } else {
          toast.error(error.message || 'Failed to create account');
        }
      } else {
        toast.success('Account created successfully! Please check your email to verify your account.');
        setActiveTab('signin');
      }
    } catch (error: any) {
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const { error } = await signInWithGoogle();
      if (error) {
        toast.error(error.message || 'Failed to sign in with Google');
      }
    } catch (error: any) {
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 p-4 transition-colors">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <Card className="w-full max-w-md bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border-neutral-200/50 dark:border-neutral-700/50 shadow-2xl">
        <CardHeader className="space-y-4 text-center">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Leaf className="w-8 h-8 text-white" />
            </div>
          </div>
          <div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-500 bg-clip-text text-transparent">
              FARMETRICS
            </CardTitle>
            <CardDescription className="text-neutral-600 dark:text-neutral-400 font-medium">
              Administrative Dashboard
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin" className="space-y-4">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">Email</Label>
                  <Input
                    id="signin-email"
                    type="email"
                    value={signInData.email}
                    onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                    placeholder="admin@farmetrics.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signin-password">Password</Label>
                  <Input
                    id="signin-password"
                    type="password"
                    value={signInData.password}
                    onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 dark:from-primary-500 dark:to-primary-600"
                  disabled={loading}
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </Button>
              </form>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-neutral-300 dark:border-neutral-600" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white dark:bg-neutral-800 px-2 text-neutral-500 dark:text-neutral-400">
                    Or continue with
                  </span>
                </div>
              </div>
              
              <Button
                type="button"
                variant="outline"
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full"
              >
                <Mail className="w-4 h-4 mr-2" />
                Google
              </Button>
            </TabsContent>
            
            <TabsContent value="signup" className="space-y-4">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input
                    id="signup-name"
                    type="text"
                    value={signUpData.fullName}
                    onChange={(e) => setSignUpData({ ...signUpData, fullName: e.target.value })}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    value={signUpData.email}
                    onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                    placeholder="admin@farmetrics.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-role">Role</Label>
                  <Select
                    value={signUpData.role}
                    onValueChange={(value: 'admin' | 'supervisor') => 
                      setSignUpData({ ...signUpData, role: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Administrator</SelectItem>
                      <SelectItem value="supervisor">Supervisor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    value={signUpData.password}
                    onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                    placeholder="Enter password (min. 6 characters)"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                  <Input
                    id="signup-confirm-password"
                    type="password"
                    value={signUpData.confirmPassword}
                    onChange={(e) => setSignUpData({ ...signUpData, confirmPassword: e.target.value })}
                    placeholder="Confirm your password"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700"
                  disabled={loading}
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-primary-800 dark:text-primary-200">
                <p className="font-medium">Administrative Access Only</p>
                <p>Only administrators and supervisors can access this dashboard. Field officers use the mobile application.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
