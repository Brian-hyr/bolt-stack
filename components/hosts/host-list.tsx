'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pencil, Plus } from 'lucide-react';

interface Host {
  id: number;
  name: string;
  status: string;
  ips: { ip_address: string }[];
}

interface HostListProps {
  clientId: number;
}

export function HostList({ clientId }: HostListProps) {
  const [hosts, setHosts] = useState<Host[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchHosts() {
      try {
        const response = await fetch(`/api/hosts?clientId=${clientId}`);
        if (!response.ok) throw new Error('Failed to fetch hosts');
        const data = await response.json();
        setHosts(data);
      } catch (err) {
        setError('Failed to load hosts');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchHosts();
  }, [clientId]);

  if (loading) {
    return <div className="text-center text-gray-400 py-8">Loading hosts...</div>;
  }

  if (error) {
    return <div className="text-center text-red-400 py-8">{error}</div>;
  }

  if (!hosts.length) {
    return (
      <div className="text-center text-gray-400 py-8">
        No hosts found
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {hosts.map((host) => (
        <Card key={host.id} className="bg-[#1e2128] p-4">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-white">{host.name}</h3>
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
        </Card>
      ))}
    </div>
  );
}