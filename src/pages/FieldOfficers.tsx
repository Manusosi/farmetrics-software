
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  Search, 
  Plus, 
  MapPin, 
  Activity,
  Clock,
  Phone,
  Mail,
  Edit,
  MoreHorizontal
} from "lucide-react";

export function FieldOfficers() {
  const officers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@farmetrics.com",
      phone: "+233 24 123 4567",
      region: "Ashanti Region",
      zone: "Zone A-23",
      status: "active",
      lastSync: "2 minutes ago",
      totalSubmissions: 1247,
      thisWeek: 89,
      joinDate: "Jan 2024"
    },
    {
      id: 2,
      name: "Mary Johnson",
      email: "mary.johnson@farmetrics.com", 
      phone: "+233 24 234 5678",
      region: "Eastern Region",
      zone: "Zone B-15",
      status: "active",
      lastSync: "15 minutes ago",
      totalSubmissions: 892,
      thisWeek: 67,
      joinDate: "Feb 2024"
    },
    {
      id: 3,
      name: "David Smith",
      email: "david.smith@farmetrics.com",
      phone: "+233 24 345 6789", 
      region: "Central Region",
      zone: "Zone C-08",
      status: "inactive",
      lastSync: "3 hours ago",
      totalSubmissions: 634,
      thisWeek: 23,
      joinDate: "Mar 2024"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah.wilson@farmetrics.com",
      phone: "+233 24 456 7890",
      region: "Western Region", 
      zone: "Zone D-12",
      status: "active",
      lastSync: "45 minutes ago",
      totalSubmissions: 1156,
      thisWeek: 78,
      joinDate: "Dec 2023"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Field Officers</h1>
            <p className="text-gray-600 mt-1">Manage field teams and monitor their activity</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add New Officer
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Officers</p>
                <p className="text-2xl font-bold">34</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Today</p>
                <p className="text-2xl font-bold text-green-600">28</p>
              </div>
              <Activity className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Inactive</p>
                <p className="text-2xl font-bold text-red-600">6</p>
              </div>
              <Clock className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Regions Covered</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <MapPin className="w-8 h-8 text-purple-500" />
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
                placeholder="Search officers by name, email, or region..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline">Filter by Region</Button>
            <Button variant="outline">Filter by Status</Button>
          </div>
        </CardContent>
      </Card>

      {/* Officers Table */}
      <Card>
        <CardHeader>
          <CardTitle>Field Officers Directory</CardTitle>
          <CardDescription>Complete list of field officers and their current status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {officers.map((officer) => (
              <div key={officer.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {officer.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{officer.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {officer.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        {officer.phone}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {officer.region} • {officer.zone}
                      </span>
                      <span>Joined {officer.joinDate}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Total Submissions</p>
                    <p className="text-lg font-semibold">{officer.totalSubmissions.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">This Week</p>
                    <p className="text-lg font-semibold text-green-600">{officer.thisWeek}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Last Sync</p>
                    <p className="text-sm">{officer.lastSync}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={officer.status === 'active' ? 'default' : 'secondary'}>
                      {officer.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
