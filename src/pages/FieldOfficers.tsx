
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
  MoreHorizontal,
  Filter,
  UserPlus,
  Award,
  TrendingUp
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
      joinDate: "Jan 2024",
      avatar: "JD",
      performance: 98
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
      joinDate: "Feb 2024",
      avatar: "MJ",
      performance: 94
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
      joinDate: "Mar 2024",
      avatar: "DS",
      performance: 87
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
      joinDate: "Dec 2023",
      avatar: "SW",
      performance: 96
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
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Field Officers
                  </h1>
                  <p className="text-slate-600 font-medium">Manage your field team and monitor performance</p>
                </div>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
              <UserPlus className="w-4 h-4 mr-2" />
              Add New Officer
            </Button>
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
                  <p className="text-sm font-medium text-slate-600">Total Officers</p>
                  <p className="text-3xl font-bold text-slate-900">34</p>
                  <p className="text-xs text-emerald-600 font-medium mt-1">+2 this month</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Active Today</p>
                  <p className="text-3xl font-bold text-emerald-600">28</p>
                  <p className="text-xs text-emerald-600 font-medium mt-1">82% online rate</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Avg Performance</p>
                  <p className="text-3xl font-bold text-blue-600">94%</p>
                  <p className="text-xs text-emerald-600 font-medium mt-1">+3% vs last month</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Regions Covered</p>
                  <p className="text-3xl font-bold text-orange-600">8</p>
                  <p className="text-xs text-slate-500 font-medium mt-1">Nationwide coverage</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Search and Filters */}
        <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input 
                  placeholder="Search officers by name, email, or region..." 
                  className="pl-10 bg-white/70 border-slate-300 focus:bg-white"
                />
              </div>
              <Button variant="outline" className="bg-white/50 hover:bg-white">
                <Filter className="w-4 h-4 mr-2" />
                Region
              </Button>
              <Button variant="outline" className="bg-white/50 hover:bg-white">
                <Filter className="w-4 h-4 mr-2" />
                Status
              </Button>
              <Button variant="outline" className="bg-white/50 hover:bg-white">
                <TrendingUp className="w-4 h-4 mr-2" />
                Performance
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Officers Directory */}
        <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
          <CardHeader className="pb-6">
            <CardTitle className="text-xl text-slate-800">Field Officers Directory</CardTitle>
            <CardDescription className="text-slate-600">
              Complete team overview with performance metrics and activity status
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {officers.map((officer) => (
                <div key={officer.id} className="group p-6 border border-slate-200/50 rounded-2xl bg-white/70 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {officer.avatar}
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                          officer.status === 'active' ? 'bg-emerald-500' : 'bg-slate-400'
                        }`} />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-lg text-slate-900">{officer.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            {officer.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            {officer.phone}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {officer.region} • {officer.zone}
                          </span>
                          <span>Joined {officer.joinDate}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-8">
                      <div className="grid grid-cols-3 gap-6 text-center">
                        <div>
                          <p className="text-sm font-medium text-slate-600">Total</p>
                          <p className="text-xl font-bold text-slate-900">{officer.totalSubmissions.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-600">This Week</p>
                          <p className="text-xl font-bold text-emerald-600">{officer.thisWeek}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-600">Performance</p>
                          <p className="text-xl font-bold text-blue-600">{officer.performance}%</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-center">
                          <p className="text-sm font-medium text-slate-600">Last Sync</p>
                          <p className="text-sm text-slate-700">{officer.lastSync}</p>
                        </div>
                        <Badge 
                          variant={officer.status === 'active' ? 'default' : 'secondary'}
                          className="capitalize"
                        >
                          {officer.status}
                        </Badge>
                        <Button variant="ghost" size="sm" className="hover:bg-slate-100">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="hover:bg-slate-100">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
