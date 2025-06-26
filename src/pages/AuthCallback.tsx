
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Leaf } from 'lucide-react';

export function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Auth callback error:', error);
          navigate('/auth?error=callback_failed');
          return;
        }

        if (data.session) {
          // Successfully authenticated, redirect to dashboard
          navigate('/');
        } else {
          // No session, redirect to auth
          navigate('/auth');
        }
      } catch (error) {
        console.error('Auth callback error:', error);
        navigate('/auth?error=unexpected');
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4 animate-pulse">
          <Leaf className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
          Completing sign in...
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          Please wait while we redirect you to the dashboard.
        </p>
      </div>
    </div>
  );
}
