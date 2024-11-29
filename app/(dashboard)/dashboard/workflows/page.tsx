'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/components/layout/page-header';
import { getCurrentUser } from '@/lib/auth-client';
import { WorkflowList } from '@/components/workflows/workflow-list';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function WorkflowsPage() {
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
          title="Workflows" 
          description="Gerenciar automações e fluxos de trabalho"
        />
        <Button 
          onClick={() => router.push('/dashboard/workflows/new')}
          className="bg-white hover:bg-white/90 text-black"
        >
          <Plus className="w-4 h-4 mr-2" />
          Novo Workflow
        </Button>
      </div>
      <WorkflowList />
    </div>
  );
}