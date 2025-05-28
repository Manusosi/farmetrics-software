
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
  Paperclip
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
      summary: "Comprehensive assessment of cocoa farm conditions and officer performance"
    },
    {
      id: "RPT-002", 
      title: "Pest Control Effectiveness Report",
      supervisor: "Akosua Mensah",
      officer: "Mary Johnson",
      region: "Eastern Region", 
      submittedDate: "2024-01-14",
      status: "approved",
      priority: "medium",
      attachments: 3,
      summary: "Analysis of recent pest control measures and their impact"
    },
    {
      id: "RPT-003",
      title: "Farm Infrastructure Assessment",
      supervisor: "Kofi Boateng",
      officer: "David Smith", 
      region: "Central Region",
      submittedDate: "2024-01-13",
      status: "requires_review",
      priority: "low",
      attachments: 8,
      summary: "Evaluation of farm infrastructure needs and improvement recommendations"
    },
    {
      id: "RPT-004",
      title: "Harvest Season Preparation Report",
      supervisor: "Ama Osei",
      officer: "Sarah Wilson",
      region: "Western Region",
      submittedDate: "2024-01-12", 
      status: "approved",
      priority: "high",
      attachments: 4,
      summary: "Readiness assessment for upcoming harvest season activities"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Supervisor Reports</h1>
            <p className="text-gray-600 mt-1">Review and manage field assessment reports</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Reports
            </Button>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Reports</p>
                <p className="text-2xl font-bold">289</p>
              </div>
              <FileText className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Review</p>
                <p className="text-2xl font-bold text-yellow-600">23</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Approved This Week</p>
                <p className="text-2xl font-bold text-green-600">45</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">High Priority</p>
                <p className="text-2xl font-bold text-red-600">8</p>
              </div>
              <XCircle className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search reports by title, supervisor, or region..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline">Filter by Status</Button>
            <Button variant="outline">Filter by Priority</Button>
            <Button variant="outline">Filter by Date</Button>
          </div>
        </CardContent>
      </Card>

      {/* Reports List */}
      <Card>
        <CardHeader>
          <CardTitle>Supervisor Reports</CardTitle>
          <CardDescription>Comprehensive field assessments and monitoring reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {supervisorReports.map((report) => (
              <div key={report.id} className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{report.title}</h3>
                      <Badge variant={
                        report.priority === 'high' ? 'destructive' :
                        report.priority === 'medium' ? 'default' :
                        'secondary'
                      }>
                        {report.priority} priority
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{report.summary}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <div>
                          <p className="font-medium">Supervisor</p>
                          <p>{report.supervisor}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <div>
                          <p className="font-medium">Field Officer</p>
                          <p>{report.officer}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <div>
                          <p className="font-medium">Region</p>
                          <p>{report.region}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <div>
                          <p className="font-medium">Submitted</p>
                          <p>{report.submittedDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-3">
                    <Badge variant={
                      report.status === 'approved' ? 'default' :
                      report.status === 'pending' ? 'secondary' :
                      'destructive'
                    }>
                      {report.status.replace('_', ' ')}
                    </Badge>
                    
                    {report.attachments > 0 && (
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Paperclip className="w-4 h-4" />
                        <span>{report.attachments} attachments</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-600">
                    Report ID: {report.id}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-1" />
                      View Report
                    </Button>
                    <Button size="sm" variant="outline" className="text-green-600 border-green-200 hover:bg-green-50">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Approve
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                      <XCircle className="w-4 h-4 mr-1" />
                      Request Changes
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex items-center justify-center">
            <Button variant="outline">Load More Reports</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
