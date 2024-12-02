'use client';

import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { clientSchema, ClientFormData } from '@/lib/validations/client';
import { Plus, Minus, Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface AddCompanyFormProps {
  onSuccess: () => void;
}

export function AddCompanyForm({ onSuccess }: AddCompanyFormProps) {
  const [loading, setLoading] = useState(false);
  
  const form = useForm<ClientFormData>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      name: '',
      sigla: '',
      comentario: '',
      asns: [],
      ipv4_prefixes: [],
      ipv6_prefixes: []
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

  async function onSubmit(data: ClientFormData) {
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
        <Card className="p-6 bg-[#12141a] border-[#2a2f3a]">
          <h3 className="text-lg font-medium mb-4">Company Information</h3>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400">Company Name</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-[#1a1d24] border-[#2a2f3a] text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="sigla"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400">Abbreviation</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-[#1a1d24] border-[#2a2f3a] text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="comentario"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400">Comments</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="bg-[#1a1d24] border-[#2a2f3a] text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Card>

        <Card className="p-6 bg-[#12141a] border-[#2a2f3a]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">ASNs</h3>
            <Button
              type="button"
              variant="outline"
              onClick={() => appendAsn({ asn_number: '' })}
              className="text-white border-[#2a2f3a]"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add ASN
            </Button>
          </div>
          <div className="space-y-4">
            {asnFields.map((field, index) => (
              <div key={field.id} className="flex items-end gap-4">
                <FormField
                  control={form.control}
                  name={`asns.${index}.asn_number`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-gray-400">ASN Number</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="AS272619" className="bg-[#1a1d24] border-[#2a2f3a] text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeAsn(index)}
                  className="text-white border-[#2a2f3a] mb-[2px]"
                >
                  <Minus className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-[#12141a] border-[#2a2f3a]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">IPv4 Prefixes</h3>
            <Button
              type="button"
              variant="outline"
              onClick={() => appendIpv4({ prefix: '' })}
              className="text-white border-[#2a2f3a]"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add IPv4 Prefix
            </Button>
          </div>
          <div className="space-y-4">
            {ipv4Fields.map((field, index) => (
              <div key={field.id} className="flex items-end gap-4">
                <FormField
                  control={form.control}
                  name={`ipv4_prefixes.${index}.prefix`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-gray-400">IPv4 Prefix</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="187.120.30.0/24" className="bg-[#1a1d24] border-[#2a2f3a] text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeIpv4(index)}
                  className="text-white border-[#2a2f3a] mb-[2px]"
                >
                  <Minus className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-[#12141a] border-[#2a2f3a]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">IPv6 Prefixes</h3>
            <Button
              type="button"
              variant="outline"
              onClick={() => appendIpv6({ prefix: '' })}
              className="text-white border-[#2a2f3a]"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add IPv6 Prefix
            </Button>
          </div>
          <div className="space-y-4">
            {ipv6Fields.map((field, index) => (
              <div key={field.id} className="flex items-end gap-4">
                <FormField
                  control={form.control}
                  name={`ipv6_prefixes.${index}.prefix`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-gray-400">IPv6 Prefix</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="2804:8614::/32" className="bg-[#1a1d24] border-[#2a2f3a] text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeIpv6(index)}
                  className="text-white border-[#2a2f3a] mb-[2px]"
                >
                  <Minus className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <div className="flex justify-end space-x-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => onSuccess()}
            className="text-white border-[#2a2f3a]"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={loading}
            className="bg-white hover:bg-white/90 text-black"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Creating...
              </>
            ) : (
              'Create Company'
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}