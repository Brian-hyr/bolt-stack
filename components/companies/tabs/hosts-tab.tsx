import { Host } from '@/types/company';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface HostsTabProps {
  hosts: Host[];
}

export function HostsTab({ hosts }: HostsTabProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Busca"
          className="px-3 py-2 bg-[#12141a] border border-[#2a2f3a] rounded text-white w-64"
        />
        <Button className="bg-white hover:bg-white/90 text-black">
          Add Host
        </Button>
      </div>

      {hosts.map((host) => (
        <div key={host.id} className="bg-[#1e2128] rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-white text-lg font-semibold">{host.name}</h3>
            <div className="space-x-2">
              <Button variant="outline" size="sm" className="text-white border-[#2a2f3a]">
                Edit
              </Button>
              <Button variant="outline" size="sm" className="text-white border-[#2a2f3a]">
                +
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <div className="text-gray-400 text-sm">Função</div>
              <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a]">
                {host.name.includes('CORE') ? 'Core' : 'Borda'}
              </div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Função</div>
              <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a]">
                {host.name.includes('BORDA') ? 'Borda' : 'Core'}
              </div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Fabricante</div>
              <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a]">
                MikroTik
              </div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Modelo</div>
              <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a]">
                CCR2004-1G-12S+2XS
              </div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">IP Loopback</div>
              <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a] font-mono">
                {host.ips[0]?.ip_address}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}