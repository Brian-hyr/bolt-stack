'use client';

import { memo } from 'react';
import { Terminal } from 'lucide-react';
import { BaseNode } from './base-node';

export const SshNode = memo(({ data }: any) => {
  return (
    <BaseNode
      data={{
        ...data,
        icon: <Terminal className="w-4 h-4 text-yellow-500" />,
      }}
    />
  );
});

SshNode.displayName = 'SshNode';