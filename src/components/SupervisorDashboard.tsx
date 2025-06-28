
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  CheckCircle,
  Clock,
  BarChart3,
  MapPin,
  FileText,
  Activity
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export function SupervisorDashboard() {
  const { profile } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-40">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Supervisor Dashboard
                  </h1>
                  <p className="text-slate-600 font-medium">Welcome back, {profile?.full_name || 'Supervisor'}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                Supervisor
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 space-y-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-slate-800 text-sm font-medium">
                <Users className="w-4 h-4 text-blue-600" />
                Field Officers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">12</div>
              <p className="text-xs text-slate-600 mt-1">Active officers</p>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-slate-800 text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Completed Visits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">245</div>
              <p className="text-xs text-slate-600 mt-1">This month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-slate-800 text-sm font-medium">
                <Clock className="w-4 h-4 text-orange-600" />
                Pending Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">8</div>
              <p className="text-xs text-slate-600 mt-1">Require attention</p>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-slate-800 text-sm font-medium">
                <BarChart3 className="w-4 h-4 text-purple-600" />
                Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">92%</div>
              <p className="text-xs text-slate-600 mt-1">Team efficiency</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Areas */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Recent Activities */}
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <Activity className="w-5 h-5 text-blue-600" />
                Recent Field Activities
              </CardTitle>
              <CardDescription className="text-slate-600">
                Latest updates from your field officers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { officer: "John Doe", action: "Completed farm visit", location: "Central Region", time: "2 hours ago" },
                { officer: "Jane Smith", action: "Uploaded field photos", location: "Eastern Region", time: "4 hours ago" },
                { officer: "Mike Johnson", action: "Submitted harvest report", location: "Western Region", time: "6 hours ago" },
                { officer: "Sarah Wilson", action: "Completed training session", location: "Northern Region", time: "1 day ago" },
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/70 border border-slate-200/50">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-slate-800">{activity.officer}</span>
                      <span className="text-xs text-slate-500">•</span>
                      <span className="text-sm text-slate-600">{activity.location}</span>
                    </div>
                    <p className="text-sm text-slate-700 mb-1">{activity.action}</p>
                    <span className="text-xs text-slate-500">{activity.time}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tasks & Assignments */}
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <FileText className="w-5 h-5 text-green-600" />
                Tasks & Assignments
              </CardTitle>
              <CardDescription className="text-slate-600">
                Pending items requiring your attention
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { task: "Review weekly reports", priority: "high", due: "Today" },
                { task: "Approve field officer transfers", priority: "medium", due: "Tomorrow" },
                { task: "Conduct team meeting", priority: "low", due: "This week" },
                { task: "Update training materials", priority: "medium", due: "Next week" },
              ].map((task, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/70 border border-slate-200/50">
                  <div className="flex-1">
                    <p className="font-medium text-slate-800">{task.task}</p>
                    <p className="text-sm text-slate-600">Due: {task.due}</p>
                  </div>
                  <Badge 
                    variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'default' : 'secondary'}
                    className="ml-2"
                  >
                    {task.priority}
                  </Badge>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4 bg-white/50 hover:bg-white">
                View All Tasks
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
