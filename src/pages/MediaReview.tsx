
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Image, 
  Video, 
  Search, 
  Filter,
  Download,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  MapPin,
  Calendar
} from "lucide-react";

export function MediaReview() {
  const mediaSubmissions = [
    {
      id: 1,
      type: "photo",
      filename: "cocoa_tree_001.jpg",
      officer: "John Doe",
      location: "Farm A-23, Ashanti Region",
      coordinates: "6.6885°N, 1.6244°W",
      timestamp: "2024-01-15 14:30:22",
      status: "pending",
      fileSize: "2.4 MB",
      resolution: "1920x1080",
      description: "Healthy cocoa tree with mature pods"
    },
    {
      id: 2,
      type: "video",
      filename: "field_conditions.mp4",
      officer: "Mary Johnson", 
      location: "Farm B-15, Eastern Region",
      coordinates: "6.1056°N, 0.2712°W",
      timestamp: "2024-01-15 13:45:10",
      status: "approved",
      fileSize: "12.8 MB",
      resolution: "1080p",
      description: "Field condition assessment after rain"
    },
    {
      id: 3,
      type: "photo",
      filename: "pest_damage_report.jpg",
      officer: "David Smith",
      location: "Farm C-08, Central Region", 
      coordinates: "5.5557°N, 0.2012°W",
      timestamp: "2024-01-15 12:15:45",
      status: "flagged",
      fileSize: "1.8 MB",
      resolution: "1920x1080",
      description: "Evidence of pest damage on cocoa pods"
    },
    {
      id: 4,
      type: "photo",
      filename: "harvest_ready_001.jpg",
      officer: "Sarah Wilson",
      location: "Farm D-12, Western Region",
      coordinates: "5.0470°N, 2.3014°W", 
      timestamp: "2024-01-15 11:20:33",
      status: "approved",
      fileSize: "3.1 MB",
      resolution: "1920x1080",
      description: "Ripe cocoa pods ready for harvest"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Media Review</h1>
            <p className="text-gray-600 mt-1">Review and manage photos and videos from field officers</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Selected
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
                <p className="text-sm text-gray-600">Total Media Files</p>
                <p className="text-2xl font-bold">8,439</p>
              </div>
              <Image className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Review</p>
                <p className="text-2xl font-bold text-yellow-600">45</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Approved Today</p>
                <p className="text-2xl font-bold text-green-600">127</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Flagged Items</p>
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
                placeholder="Search by filename, officer, or location..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline">Filter by Type</Button>
            <Button variant="outline">Filter by Status</Button>
            <Button variant="outline">Filter by Date</Button>
          </div>
        </CardContent>
      </Card>

      {/* Media Grid */}
      <Card>
        <CardHeader>
          <CardTitle>Media Submissions</CardTitle>
          <CardDescription>Review incoming photos and videos from field officers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mediaSubmissions.map((media) => (
              <div key={media.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      media.type === 'photo' ? 'bg-blue-100' : 'bg-purple-100'
                    }`}>
                      {media.type === 'photo' ? 
                        <Image className="w-5 h-5 text-blue-600" /> : 
                        <Video className="w-5 h-5 text-purple-600" />
                      }
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{media.filename}</h3>
                      <p className="text-sm text-gray-600">{media.officer}</p>
                    </div>
                  </div>
                  <Badge variant={
                    media.status === 'approved' ? 'default' :
                    media.status === 'pending' ? 'secondary' :
                    'destructive'
                  }>
                    {media.status}
                  </Badge>
                </div>

                <div className="bg-gray-100 rounded-lg h-48 mb-4 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    {media.type === 'photo' ? 
                      <Image className="w-12 h-12 mx-auto mb-2" /> : 
                      <Video className="w-12 h-12 mx-auto mb-2" />
                    }
                    <p className="text-sm">Media Preview</p>
                    <p className="text-xs">{media.resolution} • {media.fileSize}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{media.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{media.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-700">{media.description}</p>
                </div>

                <div className="flex items-center justify-between">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-green-600 border-green-200 hover:bg-green-50">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Approve
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                      <XCircle className="w-4 h-4 mr-1" />
                      Reject
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center">
            <Button variant="outline">Load More Media</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
