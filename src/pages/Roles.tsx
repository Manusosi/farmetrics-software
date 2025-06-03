
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Shield, 
  Users, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  Settings,
  CheckCircle,
  XCircle,
  Crown,
  User,
  UserCheck
} from "lucide-react";

export function Roles() {
  const roles = [
    {
      id: 1,
      name: "Super Administrator",
      description: "Full system access with all permissions",
      userCount: 2,
      permissions: {
        dashboard: true,
        officers: true,
        media: true,
        mapping: true,
        reports: true,
        analytics: true,
        messaging: true,
        roles: true,
        settings: true
      },
      color: "red"
    },
    {
      id: 2,
      name: "Regional Manager",
      description: "Regional oversight and management capabilities",
      userCount: 8,
      permissions: {
        dashboard: true,
        officers: true,
        media: true,
        mapping: true,
        reports: true,
        analytics: true,
        messaging: true,
        roles: false,
        settings: false
      },
      color: "purple"
    },
    {
      id: 3,
      name: "Field Supervisor",
      description: "Supervise field operations and review submissions",
      userCount: 25,
      permissions: {
        dashboard: true,
        officers: true,
        media: true,
        mapping: true,
        reports: true,
        analytics: false,
        messaging: true,
        roles: false,
        settings: false
      },
      color: "blue"
    },
    {
      id: 4,
      name: "Data Analyst",
      description: "Access to analytics and reporting features",
      userCount: 12,
      permissions: {
        dashboard: true,
        officers: false,
        media: false,
        mapping: true,
        reports: true,
        analytics: true,
        messaging: false,
        roles: false,
        settings: false
      },
      color: "green"
    },
    {
      id: 5,
      name: "Field Officer",
      description: "Basic field data collection and submission",
      userCount: 156,
      permissions: {
        dashboard: true,
        officers: false,
        media: true,
        mapping: true,
        reports: false,
        analytics: false,
        messaging: true,
        roles: false,
        settings: false
      },
      color: "orange"
    }
  ];

  const users = [
    {
      id: 1,
      name: "Admin User",
      email: "admin@farmetrics.com",
      role: "Super Administrator",
      status: "active",
      lastLogin: "2 hours ago",
      region: "All Regions"
    },
    {
      id: 2,
      name: "John Manager",
      email: "john.manager@farmetrics.com",
      role: "Regional Manager",
      status: "active",
      lastLogin: "1 day ago",
      region: "Ashanti"
    },
    {
      id: 3,
      name: "Sarah Supervisor",
      email: "sarah.supervisor@farmetrics.com",
      role: "Field Supervisor",
      status: "active",
      lastLogin: "3 hours ago",
      region: "Eastern"
    },
    {
      id: 4,
      name: "Mike Analyst",
      email: "mike.analyst@farmetrics.com",
      role: "Data Analyst",
      status: "inactive",
      lastLogin: "1 week ago",
      region: "Central"
    }
  ];

  const permissionLabels = {
    dashboard: "Dashboard Access",
    officers: "Officer Management",
    media: "Media Review",
    mapping: "Farm Mapping",
    reports: "Reports",
    analytics: "Analytics",
    messaging: "Messaging",
    roles: "Role Management",
    settings: "System Settings"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-40">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    User Roles & Permissions
                  </h1>
                  <p className="text-slate-600 font-medium">Manage user access and system permissions</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="bg-white/70 border-slate-300 hover:bg-white">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700">
                <Plus className="w-4 h-4 mr-2" />
                Create Role
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Roles Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {roles.map((role) => (
            <Card key={role.id} className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-${role.color}-500 to-${role.color}-600 flex items-center justify-center shadow-lg`}>
                    {role.name === "Super Administrator" ? <Crown className="w-6 h-6 text-white" /> :
                     role.name === "Regional Manager" ? <UserCheck className="w-6 h-6 text-white" /> :
                     <User className="w-6 h-6 text-white" />}
                  </div>
                  <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                    {role.userCount} users
                  </Badge>
                </div>
                <div>
                  <CardTitle className="text-lg text-slate-900">{role.name}</CardTitle>
                  <CardDescription className="text-slate-600 mt-1">
                    {role.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">Permissions</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(role.permissions).map(([key, hasPermission]) => (
                      <div key={key} className="flex items-center gap-2">
                        {hasPermission ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-500" />
                        )}
                        <span className="text-xs text-slate-600 capitalize">{key}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Users Management */}
        <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-slate-800">
                  <Users className="w-5 h-5 text-blue-600" />
                  User Management
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Manage user accounts and role assignments
                </CardDescription>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input 
                    placeholder="Search users..." 
                    className="pl-10 bg-white/50 border-slate-300 w-64"
                  />
                </div>
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add User
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50/50 border-b border-slate-200/50">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">User</th>
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Role</th>
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Region</th>
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Status</th>
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Last Login</th>
                    <th className="text-left py-4 px-6 font-semibold text-slate-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-slate-200/50 hover:bg-white/50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">{user.name}</div>
                            <div className="text-sm text-slate-600">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <Badge variant="outline" className="border-blue-300 text-blue-700">
                          {user.role}
                        </Badge>
                      </td>
                      <td className="py-4 px-6 text-slate-700">{user.region}</td>
                      <td className="py-4 px-6">
                        <Badge 
                          variant={user.status === 'active' ? 'default' : 'secondary'}
                          className={user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}
                        >
                          {user.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-6 text-slate-600">{user.lastLogin}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
