
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MapPin, AlertTriangle, ArrowUpDown } from "lucide-react";
import { useFarmers } from "@/hooks/useFarmers";
import { useFarmVisits } from "@/hooks/useFarmVisits";
import { useIssueReports } from "@/hooks/useIssueReports";
import { useTransferRequests } from "@/hooks/useTransferRequests";

export function DashboardMetrics() {
  const { data: farmers = [] } = useFarmers();
  const { data: farmVisits = [] } = useFarmVisits();
  const { data: issues = [] } = useIssueReports();
  const { data: transfers = [] } = useTransferRequests();

  const metrics = [
    {
      title: "Total Farmers",
      value: farmers.length.toLocaleString(),
      description: "Registered farmers",
      icon: Users,
      color: "blue",
    },
    {
      title: "Farm Visits",
      value: farmVisits.length.toLocaleString(),
      description: "Completed visits",
      icon: MapPin,
      color: "green",
    },
    {
      title: "Active Issues",
      value: issues.filter(issue => issue.status === 'open' || issue.status === 'under_review').length.toLocaleString(),
      description: "Pending resolution",
      icon: AlertTriangle,
      color: "yellow",
    },
    {
      title: "Transfer Requests",
      value: transfers.filter(transfer => transfer.status === 'pending').length.toLocaleString(),
      description: "Awaiting approval",
      icon: ArrowUpDown,
      color: "purple",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index} className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-700">
              {metric.title}
            </CardTitle>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm bg-gradient-to-r ${
              metric.color === 'blue' ? 'from-blue-500 to-blue-600' :
              metric.color === 'green' ? 'from-green-500 to-green-600' :
              metric.color === 'yellow' ? 'from-yellow-500 to-yellow-600' :
              'from-purple-500 to-purple-600'
            }`}>
              <metric.icon className="w-5 h-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900 mb-1">
              {metric.value}
            </div>
            <CardDescription className="text-slate-600">
              {metric.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
