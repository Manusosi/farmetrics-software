
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Tables, TablesInsert } from '@/integrations/supabase/types';

type FieldOfficerAssignment = Tables<'field_officer_assignments'>;
type FieldOfficerAssignmentInsert = TablesInsert<'field_officer_assignments'>;

export function useFieldOfficerAssignments() {
  return useQuery({
    queryKey: ['field_officer_assignments'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('field_officer_assignments')
        .select(`
          *,
          field_officer:profiles!field_officer_assignments_field_officer_id_fkey(
            id, full_name, phone_number, zone_assignment, target_visits
          ),
          supervisor:profiles!field_officer_assignments_supervisor_id_fkey(
            id, full_name, phone_number
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  });
}

export function useFieldOfficersWithProgress() {
  return useQuery({
    queryKey: ['field_officers_with_progress'],
    queryFn: async () => {
      // Get all field officers
      const { data: officers, error: officersError } = await supabase
        .from('profiles')
        .select(`
          id, full_name, phone_number, zone_assignment, target_visits,
          supervisor:profiles!profiles_supervisor_id_fkey(full_name)
        `)
        .eq('role', 'field_officer')
        .order('full_name');

      if (officersError) throw officersError;

      // Get visit schedules for all field officers
      const { data: visits, error: visitsError } = await supabase
        .from('visit_schedules')
        .select(`
          field_officer_id,
          farmer_id,
          visit_number,
          status,
          completion_percentage,
          farmer:farmers(full_name)
        `);

      if (visitsError) throw visitsError;

      // Group visits by field officer and farmer
      const officersWithProgress = officers.map(officer => {
        const officerVisits = visits.filter(v => v.field_officer_id === officer.id);
        
        // Group by farmer
        const farmerVisits = officerVisits.reduce((acc, visit) => {
          const farmerId = visit.farmer_id;
          if (!acc[farmerId]) {
            acc[farmerId] = {
              farmer_name: visit.farmer?.full_name || 'Unknown',
              visits: []
            };
          }
          acc[farmerId].visits.push(visit);
          return acc;
        }, {} as Record<string, { farmer_name: string; visits: any[] }>);

        // Sort visits by visit number for each farmer
        Object.values(farmerVisits).forEach(farmer => {
          farmer.visits.sort((a, b) => a.visit_number - b.visit_number);
        });

        return {
          ...officer,
          farmers: farmerVisits
        };
      });

      return officersWithProgress;
    },
  });
}

export function useCreateFieldOfficerAssignment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (assignment: FieldOfficerAssignmentInsert) => {
      const { data, error } = await supabase
        .from('field_officer_assignments')
        .insert(assignment)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['field_officer_assignments'] });
    },
  });
}
