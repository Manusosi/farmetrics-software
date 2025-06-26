
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Tables, TablesInsert, TablesUpdate } from '@/integrations/supabase/types';

type IssueReport = Tables<'issue_reports'>;
type IssueReportInsert = TablesInsert<'issue_reports'>;
type IssueReportUpdate = TablesUpdate<'issue_reports'>;

export function useIssueReports() {
  return useQuery({
    queryKey: ['issue_reports'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('issue_reports')
        .select(`
          *,
          field_officer:profiles(full_name, region)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  });
}

export function useUpdateIssueReport() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: IssueReportUpdate }) => {
      const { data, error } = await supabase
        .from('issue_reports')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['issue_reports'] });
    },
  });
}
