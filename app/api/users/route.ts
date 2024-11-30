import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { hashPassword } from '@/lib/auth';
import { userSchema } from '@/lib/validations/user';

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { date_joined: 'desc' },
      select: {
        id: true,
        username: true,
        email: true,
        contato: true,
        chatid: true,
        is_admin: true,
        is_collaborator: true,
        is_client: true,
        date_joined: true,
        last_login: true
      }
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = userSchema.parse(body);

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { username: validatedData.username },
          { email: validatedData.email }
        ]
      }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Username or email already exists' },
        { status: 400 }
      );
    }

    const hashedPassword = await hashPassword(validatedData.password);
    const user = await prisma.user.create({
      data: {
        ...validatedData,
        password: hashedPassword,
        date_joined: new Date(),
      },
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;
    return NextResponse.json(userWithoutPassword);
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}