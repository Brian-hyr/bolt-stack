'use client';

import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Network } from 'lucide-react';
import { useCompanyDetails } from '@/hooks/use-company-details';

interface CompanyDetailsProps {
  id: string;
}

export function CompanyDetails({ id }: CompanyDetailsProps) {
  const router = useRouter();
  const { company, loading, error } = useCompanyDetails(id);

  if (loading) {
    return <div className="text-center text-white">Carregando...</div>;
  }

  if (error || !company) {
    return <div className="text-center text-red-500">{error || 'Empresa não encontrada'}</div>;
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
          <div>
            <h3 className="text-gray-400 text-sm mb-2">Detalhes da Empresa</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="bg-[#12141a] px-3 py-1.5 rounded text-white font-mono text-sm">
                  {company.sigla || 'Sem sigla'}
                </div>
              </div>
              <div>
                <div className="bg-[#12141a] px-3 py-1.5 rounded text-white font-mono text-sm">
                  {company.comentario || 'Sem comentários'}
                </div>
              </div>
            </div>
          </div>

          {company.asns?.length > 0 && (
            <div>
              <h3 className="text-gray-400 text-sm mb-2">ASNs</h3>
              <div className="space-y-2">
                {company.asns.map((asn) => (
                  <div key={asn.id} className="bg-[#12141a] px-3 py-1.5 rounded text-white font-mono text-sm">
                    {asn.asn_number}
                  </div>
                ))}
              </div>
            </div>
          )}

          {company.ipv4s?.length > 0 && (
            <div>
              <h3 className="text-gray-400 text-sm mb-2">Prefixos IPv4</h3>
              <div className="space-y-2">
                {company.ipv4s.map((ip) => (
                  <div key={ip.id} className="bg-[#12141a] px-3 py-1.5 rounded text-white font-mono text-sm">
                    {ip.prefix}
                  </div>
                ))}
              </div>
            </div>
          )}

          {company.ipv6s?.length > 0 && (
            <div>
              <h3 className="text-gray-400 text-sm mb-2">Prefixos IPv6</h3>
              <div className="space-y-2">
                {company.ipv6s.map((ip) => (
                  <div key={ip.id} className="bg-[#12141a] px-3 py-1.5 rounded text-white font-mono text-sm">
                    {ip.prefix}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}