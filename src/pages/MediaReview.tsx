
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
  Calendar,
  Play,
  FileImage,
  Zap,
  AlertTriangle
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
      description: "Healthy cocoa tree with mature pods",
      quality: "high"
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
      description: "Field condition assessment after rain",
      quality: "high"
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
      description: "Evidence of pest damage on cocoa pods",
      quality: "medium"
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
      description: "Ripe cocoa pods ready for harvest",
      quality: "high"
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
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <FileImage className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Media Review Center
                  </h1>
                  <p className="text-slate-600 font-medium">Review and manage field documentation</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="bg-white/50 hover:bg-white">
                <Download className="w-4 h-4 mr-2" />
                Bulk Export
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
                  <p className="text-sm font-medium text-slate-600">Total Media</p>
                  <p className="text-3xl font-bold text-slate-900">8,439</p>
                  <p className="text-xs text-blue-600 font-medium mt-1">+127 today</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Image className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Pending Review</p>
                  <p className="text-3xl font-bold text-yellow-600">45</p>
                  <p className="text-xs text-yellow-600 font-medium mt-1">Requires attention</p>
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
                  <p className="text-sm font-medium text-slate-600">Approved Today</p>
                  <p className="text-3xl font-bold text-emerald-600">127</p>
                  <p className="text-xs text-emerald-600 font-medium mt-1">96% approval rate</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Flagged Items</p>
                  <p className="text-3xl font-bold text-red-600">8</p>
                  <p className="text-xs text-red-600 font-medium mt-1">Quality issues</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
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
                  placeholder="Search by filename, officer, or location..." 
                  className="pl-10 bg-white/70 border-slate-300 focus:bg-white"
                />
              </div>
              <Button variant="outline" className="bg-white/50 hover:bg-white">Media Type</Button>
              <Button variant="outline" className="bg-white/50 hover:bg-white">Status</Button>
              <Button variant="outline" className="bg-white/50 hover:bg-white">Date Range</Button>
              <Button variant="outline" className="bg-white/50 hover:bg-white">Quality</Button>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Media Grid */}
        <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
          <CardHeader className="pb-6">
            <CardTitle className="text-xl text-slate-800">Media Submissions</CardTitle>
            <CardDescription className="text-slate-600">
              Review and approve field documentation from officers
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {mediaSubmissions.map((media) => (
                <div key={media.id} className="group p-6 border border-slate-200/50 rounded-2xl bg-white/70 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                        media.type === 'photo' 
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                          : 'bg-gradient-to-r from-purple-500 to-purple-600'
                      }`}>
                        {media.type === 'photo' ? 
                          <Image className="w-6 h-6 text-white" /> : 
                          <Video className="w-6 h-6 text-white" />
                        }
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{media.filename}</h3>
                        <p className="text-sm font-medium text-slate-600">{media.officer}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={media.quality === 'high' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {media.quality} quality
                      </Badge>
                      <Badge 
                        variant={
                          media.status === 'approved' ? 'default' :
                          media.status === 'pending' ? 'secondary' :
                          'destructive'
                        }
                        className="capitalize"
                      >
                        {media.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="bg-slate-100 rounded-xl h-48 mb-4 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-50 transition-colors">
                    <div className="text-center text-slate-500">
                      {media.type === 'photo' ? 
                        <Image className="w-16 h-16 mx-auto mb-3 text-slate-400" /> : 
                        <div className="relative">
                          <Video className="w-16 h-16 mx-auto mb-3 text-slate-400" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Play className="w-8 h-8 text-slate-600" />
                          </div>
                        </div>
                      }
                      <p className="text-sm font-medium">Media Preview</p>
                      <p className="text-xs text-slate-400">{media.resolution} • {media.fileSize}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span>{media.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span>{media.timestamp}</span>
                    </div>
                    <p className="text-sm text-slate-700 bg-slate-50 p-3 rounded-lg">{media.description}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm" className="bg-white/50 hover:bg-white">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white">
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

            <div className="mt-8 flex items-center justify-center">
              <Button variant="outline" className="bg-white/50 hover:bg-white">
                Load More Media Files
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
