
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Tables, TablesInsert, TablesUpdate } from '@/integrations/supabase/types';

type Farmer = Tables<'farmers'>;
type FarmerInsert = TablesInsert<'farmers'>;
type FarmerUpdate = TablesUpdate<'farmers'>;

export function useFarmers() {
  return useQuery({
    queryKey: ['farmers'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('farmers')
        .select(`
          *,
          registered_by:profiles(full_name, region)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  });
}

export function useCreateFarmer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (farmer: FarmerInsert) => {
      const { data, error } = await supabase
        .from('farmers')
        .insert(farmer)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['farmers'] });
    },
  });
}

export function useUpdateFarmer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: FarmerUpdate }) => {
      const { data, error } = await supabase
        .from('farmers')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['farmers'] });
    },
  });
}
