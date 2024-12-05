'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/components/layout/page-header';
import { CompanyList } from '@/components/companies/company-list';
import { useCompanies } from '@/hooks/use-companies';
import { getCurrentUser } from '@/lib/auth-client';
import { Button } from '@/components/ui/button';
import { Plus, Search } from 'lucide-react';
import { AddCompanyDialog } from '@/components/companies/add-company-dialog';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function CompaniesPage() {
  const router = useRouter();
  const { companies, isLoading, error } = useCompanies();
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredCompanies = companies?.filter(company => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      company.id.toString().includes(searchTerm) ||
      company.name.toLowerCase().includes(searchTerm) ||
      (company.sigla?.toLowerCase() || '').includes(searchTerm)
    );
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <PageHeader 
          title="Empresas" 
          description="Gerenciar lista de empresas"
        />
        <div className="flex gap-4 items-center">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar empresas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-[#12141a] border-[#2a2f3a] text-white w-full"
            />
          </div>
          <AddCompanyDialog />
        </div>
      </div>
      <CompanyList companies={filteredCompanies || []} />
    </div>
  );
}