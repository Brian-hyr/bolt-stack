export interface Company {
  id: number;
  name: string;
  sigla: string | null;
  comentario: string | null;
  created_at: string;
  updated_at: string;
  asn_id: number | null;
  domain_id: number | null;
  asns?: ASN[];
  ipv4s?: IPv4Prefix[];
  ipv6s?: IPv6Prefix[];
}

export interface ASN {
  id: number;
  asn_number: string;
  cliente_id: number | null;
}

export interface IPv4Prefix {
  id: number;
  prefix: string;
  cliente_id: number | null;
}

export interface IPv6Prefix {
  id: number;
  prefix: string;
  cliente_id: number | null;
}

export interface CompanyDetails extends Company {
  asns: ASN[];
  ipv4s: IPv4Prefix[];
  ipv6s: IPv6Prefix[];
}