import { NextResponse } from 'next/server';
import { serverSchema } from '@/lib/validations/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = serverSchema.parse(body);

    // For now, we'll just return a success response
    // In a real application, you would save this to your database
    return NextResponse.json({ success: true, data: validatedData });
  } catch (error) {
    console.error('Error creating server:', error);
    return NextResponse.json(
      { error: 'Failed to create server' },
      { status: 500 }
    );
  }
}