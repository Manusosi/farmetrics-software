
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Image, 
  Map, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle,
  Clock,
  Download,
  RefreshCw
} from "lucide-react";
import { MetricsCards } from "@/components/dashboard/MetricsCards";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { SyncStatus } from "@/components/dashboard/SyncStatus";
import { MapWidget } from "@/components/dashboard/MapWidget";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your field operations.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
            <Button size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Sync Data
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Key Metrics */}
        <MetricsCards />

        {/* Charts and Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ActivityChart />
          <SyncStatus />
        </div>

        {/* Map Widget */}
        <MapWidget />

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Latest updates from field officers and system events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  type: "upload",
                  officer: "John Doe",
                  action: "Uploaded 15 photos from Farm A-23",
                  time: "2 minutes ago",
                  status: "success"
                },
                {
                  type: "sync",
                  officer: "Mary Johnson",
                  action: "Synced polygon data for Region B",
                  time: "15 minutes ago",
                  status: "success"
                },
                {
                  type: "report",
                  officer: "David Smith",
                  action: "Submitted supervisor report for cocoa assessment",
                  time: "1 hour ago",
                  status: "pending"
                },
                {
                  type: "error",
                  officer: "System",
                  action: "Sync failed for Officer Badge #127",
                  time: "2 hours ago",
                  status: "error"
                }
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg border border-gray-100">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === 'success' ? 'bg-green-500' :
                    activity.status === 'pending' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`} />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{activity.officer}</div>
                    <div className="text-gray-600">{activity.action}</div>
                    <div className="text-sm text-gray-500">{activity.time}</div>
                  </div>
                  <Badge variant={
                    activity.status === 'success' ? 'default' :
                    activity.status === 'pending' ? 'secondary' :
                    'destructive'
                  }>
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
