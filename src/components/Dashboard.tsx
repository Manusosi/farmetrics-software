
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
  RefreshCw,
  FileText,
  Database
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
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Monitor and manage field data collected by mobile officers</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
            <Button size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Sync Mobile Data
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

        {/* Recent Data Submissions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              Recent Field Data Submissions
            </CardTitle>
            <CardDescription>
              Latest data received from field officers via mobile app
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  type: "photo",
                  officer: "John Doe",
                  action: "Submitted 15 cocoa tree photos from Farm A-23",
                  time: "2 minutes ago",
                  status: "pending_review",
                  location: "Ashanti Region"
                },
                {
                  type: "polygon",
                  officer: "Mary Johnson",
                  action: "Uploaded farm boundary polygon for Region B",
                  time: "15 minutes ago",
                  status: "approved",
                  location: "Eastern Region"
                },
                {
                  type: "report",
                  officer: "David Smith",
                  action: "Submitted supervisor assessment report",
                  time: "1 hour ago",
                  status: "pending_review",
                  location: "Central Region"
                },
                {
                  type: "video",
                  officer: "Sarah Wilson",
                  action: "Uploaded field condition video documentation",
                  time: "2 hours ago",
                  status: "approved",
                  location: "Western Region"
                }
              ].map((submission, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    submission.status === 'approved' ? 'bg-green-500' :
                    submission.status === 'pending_review' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">{submission.officer}</span>
                      <span className="text-sm text-gray-500">• {submission.location}</span>
                    </div>
                    <div className="text-gray-600">{submission.action}</div>
                    <div className="text-sm text-gray-500">{submission.time}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    {submission.type === 'photo' && <Image className="w-4 h-4 text-blue-500" />}
                    {submission.type === 'polygon' && <Map className="w-4 h-4 text-green-500" />}
                    {submission.type === 'report' && <FileText className="w-4 h-4 text-purple-500" />}
                    {submission.type === 'video' && <Image className="w-4 h-4 text-red-500" />}
                    <Badge variant={
                      submission.status === 'approved' ? 'default' :
                      submission.status === 'pending_review' ? 'secondary' :
                      'destructive'
                    }>
                      {submission.status.replace('_', ' ')}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Button variant="outline" className="w-full">
                View All Submissions
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
