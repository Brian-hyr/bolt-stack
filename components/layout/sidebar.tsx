'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Settings, 
  Users, 
  Building2, 
  Cog,
  FileSpreadsheet,
} from 'lucide-react';
import { LogoutButton } from '@/components/auth/logout-button';

const sidebarItems = [
  { name: 'Home', href: '/dashboard', icon: Home },
  { name: 'Automações', href: '/dashboard/automations', icon: Cog },
  { name: 'Empresas', href: '/dashboard/companies', icon: Building2 },
  { name: 'Customers', href: '/dashboard/customers', icon: Users },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  { name: 'Cadastros', href: '/dashboard/registers', icon: FileSpreadsheet },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-primary-custom text-white w-64 p-4">
      <div className="flex items-center gap-2 px-2 mb-8">
        <Cog className="w-8 h-8 text-green-500" />
        <span className="text-xl font-bold">Smart Layer Stack</span>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                    isActive 
                      ? "bg-accent text-white" 
                      : "hover:bg-accent/50 text-gray-300"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-gray-700 pt-4 mt-4">
        <LogoutButton />
      </div>
    </div>
  );
}