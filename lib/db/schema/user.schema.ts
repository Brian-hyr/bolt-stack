import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});

export const registerSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  contato: z.string().optional(),
  chatid: z.string().optional(),
});

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

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type UserFormData = z.infer<typeof userSchema>;