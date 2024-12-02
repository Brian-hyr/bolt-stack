import useSWR from 'swr';
import { Workflow } from '@prisma/client';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch workflows');
  }
  return res.json();
};

export function useWorkflows(clientId?: string, userId?: string) {
  const params = new URLSearchParams();
  if (clientId) params.append('clientId', clientId);
  if (userId) params.append('userId', userId);

  const { data, error, isLoading, mutate } = useSWR<Workflow[]>(
    `/api/workflows?${params.toString()}`,
    fetcher
  );

  return {
    workflows: data,
    isLoading,
    error: error?.message,
    mutate
  };
}