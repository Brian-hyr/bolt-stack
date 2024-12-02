'use client';

import { useState } from 'react';
import { Host } from '@/types/company';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { AddHostDialog } from '@/components/hosts/add-host-dialog';

interface HostsTabProps {
  hosts: Host[];
  clientId: number;
}

export function HostsTab({ hosts, clientId }: HostsTabProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHosts = hosts.filter(host => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      host.name.toLowerCase().includes(searchTerm) ||
      (host.name.includes('CORE') ? 'Core' : 'Borda').toLowerCase().includes(searchTerm) ||
      'MikroTik'.toLowerCase().includes(searchTerm) ||
      'CCR2004-1G-12S+2XS'.toLowerCase().includes(searchTerm) ||
      host.ips[0]?.ip_address.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search hosts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-[#12141a] border-[#2a2f3a] text-white w-full"
          />
        </div>
        <AddHostDialog clientId={clientId} />
      </div>

      <div className="space-y-2">
        {filteredHosts.length === 0 ? (
          <div className="text-center text-gray-400 py-8">
            No results found
          </div>
        ) : (
          filteredHosts.map((host) => (
            <div 
              key={host.id} 
              className="bg-[#1e2128] rounded-lg p-4 border border-[#303030]"
            >
              <div className="flex justify-between items-center mb-4">
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
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div>
                  <div className="text-gray-400 text-sm">Function</div>
                  <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a]">
                    {host.name.includes('CORE') ? 'Core' : 'Edge'}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Type</div>
                  <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a]">
                    {host.name.includes('BORDA') ? 'Edge' : 'Core'}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Manufacturer</div>
                  <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a]">
                    MikroTik
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Model</div>
                  <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a]">
                    CCR2004-1G-12S+2XS
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Loopback IP</div>
                  <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a] font-mono">
                    {host.ips[0]?.ip_address}
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