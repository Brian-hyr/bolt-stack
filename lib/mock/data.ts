import { Host, Server, Account } from '@/types/company';

export const mockHosts: Host[] = [
  {
    id: 1,
    name: '001-FIVE_TELECOM-CENTRAL-CORE',
    comentario: 'Core Router',
    status: 'ativo',
    model_id: 1,
    cliente_id: 48,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
    ips: [
      {
        id: 1,
        ip_address: '10.64.255.1',
        version: 'ipv4',
        type: 'loopback',
        host_id: 1
      }
    ]
  },
  {
    id: 2,
    name: '099-FIVE_TELECOM-CENTRAL-BORDA_BNG',
    comentario: 'Border Router',
    status: 'ativo',
    model_id: 2,
    cliente_id: 48,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
    ips: [
      {
        id: 2,
        ip_address: '10.64.255.2',
        version: 'ipv4',
        type: 'loopback',
        host_id: 2
      }
    ]
  }
];

export const mockServers: Server[] = [
  {
    id: 1,
    hostname: 'Proxmox01',
    status: 'ativo',
    description: 'Virtualization Server',
    cliente_id: 48,
    service_version_id: 1,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
    ips: [
      {
        id: 1,
        ip_address: '10.64.253.2',
        ip_type: 'private',
        description: 'Management IP',
        server_id: 1
      },
      {
        id: 2,
        ip_address: '45.119.120.0',
        ip_type: 'public',
        description: 'Public IP',
        server_id: 1
      }
    ],
    domains: [
      {
        id: 1,
        domain_name: 'proxmox01.fivetelecom.si',
        description: 'Main domain',
        server_id: 1
      }
    ]
  }
];

export const mockAccounts: Account[] = [
  {
    id: 1,
    username: 'mrocha@fivetelecom.net.br',
    password: '@Mjrt2020',
    description: 'Ookla',
    cliente_id: 48,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z'
  },
  {
    id: 2,
    username: 'MAINT-AS272619',
    password: 'a8vMfTZplqzNtkd_ssBw',
    description: 'IRR',
    cliente_id: 48,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z'
  }
];