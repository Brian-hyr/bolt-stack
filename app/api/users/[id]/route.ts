import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getSession } from '@/lib/auth';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const currentUser = await prisma.user.findUnique({
      where: { id: session.userId }
    });

    if (!currentUser) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const targetUserId = parseInt(params.id);
    
    // Only admins can edit other users, regular users can only edit themselves
    if (!currentUser.is_admin && currentUser.id !== targetUserId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }

    const body = await request.json();

    // Only allow admins to modify roles
    const updateData = {
      username: body.username,
      email: body.email,
      contato: body.contato,
      chatid: body.chatid,
      ...(currentUser.is_admin ? {
        is_admin: body.is_admin,
        is_collaborator: body.is_collaborator,
        is_client: body.is_client,
      } : {})
    };

    const user = await prisma.user.update({
      where: { id: targetUserId },
      data: updateData,
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

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 }
    );
  }
}