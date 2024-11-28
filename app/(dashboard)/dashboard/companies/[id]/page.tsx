'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { CompanyDetails } from '@/components/companies/company-details';
import { getCurrentUser } from '@/lib/auth-client';

export default function CompanyPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-[#15181F]">
      <div className="p-6 bg-[#15181F]">
        <CompanyDetails id={params.id} />
      </div>
    </div>
  );
}