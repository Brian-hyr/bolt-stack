'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pencil } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Workflow {
  id: number;
  name: string;
  description: string | null;
  created_at: string;
  is_active: boolean;
}

export function WorkflowList() {
  const router = useRouter();
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWorkflows() {
      try {
        const response = await fetch('/api/workflows');
        if (!response.ok) throw new Error('Failed to fetch workflows');
        const data = await response.json();
        setWorkflows(data);
      } catch (error) {
        console.error('Error fetching workflows:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchWorkflows();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-gray-400 py-8">
        Loading workflows...
      </div>
    );
  }

  if (!workflows.length) {
    return (
      <Card className="p-6 bg-primary-custom">
        <div className="text-center text-gray-400">
          No workflows found. Create your first workflow to get started.
        </div>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {workflows.map((workflow) => (
        <Card key={workflow.id} className="bg-primary-custom p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white">{workflow.name}</h3>
              {workflow.description && (
                <p className="text-gray-400 text-sm mt-1">{workflow.description}</p>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="text-white border-[#2a2f3a]"
                onClick={() => router.push(`/dashboard/workflows/${workflow.id}`)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="text-white border-[#2a2f3a]"
                onClick={() => {
                  // Execute workflow
                }}
              >
                <Play className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            Created: {new Date(workflow.created_at).toLocaleDateString()}
          </div>
          <div className="mt-2">
            <span className={`px-2 py-1 rounded text-xs ${
              workflow.is_active ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
            }`}>
              {workflow.is_active ? 'Active' : 'Inactive'}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}