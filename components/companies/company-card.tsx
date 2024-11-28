import { useRouter } from 'next/navigation';
import { CompanyLinkCard } from './company-link-card';
import { Company } from '@/types/company';

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <CompanyLinkCard
      id={company.id}
      name={company.name}
      asn="272619"
      ipv4="187.120.30.0/24"
      ipv6="2804:8614::/32"
      domains={["fivetelecom.net.br"]}
    />
  );
}