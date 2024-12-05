'use client';

import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { clientSchema } from '@/lib/validations/client';
import { Loader2 } from 'lucide-react';
import { CompanyInfoSection } from './form-sections/company-info';

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ASNs and Domains side by side */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-white">ASNs</h3>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => appendAsn({ asn_number: '' })}
                className="text-white border-[#2a2f3a]"
              >
                Adicionar ASN
              </Button>
            </div>
            {asnFields.map((field, index) => (
              <div key={field.id} className="flex gap-2">
                <input
                  {...form.register(`asns.${index}.asn_number`)}
                  placeholder="AS272619"
                  className="flex-1 bg-[#12141a] border border-[#2a2f3a] rounded-md p-2 text-white"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeAsn(index)}
                  className="text-white border-[#2a2f3a]"
                >
                  <Loader2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-white">Domínios</h3>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => appendDomain({ domain_name: '' })}
                className="text-white border-[#2a2f3a]"
              >
                Adicionar Domínio
              </Button>
            </div>
            {domainFields.map((field, index) => (
              <div key={field.id} className="flex gap-2">
                <input
                  {...form.register(`domains.${index}.domain_name`)}
                  placeholder="exemplo.com.br"
                  className="flex-1 bg-[#12141a] border border-[#2a2f3a] rounded-md p-2 text-white"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeDomain(index)}
                  className="text-white border-[#2a2f3a]"
                >
                  <Loader2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          {/* IPv4 and IPv6 side by side */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-white">Prefixos IPv4</h3>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => appendIpv4({ prefix: '' })}
                className="text-white border-[#2a2f3a]"
              >
                Adicionar IPv4
              </Button>
            </div>
            {ipv4Fields.map((field, index) => (
              <div key={field.id} className="flex gap-2">
                <input
                  {...form.register(`ipv4_prefixes.${index}.prefix`)}
                  placeholder="187.120.30.0/24"
                  className="flex-1 bg-[#12141a] border border-[#2a2f3a] rounded-md p-2 text-white"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeIpv4(index)}
                  className="text-white border-[#2a2f3a]"
                >
                  <Loader2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-white">Prefixos IPv6</h3>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => appendIpv6({ prefix: '' })}
                className="text-white border-[#2a2f3a]"
              >
                Adicionar IPv6
              </Button>
            </div>
            {ipv6Fields.map((field, index) => (
              <div key={field.id} className="flex gap-2">
                <input
                  {...form.register(`ipv6_prefixes.${index}.prefix`)}
                  placeholder="2804:8614::/32"
                  className="flex-1 bg-[#12141a] border border-[#2a2f3a] rounded-md p-2 text-white"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeIpv6(index)}
                  className="text-white border-[#2a2f3a]"
                >
                  <Loader2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

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