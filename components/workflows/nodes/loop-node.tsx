'use client';

import { memo } from 'react';
import { RepeatIcon } from 'lucide-react';
import { BaseNode } from './base-node';

export const LoopNode = memo(({ data }: any) => {
  return (
    <BaseNode
      data={{
        ...data,
        icon: <RepeatIcon className="w-4 h-4 text-purple-500" />,
      }}
    />
  );
});

LoopNode.displayName = 'LoopNode';