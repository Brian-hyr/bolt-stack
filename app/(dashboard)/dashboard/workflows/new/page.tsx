'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth-client';
import { WorkflowEditor } from '@/components/workflows/workflow-editor';

export default function NewWorkflowPage() {
  const router = useRouter();

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="h-[calc(100vh-2rem)]">
      <WorkflowEditor />
    </div>
  );
}