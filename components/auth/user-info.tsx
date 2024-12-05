'use client';

import { User } from '@/types/user';
import { getCurrentUser } from '@/lib/auth-client';
import { useEffect, useState } from 'react';

export function UserInfo() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, []);

  if (!user) return null;

  return (
    <div className="border-t border-gray-700 pt-4 px-3">
      <div className="text-sm text-gray-400">
        <div className="font-medium text-white">{user.username}</div>
        <div className="text-xs">{user.email}</div>
      </div>
    </div>
  );
}