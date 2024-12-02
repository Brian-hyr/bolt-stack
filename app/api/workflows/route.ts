import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { workflowSchema } from '@/lib/validations/workflow';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const clientId = searchParams.get('clientId');
    const userId = searchParams.get('userId');

    const where = {
      ...(clientId && { client_id: parseInt(clientId) }),
      ...(userId && { user_id: userId })
    };

    const workflows = await prisma.workflow.findMany({
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
      orderBy: { created_at: 'desc' }
    });
    
    return NextResponse.json(workflows);
  } catch (error) {
    console.error('Error fetching workflows:', error);
    return NextResponse.json(
      { error: 'Failed to fetch workflows' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = workflowSchema.parse(body);

    const workflow = await prisma.workflow.create({
      data: {
        name: validatedData.name,
        description: validatedData.description,
        nodes: validatedData.nodes,
        edges: validatedData.edges,
        user_id: validatedData.user_id,
        client_id: validatedData.client_id,
        is_active: true
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
    
    return NextResponse.json(workflow);
  } catch (error) {
    console.error('Error creating workflow:', error);
    return NextResponse.json(
      { error: 'Failed to create workflow' },
      { status: 500 }
    );
  }
}