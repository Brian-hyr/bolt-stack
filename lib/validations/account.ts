import * as z from 'zod';

export const accountSchema = z.object({
  cliente_id: z.number(),
  account_type: z.string().min(1, 'Account type is required'),
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
  access_url: z.string().url('Invalid URL').optional().or(z.literal('')),
  description: z.string().optional()
});

export type AccountFormData = z.infer<typeof accountSchema>;