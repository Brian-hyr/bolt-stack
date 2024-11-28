export interface Company {
  id: number;
  name: string;
  sigla: string | null;
}

export interface CompanyDetails extends Company {
  comentario: string | null;
  created_at: string | null;
  updated_at: string | null;
  asn_id: number | null;
  domain_id: number | null;
  ipv4?: string[];
  ipv6?: string[];
  domains?: string[];
}

export interface Host {
  id: number;
  name: string;
  comentario: string | null;
  status: string;
  model_id: number;
  cliente_id: number;
  created_at: string;
  updated_at: string;
  ips: HostIP[];
}

export interface HostIP {
  id: number;
  ip_address: string;
  version: string;
  type: string;
  host_id: number;
}

export interface Server {
  id: number;
  hostname: string;
  status: string;
  description: string | null;
  cliente_id: number;
  service_version_id: number;
  created_at: string;
  updated_at: string;
  ips: ServerIP[];
  domains: ServerDomain[];
}

export interface ServerIP {
  id: number;
  ip_address: string;
  ip_type: string;
  description: string | null;
  server_id: number;
}

export interface ServerDomain {
  id: number;
  domain_name: string;
  description: string | null;
  server_id: number;
}

export interface Account {
  id: number;
  username: string;
  password: string;
  description: string | null;
  cliente_id: number;
  created_at: string;
  updated_at: string;
}