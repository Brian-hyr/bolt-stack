import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { verifyPassword, createSession } from '@/lib/auth';
import { loginSchema } from '@/lib/db/schema/user.schema';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = loginSchema.parse(body);

    const user = await prisma.user.findUnique({
      where: { username },
      select: {
        id: true,
        username: true,
        email: true,
        password: true,
        is_admin: true,
        is_collaborator: true,
        is_client: true
      }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { last_login: new Date() },
    });

    const { password: _, ...userWithoutPassword } = user;
    const token = await createSession(user.id);

    return NextResponse.json({ user: userWithoutPassword }, {
      headers: {
        'Set-Cookie': `session=${token}; Path=/; HttpOnly; SameSite=Lax; ${
          process.env.NODE_ENV === 'production' ? 'Secure;' : ''
        }`
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Invalid request data' },
      { status: 400 }
    );
  }
}