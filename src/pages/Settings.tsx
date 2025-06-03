
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { 
  Settings as SettingsIcon, 
  Database, 
  Shield, 
  Bell, 
  Mail,
  Globe,
  Save,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Clock,
  Server,
  Key,
  Monitor
} from "lucide-react";

export function Settings() {
  const systemStatus = [
    { name: "Database Connection", status: "healthy", value: "Connected", color: "green" },
    { name: "API Services", status: "healthy", value: "All Online", color: "green" },
    { name: "Data Sync", status: "warning", value: "2 min delay", color: "yellow" },
    { name: "Storage Usage", status: "healthy", value: "68% used", color: "green" },
    { name: "Backup Status", status: "healthy", value: "Last: 2 hrs ago", color: "green" },
    { name: "SSL Certificate", status: "healthy", value: "Valid until 2025", color: "green" }
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <SettingsIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                System Settings
              </h1>
              <p className="text-slate-600 font-medium">Configure system preferences and security</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="bg-white/70 border-slate-300 hover:bg-white">
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset to Defaults
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* System Status */}
      <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <Monitor className="w-5 h-5 text-blue-600" />
            System Status
          </CardTitle>
          <CardDescription>
            Current system health and performance metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {systemStatus.map((item, index) => (
              <div key={index} className="p-4 rounded-xl bg-white border border-slate-200/50 hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">{item.name}</span>
                  <div className={`w-3 h-3 rounded-full ${
                    item.color === 'green' ? 'bg-green-500' : 
                    item.color === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'
                  }`} />
                </div>
                <div className="text-sm text-slate-600">{item.value}</div>
                <Badge 
                  variant={item.status === 'healthy' ? 'default' : 'secondary'} 
                  className={`text-xs mt-2 ${
                    item.status === 'healthy' ? 'bg-green-100 text-green-700' :
                    item.status === 'warning' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                  }`}
                >
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* General Settings */}
        <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Globe className="w-5 h-5 text-blue-600" />
              General Settings
            </CardTitle>
            <CardDescription>
              Basic system configuration and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="systemName">System Name</Label>
              <Input id="systemName" defaultValue="FARMETRICS Admin Dashboard" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="timezone">Default Timezone</Label>
              <Input id="timezone" defaultValue="GMT (Greenwich Mean Time)" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="language">Default Language</Label>
              <Input id="language" defaultValue="English (US)" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Maintenance Mode</Label>
                <p className="text-sm text-slate-600">Enable system maintenance mode</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto-backup</Label>
                <p className="text-sm text-slate-600">Automatically backup data daily</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Shield className="w-5 h-5 text-blue-600" />
              Security Settings
            </CardTitle>
            <CardDescription>
              Authentication and security configurations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
              <Input id="sessionTimeout" type="number" defaultValue="30" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="maxAttempts">Max Login Attempts</Label>
              <Input id="maxAttempts" type="number" defaultValue="5" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-slate-600">Require 2FA for all users</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Password Complexity</Label>
                <p className="text-sm text-slate-600">Enforce strong password requirements</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>API Rate Limiting</Label>
                <p className="text-sm text-slate-600">Limit API requests per minute</p>
              </div>
              <Switch defaultChecked />
            </div>

            <Button variant="outline" className="w-full">
              <Key className="w-4 h-4 mr-2" />
              Regenerate API Keys
            </Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Bell className="w-5 h-5 text-blue-600" />
              Notification Settings
            </CardTitle>
            <CardDescription>
              Configure system alerts and notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="adminEmail">Admin Email</Label>
              <Input id="adminEmail" type="email" defaultValue="admin@farmetrics.com" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <p className="text-sm text-slate-600">Send system alerts via email</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Critical Alerts</Label>
                <p className="text-sm text-slate-600">Immediate notification for critical issues</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Weekly Reports</Label>
                <p className="text-sm text-slate-600">Automated weekly system reports</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>User Activity Alerts</Label>
                <p className="text-sm text-slate-600">Notify on suspicious user activity</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Database className="w-5 h-5 text-blue-600" />
              Data Management
            </CardTitle>
            <CardDescription>
              Database and storage configuration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="retentionPeriod">Data Retention (days)</Label>
              <Input id="retentionPeriod" type="number" defaultValue="365" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="backupFrequency">Backup Frequency</Label>
              <Input id="backupFrequency" defaultValue="Daily at 2:00 AM" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto-compress Old Data</Label>
                <p className="text-sm text-slate-600">Compress data older than 90 days</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Data Encryption</Label>
                <p className="text-sm text-slate-600">Encrypt sensitive data at rest</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="space-y-2">
              <Button variant="outline" className="w-full">
                <Database className="w-4 h-4 mr-2" />
                Manual Backup
              </Button>
              <Button variant="outline" className="w-full">
                <RefreshCw className="w-4 h-4 mr-2" />
                Optimize Database
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
