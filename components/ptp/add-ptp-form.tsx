'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card } from '@/components/ui/card';
import { ptpSchema } from '@/lib/validations/ptp';
import { Loader2 } from 'lucide-react';

interface AddPtpFormProps {
  onSuccess: () => void;
}

export function AddPtpForm({ onSuccess }: AddPtpFormProps) {
  const [loading, setLoading] = useState(false);
  const [selectedClient, setSelectedClient] = useState<string>('');
  const [ipBlocks, setIpBlocks] = useState<any[]>([]);
  const [routers, setRouters] = useState<any[]>([]);
  const [generatedIps, setGeneratedIps] = useState({ routerA: '', routerB: '' });
  const [generatedVlan, setGeneratedVlan] = useState({ ipv4: 0, ipv6: 0 });
  
  const form = useForm({
    resolver: zodResolver(ptpSchema),
    defaultValues: {
      ptp_number: '',
      client_id: '',
      ip_block: '',
      router_a: '',
      router_b: '',
    }
  });

  // Fetch IP blocks when client is selected
  useEffect(() => {
    if (selectedClient) {
      fetch(`/api/ptp/blocks/${selectedClient}`)
        .then(res => res.json())
        .then(data => setIpBlocks(data))
        .catch(err => console.error('Error fetching IP blocks:', err));

      fetch(`/api/ptp/routers/${selectedClient}`)
        .then(res => res.json())
        .then(data => setRouters(data))
        .catch(err => console.error('Error fetching routers:', err));
    }
  }, [selectedClient]);

  // Watch for changes in the PTP number to calculate VLANs
  const ptpNumber = form.watch('ptp_number');
  useEffect(() => {
    if (ptpNumber) {
      const number = parseInt(ptpNumber);
      setGeneratedVlan({
        ipv4: number * 10 + 4,
        ipv6: number * 10 + 6
      });
    }
  }, [ptpNumber]);

  // Generate IPs when IP block and PTP number are selected
  const ipBlock = form.watch('ip_block');
  useEffect(() => {
    if (ipBlock && ptpNumber) {
      const number = parseInt(ptpNumber);
      const [baseIp] = ipBlock.split('/');
      const parts = baseIp.split('.');
      const thirdOctet = number;
      
      setGeneratedIps({
        routerA: `${parts[0]}.${parts[1]}.${thirdOctet}.1/24`,
        routerB: `${parts[0]}.${parts[1]}.${thirdOctet}.2/24`
      });
    }
  }, [ipBlock, ptpNumber]);

  async function onSubmit(data: any) {
    setLoading(true);
    try {
      const response = await fetch('/api/ptp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          ip_router_a: generatedIps.routerA,
          ip_router_b: generatedIps.routerB,
          vlan_ipv4: generatedVlan.ipv4,
          vlan_ipv6: generatedVlan.ipv6
        }),
      });

      if (!response.ok) throw new Error('Failed to create PTP');

      onSuccess();
    } catch (error) {
      console.error('Error creating PTP:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="client_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400">Cliente</FormLabel>
                  <Select onValueChange={(value) => {
                    field.onChange(value);
                    setSelectedClient(value);
                    // Reset dependent fields
                    form.setValue('ip_block', '');
                    form.setValue('router_a', '');
                    form.setValue('router_b', '');
                  }}>
                    <FormControl>
                      <SelectTrigger className="bg-[#12141a] border-[#2a2f3a] text-white">
                        <SelectValue placeholder="Selecione o cliente" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#12141a] border-[#2a2f3a]">
                      {/* Replace with actual client data */}
                      <SelectItem value="1">Five Telecom</SelectItem>
                      <SelectItem value="2">Vero Internet</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ptp_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400">Número do PTP</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" className="bg-[#12141a] border-[#2a2f3a] text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ip_block"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400">Bloco IP</FormLabel>
                  <Select onValueChange={field.onChange} disabled={!selectedClient}>
                    <FormControl>
                      <SelectTrigger className="bg-[#12141a] border-[#2a2f3a] text-white">
                        <SelectValue placeholder="Selecione o bloco IP" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#12141a] border-[#2a2f3a]">
                      {ipBlocks.map((block) => (
                        <SelectItem key={block.id} value={block.ip_block_start}>
                          {block.ip_block_start}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-6">
            <FormField
              control={form.control}
              name="router_a"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400">Roteador A</FormLabel>
                  <Select onValueChange={field.onChange} disabled={!selectedClient}>
                    <FormControl>
                      <SelectTrigger className="bg-[#12141a] border-[#2a2f3a] text-white">
                        <SelectValue placeholder="Selecione o roteador" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#12141a] border-[#2a2f3a]">
                      {routers.map((router) => (
                        <SelectItem key={router.id} value={router.name}>
                          {router.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="router_b"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400">Roteador B</FormLabel>
                  <Select onValueChange={field.onChange} disabled={!selectedClient}>
                    <FormControl>
                      <SelectTrigger className="bg-[#12141a] border-[#2a2f3a] text-white">
                        <SelectValue placeholder="Selecione o roteador" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#12141a] border-[#2a2f3a]">
                      {routers.map((router) => (
                        <SelectItem key={router.id} value={router.name}>
                          {router.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Card className="bg-[#12141a] border-[#2a2f3a] p-4">
          <h3 className="text-lg font-medium mb-4">IPs e VLANs Gerados</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm">IP Roteador A</label>
                <div className="bg-[#1a1d24] px-3 py-2 rounded border border-[#2a2f3a] text-white font-mono">
                  {generatedIps.routerA || '-'}
                </div>
              </div>
              <div>
                <label className="text-gray-400 text-sm">IP Roteador B</label>
                <div className="bg-[#1a1d24] px-3 py-2 rounded border border-[#2a2f3a] text-white font-mono">
                  {generatedIps.routerB || '-'}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm">VLAN IPv4</label>
                <div className="bg-[#1a1d24] px-3 py-2 rounded border border-[#2a2f3a] text-white font-mono">
                  {generatedVlan.ipv4 || '-'}
                </div>
              </div>
              <div>
                <label className="text-gray-400 text-sm">VLAN IPv6</label>
                <div className="bg-[#1a1d24] px-3 py-2 rounded border border-[#2a2f3a] text-white font-mono">
                  {generatedVlan.ipv6 || '-'}
                </div>
              </div>
            </div>
          </div>
        </Card>

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
              'Criar PTP'
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}