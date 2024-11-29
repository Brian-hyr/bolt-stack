'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/components/layout/page-header';
import { getCurrentUser } from '@/lib/auth-client';
import { Card } from '@/components/ui/card';
import { FileSpreadsheet } from 'lucide-react';

export default function RegistersPage() {
  const router = useRouter();

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Cadastros" 
        description="Manage your registrations"
      />
      
      <Card className="p-6 bg-primary-custom">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-[#12141a] rounded-lg flex items-center justify-center text-white">
            <FileSpreadsheet className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-semibold text-white">Registration Management</h2>
        </div>
        
        <div className="text-center text-gray-400 py-8">
          Registration features coming soon
        </div>
      </Card>
    </div>
  );
}