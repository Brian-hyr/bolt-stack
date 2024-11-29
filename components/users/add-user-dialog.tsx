'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

interface AddUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddUserDialog({ open, onOpenChange }: AddUserDialogProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
      contato: formData.get('contato'),
      chatid: formData.get('chatid'),
      is_admin: formData.get('is_admin') === 'on',
      is_collaborator: formData.get('is_collaborator') === 'on',
      is_client: formData.get('is_client') === 'on',
    };

    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Falha ao criar usuário');
      }

      onOpenChange(false);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Falha ao criar usuário');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-primary-custom text-white">
        <DialogHeader>
          <DialogTitle>Adicionar Novo Usuário</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Nome de Usuário</Label>
            <Input
              id="username"
              name="username"
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
              required
              className="bg-[#12141a] border-[#2a2f3a]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              className="bg-[#12141a] border-[#2a2f3a]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contato">Contato</Label>
            <Input
              id="contato"
              name="contato"
              className="bg-[#12141a] border-[#2a2f3a]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="chatid">Chat ID</Label>
            <Input
              id="chatid"
              name="chatid"
              className="bg-[#12141a] border-[#2a2f3a]"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="is_admin" name="is_admin" />
              <Label htmlFor="is_admin">Administrador</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="is_collaborator" name="is_collaborator" />
              <Label htmlFor="is_collaborator">Colaborador</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="is_client" name="is_client" />
              <Label htmlFor="is_client">Cliente</Label>
            </div>
          </div>

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
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-white hover:bg-white/90 text-black"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Criando...
                </>
              ) : (
                'Criar Usuário'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}