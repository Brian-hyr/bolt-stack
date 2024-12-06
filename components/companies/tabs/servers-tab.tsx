import { useState } from 'react';
import { Server } from '@/types/company';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { AddServerDialog } from '@/components/servers/add-server-dialog';

interface ServersTabProps {
  servers: Server[];
}

export function ServersTab({ servers }: ServersTabProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServers = servers.filter(server => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      server.hostname.toLowerCase().includes(searchTerm) ||
      server.ips.some(ip => ip.ip_address.toLowerCase().includes(searchTerm)) ||
      server.domains.some(domain => domain.domain_name.toLowerCase().includes(searchTerm))
    );
  });

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Buscar servidores..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-[#12141a] border-[#2a2f3a] text-white w-full"
          />
        </div>
        <AddServerDialog />
      </div>

      <div className="space-y-2">
        {filteredServers.length === 0 ? (
          <div className="text-center text-gray-400 py-8">
            Nenhum resultado encontrado
          </div>
        ) : (
          filteredServers.map((server) => (
            <div
              key={server.id}
              className="bg-[#1e2128] rounded-lg p-4 border border-[#303030]"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white text-lg font-semibold">{server.hostname}</h3>
                <div className="space-x-2">
                  <Button variant="outline" size="sm" className="text-white border-[#2a2f3a]">
                    Editar
                  </Button>
                  <Button variant="outline" size="sm" className="text-white border-[#2a2f3a]">
                    +
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div>
                  <div className="text-gray-400 text-sm">Servidor</div>
                  <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a]">
                    Proxmox
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Versão</div>
                  <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a]">
                    7
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">IP Privado</div>
                  <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a] font-mono">
                    {server.ips.find(ip => ip.ip_type === 'private')?.ip_address}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">IP Público</div>
                  <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a] font-mono">
                    {server.ips.find(ip => ip.ip_type === 'public')?.ip_address}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Domínio</div>
                  <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a]">
                    {server.domains[0]?.domain_name}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}