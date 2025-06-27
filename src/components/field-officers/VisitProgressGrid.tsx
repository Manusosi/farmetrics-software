
import { ProgressBar } from "./ProgressBar";
import { Badge } from "@/components/ui/badge";

interface Visit {
  visit_number: number;
  status: string;
  completion_percentage: number;
}

interface VisitProgressGridProps {
  visits: Visit[];
  maxVisits?: number;
}

export function VisitProgressGrid({ visits, maxVisits = 7 }: VisitProgressGridProps) {
  // Create an array of 7 visits (or maxVisits)
  const visitSlots = Array.from({ length: maxVisits }, (_, index) => {
    const visitNumber = index + 1;
    const visit = visits.find(v => v.visit_number === visitNumber);
    return {
      visit_number: visitNumber,
      status: visit?.status || 'pending',
      completion_percentage: visit?.completion_percentage || 0
    };
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'incomplete': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="grid grid-cols-7 gap-2">
      {visitSlots.map((visit) => (
        <div key={visit.visit_number} className="text-center">
          <div className="text-xs font-medium text-gray-600 mb-1">
            V{visit.visit_number}
          </div>
          <div className="space-y-1">
            <ProgressBar 
              percentage={visit.completion_percentage} 
              size="sm"
              className="mx-auto"
            />
            <Badge 
              variant="secondary" 
              className={`text-xs px-1 py-0 ${getStatusColor(visit.status)}`}
            >
              {visit.completion_percentage}%
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
}
