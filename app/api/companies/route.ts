import { NextResponse } from 'next/server';
import { mockCompanies } from '@/lib/mock/companies';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Return mock data instead of querying the database
    return NextResponse.json(mockCompanies);
  } catch (error) {
    console.error('Error fetching companies:', error);
    return NextResponse.json(
      { error: 'Failed to fetch companies' },
      { status: 500 }
    );
  }
}