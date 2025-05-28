
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Image, 
  Map, 
  Activity,
  FileText,
  CheckCircle,
  Clock,
  Database
} from "lucide-react";

export function MetricsCards() {
  const metrics = [
    {
      title: "Data Submissions Today",
      value: "127",
      change: "+18%",
      changeType: "positive" as const,
      icon: Database,
      description: "Photos, videos, polygons received"
    },
    {
      title: "Farm Polygons Mapped",
      value: "1,247",
      change: "+12%",
      changeType: "positive" as const,
      icon: Map,
      description: "GPS boundaries from field officers"
    },
    {
      title: "Media Files Received",
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
      description: "Currently submitting data"
    },
    {
      title: "Pending Reviews",
      value: "45",
      change: "-8%",
      changeType: "positive" as const,
      icon: Clock,
      description: "Submissions awaiting approval"
    },
    {
      title: "Reports Submitted",
      value: "89",
      change: "+15%",
      changeType: "positive" as const,
      icon: FileText,
      description: "Supervisor assessments this week"
    },
    {
      title: "Data Quality Score",
      value: "94%",
      change: "+2%",
      changeType: "positive" as const,
      icon: CheckCircle,
      description: "GPS accuracy & completeness"
    },
    {
      title: "Sync Success Rate",
      value: "98.7%",
      change: "+0.3%",
      changeType: "positive" as const,
      icon: Activity,
      description: "Mobile app data transfers"
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
