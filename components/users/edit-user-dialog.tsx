'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { User } from '@/types/user';
import { getCurrentUser } from '@/lib/auth-client';

interface EditUserDialogProps {
  user: User;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EditUserDialog({ user, open, onOpenChange }: EditUserDialogProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const currentUser = getCurrentUser();
  const canEditRoles = currentUser?.is_admin;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      username: formData.get('username'),
      email: formData.get('email'),
      contato: formData.get('contato'),
      chatid: formData.get('chatid'),
      ...(canEditRoles && {
        is_admin: formData.get('is_admin') === 'on',
        is_collaborator: formData.get('is_collaborator') === 'on',
        is_client: formData.get('is_client') === 'on',
      }),
    };

    try {
      const res = await fetch(`/api/users/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to update user');
      }

      onOpenChange(false);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update user');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-primary-custom text-white">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              defaultValue={user.username}
              required
              className="bg-[#12141a] border-[#2a2f3a]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              defaultValue={user.email}
              required
              className="bg-[#12141a] border-[#2a2f3a]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contato">Contact</Label>
            <Input
              id="contato"
              name="contato"
              defaultValue={user.contato || ''}
              className="bg-[#12141a] border-[#2a2f3a]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="chatid">Chat ID</Label>
            <Input
              id="chatid"
              name="chatid"
              defaultValue={user.chatid || ''}
              className="bg-[#12141a] border-[#2a2f3a]"
            />
          </div>

          {canEditRoles && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="is_admin" 
                  name="is_admin"
                  defaultChecked={user.is_admin}
                  className="bg-[#12141a] border-[#2a2f3a] data-[state=checked]:bg-white data-[state=checked]:text-black"
                />
                <Label 
                  htmlFor="is_admin"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Administrator
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="is_collaborator" 
                  name="is_collaborator"
                  defaultChecked={user.is_collaborator}
                  className="bg-[#12141a] border-[#2a2f3a] data-[state=checked]:bg-white data-[state=checked]:text-black"
                />
                <Label 
                  htmlFor="is_collaborator"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Collaborator
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="is_client" 
                  name="is_client"
                  defaultChecked={user.is_client}
                  className="bg-[#12141a] border-[#2a2f3a] data-[state=checked]:bg-white data-[state=checked]:text-black"
                />
                <Label 
                  htmlFor="is_client"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Client
                </Label>
              </div>
            </div>
          )}

          {error && (
            <div className="text-red-400 text-sm">{error}</div>
          )}

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-[#2a2f3a]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-white hover:bg-white/90 text-black"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}