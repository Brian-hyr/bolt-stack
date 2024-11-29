'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function NewCompanyPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      sigla: formData.get('sigla'),
      comentario: formData.get('comentario'),
    };

    try {
      const res = await fetch('/api/companies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed to create company');

      router.push('/dashboard/companies');
    } catch (error) {
      console.error('Error creating company:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-primary-custom p-6">
        <h1 className="text-2xl font-bold text-white mb-6">Add New Company</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-400">Company Name</label>
            <Input
              name="name"
              required
              className="bg-[#12141a] border-[#2a2f3a] text-white mt-1"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400">Sigla</label>
            <Input
              name="sigla"
              className="bg-[#12141a] border-[#2a2f3a] text-white mt-1"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400">Comments</label>
            <Textarea
              name="comentario"
              className="bg-[#12141a] border-[#2a2f3a] text-white mt-1"
              rows={4}
            />
          </div>
          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              className="text-white border-[#2a2f3a]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-white hover:bg-white/90 text-black"
            >
              {loading ? 'Creating...' : 'Create Company'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}