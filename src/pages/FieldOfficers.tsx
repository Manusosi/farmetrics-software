
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Users, UserCheck } from "lucide-react";
import { FieldOfficerCard } from "@/components/field-officers/FieldOfficerCard";
import { FieldOfficerDetailView } from "@/components/field-officers/FieldOfficerDetailView";
import { useFieldOfficersWithProgress } from "@/hooks/useFieldOfficerAssignments";

export function FieldOfficers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOfficerId, setSelectedOfficerId] = useState<string | null>(null);
  const [selectedOfficerName, setSelectedOfficerName] = useState<string>("");
  
  const { data: officers, isLoading, error } = useFieldOfficersWithProgress();

  const filteredOfficers = officers?.filter(officer =>
    officer.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    officer.zone_assignment?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const handleViewDetails = (officerId: string, officerName: string) => {
    setSelectedOfficerId(officerId);
    setSelectedOfficerName(officerName);
  };

  const handleBack = () => {
    setSelectedOfficerId(null);
    setSelectedOfficerName("");
  };

  if (selectedOfficerId) {
    return (
      <div className="p-6 space-y-6">
        <FieldOfficerDetailView 
          officerId={selectedOfficerId}
          officerName={selectedOfficerName}
          onBack={handleBack}
        />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading field officers...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-red-600">Error loading field officers. Please try again.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const totalOfficers = officers?.length || 0;
  const activeOfficers = officers?.filter(o => Object.keys(o.farmers).length > 0).length || 0;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Field Officers</h1>
          <p className="text-gray-600 mt-1">
            Manage and monitor field officer activities and visit progress
          </p>
        </div>
        <Button className="bg-primary-600 hover:bg-primary-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Officer
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Officers</p>
                <p className="text-2xl font-bold text-gray-900">{totalOfficers}</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Officers</p>
                <p className="text-2xl font-bold text-green-600">{activeOfficers}</p>
              </div>
              <UserCheck className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Progress</p>
                <p className="text-2xl font-bold text-purple-600">
                  {officers && officers.length > 0 
                    ? Math.round(officers.reduce((acc, officer) => {
                        const totalVisits = Object.values(officer.farmers).reduce((sum, farmer) => sum + farmer.visits.length, 0);
                        const completedVisits = Object.values(officer.farmers).reduce((sum, farmer) => 
                          sum + farmer.visits.filter(v => v.status === 'completed').length, 0
                        );
                        return acc + (totalVisits > 0 ? (completedVisits / totalVisits) * 100 : 0);
                      }, 0) / officers.length)
                    : 0
                  }%
                </p>
              </div>
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Farmers</p>
                <p className="text-2xl font-bold text-orange-600">
                  {officers?.reduce((acc, officer) => acc + Object.keys(officer.farmers).length, 0) || 0}
                </p>
              </div>
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-orange-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Field Officers Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search officers by name or zone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {filteredOfficers.length === 0 ? (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Field Officers Found</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm ? 'No officers match your search criteria.' : 'No field officers have been added yet.'}
              </p>
              <Button className="bg-primary-600 hover:bg-primary-700">
                <Plus className="w-4 h-4 mr-2" />
                Add First Officer
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredOfficers.map((officer) => (
                <FieldOfficerCard
                  key={officer.id}
                  officer={officer}
                  onViewDetails={(id) => handleViewDetails(id, officer.full_name)}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
