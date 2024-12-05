'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';

interface Account {
  id: number;
  username: string;
  description: string;
  access_url?: string;
}

interface AccountListProps {
  clientId: number;
}

export function AccountList({ clientId }: AccountListProps) {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAccounts() {
      try {
        const response = await fetch(`/api/accounts?clientId=${clientId}`);
        if (!response.ok) throw new Error('Failed to fetch accounts');
        const data = await response.json();
        setAccounts(data);
      } catch (err) {
        setError('Failed to load accounts');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchAccounts();
  }, [clientId]);

  if (loading) {
    return <div className="text-center text-gray-400 py-8">Loading accounts...</div>;
  }

  if (error) {
    return <div className="text-center text-red-400 py-8">{error}</div>;
  }

  if (!accounts.length) {
    return (
      <div className="text-center text-gray-400 py-8">
        No accounts found
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {accounts.map((account) => (
        <Card key={account.id} className="bg-[#1e2128] p-4">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-white">{account.description}</h3>
            <Button
              variant="outline"
              size="sm"
              className="text-white border-[#2a2f3a]"
            >
              <Pencil className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <div className="text-gray-400 text-sm">Access URL</div>
              <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a]">
                {account.access_url || '-'}
              </div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Username</div>
              <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a]">
                {account.username}
              </div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Password</div>
              <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a] font-mono">
                ********
              </div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Description</div>
              <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a]">
                {account.description}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}