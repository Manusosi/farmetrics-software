
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
    description: "Overview & Key Metrics"
  },
  {
    title: "Field Officers",
    url: "/officers",
    icon: Users,
    description: "Manage Field Teams"
  },
  {
    title: "Media Review",
    url: "/media",
    icon: Image,
    description: "Photos & Videos"
  },
  {
    title: "Farm Mapping",
    url: "/mapping",
    icon: Map,
    description: "GPS & Polygons"
  },
  {
    title: "Reports",
    url: "/reports",
    icon: FileText,
    description: "Supervisor Reports"
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart3,
    description: "Data Insights"
  },
  {
    title: "Messaging",
    url: "/messaging",
    icon: MessageSquare,
    description: "Communications"
  },
  {
    title: "User Roles",
    url: "/roles",
    icon: Shield,
    description: "Permissions"
  },
  {
    title: "System Settings",
    url: "/settings",
    icon: Settings,
    description: "API & Sync"
  }
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="border-b border-gray-200 p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-xl text-gray-900">FARMETRICS</h1>
            <p className="text-sm text-gray-600">Admin Dashboard</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full">
                    <a 
                      href={item.url}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                    >
                      <item.icon className="w-5 h-5" />
                      <div className="flex-1">
                        <div className="font-medium">{item.title}</div>
                        <div className="text-xs text-gray-500">{item.description}</div>
                      </div>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-gray-200 p-4">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900">Admin User</div>
            <div className="text-xs text-gray-500">admin@farmetrics.com</div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
