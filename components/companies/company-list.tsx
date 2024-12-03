import { Company } from '@/types/company';
import { CompanyListItem } from './company-list-item';

interface CompanyListProps {
  companies: Company[];
}

export function CompanyList({ companies }: CompanyListProps) {
  if (!companies.length) {
    return (
      <div className="text-center text-gray-400 py-8">
        No companies found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {companies.map((company) => (
        <CompanyListItem key={company.id} company={company} />
      ))}
    </div>
  );
}