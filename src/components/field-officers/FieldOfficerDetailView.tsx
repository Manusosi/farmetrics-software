
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone, MapPin, User, Calendar } from "lucide-react";
import { VisitProgressGrid } from "./VisitProgressGrid";
import { useFieldOfficerVisits } from "@/hooks/useVisitSchedules";

interface FarmerVisitData {
  farmer_name: string;
  farmer_phone?: string;
  farmer_region?: string;
  visits: Array<{
    visit_number: number;
    status: string;
    completion_percentage: number;
  }>;
}

interface FieldOfficerDetailViewProps {
  officerId: string;
  officerName: string;
  onBack: () => void;
}

export function FieldOfficerDetailView({ officerId, officerName, onBack }: FieldOfficerDetailViewProps) {
  const { data: visits, isLoading } = useFieldOfficerVisits(officerId);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading officer details...</p>
        </div>
      </div>
    );
  }

  // Group visits by farmer
  const farmerVisits = visits?.reduce((acc, visit) => {
    const farmerId = visit.farmer_id;
    if (!acc[farmerId]) {
      acc[farmerId] = {
        farmer_name: visit.farmer?.full_name || 'Unknown',
        farmer_phone: visit.farmer?.phone_number,
        farmer_region: visit.farmer?.region,
        visits: []
      };
    }
    acc[farmerId].visits.push({
      visit_number: visit.visit_number,
      status: visit.status,
      completion_percentage: visit.completion_percentage
    });
    return acc;
  }, {} as Record<string, FarmerVisitData>) || {};

  // Sort visits by visit number for each farmer
  Object.values(farmerVisits).forEach(farmer => {
    farmer.visits.sort((a, b) => a.visit_number - b.visit_number);
  });

  const totalVisits = visits?.length || 0;
  const completedVisits = visits?.filter(v => v.status === 'completed').length || 0;
  const overallProgress = totalVisits > 0 ? (completedVisits / totalVisits) * 100 : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{officerName}</h1>
          <p className="text-gray-600">Field Officer Details</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{Object.keys(farmerVisits).length}</div>
            <div className="text-sm text-gray-600">Farmers</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{completedVisits}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-gray-600">{totalVisits}</div>
            <div className="text-sm text-gray-600">Total Visits</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">{Math.round(overallProgress)}%</div>
            <div className="text-sm text-gray-600">Progress</div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Farmer Visit Progress</h2>
        
        {Object.keys(farmerVisits).length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-500">No farmers assigned to this field officer yet.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {Object.entries(farmerVisits).map(([farmerId, farmer]) => {
              const farmerCompletedVisits = farmer.visits.filter(v => v.status === 'completed').length;
              const farmerProgress = farmer.visits.length > 0 ? (farmerCompletedVisits / farmer.visits.length) * 100 : 0;
              
              return (
                <Card key={farmerId}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{farmer.farmer_name}</CardTitle>
                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                          {farmer.farmer_phone && (
                            <div className="flex items-center gap-1">
                              <Phone className="w-4 h-4" />
                              <span>{farmer.farmer_phone}</span>
                            </div>
                          )}
                          {farmer.farmer_region && (
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{farmer.farmer_region}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <Badge variant="outline">
                        {Math.round(farmerProgress)}% Complete
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <VisitProgressGrid visits={farmer.visits} />
                    <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <div className="font-semibold text-green-600">{farmerCompletedVisits}</div>
                        <div className="text-gray-600">Completed</div>
                      </div>
                      <div>
                        <div className="font-semibold text-yellow-600">
                          {farmer.visits.filter(v => v.status === 'in_progress' || v.status === 'incomplete').length}
                        </div>
                        <div className="text-gray-600">In Progress</div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-600">
                          {farmer.visits.filter(v => v.status === 'pending').length}
                        </div>
                        <div className="text-gray-600">Pending</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
