
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  RefreshCw,
  Wifi,
  WifiOff
} from "lucide-react";

export function SyncStatus() {
  const syncData = [
    {
      officer: "John Doe",
      lastSync: "2 minutes ago",
      status: "success",
      pendingItems: 0
    },
    {
      officer: "Mary Johnson",
      lastSync: "15 minutes ago",
      status: "success",
      pendingItems: 0
    },
    {
      officer: "David Smith",
      lastSync: "1 hour ago",
      status: "pending",
      pendingItems: 3
    },
    {
      officer: "Sarah Wilson",
      lastSync: "3 hours ago",
      status: "error",
      pendingItems: 12
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wifi className="w-5 h-5" />
          Sync Status Overview
        </CardTitle>
        <CardDescription>
          Real-time synchronization status of field officers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {syncData.map((sync, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
              <div className="flex items-center gap-3">
                {sync.status === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : sync.status === 'pending' ? (
                  <Clock className="w-5 h-5 text-yellow-500" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-500" />
                )}
                <div>
                  <div className="font-medium text-gray-900">{sync.officer}</div>
                  <div className="text-sm text-gray-500">Last sync: {sync.lastSync}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {sync.pendingItems > 0 && (
                  <Badge variant="secondary">
                    {sync.pendingItems} pending
                  </Badge>
                )}
                <Badge variant={
                  sync.status === 'success' ? 'default' :
                  sync.status === 'pending' ? 'secondary' :
                  'destructive'
                }>
                  {sync.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Button variant="outline" size="sm" className="w-full">
            <RefreshCw className="w-4 h-4 mr-2" />
            Force Sync All Officers
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
