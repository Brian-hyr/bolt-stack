import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getCurrentUser } from '@/lib/auth-client';

export async function GET() {
  try {
    const workflows = await prisma.workflow.findMany({
      orderBy: { created_at: 'desc' },
      select: {
        id: true,
        name: true,
        description: true,
        created_at: true,
        is_active: true,
      },
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
    const workflow = await prisma.workflow.create({
      data: {
        name: body.name,
        description: body.description,
        nodes: body.nodes,
        edges: body.edges,
        user_id: body.user_id,
        client_id: body.client_id,
      },
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