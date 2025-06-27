
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Tables, TablesInsert, TablesUpdate } from '@/integrations/supabase/types';

type VisitSchedule = Tables<'visit_schedules'>;
type VisitScheduleInsert = TablesInsert<'visit_schedules'>;
type VisitScheduleUpdate = TablesUpdate<'visit_schedules'>;

export function useVisitSchedules() {
  return useQuery({
    queryKey: ['visit_schedules'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('visit_schedules')
        .select(`
          *,
          farmer:farmers(full_name, phone_number, region),
          field_officer:profiles(full_name)
        `)
        .order('visit_number', { ascending: true });

      if (error) throw error;
      return data;
    },
  });
}

export function useFieldOfficerVisits(fieldOfficerId?: string) {
  return useQuery({
    queryKey: ['field_officer_visits', fieldOfficerId],
    queryFn: async () => {
      if (!fieldOfficerId) return [];
      
      const { data, error } = await supabase
        .from('visit_schedules')
        .select(`
          *,
          farmer:farmers(full_name, phone_number, region)
        `)
        .eq('field_officer_id', fieldOfficerId)
        .order('farmer_id')
        .order('visit_number');

      if (error) throw error;
      return data;
    },
    enabled: !!fieldOfficerId,
  });
}

export function useUpdateVisitSchedule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: VisitScheduleUpdate }) => {
      const { data, error } = await supabase
        .from('visit_schedules')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['visit_schedules'] });
      queryClient.invalidateQueries({ queryKey: ['field_officer_visits'] });
    },
  });
}
