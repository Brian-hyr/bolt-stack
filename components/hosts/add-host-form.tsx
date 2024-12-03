import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { hostSchema } from '@/lib/validations/host';
import { Plus, Minus, Loader2 } from 'lucide-react';

interface AddHostFormProps {
  onSuccess: () => void;
}

export function AddHostForm({ onSuccess }: AddHostFormProps) {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(hostSchema),
    defaultValues: {
      name: '',
      comentario: '',
      status: 'ativo',
      model_id: 1,
      cliente_id: 1,
      ips: [{ ip_address: '', version: 'ipv4', type: 'loopback' }],
      snmp: [{ version: 'v2c', community: '' }],
      access_types: [{ type: 'ssh', port: '22' }],
      credentials: [{ username: '', password: '', description: '' }]
    }
  });

  const { fields: ipFields, append: appendIp, remove: removeIp } = useFieldArray({
    control: form.control,
    name: 'ips'
  });

  const { fields: snmpFields, append: appendSnmp, remove: removeSnmp } = useFieldArray({
    control: form.control,
    name: 'snmp'
  });

  const { fields: accessFields, append: appendAccess, remove: removeAccess } = useFieldArray({
    control: form.control,
    name: 'access_types'
  });

  const { fields: credFields, append: appendCred, remove: removeCred } = useFieldArray({
    control: form.control,
    name: 'credentials'
  });

  async function onSubmit(data: any) {
    setLoading(true);
    try {
      const response = await fetch('/api/hosts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to create host');

      onSuccess();
    } catch (error) {
      console.error('Error creating host:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="w-full bg-[#12141a] p-0 h-12">
            <TabsTrigger value="general" className="flex-1 h-12 data-[state=active]:bg-accent">General</TabsTrigger>
            <TabsTrigger value="ips" className="flex-1 h-12 data-[state=active]:bg-accent">IPs</TabsTrigger>
            <TabsTrigger value="snmp" className="flex-1 h-12 data-[state=active]:bg-accent">SNMP</TabsTrigger>
            <TabsTrigger value="access" className="flex-1 h-12 data-[state=active]:bg-accent">Access</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400">Host Name</FormLabel>
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
                  <FormLabel className="text-gray-400">Comments</FormLabel>
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
                        <SelectValue placeholder="Select status" />
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
          </TabsContent>

          <TabsContent value="ips" className="space-y-4 mt-4">
            {ipFields.map((field, index) => (
              <div key={field.id} className="flex items-end gap-4">
                <FormField
                  control={form.control}
                  name={`ips.${index}.ip_address`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-gray-400">IP Address</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-[#12141a] border-[#2a2f3a] text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`ips.${index}.version`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-gray-400">Version</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-[#12141a] border-[#2a2f3a] text-white">
                            <SelectValue placeholder="Select version" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#12141a] border-[#2a2f3a]">
                          <SelectItem value="ipv4">IPv4</SelectItem>
                          <SelectItem value="ipv6">IPv6</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`ips.${index}.type`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-gray-400">Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-[#12141a] border-[#2a2f3a] text-white">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#12141a] border-[#2a2f3a]">
                          <SelectItem value="loopback">Loopback</SelectItem>
                          <SelectItem value="management">Management</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
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
              onClick={() => appendIp({ ip_address: '', version: 'ipv4', type: 'loopback' })}
              className="text-white border-[#2a2f3a]"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add IP
            </Button>
          </TabsContent>

          <TabsContent value="snmp" className="space-y-4 mt-4">
            {snmpFields.map((field, index) => (
              <div key={field.id} className="space-y-4 p-4 bg-[#12141a] rounded-lg border border-[#2a2f3a]">
                <div className="flex justify-between items-center">
                  <h4 className="text-white font-medium">SNMP Configuration {index + 1}</h4>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => removeSnmp(index)}
                    className="text-white border-[#2a2f3a]"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                </div>

                <FormField
                  control={form.control}
                  name={`snmp.${index}.version`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-400">Version</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-[#12141a] border-[#2a2f3a] text-white">
                            <SelectValue placeholder="Select version" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#12141a] border-[#2a2f3a]">
                          <SelectItem value="v1">v1</SelectItem>
                          <SelectItem value="v2c">v2c</SelectItem>
                          <SelectItem value="v3">v3</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {(form.watch(`snmp.${index}.version`) === 'v1' || 
                  form.watch(`snmp.${index}.version`) === 'v2c') && (
                  <FormField
                    control={form.control}
                    name={`snmp.${index}.community`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400">Community</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-[#12141a] border-[#2a2f3a] text-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {form.watch(`snmp.${index}.version`) === 'v3' && (
                  <>
                    <FormField
                      control={form.control}
                      name={`snmp.${index}.security_name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-400">Security Name</FormLabel>
                          <FormControl>
                            <Input {...field} className="bg-[#12141a] border-[#2a2f3a] text-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Add other v3-specific fields here */}
                  </>
                )}
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() => appendSnmp({ version: 'v2c', community: '' })}
              className="text-white border-[#2a2f3a]"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add SNMP Configuration
            </Button>
          </TabsContent>

          <TabsContent value="access" className="space-y-4 mt-4">
            {accessFields.map((field, index) => (
              <div key={field.id} className="space-y-4 p-4 bg-[#12141a] rounded-lg border border-[#2a2f3a]">
                <div className="flex justify-between items-center">
                  <h4 className="text-white font-medium">Access Configuration {index + 1}</h4>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => removeAccess(index)}
                    className="text-white border-[#2a2f3a]"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name={`access_types.${index}.type`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400">Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-[#12141a] border-[#2a2f3a] text-white">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#12141a] border-[#2a2f3a]">
                            <SelectItem value="ssh">SSH</SelectItem>
                            <SelectItem value="telnet">Telnet</SelectItem>
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
                    name={`access_types.${index}.port`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400">Port</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" className="bg-[#12141a] border-[#2a2f3a] text-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() => appendAccess({ type: 'ssh', port: '22' })}
              className="text-white border-[#2a2f3a]"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Access Configuration
            </Button>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end space-x-4 pt-4 border-t border-[#2a2f3a]">
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
              'Create Host'
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}