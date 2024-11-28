import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Company } from '@/types/company';

interface CompanyListItemProps {
  company: Company;
}

export function CompanyListItem({ company }: CompanyListItemProps) {
  const router = useRouter();

  return (
    <Card 
      className="bg-primary-custom p-6 hover:bg-accent/90 transition-colors cursor-pointer"
      onClick={() => router.push(`/dashboard/companies/${company.id}`)}
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
          {company.id}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">
            {company.name}
          </h3>
          {company.sigla && (
            <p className="text-sm text-gray-400">
              {company.sigla}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}