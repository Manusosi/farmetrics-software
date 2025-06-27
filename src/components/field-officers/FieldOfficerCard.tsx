
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, User, ChevronRight } from "lucide-react";
import { VisitProgressGrid } from "./VisitProgressGrid";

interface FieldOfficer {
  id: string;
  full_name: string;
  phone_number?: string;
  zone_assignment?: string;
  target_visits?: number;
  supervisor?: {
    full_name: string;
  };
  farmers: Record<string, {
    farmer_name: string;
    visits: Array<{
      visit_number: number;
      status: string;
      completion_percentage: number;
    }>;
  }>;
}

interface FieldOfficerCardProps {
  officer: FieldOfficer;
  onViewDetails: (officerId: string) => void;
}

export function FieldOfficerCard({ officer, onViewDetails }: FieldOfficerCardProps) {
  const farmerCount = Object.keys(officer.farmers).length;
  const totalVisits = Object.values(officer.farmers).reduce((acc, farmer) => acc + farmer.visits.length, 0);
  const completedVisits = Object.values(officer.farmers).reduce((acc, farmer) => 
    acc + farmer.visits.filter(v => v.status === 'completed').length, 0
  );
  
  const overallProgress = totalVisits > 0 ? (completedVisits / totalVisits) * 100 : 0;

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-gray-900">
              {officer.full_name}
            </CardTitle>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
              {officer.phone_number && (
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>{officer.phone_number}</span>
                </div>
              )}
              {officer.zone_assignment && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{officer.zone_assignment}</span>
                </div>
              )}
            </div>
          </div>
          <Badge variant="outline" className="text-xs">
            {Math.round(overallProgress)}% Complete
          </Badge>
        </div>
        
        {officer.supervisor && (
          <div className="flex items-center gap-1 text-sm text-gray-600 mt-2">
            <User className="w-4 h-4" />
            <span>Supervisor: {officer.supervisor.full_name}</span>
          </div>
        )}
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">{farmerCount}</div>
            <div className="text-xs text-gray-600">Farmers</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">{completedVisits}</div>
            <div className="text-xs text-gray-600">Completed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-600">{totalVisits}</div>
            <div className="text-xs text-gray-600">Total Visits</div>
          </div>
        </div>

        {farmerCount > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700">Farmer Progress:</h4>
            {Object.entries(officer.farmers).slice(0, 2).map(([farmerId, farmer]) => (
              <div key={farmerId} className="space-y-2">
                <div className="text-sm font-medium text-gray-800">{farmer.farmer_name}</div>
                <VisitProgressGrid visits={farmer.visits} />
              </div>
            ))}
            {farmerCount > 2 && (
              <div className="text-xs text-gray-500 text-center">
                +{farmerCount - 2} more farmers
              </div>
            )}
          </div>
        )}

        <Button 
          variant="outline" 
          className="w-full mt-4"
          onClick={() => onViewDetails(officer.id)}
        >
          View Details
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
}
