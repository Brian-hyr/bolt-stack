'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function PtpList() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-4">
      <div className="relative w-64">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Buscar PTPs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9 bg-[#12141a] border-[#2a2f3a] text-white w-full"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#12141a]">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Número</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Roteador A</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Roteador B</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">IP Roteador A</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">IP Roteador B</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2a2f3a]">
            <tr className="bg-[#1a1d24]">
              <td className="px-4 py-3 text-white">101</td>
              <td className="px-4 py-3 text-white">001-FIVE_TELECOM-CENTRAL-CORE</td>
              <td className="px-4 py-3 text-white">002-FIVE_TELECOM-CENTRAL-CONCENTRADOR</td>
              <td className="px-4 py-3 text-white font-mono">10.64.101.1/24</td>
              <td className="px-4 py-3 text-white font-mono">10.64.101.2/24</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}