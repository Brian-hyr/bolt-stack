'use client';

import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { logoutUser } from '@/lib/auth-client';

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    logoutUser();
    router.push('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-3 px-3 py-2 w-full text-gray-300 hover:bg-accent/50 rounded-md transition-colors"
    >
      <LogOut className="w-5 h-5" />
      <span>Logout</span>
    </button>
  );
}