'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from '@/components/layout/page-header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { auditSchema } from '@/lib/validations/audit';
import { Loader2 } from 'lucide-react';

export default function NewAuditPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(auditSchema),
    defaultValues: {
      type: 'GENERAL',
      client_id: undefined,
      auditor_id: '',
      description: '',
      equipment_ids: []
    }
  });

  async function onSubmit(data: any) {
    setLoading(true);
    try {
      const response = await fetch('/api/audits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to create audit');

      router.push('/dashboard/audits');
    } catch (error) {
      console.error('Error creating audit:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Nova Auditoria" 
        description="Criar uma nova auditoria do sistema"
      />

      <Card className="p-6 bg-primary-custom">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400">Tipo de Auditoria</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-[#12141a] border-[#2a2f3a] text-white">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#12141a] border-[#2a2f3a]">
                      <SelectItem value="GENERAL">Geral</SelectItem>
                      <SelectItem value="SPECIFIC">Específica</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="client_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400">Cliente</FormLabel>
                  <Select onValueChange={(value) => field.onChange(parseInt(value))}>
                    <FormControl>
                      <SelectTrigger className="bg-[#12141a] border-[#2a2f3a] text-white">
                        <SelectValue placeholder="Selecione o cliente" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#12141a] border-[#2a2f3a]">
                      <SelectItem value="1">Cliente 1</SelectItem>
                      <SelectItem value="2">Cliente 2</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400">Descrição</FormLabel>
                  <FormControl>
                    <Textarea 
                      {...field} 
                      className="bg-[#12141a] border-[#2a2f3a] text-white min-h-[100px]" 
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
                className="text-white border-[#2a2f3a]"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="bg-white hover:bg-white/90 text-black"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Criando...
                  </>
                ) : (
                  'Criar Auditoria'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
}