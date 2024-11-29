import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: { clientId: string } }
) {
  try {
    const blocks = await prisma.client_ptp_blocks.findMany({
      where: {
        client_id: parseInt(params.clientId)
      },
      orderBy: {
        ip_block_start: 'asc'
      }
    });

    return NextResponse.json(blocks);
  } catch (error) {
    console.error('Error fetching PTP blocks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch PTP blocks' },
      { status: 500 }
    );
  }
}