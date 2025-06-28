
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { AuthForm } from "@/components/auth/AuthForm";
import { AuthCallback } from "@/pages/AuthCallback";
import { AppSidebar } from "@/components/AppSidebar";
import { Dashboard } from "@/components/Dashboard";
import { FieldOfficers } from "@/pages/FieldOfficers";
import { MediaReview } from "@/pages/MediaReview";
import { FarmMapping } from "@/pages/FarmMapping";
import { Reports } from "@/pages/Reports";
import { Analytics } from "@/pages/Analytics";
import { Messaging } from "@/pages/Messaging";
import { Roles } from "@/pages/Roles";
import { Settings } from "@/pages/Settings";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

// Loading component
function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-neutral-600 dark:text-neutral-400">Loading...</p>
      </div>
    </div>
  );
}

// Protected Route component for admin/supervisor dashboard
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, profile, loading, canAccess } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  if (!user || !profile) {
    return <Navigate to="/auth" replace />;
  }

  if (!canAccess) {
    // This shouldn't happen now since we only allow admin/supervisor signup
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L4.316 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
            Access Denied
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            Your account doesn't have permission to access this dashboard.
          </p>
          <button 
            onClick={async () => {
              const { signOut } = useAuth();
              await signOut();
            }}
            className="px-4 py-2 bg-neutral-600 text-white rounded-lg hover:bg-neutral-700 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

// Admin Dashboard Layout
function AdminDashboard() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/officers" element={<FieldOfficers />} />
            <Route path="/media" element={<MediaReview />} />
            <Route path="/mapping" element={<FarmMapping />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/messaging" element={<Messaging />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </SidebarProvider>
  );
}

// Auth guard component
function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="farmetrics-theme">
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route 
                path="/auth" 
                element={
                  <AuthGuard>
                    <AuthForm />
                  </AuthGuard>
                } 
              />
              <Route path="/auth/callback" element={<AuthCallback />} />
              <Route 
                path="/*" 
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
