'use client';

import { memo } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { Card } from '@/components/ui/card';

interface BaseNodeProps {
  data: {
    label: string;
    icon?: React.ReactNode;
  };
  isSource?: boolean;
  isTarget?: boolean;
}

export const BaseNode = memo(({ data, isSource = true, isTarget = true }: BaseNodeProps) => {
  return (
    <Card className="min-w-[150px] bg-[#1a1d24] border-[#2a2f3a] p-3">
      <div className="flex items-center gap-2">
        {data.icon}
        <div className="text-sm font-medium text-white">{data.label}</div>
      </div>
      {isTarget && (
        <Handle
          type="target"
          position={Position.Top}
          className="w-3 h-3 bg-[#2a2f3a]"
        />
      )}
      {isSource && (
        <Handle
          type="source"
          position={Position.Bottom}
          className="w-3 h-3 bg-[#2a2f3a]"
        />
      )}
    </Card>
  );
});

BaseNode.displayName = 'BaseNode';