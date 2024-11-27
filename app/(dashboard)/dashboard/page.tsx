'use client';

import { Card } from '@/components/ui/card';
import { Cog, Users } from 'lucide-react';

const features = [
  {
    title: 'Automações',
    icon: Cog,
    href: '/dashboard/automations',
    color: 'bg-green-500',
  },
  {
    title: 'Empresas',
    icon: Users,
    href: '/dashboard/companies',
    color: 'bg-green-500',
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          
          return (
            <Card
              key={feature.title}
              className="p-6 bg-primary-custom hover:bg-accent/90 transition-colors cursor-pointer group"
            >
              <div className={cn(
                "w-16 h-16 rounded-lg flex items-center justify-center mb-4",
                feature.color
              )}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h2>
            </Card>
          );
        })}
      </div>
    </div>
  );
}