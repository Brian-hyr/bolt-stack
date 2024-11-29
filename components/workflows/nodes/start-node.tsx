'use client';

import { memo } from 'react';
import { Play } from 'lucide-react';
import { BaseNode } from './base-node';

export const StartNode = memo(({ data }: any) => {
  return (
    <BaseNode
      data={{
        ...data,
        icon: <Play className="w-4 h-4 text-green-500" />,
      }}
      isTarget={false}
    />
  );
});

StartNode.displayName = 'StartNode';