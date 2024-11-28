import { useState, useEffect } from 'react';
import { CompanyDetails } from '@/types/company';

export function useCompanyDetails(id: string) {
  const [company, setCompany] = useState<CompanyDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCompanyDetails() {
      try {
        const response = await fetch(`/api/companies/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch company details');
        }
        const data = await response.json();
        setCompany(data);
      } catch (err) {
        setError('Failed to load company details');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchCompanyDetails();
    }
  }, [id]);

  return { company, loading, error };
}