import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { ptpSchema } from '@/lib/validations/ptp';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const clientId = searchParams.get('clientId');

    const ptps = await prisma.ptpLink.findMany({
      where: clientId ? {
        OR: [
          { host_a_id: parseInt(clientId) },
          { host_b_id: parseInt(clientId) }
        ]
      } : undefined,
      orderBy: { ptp_number: 'asc' }
    });

    return NextResponse.json(ptps);
  } catch (error) {
    console.error('Error fetching PTPs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch PTPs' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = ptpSchema.parse(body);

    const ptp = await prisma.ptpLink.create({
      data: {
        ptp_number: parseInt(validatedData.ptp_number),
        host_a_id: parseInt(validatedData.router_a),
        host_b_id: parseInt(validatedData.router_b),
        ip_v4_host_a: validatedData.ip_router_a,
        ip_v4_host_b: validatedData.ip_router_b,
        vlan_ipv4: validatedData.vlan_ipv4,
        vlan_ipv6: validatedData.vlan_ipv6
      }
    });

    return NextResponse.json(ptp);
  } catch (error) {
    console.error('Error creating PTP:', error);
    return NextResponse.json(
      { error: 'Failed to create PTP' },
      { status: 500 }
    );
  }
}