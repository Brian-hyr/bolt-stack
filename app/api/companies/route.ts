import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const companies = await prisma.cliente.findMany({
      orderBy: { id: 'asc' },
      select: {
        id: true,
        name: true,
        sigla: true,
        comentario: true,
        created_at: true,
        updated_at: true,
        asn_id: true,
        domain_id: true
      }
    });
    
    return NextResponse.json(companies);
  } catch (error) {
    console.error('Error fetching companies:', error);
    return NextResponse.json(
      { error: 'Failed to fetch companies' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const company = await prisma.cliente.create({
      data: {
        name: body.name,
        sigla: body.sigla || null,
        comentario: body.comentario || null,
        created_at: new Date(),
        updated_at: new Date()
      }
    });
    
    return NextResponse.json(company);
  } catch (error) {
    console.error('Error creating company:', error);
    return NextResponse.json(
      { error: 'Failed to create company' },
      { status: 500 }
    );
  }
}