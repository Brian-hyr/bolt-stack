'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { companySchema } from '@/lib/validations/company';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { GeneralForm } from './forms/general-form';
import { AsnForm } from './forms/asn-form';
import { DomainForm } from './forms/domain-form';
import { PrefixForm } from './forms/prefix-form';

interface AddCompanyFormProps {
  onSuccess: () => void;
}

export function AddCompanyForm({ onSuccess }: AddCompanyFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [visitedTabs, setVisitedTabs] = useState(new Set(['general']));
  const [currentTab, setCurrentTab] = useState('general');

  const form = useForm({
    resolver: zodResolver(companySchema),
    defaultValues: {
      id: undefined,
      name: '',
      sigla: '',
      comentario: '',
      asns: [],
      domains: [],
      ipv4_prefixes: [],
      ipv6_prefixes: []
    }
  });

  const allTabsVisited = ['general', 'asns', 'domains', 'prefixes'].every(tab => 
    visitedTabs.has(tab)
  );

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    setVisitedTabs(prev => new Set([...prev, tab]));
  };

  async function onSubmit(data: any) {
    setLoading(true);
    try {
      const response = await fetch('/api/companies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Falha ao criar empresa');

      onSuccess();
      router.refresh();
    } catch (error) {
      console.error('Erro ao criar empresa:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Tabs value={currentTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="w-full bg-[#12141a] p-0 h-12">
            <TabsTrigger value="general" className="flex-1 h-12 data-[state=active]:bg-accent">
              Geral
            </TabsTrigger>
            <TabsTrigger value="asns" className="flex-1 h-12 data-[state=active]:bg-accent">
              ASNs
            </TabsTrigger>
            <TabsTrigger value="domains" className="flex-1 h-12 data-[state=active]:bg-accent">
              Domínios
            </TabsTrigger>
            <TabsTrigger value="prefixes" className="flex-1 h-12 data-[state=active]:bg-accent">
              Prefixos IP
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="mt-4">
            <GeneralForm form={form} />
          </TabsContent>

          <TabsContent value="asns" className="mt-4">
            <AsnForm form={form} />
          </TabsContent>

          <TabsContent value="domains" className="mt-4">
            <DomainForm form={form} />
          </TabsContent>

          <TabsContent value="prefixes" className="mt-4">
            <PrefixForm form={form} />
          </TabsContent>
        </Tabs>

        <div className="flex justify-end space-x-4 pt-4 border-t border-[#2a2f3a]">
          <Button
            type="button"
            variant="outline"
            onClick={() => onSuccess()}
            className="text-white border-[#2a2f3a]"
          >
            Cancelar
          </Button>
          {allTabsVisited && (
            <Button
              type="submit"
              disabled={loading}
              className="bg-white hover:bg-white/90 text-black"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Cadastrando...
                </>
              ) : (
                'Cadastrar Empresa'
              )}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}