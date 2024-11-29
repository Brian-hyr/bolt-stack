'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { accountSchema } from '@/lib/validations/account';
import { Loader2, Eye, EyeOff } from 'lucide-react';

interface AddAccountFormProps {
  onSuccess: () => void;
}

export function AddAccountForm({ onSuccess }: AddAccountFormProps) {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const form = useForm({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      cliente_id: 1,
      account_type: '',
      username: '',
      password: '',
      access_url: '',
      description: ''
    }
  });

  async function onSubmit(data: any) {
    setLoading(true);
    try {
      const response = await fetch('/api/accounts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to create account');

      onSuccess();
    } catch (error) {
      console.error('Error creating account:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="cliente_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-400">Cliente</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                <FormControl>
                  <SelectTrigger className="bg-[#12141a] border-[#2a2f3a] text-white">
                    <SelectValue placeholder="Selecione o cliente" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-[#12141a] border-[#2a2f3a]">
                  <SelectItem value="1">Five Telecom</SelectItem>
                  <SelectItem value="2">Vero Internet</SelectItem>
                  <SelectItem value="3">Brisanet</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="account_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-400">Tipo de Conta</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-[#12141a] border-[#2a2f3a] text-white">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-[#12141a] border-[#2a2f3a]">
                  <SelectItem value="ookla">Ookla</SelectItem>
                  <SelectItem value="irr">IRR</SelectItem>
                  <SelectItem value="google_cloud">Google Cloud</SelectItem>
                  <SelectItem value="aws">AWS</SelectItem>
                  <SelectItem value="azure">Azure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-400">Usuário</FormLabel>
              <FormControl>
                <Input {...field} className="bg-[#12141a] border-[#2a2f3a] text-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-400">Senha</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input 
                    {...field} 
                    type={showPassword ? 'text' : 'password'}
                    className="bg-[#12141a] border-[#2a2f3a] text-white pr-10" 
                  />
                </FormControl>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="access_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-400">URL de Acesso</FormLabel>
              <FormControl>
                <Input {...field} type="url" className="bg-[#12141a] border-[#2a2f3a] text-white" />
              </FormControl>
              <FormMessage />
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
                <Textarea {...field} className="bg-[#12141a] border-[#2a2f3a] text-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end space-x-4 pt-4 border-t border-[#2a2f3a]">
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
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Criando...
              </>
            ) : (
              'Criar Conta'
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}