'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/components/layout/page-header';
import { getCurrentUser } from '@/lib/auth-client';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, ClipboardCheck } from 'lucide-react';

export default function AuditsPage() {
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
          title="Auditorias" 
          description="Gerenciar auditorias do sistema"
        />
        <Button 
          onClick={() => router.push('/dashboard/audits/new')}
          className="bg-white hover:bg-white/90 text-black"
        >
          <Plus className="w-4 h-4 mr-2" />
          Nova Auditoria
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6 bg-primary-custom hover:bg-accent/90 transition-colors">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#12141a] rounded-lg flex items-center justify-center text-white">
              <ClipboardCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Total de Auditorias</h3>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-primary-custom hover:bg-accent/90 transition-colors">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#12141a] rounded-lg flex items-center justify-center text-white">
              <ClipboardCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Auditorias Pendentes</h3>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-primary-custom hover:bg-accent/90 transition-colors">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#12141a] rounded-lg flex items-center justify-center text-white">
              <ClipboardCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Concluídas este Mês</h3>
              <p className="text-2xl font-bold text-white">0</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-primary-custom">
        <div className="text-center text-gray-400 py-8">
          Nenhuma auditoria encontrada. Crie sua primeira auditoria para começar.
        </div>
      </Card>
    </div>
  );
}