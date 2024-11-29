'use client';

import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { serverSchema } from '@/lib/validations/server';
import { Plus, Minus, Loader2 } from 'lucide-react';

interface AddServerFormProps {
  onSuccess: () => void;
}

export function AddServerForm({ onSuccess }: AddServerFormProps) {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(serverSchema),
    defaultValues: {
      hostname: '',
      description: '',
      status: 'ativo',
      cliente_id: 1,
      service_version_id: 1,
      ips: [{ ip_address: '', ip_type: 'private', description: '' }],
      domains: [{ domain_name: '', description: '' }],
      access_methods: [{ method_type: 'ssh', port: '22', description: '' }],
      credentials: [{ username: '', password: '', description: '' }]
    }
  });

  const { fields: ipFields, append: appendIp, remove: removeIp } = useFieldArray({
    control: form.control,
    name: 'ips'
  });

  const { fields: domainFields, append: appendDomain, remove: removeDomain } = useFieldArray({
    control: form.control,
    name: 'domains'
  });

  const { fields: methodFields, append: appendMethod, remove: removeMethod } = useFieldArray({
    control: form.control,
    name: 'access_methods'
  });

  const { fields: credFields, append: appendCred, remove: removeCred } = useFieldArray({
    control: form.control,
    name: 'credentials'
  });

  async function onSubmit(data: any) {
    setLoading(true);
    try {
      const response = await fetch('/api/servers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to create server');

      onSuccess();
    } catch (error) {
      console.error('Error creating server:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="w-full bg-[#12141a] p-0 h-12">
            <TabsTrigger value="general" className="flex-1 h-12 data-[state=active]:bg-accent">Geral</TabsTrigger>
            <TabsTrigger value="ips" className="flex-1 h-12 data-[state=active]:bg-accent">IPs</TabsTrigger>
            <TabsTrigger value="domains" className="flex-1 h-12 data-[state=active]:bg-accent">Domínios</TabsTrigger>
            <TabsTrigger value="access" className="flex-1 h-12 data-[state=active]:bg-accent">Acesso</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="hostname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400">Hostname</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-[#12141a] border-[#2a2f3a] text-white" />
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

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400">Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-[#12141a] border-[#2a2f3a] text-white">
                        <SelectValue placeholder="Selecione o status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#12141a] border-[#2a2f3a]">
                      <SelectItem value="ativo">Ativo</SelectItem>
                      <SelectItem value="inativo">Inativo</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="service_version_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400">Versão do Serviço</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                    <FormControl>
                      <SelectTrigger className="bg-[#12141a] border-[#2a2f3a] text-white">
                        <SelectValue placeholder="Selecione a versão" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#12141a] border-[#2a2f3a]">
                      <SelectItem value="1">Proxmox 7</SelectItem>
                      <SelectItem value="2">Proxmox 8</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TabsContent>

          <TabsContent value="ips" className="space-y-4 mt-4">
            {ipFields.map((field, index) => (
              <div key={field.id} className="flex items-end gap-4">
                <FormField
                  control={form.control}
                  name={`ips.${index}.ip_address`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-gray-400">Endereço IP</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-[#12141a] border-[#2a2f3a] text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`ips.${index}.ip_type`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-gray-400">Tipo</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-[#12141a] border-[#2a2f3a] text-white">
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#12141a] border-[#2a2f3a]">
                          <SelectItem value="private">Privado</SelectItem>
                          <SelectItem value="public">Público</SelectItem>
                          <SelectItem value="management">Gerência</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeIp(index)}
                  className="text-white border-[#2a2f3a]"
                >
                  <Minus className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() => appendIp({ ip_address: '', ip_type: 'private', description: '' })}
              className="text-white border-[#2a2f3a]"
            >
              <Plus className="h-4 w-4 mr-2" />
              Adicionar IP
            </Button>
          </TabsContent>

          <TabsContent value="domains" className="space-y-4 mt-4">
            {domainFields.map((field, index) => (
              <div key={field.id} className="flex items-end gap-4">
                <FormField
                  control={form.control}
                  name={`domains.${index}.domain_name`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-gray-400">Nome do Domínio</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-[#12141a] border-[#2a2f3a] text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`domains.${index}.description`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-gray-400">Descrição</FormLabel>
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
                  onClick={() => removeDomain(index)}
                  className="text-white border-[#2a2f3a]"
                >
                  <Minus className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() => appendDomain({ domain_name: '', description: '' })}
              className="text-white border-[#2a2f3a]"
            >
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Domínio
            </Button>
          </TabsContent>

          <TabsContent value="access" className="space-y-4 mt-4">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Métodos de Acesso</h3>
                {methodFields.map((field, index) => (
                  <div key={field.id} className="flex items-end gap-4 mb-4">
                    <FormField
                      control={form.control}
                      name={`access_methods.${index}.method_type`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel className="text-gray-400">Tipo</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-[#12141a] border-[#2a2f3a] text-white">
                                <SelectValue placeholder="Selecione o tipo" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-[#12141a] border-[#2a2f3a]">
                              <SelectItem value="ssh">SSH</SelectItem>
                              <SelectItem value="http">HTTP</SelectItem>
                              <SelectItem value="https">HTTPS</SelectItem>
                              <SelectItem value="api">API</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`access_methods.${index}.port`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel className="text-gray-400">Porta</FormLabel>
                          <FormControl>
                            <Input {...field} type="number" className="bg-[#12141a] border-[#2a2f3a] text-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeMethod(index)}
                      className="text-white border-[#2a2f3a]"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => appendMethod({ method_type: 'ssh', port: '22', description: '' })}
                  className="text-white border-[#2a2f3a]"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Método de Acesso
                </Button>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Credenciais de Acesso</h3>
                {credFields.map((field, index) => (
                  <div key={field.id} className="space-y-4 p-4 bg-[#12141a] rounded-lg border border-[#2a2f3a] mb-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-white font-medium">Credencial {index + 1}</h4>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeCred(index)}
                        className="text-white border-[#2a2f3a]"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>

                    <FormField
                      control={form.control}
                      name={`credentials.${index}.username`}
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
                      name={`credentials.${index}.password`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-400">Senha</FormLabel>
                          <FormControl>
                            <Input {...field} type="password" className="bg-[#12141a] border-[#2a2f3a] text-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`credentials.${index}.description`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-400">Descrição</FormLabel>
                          <FormControl>
                            <Input {...field} className="bg-[#12141a] border-[#2a2f3a] text-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => appendCred({ username: '', password: '', description: '' })}
                  className="text-white border-[#2a2f3a]"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Credencial
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

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
              'Criar Servidor'
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}