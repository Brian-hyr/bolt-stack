'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { AddAccountForm } from './add-account-form';

export function AddAccountDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-white hover:bg-white/90 text-black">
          <Plus className="w-4 h-4 mr-2" />
          Add Conta
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#1a1d24] border-[#2a2f3a] text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Adicionar Nova Conta</DialogTitle>
        </DialogHeader>
        <AddAccountForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}