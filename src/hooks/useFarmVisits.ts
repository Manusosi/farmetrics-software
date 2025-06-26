
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Tables, TablesInsert } from '@/integrations/supabase/types';

type FarmVisit = Tables<'farm_visits'>;
type FarmVisitInsert = TablesInsert<'farm_visits'>;

export function useFarmVisits() {
  return useQuery({
    queryKey: ['farm_visits'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('farm_visits')
        .select(`
          *,
          farmer:farmers(full_name, region),
          field_officer:profiles(full_name),
          media_files(*)
        `)
        .order('visit_date', { ascending: false });

      if (error) throw error;
      return data;
    },
  });
}

export function useCreateFarmVisit() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (visit: FarmVisitInsert) => {
      const { data, error } = await supabase
        .from('farm_visits')
        .insert(visit)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['farm_visits'] });
    },
  });
}
