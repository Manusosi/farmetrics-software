
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Map, 
  MapPin, 
  Maximize2, 
  Activity,
  Users,
  Satellite,
  Navigation
} from "lucide-react";

export function MapWidget() {
  const regionData = [
    { name: "Ashanti Region", officers: 8, farms: 342, status: "active", color: "emerald" },
    { name: "Eastern Region", officers: 6, farms: 267, status: "active", color: "blue" },
    { name: "Central Region", officers: 5, farms: 189, status: "active", color: "purple" },
    { name: "Western Region", officers: 7, farms: 423, status: "active", color: "orange" },
  ];

  return (
    <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-slate-800">
          <Navigation className="w-5 h-5 text-green-600" />
          Regional Coverage Map
        </CardTitle>
        <CardDescription className="text-slate-600">
          Real-time officer locations and farm distribution across Ghana
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="bg-gradient-to-br from-green-100 via-blue-100 to-emerald-100 rounded-2xl h-80 flex items-center justify-center border-2 border-dashed border-green-300 mb-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-blue-200/30" />
          <div className="text-center text-slate-600 z-10">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Map className="w-10 h-10 text-white" />
            </div>
            <p className="font-bold text-lg text-slate-800 mb-2">Interactive Regional Map</p>
            <p className="text-sm mb-4 text-slate-600">Live officer tracking and farm coverage visualization</p>
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
              <Maximize2 className="w-4 h-4 mr-2" />
              Launch Full Map
            </Button>
          </div>
        </div>
        
        {/* Regional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {regionData.map((region, index) => (
            <div key={index} className="p-4 bg-white/70 rounded-xl border border-slate-200/50 hover:bg-white transition-all duration-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-slate-800">{region.name}</h4>
                <Badge variant="default" className="bg-emerald-100 text-emerald-700">
                  {region.status}
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {region.officers} officers
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {region.farms} farms
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
