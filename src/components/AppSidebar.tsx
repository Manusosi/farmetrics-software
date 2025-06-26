
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { 
  LayoutDashboard, 
  Users, 
  Image, 
  Map, 
  FileText, 
  BarChart3, 
  MessageSquare, 
  Shield, 
  Settings,
  Leaf,
  LogOut,
  Crown,
  UserCheck
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Officers",
    url: "/officers",
    icon: Users,
  },
  {
    title: "Media",
    url: "/media",
    icon: Image,
  },
  {
    title: "Mapping",
    url: "/mapping",
    icon: Map,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: FileText,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Messaging",
    url: "/messaging",
    icon: MessageSquare,
  },
  {
    title: "Roles",
    url: "/roles",
    icon: Shield,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  }
];

export function AppSidebar() {
  const location = useLocation();
  const { user, profile, signOut } = useAuth();
  
  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const getRoleIcon = () => {
    if (profile?.role === 'admin') return Crown;
    if (profile?.role === 'supervisor') return UserCheck;
    return Users;
  };

  const RoleIcon = getRoleIcon();

  return (
    <Sidebar className="border-r border-neutral-200/50 dark:border-neutral-700/50 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-sm">
      <SidebarHeader className="border-b border-neutral-200/50 dark:border-neutral-700/50 p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-xl bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-500 bg-clip-text text-transparent">
              FARMETRICS
            </h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
              Admin Dashboard
            </p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="w-full group">
                      <Link 
                        to={item.url}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group-hover:shadow-sm ${
                          isActive 
                            ? 'bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 shadow-sm' 
                            : 'text-neutral-700 dark:text-neutral-300 hover:bg-gradient-to-r hover:from-neutral-50 hover:to-neutral-100 dark:hover:from-neutral-800/50 dark:hover:to-neutral-700/50 hover:text-neutral-800 dark:hover:text-neutral-200'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-neutral-200/50 dark:border-neutral-700/50 p-4 space-y-3">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-800/50 dark:to-neutral-700/50">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white">
            <RoleIcon className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate">
              {profile?.full_name || user?.email || 'User'}
            </div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400 capitalize">
              {profile?.role || 'User'}
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <ThemeToggle />
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleSignOut}
            className="flex-1 justify-start gap-2 bg-white/50 dark:bg-neutral-800/50 hover:bg-white dark:hover:bg-neutral-700"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
