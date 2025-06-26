
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function AppContent() {
  const { user, profile, loading, canAccess } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600 dark:text-neutral-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user || !profile || !canAccess) {
    return <AuthForm />;
  }

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
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </SidebarProvider>
  );
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
              <Route path="/auth" element={<AuthForm />} />
              <Route path="/auth/callback" element={<AuthCallback />} />
              <Route path="/*" element={<AppContent />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
