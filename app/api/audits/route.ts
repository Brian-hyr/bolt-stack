import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { auditSchema } from '@/lib/validations/audit';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const clientId = searchParams.get('clientId');
    const type = searchParams.get('type');

    const where = {
      ...(clientId && { client_id: parseInt(clientId) }),
      ...(type && { type: type as 'GENERAL' | 'SPECIFIC' }),
    };

    const audits = await prisma.audit.findMany({
      where,
      include: {
        client: true,
        auditor: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
        equipments: {
          include: {
            equipment: true,
            results: {
              include: {
                item: true,
              },
            },
          },
        },
      },
      orderBy: { created_at: 'desc' },
    });
    
    return NextResponse.json(audits);
  } catch (error) {
    console.error('Error fetching audits:', error);
    return NextResponse.json(
      { error: 'Failed to fetch audits' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = auditSchema.parse(body);

    const audit = await prisma.audit.create({
      data: {
        type: validatedData.type,
        client_id: validatedData.client_id,
        auditor_id: validatedData.auditor_id,
        description: validatedData.description,
        equipments: {
          create: validatedData.equipment_ids.map(id => ({
            host_id: id,
          })),
        },
      },
      include: {
        client: true,
        auditor: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
        equipments: {
          include: {
            equipment: true,
          },
        },
      },
    });
    
    return NextResponse.json(audit);
  } catch (error) {
    console.error('Error creating audit:', error);
    return NextResponse.json(
      { error: 'Failed to create audit' },
      { status: 500 }
    );
  }
}