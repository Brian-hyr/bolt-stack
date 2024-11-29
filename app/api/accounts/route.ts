import { NextResponse } from 'next/server';
import { accountSchema } from '@/lib/validations/account';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = accountSchema.parse(body);

    // For now, we'll just return a success response
    // In a real application, you would save this to your database
    return NextResponse.json({ success: true, data: validatedData });
  } catch (error) {
    console.error('Error creating account:', error);
    return NextResponse.json(
      { error: 'Failed to create account' },
      { status: 500 }
    );
  }
}