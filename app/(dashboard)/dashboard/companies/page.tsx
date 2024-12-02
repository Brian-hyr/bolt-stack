'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/components/layout/page-header';
import { CompanyList } from '@/components/companies/company-list';
import { useCompanies } from '@/hooks/use-companies';
import { getCurrentUser } from '@/lib/auth-client';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

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
      <div className="flex justify-between items-center">
        <PageHeader 
          title="Empresas" 
          description="Gerenciar lista de empresas"
        />
        <Button 
          onClick={() => router.push('/dashboard/companies/new')}
          className="bg-white hover:bg-white/90 text-black"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Empresa
        </Button>
      </div>
      <CompanyList companies={companies || []} />
    </div>
  );
}