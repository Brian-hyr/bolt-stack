import * as z from 'zod';

const asnSchema = z.object({
  asn_number: z.string().min(1, 'ASN number is required')
});

const ipv4PrefixSchema = z.object({
  prefix: z.string().min(1, 'IPv4 prefix is required')
});

const ipv6PrefixSchema = z.object({
  prefix: z.string().min(1, 'IPv6 prefix is required')
});

export const clientSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  sigla: z.string().optional(),
  comentario: z.string().optional(),
  asns: z.array(asnSchema),
  ipv4_prefixes: z.array(ipv4PrefixSchema),
  ipv6_prefixes: z.array(ipv6PrefixSchema)
});

export type ClientFormData = z.infer<typeof clientSchema>;
export type ASNFormData = z.infer<typeof asnSchema>;
export type IPv4PrefixFormData = z.infer<typeof ipv4PrefixSchema>;
export type IPv6PrefixFormData = z.infer<typeof ipv6PrefixSchema>;