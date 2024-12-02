import { Company } from '@/types/company';
import { Card } from '@/components/ui/card';

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
        <Card key={company.id} className="bg-primary-custom p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="text-sm text-gray-400">#{company.id}</span>
                <h3 className="text-lg font-semibold text-white">
                  {company.name}
                </h3>
              </div>
              {company.sigla && (
                <p className="text-sm text-gray-400 mt-1">
                  {company.sigla}
                </p>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}