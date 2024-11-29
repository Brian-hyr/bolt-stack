'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/components/layout/page-header';
import { getCurrentUser } from '@/lib/auth-client';
import { AddPtpDialog } from '@/components/ptp/add-ptp-dialog';
import { PtpList } from '@/components/ptp/ptp-list';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function PtpPage() {
  const router = useRouter();

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <PageHeader 
          title="Ponto a Ponto" 
          description="Gerenciar conexões ponto a ponto"
        />
        <AddPtpDialog />
      </div>
      <PtpList />
    </div>
  );
}