'use client';

import { memo } from 'react';
import { GitFork } from 'lucide-react';
import { BaseNode } from './base-node';

export const ConditionNode = memo(({ data }: any) => {
  return (
    <BaseNode
      data={{
        ...data,
        icon: <GitFork className="w-4 h-4 text-orange-500" />,
      }}
    />
  );
});

ConditionNode.displayName = 'ConditionNode';