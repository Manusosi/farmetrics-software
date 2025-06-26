
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Tables, TablesUpdate } from '@/integrations/supabase/types';

type TransferRequest = Tables<'transfer_requests'>;
type TransferRequestUpdate = TablesUpdate<'transfer_requests'>;

export function useTransferRequests() {
  return useQuery({
    queryKey: ['transfer_requests'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('transfer_requests')
        .select(`
          *,
          field_officer:profiles!transfer_requests_field_officer_id_fkey(full_name, region),
          reviewed_by_profile:profiles!transfer_requests_reviewed_by_fkey(full_name)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  });
}

export function useUpdateTransferRequest() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: TransferRequestUpdate }) => {
      const { data, error } = await supabase
        .from('transfer_requests')
        .update({
          ...updates,
          reviewed_at: new Date().toISOString(),
        })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transfer_requests'] });
    },
  });
}
