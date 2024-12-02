'use client';

import { useRouter } from 'next/navigation';
import { Company } from '@/types/company';
import { Card } from '@/components/ui/card';
import { Building2 } from 'lucide-react';

interface CompanyListProps {
  companies: Company[];
}

export function CompanyList({ companies }: CompanyListProps) {
  const router = useRouter();

  if (!companies.length) {
    return (
      <div className="text-center text-gray-400 py-8">
        Nenhuma empresa encontrada
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {companies.map((company) => (
        <Card 
          key={company.id} 
          className="bg-primary-custom p-6 hover:bg-accent/90 transition-colors cursor-pointer"
          onClick={() => router.push(`/dashboard/companies/${company.id}`)}
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#12141a] rounded-lg flex items-center justify-center text-white">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="text-sm text-gray-400">#{company.id}</span>
                <h3 className="text-lg font-semibold text-white">
                  {company.name}
                </h3>
              </div>
              {company.sigla && (
                <p className="text-sm text-gray-400">
                  {company.sigla}
                </p>
              )}
              <div className="mt-2 space-y-1">
                {company.asns?.length > 0 && (
                  <div className="text-sm text-gray-400">
                    ASNs: {company.asns.map(asn => asn.asn_number).join(', ')}
                  </div>
                )}
                {company.ipv4s?.length > 0 && (
                  <div className="text-sm text-gray-400">
                    IPv4: {company.ipv4s.map(ip => ip.prefix).join(', ')}
                  </div>
                )}
                {company.ipv6s?.length > 0 && (
                  <div className="text-sm text-gray-400">
                    IPv6: {company.ipv6s.map(ip => ip.prefix).join(', ')}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}