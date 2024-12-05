import * as z from 'zod';

export const asnSchema = z.object({
  asn_number: z.string().min(1, 'Número ASN é obrigatório')
});

export const domainSchema = z.object({
  domain_name: z.string().min(1, 'Nome do domínio é obrigatório')
});

export const ipv4Schema = z.object({
  prefix: z.string().min(1, 'Prefixo IPv4 é obrigatório')
});

export const ipv6Schema = z.object({
  prefix: z.string().min(1, 'Prefixo IPv6 é obrigatório')
});

export const companySchema = z.object({
  id: z.number().min(1, 'ID da empresa é obrigatório'),
  name: z.string().min(1, 'Nome da empresa é obrigatório'),
  sigla: z.string().optional(),
  comentario: z.string().optional(),
  asns: z.array(asnSchema).optional(),
  domains: z.array(domainSchema).optional(),
  ipv4_prefixes: z.array(ipv4Schema).optional(),
  ipv6_prefixes: z.array(ipv6Schema).optional()
});

export type CompanyFormData = z.infer<typeof companySchema>;
export type ASNFormData = z.infer<typeof asnSchema>;
export type DomainFormData = z.infer<typeof domainSchema>;
export type IPv4FormData = z.infer<typeof ipv4Schema>;
export type IPv6FormData = z.infer<typeof ipv6Schema>;