'use client';

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus, Minus } from 'lucide-react';
import { UseFormReturn, useFieldArray } from 'react-hook-form';

interface AsnFormProps {
  form: UseFormReturn<any>;
}

export function AsnForm({ form }: AsnFormProps) {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'asns'
  });

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-end gap-4">
          <FormField
            control={form.control}
            name={`asns.${index}.asn_number`}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="text-gray-400">Número ASN</FormLabel>
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
            onClick={() => remove(index)}
            className="text-white border-[#2a2f3a]"
          >
            <Minus className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        onClick={() => append({ asn_number: '' })}
        className="text-white border-[#2a2f3a]"
      >
        <Plus className="h-4 w-4 mr-2" />
        Adicionar ASN
      </Button>
    </div>
  );
}