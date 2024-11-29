'use client';

import { memo } from 'react';
import { Database } from 'lucide-react';
import { BaseNode } from './base-node';

export const QueryNode = memo(({ data }: any) => {
  return (
    <BaseNode
      data={{
        ...data,
        icon: <Database className="w-4 h-4 text-blue-500" />,
      }}
    />
  );
});

QueryNode.displayName = 'QueryNode';