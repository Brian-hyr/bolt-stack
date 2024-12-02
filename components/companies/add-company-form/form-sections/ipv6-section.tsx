'use client';

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Plus, Minus } from 'lucide-react';

export function IPv6Section({ form, fields, append, remove }: {
  form: any;
  fields: any[];
  append: (value: any) => void;
  remove: (index: number) => void;
}) {
  return (
    <Card className="p-6 bg-[#12141a] border-[#2a2f3a]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Prefixos IPv6</h3>
        <Button
          type="button"
          variant="outline"
          onClick={() => append({ prefix: '' })}
          className="text-white border-[#2a2f3a]"
        >
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Prefixo IPv6
        </Button>
      </div>
      <div className="space-y-4">
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-end gap-4">
            <FormField
              control={form.control}
              name={`ipv6_prefixes.${index}.prefix`}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-gray-400">Prefixo IPv6</FormLabel>
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