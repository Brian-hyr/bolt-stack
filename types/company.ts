export interface Company {
  id: number;
  name: string;
  sigla: string | null;
  comentario: string | null;
  created_at: string | null;
  updated_at: string | null;
  asn_id: number | null;
  domain_id: number | null;
}

export interface CompanyDetails extends Company {
  ipv4?: string[];
  ipv6?: string[];
  domains?: string[];
}