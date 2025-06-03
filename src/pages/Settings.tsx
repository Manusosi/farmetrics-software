
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { 
  Settings as SettingsIcon, 
  Database, 
  Wifi, 
  Bell, 
  Shield, 
  Globe,
  Smartphone,
  Clock,
  Save,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Server,
  Key,
  Mail,
  Download
} from "lucide-react";

export function Settings() {
  const systemStatus = [
    { service: "Database", status: "healthy", uptime: "99.9%", color: "green" },
    { service: "API Gateway", status: "healthy", uptime: "99.8%", color: "green" },
    { service: "File Storage", status: "degraded", uptime: "98.2%", color: "yellow" },
    { service: "Sync Service", status: "healthy", uptime: "99.7%", color: "green" },
    { service: "Notification Service", status: "maintenance", uptime: "95.1%", color: "red" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-40">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-slate-600 rounded-xl flex items-center justify-center shadow-lg">
                  <SettingsIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    System Settings
                  </h1>
                  <p className="text-slate-600 font-medium">Configure system preferences and integrations</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="bg-white/70 border-slate-300 hover:bg-white">
                <Download className="w-4 h-4 mr-2" />
                Export Config
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* System Status */}
        <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Server className="w-5 h-5 text-green-600" />
              System Status
            </CardTitle>
            <CardDescription className="text-slate-600">
              Monitor system health and service availability
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {systemStatus.map((service, index) => (
                <div key={index} className="p-4 rounded-xl bg-white/50 border border-slate-200/50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-slate-900">{service.service}</h4>
                    <Badge 
                      variant="outline"
                      className={`${
                        service.color === 'green' ? 'border-green-300 text-green-700 bg-green-50' :
                        service.color === 'yellow' ? 'border-yellow-300 text-yellow-700 bg-yellow-50' :
                        'border-red-300 text-red-700 bg-red-50'
                      }`}
                    >
                      {service.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-slate-600">
                    Uptime: <span className="font-medium">{service.uptime}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* API Configuration */}
          <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <Globe className="w-5 h-5 text-blue-600" />
                API Configuration
              </CardTitle>
              <CardDescription className="text-slate-600">
                Configure external API integrations and endpoints
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Base API URL</label>
                  <Input 
                    placeholder="https://api.farmetrics.com/v1" 
                    className="bg-white/50 border-slate-300"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">API Key</label>
                  <div className="flex gap-2">
                    <Input 
                      type="password" 
                      placeholder="••••••••••••••••" 
                      className="bg-white/50 border-slate-300"
                    />
                    <Button variant="outline" size="sm">
                      <Key className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-slate-700">Enable API Logging</label>
                    <p className="text-xs text-slate-500">Log all API requests for debugging</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-slate-700">Rate Limiting</label>
                    <p className="text-xs text-slate-500">Enable API rate limiting protection</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <Bell className="w-5 h-5 text-purple-600" />
                Notification Settings
              </CardTitle>
              <CardDescription className="text-slate-600">
                Configure system notifications and alerts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Email Server (SMTP)</label>
                  <Input 
                    placeholder="smtp.gmail.com" 
                    className="bg-white/50 border-slate-300"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Default Sender Email</label>
                  <Input 
                    placeholder="noreply@farmetrics.com" 
                    className="bg-white/50 border-slate-300"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-slate-700">Email Notifications</label>
                      <p className="text-xs text-slate-500">Send email alerts for critical events</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-slate-700">SMS Notifications</label>
                      <p className="text-xs text-slate-500">Send SMS alerts to mobile devices</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-slate-700">Push Notifications</label>
                      <p className="text-xs text-slate-500">Send push notifications to mobile app</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sync Settings */}
          <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <RefreshCw className="w-5 h-5 text-green-600" />
                Data Synchronization
              </CardTitle>
              <CardDescription className="text-slate-600">
                Configure data sync intervals and policies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Sync Interval (minutes)</label>
                  <Input 
                    type="number" 
                    placeholder="15" 
                    className="bg-white/50 border-slate-300"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-slate-700">Auto Sync</label>
                      <p className="text-xs text-slate-500">Automatically sync data at intervals</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-slate-700">Offline Mode</label>
                      <p className="text-xs text-slate-500">Allow offline data collection</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-slate-700">Conflict Resolution</label>
                      <p className="text-xs text-slate-500">Automatically resolve data conflicts</p>
                    </div>
                    <Switch />
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Sync Now
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <Shield className="w-5 h-5 text-red-600" />
                Security & Privacy
              </CardTitle>
              <CardDescription className="text-slate-600">
                Configure security policies and access controls
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Session Timeout (hours)</label>
                  <Input 
                    type="number" 
                    placeholder="8" 
                    className="bg-white/50 border-slate-300"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-slate-700">Two-Factor Authentication</label>
                      <p className="text-xs text-slate-500">Require 2FA for all users</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-slate-700">Password Policy</label>
                      <p className="text-xs text-slate-500">Enforce strong password requirements</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-slate-700">Audit Logging</label>
                      <p className="text-xs text-slate-500">Log all user actions for compliance</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-slate-700">Data Encryption</label>
                      <p className="text-xs text-slate-500">Encrypt sensitive data at rest</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
