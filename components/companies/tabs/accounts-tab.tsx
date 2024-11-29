import { useState } from 'react';
import { Account } from '@/types/company';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { AddAccountDialog } from '@/components/accounts/add-account-dialog';

interface AccountsTabProps {
  accounts: Account[];
}

export function AccountsTab({ accounts }: AccountsTabProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAccounts = accounts.filter(account => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      account.username.toLowerCase().includes(searchTerm) ||
      account.description?.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Buscar contas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-[#12141a] border-[#2a2f3a] text-white w-full"
          />
        </div>
        <AddAccountDialog />
      </div>

      <div className="space-y-2">
        {filteredAccounts.length === 0 ? (
          <div className="text-center text-gray-400 py-8">
            Nenhum resultado encontrado
          </div>
        ) : (
          filteredAccounts.map((account) => (
            <div
              key={account.id}
              className="bg-[#1e2128] rounded-lg p-4 border border-[#303030]"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white text-lg font-semibold">{account.description}</h3>
                <Button variant="outline" size="sm" className="text-white border-[#2a2f3a]">
                  Editar
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-gray-400 text-sm">Link de Acesso</div>
                  <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a]">
                    {account.description === 'Ookla' 
                      ? 'https://account.ookla.com/login'
                      : 'bgp.net.br/whois.html'}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Usuário</div>
                  <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a]">
                    {account.username}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Senha</div>
                  <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a] font-mono">
                    {account.password}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Descrição</div>
                  <div className="text-white bg-[#12141a] px-3 py-2 rounded mt-1 border border-[#2a2f3a]">
                    {account.description}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}