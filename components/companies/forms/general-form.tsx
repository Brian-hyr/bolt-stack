'use client';

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { UseFormReturn } from 'react-hook-form';

interface GeneralFormProps {
  form: UseFormReturn<any>;
}

export function GeneralForm({ form }: GeneralFormProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="id"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-400">ID da Empresa</FormLabel>
            <FormControl>
              <Input 
                {...field} 
                type="number" 
                onChange={(e) => field.onChange(Number(e.target.value))}
                className="bg-[#12141a] border-[#2a2f3a] text-white" 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-400">Nome da Empresa</FormLabel>
            <FormControl>
              <Input {...field} className="bg-[#12141a] border-[#2a2f3a] text-white" />
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
            <FormLabel className="text-gray-400">Sigla</FormLabel>
            <FormControl>
              <Input {...field} className="bg-[#12141a] border-[#2a2f3a] text-white" />
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
            <FormLabel className="text-gray-400">Comentário</FormLabel>
            <FormControl>
              <Textarea {...field} className="bg-[#12141a] border-[#2a2f3a] text-white" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}