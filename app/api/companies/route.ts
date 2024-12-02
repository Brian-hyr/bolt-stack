import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { clientSchema } from '@/lib/validations/client';

export async function GET() {
  try {
    const companies = await prisma.cliente.findMany({
      include: {
        asns: true,
        ipv4s: true,
        ipv6s: true
      },
      orderBy: { id: 'asc' }
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
    const validatedData = clientSchema.parse(body);

    // Create company with all related data in a single transaction
    const company = await prisma.cliente.create({
      data: {
        name: validatedData.name,
        sigla: validatedData.sigla || null,
        comentario: validatedData.comentario || null,
        asns: {
          create: validatedData.asns || []
        },
        ipv4s: {
          create: validatedData.ipv4_prefixes || []
        },
        ipv6s: {
          create: validatedData.ipv6_prefixes || []
        }
      },
      include: {
        asns: true,
        ipv4s: true,
        ipv6s: true
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