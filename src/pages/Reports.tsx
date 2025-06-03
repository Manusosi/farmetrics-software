
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  FileText, 
  Search, 
  Filter,
  Download,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  User,
  Calendar,
  MapPin,
  Paperclip,
  BarChart3,
  TrendingUp,
  AlertCircle,
  Award
} from "lucide-react";

export function Reports() {
  const supervisorReports = [
    {
      id: "RPT-001",
      title: "Weekly Field Assessment - Ashanti Region",
      supervisor: "Kwame Osei",
      officer: "John Doe",
      region: "Ashanti Region",
      submittedDate: "2024-01-15",
      status: "pending",
      priority: "high",
      attachments: 5,
      summary: "Comprehensive assessment of cocoa farm conditions and officer performance metrics",
      score: 94,
      type: "weekly"
    },
    {
      id: "RPT-002", 
      title: "Pest Control Effectiveness Analysis",
      supervisor: "Akosua Mensah",
      officer: "Mary Johnson",
      region: "Eastern Region", 
      submittedDate: "2024-01-14",
      status: "approved",
      priority: "medium",
      attachments: 3,
      summary: "Detailed analysis of recent pest control measures and their documented impact on crop health",
      score: 87,
      type: "assessment"
    },
    {
      id: "RPT-003",
      title: "Infrastructure Development Report",
      supervisor: "Kofi Boateng",
      officer: "David Smith", 
      region: "Central Region",
      submittedDate: "2024-01-13",
      status: "requires_review",
      priority: "low",
      attachments: 8,
      summary: "Comprehensive evaluation of farm infrastructure needs and strategic improvement recommendations",
      score: 76,
      type: "development"
    },
    {
      id: "RPT-004",
      title: "Harvest Season Readiness Assessment",
      supervisor: "Ama Osei",
      officer: "Sarah Wilson",
      region: "Western Region",
      submittedDate: "2024-01-12", 
      status: "approved",
      priority: "high",
      attachments: 4,
      summary: "Strategic readiness evaluation for upcoming harvest season operations and logistics planning",
      score: 92,
      type: "seasonal"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Enhanced Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-40">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Supervisor Reports
                  </h1>
                  <p className="text-slate-600 font-medium">Field assessments and performance analytics</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="bg-white/50 hover:bg-white">
                <Download className="w-4 h-4 mr-2" />
                Export Analytics
              </Button>
              <Button variant="outline" className="bg-white/50 hover:bg-white">
                <Filter className="w-4 h-4 mr-2" />
                Advanced Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Total Reports</p>
                  <p className="text-3xl font-bold text-slate-900">289</p>
                  <p className="text-xs text-blue-600 font-medium mt-1">+18 this month</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Pending Review</p>
                  <p className="text-3xl font-bold text-yellow-600">23</p>
                  <p className="text-xs text-yellow-600 font-medium mt-1">Awaiting approval</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Avg Score</p>
                  <p className="text-3xl font-bold text-emerald-600">87.4</p>
                  <p className="text-xs text-emerald-600 font-medium mt-1">+2.3 vs last month</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">High Priority</p>
                  <p className="text-3xl font-bold text-red-600">8</p>
                  <p className="text-xs text-red-600 font-medium mt-1">Urgent attention</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Search */}
        <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input 
                  placeholder="Search reports by title, supervisor, or region..." 
                  className="pl-10 bg-white/70 border-slate-300 focus:bg-white"
                />
              </div>
              <Button variant="outline" className="bg-white/50 hover:bg-white">Status</Button>
              <Button variant="outline" className="bg-white/50 hover:bg-white">Priority</Button>
              <Button variant="outline" className="bg-white/50 hover:bg-white">Date Range</Button>
              <Button variant="outline" className="bg-white/50 hover:bg-white">Score Range</Button>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Reports List */}
        <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
          <CardHeader className="pb-6">
            <CardTitle className="text-xl text-slate-800">Assessment Reports</CardTitle>
            <CardDescription className="text-slate-600">
              Comprehensive field evaluations and performance monitoring reports
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {supervisorReports.map((report) => (
                <div key={report.id} className="group p-6 border border-slate-200/50 rounded-2xl bg-white/70 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                          report.type === 'weekly' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                          report.type === 'assessment' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                          report.type === 'development' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                          'bg-gradient-to-r from-orange-500 to-orange-600'
                        }`}>
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{report.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-slate-600">
                            <span className="font-medium">{report.supervisor}</span>
                            <span>•</span>
                            <span>{report.region}</span>
                            <span>•</span>
                            <span className="capitalize">{report.type} report</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-700 mb-4 leading-relaxed">{report.summary}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="flex items-center gap-3">
                          <User className="w-4 h-4 text-slate-400" />
                          <div>
                            <p className="text-xs font-medium text-slate-600">Field Officer</p>
                            <p className="text-sm text-slate-800">{report.officer}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar className="w-4 h-4 text-slate-400" />
                          <div>
                            <p className="text-xs font-medium text-slate-600">Submitted</p>
                            <p className="text-sm text-slate-800">{report.submittedDate}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <TrendingUp className="w-4 h-4 text-slate-400" />
                          <div>
                            <p className="text-xs font-medium text-slate-600">Score</p>
                            <p className="text-sm font-bold text-emerald-600">{report.score}/100</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Paperclip className="w-4 h-4 text-slate-400" />
                          <div>
                            <p className="text-xs font-medium text-slate-600">Attachments</p>
                            <p className="text-sm text-slate-800">{report.attachments} files</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-3 ml-6">
                      <div className="flex gap-2">
                        <Badge 
                          variant={
                            report.priority === 'high' ? 'destructive' :
                            report.priority === 'medium' ? 'default' :
                            'secondary'
                          }
                          className="capitalize"
                        >
                          {report.priority} priority
                        </Badge>
                        <Badge 
                          variant={
                            report.status === 'approved' ? 'default' :
                            report.status === 'pending' ? 'secondary' :
                            'destructive'
                          }
                          className="capitalize"
                        >
                          {report.status.replace('_', ' ')}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="text-sm text-slate-600 font-medium">
                      Report ID: {report.id}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="bg-white/50 hover:bg-white">
                        <Eye className="w-4 h-4 mr-1" />
                        View Full Report
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="outline" className="text-amber-600 border-amber-200 hover:bg-amber-50">
                        <XCircle className="w-4 h-4 mr-1" />
                        Request Changes
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex items-center justify-center">
              <Button variant="outline" className="bg-white/50 hover:bg-white">
                Load More Reports
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
