import { Account } from '@/types/company';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface AccountsTabProps {
  accounts: Account[];
}

export function AccountsTab({ accounts }: AccountsTabProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Busca"
          className="px-3 py-2 bg-[#12141a] border border-[#2a2f3a] rounded text-white w-64"
        />
        <Button className="bg-white hover:bg-white/90 text-black">
          Add Conta
        </Button>
      </div>

      {accounts.map((account) => (
        <div key={account.id} className="bg-[#1e2128] rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-white text-lg font-semibold">{account.description}</h3>
            <Button variant="outline" size="sm" className="text-white border-[#2a2f3a]">
              Editar
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-4">
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
      ))}
    </div>
  );
}