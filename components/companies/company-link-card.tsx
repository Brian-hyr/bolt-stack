'use client';

import { Card } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

interface CompanyLinkCardProps {
  id: string | number;
  name: string;
  asn?: string;
  ipv4?: string;
  ipv6?: string;
  domains?: string[];
}

export function CompanyLinkCard({ id, name, asn, ipv4, ipv6, domains }: CompanyLinkCardProps) {
  const router = useRouter();

  return (
    <Card 
      className="bg-[#1a1d24] p-6 hover:bg-[#1e2128] transition-colors cursor-pointer"
      onClick={() => router.push(`/dashboard/companies/${id}`)}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white">
            {id} - {name}
          </h2>
        </div>

        <div className="space-y-3">
          {asn && (
            <div>
              <label className="text-gray-400 block">ASN:</label>
              <div className="bg-[#12141a] px-3 py-2 rounded text-white font-mono">
                {asn}
              </div>
            </div>
          )}

          {domains && domains.length > 0 && (
            <div>
              <label className="text-gray-400 block">Domínios</label>
              <div className="bg-[#12141a] px-3 py-2 rounded text-white font-mono">
                {domains.join(', ')}
              </div>
            </div>
          )}

          {ipv4 && (
            <div>
              <label className="text-gray-400 block">IPv4:</label>
              <div className="bg-[#12141a] px-3 py-2 rounded text-white font-mono">
                {ipv4}
              </div>
            </div>
          )}

          {ipv6 && (
            <div>
              <label className="text-gray-400 block">IPv6:</label>
              <div className="bg-[#12141a] px-3 py-2 rounded text-white font-mono">
                {ipv6}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}