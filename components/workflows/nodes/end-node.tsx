'use client';

import { memo } from 'react';
import { Square } from 'lucide-react';
import { BaseNode } from './base-node';

export const EndNode = memo(({ data }: any) => {
  return (
    <BaseNode
      data={{
        ...data,
        icon: <Square className="w-4 h-4 text-red-500" />,
      }}
      isSource={false}
    />
  );
});

EndNode.displayName = 'EndNode';