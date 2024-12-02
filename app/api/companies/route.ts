import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { clientSchema } from '@/lib/validations/client';

export async function GET() {
  try {
    const companies = await prisma.cliente.findMany({
      include: {
        asns: true,
        ipv4s: true,
        ipv6s: true,
        domains: true
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

    // Create company with manual ID
    const company = await prisma.cliente.create({
      data: {
        id: validatedData.id,
        name: validatedData.name,
        sigla: validatedData.sigla || null,
        comentario: validatedData.comentario || null,
      }
    });

    // Create related records
    if (validatedData.asns?.length > 0) {
      await prisma.aSN.createMany({
        data: validatedData.asns.map(asn => ({
          asn_number: asn.asn_number,
          cliente_id: company.id
        }))
      });
    }

    if (validatedData.ipv4_prefixes?.length > 0) {
      await prisma.iPv4Prefix.createMany({
        data: validatedData.ipv4_prefixes.map(ip => ({
          prefix: ip.prefix,
          cliente_id: company.id
        }))
      });
    }

    if (validatedData.ipv6_prefixes?.length > 0) {
      await prisma.iPv6Prefix.createMany({
        data: validatedData.ipv6_prefixes.map(ip => ({
          prefix: ip.prefix,
          cliente_id: company.id
        }))
      });
    }

    if (validatedData.domains?.length > 0) {
      await prisma.domain.createMany({
        data: validatedData.domains.map(domain => ({
          domain_name: domain.domain_name,
          cliente_id: company.id
        }))
      });
    }

    // Fetch the complete company data with relations
    const completeCompany = await prisma.cliente.findUnique({
      where: { id: company.id },
      include: {
        asns: true,
        ipv4s: true,
        ipv6s: true,
        domains: true
      }
    });
    
    return NextResponse.json(completeCompany);
  } catch (error) {
    console.error('Error creating company:', error);
    return NextResponse.json(
      { error: 'Failed to create company' },
      { status: 500 }
    );
  }
}