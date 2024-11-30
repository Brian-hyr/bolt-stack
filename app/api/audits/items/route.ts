import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { auditItemSchema } from '@/lib/validations/audit';

export async function GET() {
  try {
    const items = await prisma.auditItem.findMany({
      orderBy: { created_at: 'desc' },
    });
    
    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching audit items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch audit items' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = auditItemSchema.parse(body);

    const item = await prisma.auditItem.create({
      data: validatedData,
    });
    
    return NextResponse.json(item);
  } catch (error) {
    console.error('Error creating audit item:', error);
    return NextResponse.json(
      { error: 'Failed to create audit item' },
      { status: 500 }
    );
  }
}