import * as z from 'zod';

const asnSchema = z.object({
  asn_number: z.string().min(1, 'Número ASN é obrigatório')
});

const ipv4PrefixSchema = z.object({
  prefix: z.string().min(1, 'Prefixo IPv4 é obrigatório')
});

const ipv6PrefixSchema = z.object({
  prefix: z.string().min(1, 'Prefixo IPv6 é obrigatório')
});

const domainSchema = z.object({
  domain_name: z.string().min(1, 'Nome do domínio é obrigatório')
});

export const clientSchema = z.object({
  id: z.number().min(1, 'ID é obrigatório'),
  name: z.string().min(1, 'Nome é obrigatório'),
  sigla: z.string().optional(),
  comentario: z.string().optional(),
  asns: z.array(asnSchema),
  ipv4_prefixes: z.array(ipv4PrefixSchema),
  ipv6_prefixes: z.array(ipv6PrefixSchema),
  domains: z.array(domainSchema)
});

export type ClientFormData = z.infer<typeof clientSchema>;
export type ASNFormData = z.infer<typeof asnSchema>;
export type IPv4PrefixFormData = z.infer<typeof ipv4PrefixSchema>;
export type IPv6PrefixFormData = z.infer<typeof ipv6PrefixSchema>;
export type DomainFormData = z.infer<typeof domainSchema>;