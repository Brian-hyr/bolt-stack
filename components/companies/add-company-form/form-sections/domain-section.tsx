'use client';

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Plus, Minus } from 'lucide-react';

export function DomainSection({ form, fields, append, remove }: {
  form: any;
  fields: any[];
  append: (value: any) => void;
  remove: (index: number) => void;
}) {
  return (
    <Card className="p-6 bg-[#12141a] border-[#2a2f3a]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Domínios</h3>
        <Button
          type="button"
          variant="outline"
          onClick={() => append({ domain_name: '' })}
          className="text-white border-[#2a2f3a]"
        >
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Domínio
        </Button>
      </div>
      <div className="space-y-4">
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-end gap-4">
            <FormField
              control={form.control}
              name={`domains.${index}.domain_name`}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-gray-400">Nome do Domínio</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="exemplo.com.br" className="bg-[#1a1d24] border-[#2a2f3a] text-white" />
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
              className="text-white border-[#2a2f3a] mb-[2px]"
            >
              <Minus className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}