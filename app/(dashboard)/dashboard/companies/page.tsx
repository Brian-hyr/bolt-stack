'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/components/layout/page-header';
import { CompanyList } from '@/components/companies/company-list';
import { useCompanies } from '@/hooks/use-companies';
import { getCurrentUser } from '@/lib/auth-client';

export default function CompaniesPage() {
  const router = useRouter();
  const { companies, isLoading, error } = useCompanies();

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      router.push('/login');
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="text-white">Loading companies...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Companies" 
        description="Manage your company list"
      />
      <CompanyList companies={companies || []} />
    </div>
  );
}