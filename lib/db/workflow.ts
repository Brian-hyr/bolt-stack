import { prisma } from './index';
import { Workflow } from '@prisma/client';
import { WorkflowFormData } from '@/lib/validations/workflow';

export async function createWorkflow(data: WorkflowFormData): Promise<Workflow> {
  return prisma.workflow.create({
    data: {
      name: data.name,
      description: data.description,
      nodes: data.nodes,
      edges: data.edges,
      user_id: data.user_id,
      client_id: data.client_id,
      is_active: true,
      status: 'created'
    },
    include: {
      user: {
        select: {
          username: true,
          email: true
        }
      },
      client: {
        select: {
          name: true,
          sigla: true
        }
      }
    }
  });
}

export async function getWorkflows(userId?: string, clientId?: string) {
  const where = {
    ...(userId && { user_id: userId }),
    ...(clientId && { client_id: parseInt(clientId) })
  };

  return prisma.workflow.findMany({
    where,
    include: {
      user: {
        select: {
          username: true,
          email: true
        }
      },
      client: {
        select: {
          name: true,
          sigla: true
        }
      }
    },
    orderBy: {
      created_at: 'desc'
    }
  });
}

export async function getWorkflowById(id: number) {
  return prisma.workflow.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          username: true,
          email: true
        }
      },
      client: {
        select: {
          name: true,
          sigla: true
        }
      }
    }
  });
}

export async function updateWorkflow(id: number, data: Partial<WorkflowFormData>) {
  return prisma.workflow.update({
    where: { id },
    data: {
      ...data,
      updated_at: new Date()
    },
    include: {
      user: {
        select: {
          username: true,
          email: true
        }
      },
      client: {
        select: {
          name: true,
          sigla: true
        }
      }
    }
  });
}

export async function deleteWorkflow(id: number) {
  return prisma.workflow.delete({
    where: { id }
  });
}