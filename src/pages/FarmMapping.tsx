
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
  Eye
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
      lastUpdate: "2 days ago"
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
      lastUpdate: "1 day ago"
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
      lastUpdate: "3 hours ago"
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
      lastUpdate: "5 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Farm Mapping</h1>
            <p className="text-gray-600 mt-1">Manage GPS polygon boundaries and farm locations</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Shapefiles
            </Button>
            <Button>
              <Maximize2 className="w-4 h-4 mr-2" />
              Full Map View
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
                <p className="text-sm text-gray-600">Total Farms Mapped</p>
                <p className="text-2xl font-bold">1,247</p>
              </div>
              <Map className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Area</p>
                <p className="text-2xl font-bold">5,892</p>
                <p className="text-xs text-gray-500">hectares</p>
              </div>
              <Ruler className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Verified Polygons</p>
                <p className="text-2xl font-bold text-green-600">1,156</p>
              </div>
              <MapPin className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Review</p>
                <p className="text-2xl font-bold text-yellow-600">91</p>
              </div>
              <Eye className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Interactive Map */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Map className="w-5 h-5" />
              Interactive Farm Map
            </CardTitle>
            <CardDescription>
              Click on polygons to view farm details and submissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center text-gray-500">
                <Map className="w-16 h-16 mx-auto mb-4" />
                <p className="font-medium text-lg">Interactive Map Interface</p>
                <p className="text-sm mb-4">Farm polygons and GPS boundaries</p>
                <Button>
                  <Maximize2 className="w-4 h-4 mr-2" />
                  Launch Full Map
                </Button>
              </div>
            </div>
            
            {/* Map Controls */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Satellite View</Button>
                <Button variant="outline" size="sm">Terrain</Button>
                <Button variant="outline" size="sm">Labels</Button>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-1" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Search className="w-4 h-4 mr-1" />
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Farm List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Farm Directory</CardTitle>
            <CardDescription>Browse all mapped farm polygons</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search farms by name, ID, or officer..." 
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              {farmPolygons.map((farm) => (
                <div key={farm.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{farm.name}</h3>
                      <p className="text-sm text-gray-600">ID: {farm.id}</p>
                    </div>
                    <Badge variant={
                      farm.status === 'verified' ? 'default' :
                      farm.status === 'pending' ? 'secondary' :
                      'destructive'
                    }>
                      {farm.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{farm.officer}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{farm.region}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Ruler className="w-3 h-3" />
                      <span>{farm.area}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>Mapped {farm.mapped}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">{farm.submissions}</span> submissions • 
                      <span className="ml-1">Updated {farm.lastUpdate}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-1" />
                      View Details
                    </Button>
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
