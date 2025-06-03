
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Image, 
  Map, 
  TrendingUp, 
  Activity,
  Database,
  CheckCircle,
  Clock
} from "lucide-react";

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Active Officers</p>
              <p className="text-3xl font-bold text-slate-900">28</p>
              <p className="text-xs text-emerald-600 font-medium mt-1">↗ +3 since yesterday</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Today's Submissions</p>
              <p className="text-3xl font-bold text-emerald-600">127</p>
              <p className="text-xs text-emerald-600 font-medium mt-1">↗ +23% vs yesterday</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <Database className="w-6 h-6 text-white" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Pending Reviews</p>
              <p className="text-3xl font-bold text-yellow-600">45</p>
              <p className="text-xs text-yellow-600 font-medium mt-1">Requires attention</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
              <Clock className="w-6 h-6 text-white" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-white/60 backdrop-blur-sm border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">System Health</p>
              <p className="text-3xl font-bold text-emerald-600">98.5%</p>
              <p className="text-xs text-emerald-600 font-medium mt-1">All systems operational</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <Activity className="w-6 h-6 text-white" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
