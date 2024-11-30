import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: { clientId: string } }
) {
  try {
    // For now, return mock data since we don't have the actual table yet
    const blocks = [
      {
        id: 1,
        ip_block_start: '10.64.0.0/24',
        client_id: parseInt(params.clientId)
      },
      {
        id: 2,
        ip_block_start: '10.64.1.0/24',
        client_id: parseInt(params.clientId)
      }
    ];

    return NextResponse.json(blocks);
  } catch (error) {
    console.error('Error fetching PTP blocks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch PTP blocks' },
      { status: 500 }
    );
  }
}