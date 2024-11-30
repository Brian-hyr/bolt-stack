import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: { clientId: string } }
) {
  try {
    const hosts = await prisma.host.findMany({
      where: {
        cliente_id: parseInt(params.clientId),
        status: 'ativo'
      },
      include: {
        ips: true
      },
      orderBy: {
        name: 'asc'
      }
    });

    return NextResponse.json(hosts);
  } catch (error) {
    console.error('Error fetching routers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch routers' },
      { status: 500 }
    );
  }
}