
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Image, 
  Map, 
  TrendingUp, 
  Activity,
  MapPin
} from "lucide-react";

export function MetricsCards() {
  const metrics = [
    {
      title: "Total Farms Mapped",
      value: "1,247",
      change: "+12%",
      changeType: "positive" as const,
      icon: Map,
      description: "Polygon boundaries captured"
    },
    {
      title: "Media Files Uploaded",
      value: "8,439",
      change: "+23%",
      changeType: "positive" as const,
      icon: Image,
      description: "Photos and videos this month"
    },
    {
      title: "Active Field Officers",
      value: "34",
      change: "+2",
      changeType: "positive" as const,
      icon: Users,
      description: "Currently in field"
    },
    {
      title: "Data Points Collected",
      value: "15.2K",
      change: "+8%",
      changeType: "positive" as const,
      icon: Activity,
      description: "Manual entries this week"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index} className="border border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs text-gray-500">{metric.description}</p>
              <Badge 
                variant={metric.changeType === 'positive' ? 'default' : 'destructive'}
                className="text-xs"
              >
                {metric.change}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
