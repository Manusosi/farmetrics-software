
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function ActivityChart() {
  const data = [
    { name: 'Mon', photos: 45, videos: 8, polygons: 12, reports: 6 },
    { name: 'Tue', videos: 12, photos: 62, polygons: 18, reports: 9 },
    { name: 'Wed', photos: 38, videos: 6, polygons: 9, reports: 4 },
    { name: 'Thu', photos: 71, videos: 15, polygons: 24, reports: 12 },
    { name: 'Fri', photos: 56, videos: 11, polygons: 15, reports: 8 },
    { name: 'Sat', photos: 23, videos: 4, polygons: 6, reports: 2 },
    { name: 'Sun', photos: 18, videos: 2, polygons: 4, reports: 1 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Data Collection Trends</CardTitle>
        <CardDescription>
          Field data submissions received from mobile officers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="photos" fill="#10b981" name="Photos" />
            <Bar dataKey="videos" fill="#3b82f6" name="Videos" />
            <Bar dataKey="polygons" fill="#f59e0b" name="Polygons" />
            <Bar dataKey="reports" fill="#8b5cf6" name="Reports" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
