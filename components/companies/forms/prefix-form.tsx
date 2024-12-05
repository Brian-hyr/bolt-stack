'use client';

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus, Minus } from 'lucide-react';
import { UseFormReturn, useFieldArray } from 'react-hook-form';

interface PrefixFormProps {
  form: UseFormReturn<any>;
}

export function PrefixForm({ form }: PrefixFormProps) {
  const { fields: ipv4Fields, append: appendIPv4, remove: removeIPv4 } = useFieldArray({
    control: form.control,
    name: 'ipv4_prefixes'
  });

  const { fields: ipv6Fields, append: appendIPv6, remove: removeIPv6 } = useFieldArray({
    control: form.control,
    name: 'ipv6_prefixes'
  });

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Prefixos IPv4</h3>
        {ipv4Fields.map((field, index) => (
          <div key={field.id} className="flex items-end gap-4 mb-4">
            <FormField
              control={form.control}
              name={`ipv4_prefixes.${index}.prefix`}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-gray-400">Prefixo IPv4</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-[#12141a] border-[#2a2f3a] text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => removeIPv4(index)}
              className="text-white border-[#2a2f3a]"
            >
              <Minus className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          onClick={() => appendIPv4({ prefix: '' })}
          className="text-white border-[#2a2f3a]"
        >
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Prefixo IPv4
        </Button>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Prefixos IPv6</h3>
        {ipv6Fields.map((field, index) => (
          <div key={field.id} className="flex items-end gap-4 mb-4">
            <FormField
              control={form.control}
              name={`ipv6_prefixes.${index}.prefix`}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-gray-400">Prefixo IPv6</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-[#12141a] border-[#2a2f3a] text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => removeIPv6(index)}
              className="text-white border-[#2a2f3a]"
            >
              <Minus className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          onClick={() => appendIPv6({ prefix: '' })}
          className="text-white border-[#2a2f3a]"
        >
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Prefixo IPv6
        </Button>
      </div>
    </div>
  );
}