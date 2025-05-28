
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function ActivityChart() {
  const data = [
    { name: 'Mon', uploads: 45, reports: 12 },
    { name: 'Tue', uploads: 62, reports: 18 },
    { name: 'Wed', uploads: 38, reports: 9 },
    { name: 'Thu', uploads: 71, reports: 24 },
    { name: 'Fri', uploads: 56, reports: 15 },
    { name: 'Sat', uploads: 23, reports: 6 },
    { name: 'Sun', uploads: 18, reports: 4 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Activity Trends</CardTitle>
        <CardDescription>
          Data uploads and report submissions over the past week
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="uploads" fill="#10b981" name="Media Uploads" />
            <Bar dataKey="reports" fill="#3b82f6" name="Reports" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
