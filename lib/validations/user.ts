import * as z from 'zod';

export const userSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  contato: z.string().optional(),
  chatid: z.string().optional(),
  is_admin: z.boolean().default(false),
  is_collaborator: z.boolean().default(false),
  is_client: z.boolean().default(false)
});

export type UserFormData = z.infer<typeof userSchema>;