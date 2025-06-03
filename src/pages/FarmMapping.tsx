
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Map, 
  Search, 
  Filter,
  Download,
  Maximize2,
  MapPin,
  Ruler,
  User,
  Calendar,
  Eye,
  Satellite,
  Layers,
  Navigation,
  Globe
} from "lucide-react";

export function FarmMapping() {
  const farmPolygons = [
    {
      id: "FARM-A23-001",
      name: "Kofi Asante Farm",
      officer: "John Doe",
      region: "Ashanti Region",
      coordinates: "6.6885°N, 1.6244°W",
      area: "4.2 hectares",
      mapped: "2024-01-10",
      status: "verified",
      submissions: 45,
      lastUpdate: "2 days ago",
      accuracy: "98%",
      cropType: "Cocoa"
    },
    {
      id: "FARM-B15-002", 
      name: "Akosua Mensah Farm",
      officer: "Mary Johnson",
      region: "Eastern Region",
      coordinates: "6.1056°N, 0.2712°W",
      area: "6.8 hectares",
      mapped: "2024-01-12",
      status: "pending",
      submissions: 23,
      lastUpdate: "1 day ago",
      accuracy: "95%",
      cropType: "Cocoa"
    },
    {
      id: "FARM-C08-003",
      name: "Kwame Boateng Farm", 
      officer: "David Smith",
      region: "Central Region",
      coordinates: "5.5557°N, 0.2012°W",
      area: "3.1 hectares",
      mapped: "2024-01-14",
      status: "verified",
      submissions: 67,
      lastUpdate: "3 hours ago",
      accuracy: "99%",
      cropType: "Cocoa"
    },
    {
      id: "FARM-D12-004",
      name: "Ama Osei Farm",
      officer: "Sarah Wilson", 
      region: "Western Region",
      coordinates: "5.0470°N, 2.3014°W",
      area: "5.9 hectares",
      mapped: "2024-01-08",
      status: "flagged",
      submissions: 12,
      lastUpdate: "5 days ago",
      accuracy: "87%",
      cropType: "Cocoa"
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
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Farm Mapping System
                  </h1>
                  <p className="text-slate-600 font-medium">GPS boundaries and geospatial analytics</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="bg-white/50 hover:bg-white">
                <Download className="w-4 h-4 mr-2" />
                Export GIS Data
              </Button>
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                <Maximize2 className="w-4 h-4 mr-2" />
                Launch Map Studio
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
                  <p className="text-sm font-medium text-slate-600">Mapped Farms</p>
                  <p className="text-3xl font-bold text-slate-900">1,247</p>
                  <p className="text-xs text-green-600 font-medium mt-1">+23 this week</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Map className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Total Area</p>
                  <p className="text-3xl font-bold text-blue-600">5,892</p>
                  <p className="text-xs text-slate-500 font-medium mt-1">hectares mapped</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Ruler className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Verified</p>
                  <p className="text-3xl font-bold text-emerald-600">1,156</p>
                  <p className="text-xs text-emerald-600 font-medium mt-1">93% accuracy rate</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Avg Accuracy</p>
                  <p className="text-3xl font-bold text-purple-600">96.2%</p>
                  <p className="text-xs text-purple-600 font-medium mt-1">GPS precision</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Enhanced Interactive Map */}
          <Card className="xl:col-span-2 bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <Satellite className="w-5 h-5 text-green-600" />
                Interactive Farm Map
              </CardTitle>
              <CardDescription className="text-slate-600">
                Real-time GPS polygon visualization and analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl h-96 flex items-center justify-center border-2 border-dashed border-green-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-blue-200/20" />
                <div className="text-center text-slate-600 z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <p className="font-bold text-lg text-slate-800 mb-2">Advanced GIS Interface</p>
                  <p className="text-sm mb-4 text-slate-600">Interactive farm polygons with satellite overlay</p>
                  <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                    <Maximize2 className="w-4 h-4 mr-2" />
                    Launch Map Studio
                  </Button>
                </div>
              </div>
              
              {/* Enhanced Map Controls */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="bg-white/50 hover:bg-white">
                      <Satellite className="w-4 h-4 mr-1" />
                      Satellite
                    </Button>
                    <Button variant="outline" size="sm" className="bg-white/50 hover:bg-white">
                      <Layers className="w-4 h-4 mr-1" />
                      Terrain
                    </Button>
                    <Button variant="outline" size="sm" className="bg-white/50 hover:bg-white">
                      <Map className="w-4 h-4 mr-1" />
                      Polygons
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="bg-white/50 hover:bg-white">
                      <Filter className="w-4 h-4 mr-1" />
                      Filters
                    </Button>
                    <Button variant="outline" size="sm" className="bg-white/50 hover:bg-white">
                      <Search className="w-4 h-4 mr-1" />
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Farm Directory */}
          <Card className="xl:col-span-1 bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-slate-800">Farm Directory</CardTitle>
              <CardDescription className="text-slate-600">Browse mapped farm polygons</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input 
                    placeholder="Search farms..." 
                    className="pl-10 bg-white/70 border-slate-300 focus:bg-white"
                  />
                </div>
              </div>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {farmPolygons.map((farm) => (
                  <div key={farm.id} className="group p-4 border border-slate-200/50 rounded-xl bg-white/70 hover:bg-white hover:shadow-md transition-all duration-200">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">{farm.name}</h3>
                        <p className="text-xs text-slate-600 font-medium">ID: {farm.id}</p>
                      </div>
                      <Badge 
                        variant={
                          farm.status === 'verified' ? 'default' :
                          farm.status === 'pending' ? 'secondary' :
                          'destructive'
                        }
                        className="text-xs"
                      >
                        {farm.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-xs text-slate-600 mb-3">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3 text-slate-400" />
                        <span>{farm.officer}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{farm.region}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Ruler className="w-3 h-3 text-slate-400" />
                        <span>{farm.area}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-emerald-600">{farm.accuracy}</span>
                        <span className="text-slate-500">{farm.submissions} points</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full bg-white/50 hover:bg-white text-xs">
                      <Eye className="w-3 h-3 mr-1" />
                      View on Map
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
