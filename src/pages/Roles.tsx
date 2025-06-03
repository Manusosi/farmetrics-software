
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Shield, 
  Users, 
  Settings, 
  Plus, 
  Search,
  Edit,
  Trash2,
  Lock,
  Unlock,
  Eye,
  UserCheck,
  AlertTriangle
} from "lucide-react";

export function Roles() {
  const roles = [
    {
      id: 1,
      name: "Super Administrator",
      description: "Full system access with all permissions",
      users: 2,
      permissions: ["All System Access", "User Management", "Data Export", "System Configuration"],
      color: "red",
      status: "active"
    },
    {
      id: 2,
      name: "Regional Manager",
      description: "Manage field operations within assigned regions",
      users: 8,
      permissions: ["View Reports", "Manage Officers", "Approve Submissions", "Regional Analytics"],
      color: "blue",
      status: "active"
    },
    {
      id: 3,
      name: "Field Supervisor",
      description: "Supervise field officers and validate data submissions",
      users: 25,
      permissions: ["Review Submissions", "Field Officer Management", "Data Validation", "Generate Reports"],
      color: "blue",
      status: "active"
    },
    {
      id: 4,
      name: "Field Officer",
      description: "Collect field data and submit reports",
      users: 156,
      permissions: ["Submit Data", "Upload Media", "View Assignments", "Update Location"],
      color: "blue",
      status: "active"
    },
    {
      id: 5,
      name: "Data Analyst",
      description: "Analyze collected data and generate insights",
      users: 4,
      permissions: ["View All Data", "Generate Analytics", "Export Reports", "Data Visualization"],
      color: "blue",
      status: "active"
    },
    {
      id: 6,
      name: "Auditor",
      description: "Review system activities and ensure compliance",
      users: 3,
      permissions: ["Audit Logs", "Compliance Reports", "System Monitoring", "Security Reviews"],
      color: "blue",
      status: "active"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-40">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Role Management
                  </h1>
                  <p className="text-slate-600 font-medium">Configure user roles and permissions</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="bg-white/70 border-slate-300 hover:bg-white">
                <Settings className="w-4 h-4 mr-2" />
                Permissions
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                <Plus className="w-4 h-4 mr-2" />
                Create Role
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Search and Filters */}
        <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <Input placeholder="Search roles..." className="pl-10" />
              </div>
              <Button variant="outline" size="sm">
                Filter by Status
              </Button>
              <Button variant="outline" size="sm">
                Permission Level
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {roles.map((role) => (
            <Card key={role.id} className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-slate-800">{role.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          <Users className="w-3 h-3 mr-1" />
                          {role.users} users
                        </Badge>
                        <Badge 
                          variant={role.status === 'active' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {role.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
                <CardDescription className="mt-3 text-slate-600">
                  {role.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Permissions */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">Key Permissions</h4>
                  <div className="space-y-2">
                    {role.permissions.slice(0, 3).map((permission, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        {permission}
                      </div>
                    ))}
                    {role.permissions.length > 3 && (
                      <div className="text-sm text-blue-600 font-medium">
                        +{role.permissions.length - 3} more permissions
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-4 border-t border-slate-200/50">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    <UserCheck className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Permission Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <Lock className="w-5 h-5 text-blue-600" />
                System Permissions
              </CardTitle>
              <CardDescription>
                Core system access and administrative permissions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "User Management",
                "System Configuration",
                "Data Export",
                "Audit Logs",
                "Security Settings",
                "Backup Management"
              ].map((permission, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-sm font-medium text-slate-700">{permission}</span>
                  <Badge variant="secondary" className="text-xs">Admin Only</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <Unlock className="w-5 h-5 text-blue-600" />
                Field Operations
              </CardTitle>
              <CardDescription>
                Field data collection and operational permissions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Submit Field Data",
                "Upload Media Files",
                "Update GPS Coordinates",
                "Generate Reports",
                "View Assignments",
                "Approve Submissions"
              ].map((permission, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <span className="text-sm font-medium text-slate-700">{permission}</span>
                  <Badge className="text-xs bg-blue-600">Field Access</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
