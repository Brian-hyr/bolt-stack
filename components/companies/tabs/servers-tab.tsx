import { Server } from '@/types/company';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface ServersTabProps {
  servers: Server[];
}

export function ServersTab({ servers }: ServersTabProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Busca"
          className="px-3 py-2 bg-[#12141a] border border-[#2a2f3a] rounded text-white w-64"
        />
        <Button className="bg-white hover:bg-white/90 text-black">
          Add Servidor
        </Button>
      </div>

      {servers.map((server) => (
        <div key={server.id} className="bg-[#1e2128] rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
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
          <div className="grid grid-cols-5 gap-4">
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
      ))}
    </div>
  );
}