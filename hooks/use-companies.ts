import useSWR from 'swr';
import type { Company } from '@/types/company';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch companies');
  }
  return res.json();
};

export function useCompanies() {
  const { data, error, isLoading, mutate } = useSWR<Company[]>('/api/companies', fetcher);

  return {
    companies: data,
    isLoading,
    error: error?.message,
    mutate
  };
}