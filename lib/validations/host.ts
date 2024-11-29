import * as z from 'zod';

export const hostSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  comentario: z.string().optional(),
  status: z.enum(['ativo', 'inativo']),
  model_id: z.number(),
  cliente_id: z.number(),
  ips: z.array(z.object({
    ip_address: z.string().min(1, 'IP address is required'),
    version: z.enum(['ipv4', 'ipv6']),
    type: z.enum(['loopback', 'management', 'other'])
  })),
  snmp: z.array(z.object({
    version: z.enum(['v1', 'v2c', 'v3']),
    community: z.string().optional(),
    security_name: z.string().optional(),
    auth_protocol: z.string().optional(),
    auth_key: z.string().optional(),
    priv_protocol: z.string().optional(),
    priv_key: z.string().optional()
  })),
  access_types: z.array(z.object({
    type: z.enum(['ssh', 'telnet', 'http', 'https', 'api']),
    port: z.string()
  })),
  credentials: z.array(z.object({
    username: z.string().min(1, 'Username is required'),
    password: z.string().min(1, 'Password is required'),
    description: z.string().optional()
  }))
});