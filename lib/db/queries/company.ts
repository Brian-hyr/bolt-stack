import { prisma } from '@/lib/db';

export async function getCompanyById(id: string) {
  try {
    const company = await prisma.cliente.findUnique({
      where: { id: parseInt(id) },
    });
    
    return company;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch company');
  }
}

export async function getAllCompanies() {
  try {
    const companies = await prisma.cliente.findMany({
      orderBy: { id: 'asc' },
    });
    
    return companies;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch companies');
  }
}