
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Dashboard } from "@/components/Dashboard";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <Dashboard />
        </main>
        <Toaster />
      </div>
    </SidebarProvider>
  );
};

export default Index;
