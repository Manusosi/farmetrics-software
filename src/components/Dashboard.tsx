
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
  Database,
  Activity,
  BarChart3,
  MapPin,
  Bell,
  Settings
} from "lucide-react";
import { MetricsCards } from "@/components/dashboard/MetricsCards";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { SyncStatus } from "@/components/dashboard/SyncStatus";
import { MapWidget } from "@/components/dashboard/MapWidget";

export function Dashboard() {
  return (
    <div className="min-h-screen">
      {/* Enhanced Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-40">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Dashboard Overview
                  </h1>
                  <p className="text-slate-600 font-medium">Real-time field data monitoring and analytics</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="bg-white/50 border-slate-300 hover:bg-white">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm" className="bg-white/50 border-slate-300 hover:bg-white">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                <RefreshCw className="w-4 h-4 mr-2" />
                Sync Data
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 space-y-8">
        {/* Enhanced Key Metrics */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-800">System Overview</h2>
          <MetricsCards />
        </div>

        {/* Charts and Analytics Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2">
            <ActivityChart />
          </div>
          <div className="xl:col-span-1">
            <SyncStatus />
          </div>
        </div>

        {/* Map and Recent Activity */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
          <div className="xl:col-span-3">
            <MapWidget />
          </div>
          <div className="xl:col-span-2">
            {/* Recent Data Submissions */}
            <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-slate-800">
                  <Activity className="w-5 h-5 text-blue-600" />
                  Live Activity Feed
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Real-time field data submissions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    type: "photo",
                    officer: "John Doe",
                    action: "Submitted 15 cocoa tree photos",
                    time: "2 min ago",
                    status: "pending_review",
                    location: "Ashanti Region",
                    color: "blue"
                  },
                  {
                    type: "polygon",
                    officer: "Mary Johnson",
                    action: "Updated farm boundary data",
                    time: "15 min ago",
                    status: "approved",
                    location: "Eastern Region",
                    color: "blue"
                  },
                  {
                    type: "report",
                    officer: "David Smith",
                    action: "Completed field assessment",
                    time: "1 hr ago",
                    status: "pending_review",
                    location: "Central Region",
                    color: "blue"
                  },
                  {
                    type: "video",
                    officer: "Sarah Wilson",
                    action: "Recorded field conditions",
                    time: "2 hrs ago",
                    status: "approved",
                    location: "Western Region",
                    color: "blue"
                  }
                ].map((submission, index) => (
                  <div key={index} className="group p-4 rounded-xl bg-white/70 border border-slate-200/50 hover:bg-white hover:shadow-md transition-all duration-200">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-sm`}>
                        {submission.type === 'photo' && <Image className="w-5 h-5 text-white" />}
                        {submission.type === 'polygon' && <Map className="w-5 h-5 text-white" />}
                        {submission.type === 'report' && <FileText className="w-5 h-5 text-white" />}
                        {submission.type === 'video' && <Image className="w-5 h-5 text-white" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-slate-800">{submission.officer}</span>
                          <span className="text-xs text-slate-500">•</span>
                          <span className="text-sm text-slate-600">{submission.location}</span>
                        </div>
                        <p className="text-sm text-slate-700 mb-2">{submission.action}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-500">{submission.time}</span>
                          <Badge 
                            variant={submission.status === 'approved' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {submission.status.replace('_', ' ')}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4 bg-white/50 hover:bg-white">
                  View All Activities
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
