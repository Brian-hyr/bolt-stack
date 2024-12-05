'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pencil, Plus } from 'lucide-react';

interface Server {
  id: number;
  hostname: string;
  status: string;
  ips: { ip_address: string; ip_type: string }[];
  domains: { domain_name: string }[];
}

interface ServerListProps {
  clientId: number;
}

export function ServerList({ clientId }: ServerListProps) {
  const [servers, setServers] = useState<Server[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchServers() {
      try {
        const response = await fetch(`/api/servers?clientId=${clientId}`);
        if (!response.ok) throw new Error('Failed to fetch servers');
        const data = await response.json();
        setServers(data);
      } catch (err) {
        setError('Failed to load servers');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchServers();
  }, [clientId]);

  if (loading) {
    return <div className="text-center text-gray-400 py-8">Loading servers...</div>;
  }

  if (error) {
    return <div className="text-center text-red-400 py-8">{error}</div>;
  }

  if (!servers.length) {
    return (
      <div className="text-center text-gray-400 py-8">
        No servers found
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {servers.map((server) => (
        <Card key={server.id} className="bg-[#1e2128] p-4">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-white">{server.hostname}</h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="text-white border-[#2a2f3a]"
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-white border-[#2a2f3a]"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <div className="text-gray-400 text-sm">Server</div>
              <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a]">
                Proxmox
              </div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Version</div>
              <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a]">
                7
              </div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Private IP</div>
              <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a] font-mono">
                {server.ips.find(ip => ip.ip_type === 'private')?.ip_address}
              </div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Public IP</div>
              <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a] font-mono">
                {server.ips.find(ip => ip.ip_type === 'public')?.ip_address}
              </div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Domain</div>
              <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a]">
                {server.domains[0]?.domain_name}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}