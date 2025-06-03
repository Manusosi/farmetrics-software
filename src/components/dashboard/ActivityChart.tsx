
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp } from "lucide-react";

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
    <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-slate-800">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          Weekly Data Collection Analytics
        </CardTitle>
        <CardDescription className="text-slate-600">
          Field data submissions received from mobile officers across all regions
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis 
              dataKey="name" 
              stroke="#64748b"
              fontSize={12}
              fontWeight={500}
            />
            <YAxis 
              stroke="#64748b"
              fontSize={12}
              fontWeight={500}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Legend />
            <Bar dataKey="photos" fill="#10b981" name="Photos" radius={[2, 2, 0, 0]} />
            <Bar dataKey="videos" fill="#3b82f6" name="Videos" radius={[2, 2, 0, 0]} />
            <Bar dataKey="polygons" fill="#f59e0b" name="GPS Polygons" radius={[2, 2, 0, 0]} />
            <Bar dataKey="reports" fill="#8b5cf6" name="Reports" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
