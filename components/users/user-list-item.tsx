'use client';

import { Card } from '@/components/ui/card';
import { User } from '@/types/user';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Mail, User as UserIcon } from 'lucide-react';

interface UserListItemProps {
  user: User;
}

export function UserListItem({ user }: UserListItemProps) {
  return (
    <Card className="bg-primary-custom p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-[#12141a] rounded-lg flex items-center justify-center text-white">
            <UserIcon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{user.username}</h3>
            <div className="flex items-center text-gray-400 text-sm">
              <Mail className="w-4 h-4 mr-1" />
              {user.email}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {user.contato && (
          <div className="text-sm text-gray-400">
            Contact: {user.contato}
          </div>
        )}
        
        <div className="flex items-center text-sm text-gray-400">
          <CalendarDays className="w-4 h-4 mr-1" />
          Joined: {new Date(user.date_joined).toLocaleDateString()}
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {user.is_admin && (
            <Badge variant="secondary">Admin</Badge>
          )}
          {user.is_collaborator && (
            <Badge variant="secondary">Collaborator</Badge>
          )}
          {user.is_client && (
            <Badge variant="secondary">Client</Badge>
          )}
        </div>
      </div>
    </Card>
  );
}