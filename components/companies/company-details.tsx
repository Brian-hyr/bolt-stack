import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCompanyDetails } from '@/hooks/use-company-details';
import { HostsTab } from './tabs/hosts-tab';
import { ServersTab } from './tabs/servers-tab';
import { AccountsTab } from './tabs/accounts-tab';
import { Monitor, Server, Key, Network } from 'lucide-react';
import { mockHosts, mockServers, mockAccounts } from '@/lib/mock/data';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

interface CompanyDetailsProps {
  id: string;
}

export function CompanyDetails({ id }: CompanyDetailsProps) {
  const router = useRouter();
  const { company, loading, error } = useCompanyDetails(id);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error || !company) {
    return <div className="text-center text-red-500">{error || 'Company not found'}</div>;
  }

  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 border-2 border-dashed border-blue-500/30 rounded-lg flex items-center justify-center">
            <div className="text-gray-400">Logo</div>
          </div>
          <h1 className="text-3xl font-bold text-white">
            {company.id} - {company.name}
          </h1>
        </div>
        <Button 
          onClick={() => router.push(`/dashboard/ptp?client=${company.id}`)}
          className="bg-[#12141a] hover:bg-[#1a1d24] text-white"
        >
          <Network className="w-4 h-4 mr-2" />
          Ver PTPs
        </Button>
      </div>

      <Card className="bg-[#1a1d24] border-[#2a2f3a] p-6">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-gray-400 text-sm mb-2">ASN</h3>
              <div className="flex flex-wrap gap-2">
                <div className="bg-[#12141a] px-3 py-1.5 rounded text-white font-mono text-sm">
                  272619
                </div>
                <div className="bg-[#12141a] px-3 py-1.5 rounded text-white font-mono text-sm">
                  262793
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm mb-2">Domínios</h3>
              <div className="flex flex-wrap gap-2">
                <div className="bg-[#12141a] px-3 py-1.5 rounded text-white font-mono text-sm">
                  fivetelecom.net.br
                </div>
                <div className="bg-[#12141a] px-3 py-1.5 rounded text-white font-mono text-sm">
                  fivetelecom.com.br
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-gray-400 text-sm mb-2">IPv4</h3>
            <div className="flex flex-wrap gap-2">
              <div className="bg-[#12141a] px-3 py-1.5 rounded text-white font-mono text-sm">
                187.120.30.0/24
              </div>
              <div className="bg-[#12141a] px-3 py-1.5 rounded text-white font-mono text-sm">
                45.119.120.0/24
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-gray-400 text-sm mb-2">IPv6</h3>
            <div className="flex flex-wrap gap-2">
              <div className="bg-[#12141a] px-3 py-1.5 rounded text-white font-mono text-sm">
                2804:8614::/32
              </div>
              <div className="bg-[#12141a] px-3 py-1.5 rounded text-white font-mono text-sm">
                2804:8615::/32
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="bg-[#1a1d24] border-[#2a2f3a]">
        <Tabs defaultValue="hosts" className="w-full">
          <TabsList className="w-full bg-[#12141a] p-0 h-12">
            <TabsTrigger
              value="hosts"
              className="flex-1 h-12 data-[state=active]:bg-accent"
            >
              <Monitor className="w-4 h-4 mr-2" />
              Hosts
            </TabsTrigger>
            <TabsTrigger
              value="servers"
              className="flex-1 h-12 data-[state=active]:bg-accent"
            >
              <Server className="w-4 h-4 mr-2" />
              Servidores
            </TabsTrigger>
            <TabsTrigger
              value="accounts"
              className="flex-1 h-12 data-[state=active]:bg-accent"
            >
              <Key className="w-4 h-4 mr-2" />
              Contas
            </TabsTrigger>
          </TabsList>
          <div className="p-4">
            <TabsContent value="hosts">
              <HostsTab hosts={mockHosts} />
            </TabsContent>
            <TabsContent value="servers">
              <ServersTab servers={mockServers} />
            </TabsContent>
            <TabsContent value="accounts">
              <AccountsTab accounts={mockAccounts} />
            </TabsContent>
          </div>
        </Tabs>
      </Card>
    </div>
  );
}