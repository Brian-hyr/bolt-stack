import useSWR from 'swr';
import { Company } from '@/types/company';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useCompanies() {
  const { data, error, isLoading } = useSWR<Company[]>('/api/companies', fetcher);

  return {
    companies: data,
    isLoading,
    error: error?.message
  };
}