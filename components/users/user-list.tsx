'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { User } from '@/types/user';
import { UserListItem } from './user-list-item';

export function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError('Failed to load users');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-gray-400 py-8">
        Loading users...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-400 py-8">
        {error}
      </div>
    );
  }

  if (!users.length) {
    return (
      <Card className="p-6 bg-primary-custom">
        <div className="text-center text-gray-400">
          No users found
        </div>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user) => (
        <UserListItem key={user.id} user={user} />
      ))}
    </div>
  );
}