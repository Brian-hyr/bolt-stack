'use client';

import { Button } from '@/components/ui/button';
import { 
  Play, 
  Square,
  Database,
  Terminal,
  RepeatIcon,
  GitFork,
  Code
} from 'lucide-react';

interface WorkflowToolbarProps {
  onAddNode: (type: string) => void;
}

export function WorkflowToolbar({ onAddNode }: WorkflowToolbarProps) {
  const tools = [
    { type: 'start', icon: Play, label: 'Start' },
    { type: 'end', icon: Square, label: 'End' },
    { type: 'query', icon: Database, label: 'Query' },
    { type: 'ssh', icon: Terminal, label: 'SSH' },
    { type: 'loop', icon: RepeatIcon, label: 'Loop' },
    { type: 'condition', icon: GitFork, label: 'Condition' },
    { type: 'code', icon: Code, label: 'Code' },
  ];

  return (
    <div className="flex gap-2 mb-4">
      {tools.map(({ type, icon: Icon, label }) => (
        <Button
          key={type}
          variant="outline"
          className="text-white border-[#2a2f3a]"
          onClick={() => onAddNode(type)}
        >
          <Icon className="w-4 h-4 mr-2" />
          {label}
        </Button>
      ))}
    </div>
  );
}