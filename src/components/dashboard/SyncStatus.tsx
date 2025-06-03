
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  RefreshCw, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Smartphone,
  Wifi,
  Database
} from "lucide-react";

export function SyncStatus() {
  const syncData = [
    {
      officer: "John Doe",
      region: "Ashanti",
      lastSync: "2 min ago",
      status: "synced",
      pendingItems: 0,
      batteryLevel: 85
    },
    {
      officer: "Mary Johnson",
      region: "Eastern",
      lastSync: "15 min ago",
      status: "synced",
      pendingItems: 0,
      batteryLevel: 62
    },
    {
      officer: "David Smith",
      region: "Central",
      lastSync: "3 hrs ago",
      status: "pending",
      pendingItems: 12,
      batteryLevel: 23
    },
    {
      officer: "Sarah Wilson",
      region: "Western",
      lastSync: "45 min ago",
      status: "synced",
      pendingItems: 0,
      batteryLevel: 94
    }
  ];

  return (
    <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-slate-800">
          <Database className="w-5 h-5 text-blue-600" />
          Mobile Sync Status
        </CardTitle>
        <CardDescription className="text-slate-600">
          Real-time synchronization monitoring for field devices
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4 mb-6">
          {syncData.map((officer, index) => (
            <div key={index} className="p-4 bg-white/70 rounded-xl border border-slate-200/50 hover:bg-white transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-slate-800">{officer.officer}</h4>
                  <p className="text-sm text-slate-600">{officer.region} Region</p>
                </div>
                <div className="flex items-center gap-2">
                  {officer.status === 'synced' ? (
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-yellow-500" />
                  )}
                  <Badge 
                    variant={officer.status === 'synced' ? 'default' : 'secondary'}
                    className="capitalize"
                  >
                    {officer.status}
                  </Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-600 mb-1">Last Sync</p>
                  <p className="font-medium text-slate-800">{officer.lastSync}</p>
                </div>
                <div>
                  <p className="text-slate-600 mb-1">Pending Items</p>
                  <p className="font-medium text-slate-800">{officer.pendingItems}</p>
                </div>
              </div>
              
              <div className="mt-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-600 flex items-center gap-1">
                    <Smartphone className="w-3 h-3" />
                    Battery Level
                  </span>
                  <span className="text-xs font-medium text-slate-800">{officer.batteryLevel}%</span>
                </div>
                <Progress 
                  value={officer.batteryLevel} 
                  className="h-2"
                />
              </div>
            </div>
          ))}
        </div>
        
        <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
          <RefreshCw className="w-4 h-4 mr-2" />
          Force Sync All Devices
        </Button>
      </CardContent>
    </Card>
  );
}
