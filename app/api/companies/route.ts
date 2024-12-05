import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { companySchema } from '@/lib/validations/company';

export async function GET() {
  try {
    const companies = await prisma.cliente.findMany({
      include: {
        asns: true,
        domains: true,
        ipv4_prefixes: true,
        ipv6_prefixes: true
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
    const validatedData = companySchema.parse(body);

    // Create the company with specified ID
    const company = await prisma.cliente.create({
      data: {
        id: validatedData.id,
        name: validatedData.name,
        sigla: validatedData.sigla || null,
        comentario: validatedData.comentario || null,
        asns: validatedData.asns && validatedData.asns.length > 0 ? {
          create: validatedData.asns.map(asn => ({
            asn_number: asn.asn_number
          }))
        } : undefined,
        domains: validatedData.domains && validatedData.domains.length > 0 ? {
          create: validatedData.domains.map(domain => ({
            domain_name: domain.domain_name
          }))
        } : undefined,
        ipv4_prefixes: validatedData.ipv4_prefixes && validatedData.ipv4_prefixes.length > 0 ? {
          create: validatedData.ipv4_prefixes.map(prefix => ({
            prefix: prefix.prefix
          }))
        } : undefined,
        ipv6_prefixes: validatedData.ipv6_prefixes && validatedData.ipv6_prefixes.length > 0 ? {
          create: validatedData.ipv6_prefixes.map(prefix => ({
            prefix: prefix.prefix
          }))
        } : undefined
      },
      include: {
        asns: true,
        domains: true,
        ipv4_prefixes: true,
        ipv6_prefixes: true
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