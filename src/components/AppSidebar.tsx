
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
import { Link, useLocation } from "react-router-dom";
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
  Leaf
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
  
  return (
    <Sidebar className="border-r border-slate-200/50 bg-white/95 backdrop-blur-sm">
      <SidebarHeader className="border-b border-slate-200/50 p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">FARMETRICS</h1>
            <p className="text-sm text-slate-600 font-medium">Admin Dashboard</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
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
                            ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 shadow-sm' 
                            : 'text-slate-700 hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:text-slate-800'
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
      
      <SidebarFooter className="border-t border-slate-200/50 p-4">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
            AD
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-slate-900">Admin User</div>
            <div className="text-xs text-slate-600">admin@farmetrics.com</div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
