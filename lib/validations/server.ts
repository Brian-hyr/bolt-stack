import * as z from 'zod';

export const serverSchema = z.object({
  hostname: z.string().min(1, 'Hostname is required'),
  description: z.string().optional(),
  status: z.enum(['ativo', 'inativo']),
  cliente_id: z.number(),
  service_version_id: z.number(),
  ips: z.array(z.object({
    ip_address: z.string().min(1, 'IP address is required'),
    ip_type: z.enum(['private', 'public', 'management']),
    description: z.string().optional()
  })),
  domains: z.array(z.object({
    domain_name: z.string().min(1, 'Domain name is required'),
    description: z.string().optional()
  })),
  access_methods: z.array(z.object({
    method_type: z.enum(['ssh', 'http', 'https', 'api']),
    port: z.string(),
    description: z.string().optional()
  })),
  credentials: z.array(z.object({
    username: z.string().min(1, 'Username is required'),
    password: z.string().min(1, 'Password is required'),
    description: z.string().optional()
  }))
});