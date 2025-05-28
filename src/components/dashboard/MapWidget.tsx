
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Map, 
  MapPin, 
  Maximize2,
  Filter,
  Eye
} from "lucide-react";

export function MapWidget() {
  // Mock data for demonstration
  const recentUploads = [
    {
      id: 1,
      location: "Farm A-23, Ashanti Region",
      coordinates: "6.6885°N, 1.6244°W",
      officer: "John Doe",
      type: "Polygon",
      time: "2 min ago"
    },
    {
      id: 2,
      location: "Farm B-15, Eastern Region",
      coordinates: "6.1056°N, 0.2712°W",
      officer: "Mary Johnson",
      type: "Photos",
      time: "15 min ago"
    },
    {
      id: 3,
      location: "Farm C-08, Central Region",
      coordinates: "5.5557°N, 0.2012°W",
      officer: "David Smith",
      type: "Report",
      time: "1 hour ago"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Map className="w-5 h-5" />
              Live Farm Mapping Overview
            </CardTitle>
            <CardDescription>
              Real-time view of geolocated uploads and polygon boundaries
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Maximize2 className="w-4 h-4 mr-2" />
              Full View
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Map Placeholder */}
          <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center text-gray-500">
              <Map className="w-12 h-12 mx-auto mb-2" />
              <p className="font-medium">Interactive Map</p>
              <p className="text-sm">Farm polygons and upload locations</p>
              <Button variant="outline" size="sm" className="mt-2">
                <Eye className="w-4 h-4 mr-2" />
                View Full Map
              </Button>
            </div>
          </div>

          {/* Recent Geolocated Uploads */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Recent Geolocated Uploads</h4>
            <div className="space-y-3">
              {recentUploads.map((upload) => (
                <div key={upload.id} className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                  <MapPin className="w-5 h-5 text-green-600 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{upload.location}</div>
                    <div className="text-sm text-gray-600">{upload.coordinates}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">{upload.officer}</span>
                      <Badge variant="secondary" className="text-xs">
                        {upload.type}
                      </Badge>
                      <span className="text-xs text-gray-500">{upload.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
