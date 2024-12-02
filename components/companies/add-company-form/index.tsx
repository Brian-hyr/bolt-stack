'use client';

import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { clientSchema } from '@/lib/validations/client';
import { Loader2 } from 'lucide-react';
import { CompanyInfoSection } from './form-sections/company-info';
import { ASNSection } from './form-sections/asn-section';
import { IPv4Section } from './form-sections/ipv4-section';
import { IPv6Section } from './form-sections/ipv6-section';
import { DomainSection } from './form-sections/domain-section';

interface AddCompanyFormProps {
  onSuccess: () => void;
}

export function AddCompanyForm({ onSuccess }: AddCompanyFormProps) {
  const [loading, setLoading] = useState(false);
  
  const form = useForm({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      id: undefined,
      name: '',
      sigla: '',
      comentario: '',
      asns: [],
      ipv4_prefixes: [],
      ipv6_prefixes: [],
      domains: []
    }
  });

  const { fields: asnFields, append: appendAsn, remove: removeAsn } = useFieldArray({
    control: form.control,
    name: 'asns'
  });

  const { fields: ipv4Fields, append: appendIpv4, remove: removeIpv4 } = useFieldArray({
    control: form.control,
    name: 'ipv4_prefixes'
  });

  const { fields: ipv6Fields, append: appendIpv6, remove: removeIpv6 } = useFieldArray({
    control: form.control,
    name: 'ipv6_prefixes'
  });

  const { fields: domainFields, append: appendDomain, remove: removeDomain } = useFieldArray({
    control: form.control,
    name: 'domains'
  });

  async function onSubmit(data: any) {
    setLoading(true);
    try {
      const response = await fetch('/api/companies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to create company');

      onSuccess();
    } catch (error) {
      console.error('Error creating company:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CompanyInfoSection form={form} />
        
        <ASNSection 
          form={form}
          fields={asnFields}
          append={appendAsn}
          remove={removeAsn}
        />

        <IPv4Section
          form={form}
          fields={ipv4Fields}
          append={appendIpv4}
          remove={removeIpv4}
        />

        <IPv6Section
          form={form}
          fields={ipv6Fields}
          append={appendIpv6}
          remove={removeIpv6}
        />

        <DomainSection
          form={form}
          fields={domainFields}
          append={appendDomain}
          remove={removeDomain}
        />

        <div className="flex justify-end space-x-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => onSuccess()}
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
                <Loader2 className="w-4 w-4 mr-2 animate-spin" />
                Criando...
              </>
            ) : (
              'Criar Empresa'
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}