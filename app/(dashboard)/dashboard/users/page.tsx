'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/components/layout/page-header';
import { getCurrentUser } from '@/lib/auth-client';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { UserList } from '@/components/users/user-list';
import { AddUserDialog } from '@/components/users/add-user-dialog';

export default function UsersPage() {
  const router = useRouter();
  const [showAddDialog, setShowAddDialog] = useState(false);

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
          title="Usuários" 
          description="Gerenciar usuários do sistema"
        />
        <Button 
          onClick={() => setShowAddDialog(true)}
          className="bg-white hover:bg-white/90 text-black"
        >
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Usuário
        </Button>
      </div>
      
      <UserList />
      <AddUserDialog open={showAddDialog} onOpenChange={setShowAddDialog} />
    </div>
  );
}