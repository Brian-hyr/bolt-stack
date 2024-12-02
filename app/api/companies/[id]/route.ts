import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const company = await prisma.cliente.findUnique({
      where: { id: parseInt(params.id) }
    });

    if (!company) {
      return NextResponse.json(
        { error: 'Company not found' },
        { status: 404 }
      );
    }

    const [asns, ipv4s, ipv6s] = await Promise.all([
      prisma.aSN.findMany({
        where: { cliente_id: company.id }
      }),
      prisma.iPv4Prefix.findMany({
        where: { cliente_id: company.id }
      }),
      prisma.iPv6Prefix.findMany({
        where: { cliente_id: company.id }
      })
    ]);

    return NextResponse.json({
      ...company,
      asns,
      ipv4s,
      ipv6s
    });
  } catch (error) {
    console.error('Error fetching company details:', error);
    return NextResponse.json(
      { error: 'Failed to fetch company details' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const company = await prisma.cliente.update({
      where: { id: parseInt(params.id) },
      data: {
        name: body.name,
        sigla: body.sigla || null,
        comentario: body.comentario || null
      }
    });

    return NextResponse.json(company);
  } catch (error) {
    console.error('Error updating company:', error);
    return NextResponse.json(
      { error: 'Failed to update company' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Delete related records first
    await Promise.all([
      prisma.aSN.deleteMany({
        where: { cliente_id: parseInt(params.id) }
      }),
      prisma.iPv4Prefix.deleteMany({
        where: { cliente_id: parseInt(params.id) }
      }),
      prisma.iPv6Prefix.deleteMany({
        where: { cliente_id: parseInt(params.id) }
      })
    ]);

    // Then delete the company
    await prisma.cliente.delete({
      where: { id: parseInt(params.id) }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting company:', error);
    return NextResponse.json(
      { error: 'Failed to delete company' },
      { status: 500 }
    );
  }
}