'use client';

import { useState, useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  Node,
  Edge,
  Connection,
  addEdge,
} from 'react-flow-renderer';
import { Card } from '@/components/ui/card';
import { WorkflowToolbar } from './workflow-toolbar';
import { StartNode } from './nodes/start-node';
import { EndNode } from './nodes/end-node';
import { QueryNode } from './nodes/query-node';
import { SshNode } from './nodes/ssh-node';
import { LoopNode } from './nodes/loop-node';
import { ConditionNode } from './nodes/condition-node';
import { CodeNode } from './nodes/code-node';

const nodeTypes = {
  start: StartNode,
  end: EndNode,
  query: QueryNode,
  ssh: SshNode,
  loop: LoopNode,
  condition: ConditionNode,
  code: CodeNode,
};

export function WorkflowEditor() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onNodesChange = useCallback(
    (changes: any) => {
      setNodes((nds) => {
        return nds.map((node) => {
          const change = changes.find((c: any) => c.id === node.id);
          if (change) {
            return { ...node, position: change.position };
          }
          return node;
        });
      });
    },
    []
  );

  return (
    <Card className="h-full bg-primary-custom p-4">
      <WorkflowToolbar onAddNode={(type) => {
        const newNode = {
          id: `${type}-${nodes.length + 1}`,
          type,
          position: { x: 100, y: 100 },
          data: { label: `${type} ${nodes.length + 1}` },
        };
        setNodes([...nodes, newNode]);
      }} />
      
      <div className="h-[calc(100%-4rem)]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </Card>
  );
}