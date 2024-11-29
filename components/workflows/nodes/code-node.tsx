'use client';

import { memo } from 'react';
import { Code } from 'lucide-react';
import { BaseNode } from './base-node';

export const CodeNode = memo(({ data }: any) => {
  return (
    <BaseNode
      data={{
        ...data,
        icon: <Code className="w-4 h-4 text-cyan-500" />,
      }}
    />
  );
});

CodeNode.displayName = 'CodeNode';