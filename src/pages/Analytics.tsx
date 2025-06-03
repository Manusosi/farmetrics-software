
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  MapPin, 
  Calendar,
  Download,
  Filter,
  Eye,
  Target,
  Activity
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

export function Analytics() {
  const performanceData = [
    { month: 'Jan', submissions: 1200, approved: 980, rejected: 220 },
    { month: 'Feb', submissions: 1350, approved: 1100, rejected: 250 },
    { month: 'Mar', submissions: 1500, approved: 1250, rejected: 250 },
    { month: 'Apr', submissions: 1680, approved: 1400, rejected: 280 },
    { month: 'May', submissions: 1800, approved: 1520, rejected: 280 },
    { month: 'Jun', submissions: 1950, approved: 1650, rejected: 300 }
  ];

  const regionData = [
    { name: 'Ashanti', value: 35, color: '#10b981' },
    { name: 'Eastern', value: 28, color: '#3b82f6' },
    { name: 'Central', value: 20, color: '#f59e0b' },
    { name: 'Western', value: 17, color: '#8b5cf6' }
  ];

  const trendData = [
    { week: 'Week 1', photos: 450, videos: 80, reports: 60 },
    { week: 'Week 2', photos: 520, videos: 95, reports: 75 },
    { week: 'Week 3', photos: 480, videos: 88, reports: 65 },
    { week: 'Week 4', photos: 600, videos: 110, reports: 85 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-40">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Analytics & Insights
                  </h1>
                  <p className="text-slate-600 font-medium">Comprehensive data analysis and performance metrics</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="bg-white/70 border-slate-300 hover:bg-white">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Key Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Total Submissions", value: "12,450", change: "+12.5%", icon: Activity, color: "blue", trend: "up" },
            { title: "Approval Rate", value: "87.2%", change: "+2.1%", icon: Target, color: "green", trend: "up" },
            { title: "Active Officers", value: "156", change: "+8", icon: Users, color: "purple", trend: "up" },
            { title: "Coverage Areas", value: "89", change: "-2", icon: MapPin, color: "orange", trend: "down" }
          ].map((metric, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-${metric.color}-500 to-${metric.color}-600 flex items-center justify-center shadow-lg`}>
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                    metric.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {metric.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {metric.change}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-slate-900">{metric.value}</div>
                  <div className="text-sm text-slate-600 font-medium">{metric.title}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Performance Trends */}
          <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Monthly Performance Trends
              </CardTitle>
              <CardDescription className="text-slate-600">
                Submission, approval, and rejection rates over time
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Bar dataKey="submissions" fill="#3b82f6" name="Total Submissions" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="approved" fill="#10b981" name="Approved" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="rejected" fill="#ef4444" name="Rejected" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Regional Distribution */}
          <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <MapPin className="w-5 h-5 text-purple-600" />
                Regional Distribution
              </CardTitle>
              <CardDescription className="text-slate-600">
                Data submissions by geographical region
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={regionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {regionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {regionData.map((region, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: region.color }}
                    />
                    <span className="text-sm font-medium text-slate-700">{region.name}</span>
                    <span className="text-sm text-slate-500 ml-auto">{region.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Trends */}
        <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Calendar className="w-5 h-5 text-green-600" />
              Weekly Activity Trends
            </CardTitle>
            <CardDescription className="text-slate-600">
              Weekly breakdown of photos, videos, and reports submitted
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="week" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Line type="monotone" dataKey="photos" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }} />
                <Line type="monotone" dataKey="videos" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }} />
                <Line type="monotone" dataKey="reports" stroke="#f59e0b" strokeWidth={3} dot={{ fill: '#f59e0b', strokeWidth: 2, r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
