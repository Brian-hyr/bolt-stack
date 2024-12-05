-- DROP SCHEMA public;

CREATE SCHEMA public AUTHORIZATION pg_database_owner;

COMMENT ON SCHEMA public IS 'Standard public schema';

-- DROP SEQUENCE public.asn_id_seq;

CREATE SEQUENCE public.asn_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.asn_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.asn_id_seq TO "system";

-- DROP SEQUENCE public.audit_equipments_id_seq;

CREATE SEQUENCE public.audit_equipments_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.audit_equipments_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.audit_equipments_id_seq TO "system";

-- DROP SEQUENCE public.audit_items_id_seq;

CREATE SEQUENCE public.audit_items_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.audit_items_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.audit_items_id_seq TO "system";

-- DROP SEQUENCE public.audit_results_id_seq;

CREATE SEQUENCE public.audit_results_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.audit_results_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.audit_results_id_seq TO "system";

-- DROP SEQUENCE public.audits_id_seq;

CREATE SEQUENCE public.audits_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.audits_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.audits_id_seq TO "system";

-- DROP SEQUENCE public.automation_logs_id_seq;

CREATE SEQUENCE public.automation_logs_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.automation_logs_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.automation_logs_id_seq TO "system";

-- DROP SEQUENCE public.automations_id_seq;

CREATE SEQUENCE public.automations_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.automations_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.automations_id_seq TO "system";

-- DROP SEQUENCE public.client_accounts_id_seq;

CREATE SEQUENCE public.client_accounts_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.client_accounts_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.client_accounts_id_seq TO "system";

-- DROP SEQUENCE public.client_permissions_id_seq;

CREATE SEQUENCE public.client_permissions_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.client_permissions_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.client_permissions_id_seq TO "system";

-- DROP SEQUENCE public.client_ptp_blocks_id_seq;

CREATE SEQUENCE public.client_ptp_blocks_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.client_ptp_blocks_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.client_ptp_blocks_id_seq TO "system";

-- DROP SEQUENCE public.clientes_id_seq;

CREATE SEQUENCE public.clientes_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.clientes_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.clientes_id_seq TO "system";

-- DROP SEQUENCE public.contas_id_seq;

CREATE SEQUENCE public.contas_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.contas_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.contas_id_seq TO "system";

-- DROP SEQUENCE public.domains_id_seq;

CREATE SEQUENCE public.domains_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.domains_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.domains_id_seq TO "system";

-- DROP SEQUENCE public.dominios_id_seq;

CREATE SEQUENCE public.dominios_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.dominios_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.dominios_id_seq TO "system";

-- DROP SEQUENCE public.historico_dominios_id_seq;

CREATE SEQUENCE public.historico_dominios_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.historico_dominios_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.historico_dominios_id_seq TO "system";

-- DROP SEQUENCE public.historico_ipv4_id_seq;

CREATE SEQUENCE public.historico_ipv4_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.historico_ipv4_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.historico_ipv4_id_seq TO "system";

-- DROP SEQUENCE public.historico_ipv6_id_seq;

CREATE SEQUENCE public.historico_ipv6_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.historico_ipv6_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.historico_ipv6_id_seq TO "system";

-- DROP SEQUENCE public.historico_urls_id_seq;

CREATE SEQUENCE public.historico_urls_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.historico_urls_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.historico_urls_id_seq TO "system";

-- DROP SEQUENCE public.host_access_credentials_id_seq;

CREATE SEQUENCE public.host_access_credentials_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.host_access_credentials_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.host_access_credentials_id_seq TO "system";

-- DROP SEQUENCE public.host_access_types_id_seq;

CREATE SEQUENCE public.host_access_types_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.host_access_types_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.host_access_types_id_seq TO "system";

-- DROP SEQUENCE public.host_logs_id_seq;

CREATE SEQUENCE public.host_logs_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.host_logs_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.host_logs_id_seq TO "system";

-- DROP SEQUENCE public.host_types_id_seq;

CREATE SEQUENCE public.host_types_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.host_types_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.host_types_id_seq TO "system";

-- DROP SEQUENCE public.hosts_id_seq;

CREATE SEQUENCE public.hosts_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.hosts_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.hosts_id_seq TO "system";

-- DROP SEQUENCE public.ips_id_seq;

CREATE SEQUENCE public.ips_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.ips_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.ips_id_seq TO "system";

-- DROP SEQUENCE public.ipv4_id_seq;

CREATE SEQUENCE public.ipv4_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.ipv4_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.ipv4_id_seq TO "system";

-- DROP SEQUENCE public.ipv4_prefixes_id_seq;

CREATE SEQUENCE public.ipv4_prefixes_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.ipv4_prefixes_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.ipv4_prefixes_id_seq TO "system";

-- DROP SEQUENCE public.ipv6_id_seq;

CREATE SEQUENCE public.ipv6_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.ipv6_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.ipv6_id_seq TO "system";

-- DROP SEQUENCE public.ipv6_prefixes_id_seq;

CREATE SEQUENCE public.ipv6_prefixes_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.ipv6_prefixes_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.ipv6_prefixes_id_seq TO "system";

-- DROP SEQUENCE public.models_id_seq;

CREATE SEQUENCE public.models_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.models_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.models_id_seq TO "system";

-- DROP SEQUENCE public.parametros_id_seq;

CREATE SEQUENCE public.parametros_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.parametros_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.parametros_id_seq TO "system";

-- DROP SEQUENCE public.ptp_links_id_seq;

CREATE SEQUENCE public.ptp_links_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.ptp_links_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.ptp_links_id_seq TO "system";

-- DROP SEQUENCE public.servers_access_credentials_id_seq;

CREATE SEQUENCE public.servers_access_credentials_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.servers_access_credentials_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.servers_access_credentials_id_seq TO "system";

-- DROP SEQUENCE public.servers_access_methods_id_seq;

CREATE SEQUENCE public.servers_access_methods_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.servers_access_methods_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.servers_access_methods_id_seq TO "system";

-- DROP SEQUENCE public.servers_domains_id_seq;

CREATE SEQUENCE public.servers_domains_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.servers_domains_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.servers_domains_id_seq TO "system";

-- DROP SEQUENCE public.servers_id_seq;

CREATE SEQUENCE public.servers_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.servers_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.servers_id_seq TO "system";

-- DROP SEQUENCE public.servers_ips_id_seq;

CREATE SEQUENCE public.servers_ips_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.servers_ips_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.servers_ips_id_seq TO "system";

-- DROP SEQUENCE public.service_types_id_seq;

CREATE SEQUENCE public.service_types_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.service_types_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.service_types_id_seq TO "system";

-- DROP SEQUENCE public.service_versions_id_seq;

CREATE SEQUENCE public.service_versions_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.service_versions_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.service_versions_id_seq TO "system";

-- DROP SEQUENCE public.snmp_info_id_seq;

CREATE SEQUENCE public.snmp_info_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.snmp_info_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.snmp_info_id_seq TO "system";

-- DROP SEQUENCE public.urls_id_seq;

CREATE SEQUENCE public.urls_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.urls_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.urls_id_seq TO "system";

-- DROP SEQUENCE public.user_logs_id_seq;

CREATE SEQUENCE public.user_logs_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.user_logs_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.user_logs_id_seq TO "system";

-- DROP SEQUENCE public.users_id_seq;

CREATE SEQUENCE public.users_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.users_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.users_id_seq TO "system";

-- DROP SEQUENCE public.vendors_id_seq;

CREATE SEQUENCE public.vendors_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE public.vendors_id_seq OWNER TO "system";
GRANT ALL ON SEQUENCE public.vendors_id_seq TO "system";
-- public.audit_items definição

-- Drop table

-- DROP TABLE public.audit_items;

CREATE TABLE public.audit_items (
	id serial4 NOT NULL,
	"name" varchar(255) NOT NULL,
	description text NULL,
	importance_level varchar(20) NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT audit_items_pkey PRIMARY KEY (id)
);

-- Permissions

ALTER TABLE public.audit_items OWNER TO "system";
GRANT ALL ON TABLE public.audit_items TO "system";


-- public.automations definição

-- Drop table

-- DROP TABLE public.automations;

CREATE TABLE public.automations (
	id serial4 NOT NULL,
	"name" varchar(255) NOT NULL,
	description text NULL,
	script_path varchar(255) NULL,
	cover_image varchar(255) NULL,
	param_schema jsonb NULL,
	status varchar(50) DEFAULT 'inactive'::character varying NULL,
	last_run timestamp NULL,
	scheduled_time timestamp NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT automations_name_key UNIQUE (name),
	CONSTRAINT automations_pkey PRIMARY KEY (id)
);

-- Permissions

ALTER TABLE public.automations OWNER TO "system";
GRANT ALL ON TABLE public.automations TO "system";


-- public.clientes definição

-- Drop table

-- DROP TABLE public.clientes;

CREATE TABLE public.clientes (
	id serial4 NOT NULL,
	"name" varchar(255) NOT NULL,
	sigla varchar(50) NULL,
	comentario text NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	asn_id int4 NULL,
	domain_id int4 NULL,
	CONSTRAINT clientes_pkey PRIMARY KEY (id)
);

-- Permissions

ALTER TABLE public.clientes OWNER TO "system";
GRANT ALL ON TABLE public.clientes TO "system";


-- public.dominios definição

-- Drop table

-- DROP TABLE public.dominios;

CREATE TABLE public.dominios (
	id serial4 NOT NULL,
	dominio varchar(255) NOT NULL,
	criado_em timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	status varchar(20) DEFAULT 'bloqueado'::character varying NULL,
	CONSTRAINT dominios_dominio_key UNIQUE (dominio),
	CONSTRAINT dominios_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_dominio ON public.dominios USING btree (dominio);

-- Permissions

ALTER TABLE public.dominios OWNER TO "system";
GRANT ALL ON TABLE public.dominios TO "system";


-- public.historico_dominios definição

-- Drop table

-- DROP TABLE public.historico_dominios;

CREATE TABLE public.historico_dominios (
	id serial4 NOT NULL,
	data_hora timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	acao varchar(10) NOT NULL,
	dominio varchar(255) NOT NULL,
	CONSTRAINT historico_dominios_acao_check CHECK (((acao)::text = ANY ((ARRAY['adicionado'::character varying, 'removido'::character varying])::text[]))),
	CONSTRAINT historico_dominios_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_historico_dominio ON public.historico_dominios USING btree (dominio);

-- Permissions

ALTER TABLE public.historico_dominios OWNER TO "system";
GRANT ALL ON TABLE public.historico_dominios TO "system";


-- public.historico_ipv4 definição

-- Drop table

-- DROP TABLE public.historico_ipv4;

CREATE TABLE public.historico_ipv4 (
	id serial4 NOT NULL,
	data_hora timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	acao varchar(10) NOT NULL,
	endereco inet NOT NULL,
	CONSTRAINT historico_ipv4_acao_check CHECK (((acao)::text = ANY ((ARRAY['adicionado'::character varying, 'removido'::character varying])::text[]))),
	CONSTRAINT historico_ipv4_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_historico_ipv4 ON public.historico_ipv4 USING btree (endereco);

-- Permissions

ALTER TABLE public.historico_ipv4 OWNER TO "system";
GRANT ALL ON TABLE public.historico_ipv4 TO "system";


-- public.historico_ipv6 definição

-- Drop table

-- DROP TABLE public.historico_ipv6;

CREATE TABLE public.historico_ipv6 (
	id serial4 NOT NULL,
	data_hora timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	acao varchar(10) NOT NULL,
	endereco inet NOT NULL,
	CONSTRAINT historico_ipv6_acao_check CHECK (((acao)::text = ANY ((ARRAY['adicionado'::character varying, 'removido'::character varying])::text[]))),
	CONSTRAINT historico_ipv6_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_historico_ipv6 ON public.historico_ipv6 USING btree (endereco);

-- Permissions

ALTER TABLE public.historico_ipv6 OWNER TO "system";
GRANT ALL ON TABLE public.historico_ipv6 TO "system";


-- public.historico_urls definição

-- Drop table

-- DROP TABLE public.historico_urls;

CREATE TABLE public.historico_urls (
	id serial4 NOT NULL,
	data_hora timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	acao varchar(10) NOT NULL,
	url text NOT NULL,
	CONSTRAINT historico_urls_acao_check CHECK (((acao)::text = ANY ((ARRAY['adicionado'::character varying, 'removido'::character varying])::text[]))),
	CONSTRAINT historico_urls_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_historico_url ON public.historico_urls USING btree (url);

-- Permissions

ALTER TABLE public.historico_urls OWNER TO "system";
GRANT ALL ON TABLE public.historico_urls TO "system";


-- public.host_access_types definição

-- Drop table

-- DROP TABLE public.host_access_types;

CREATE TABLE public.host_access_types (
	id serial4 NOT NULL,
	access_type varchar(50) NOT NULL,
	port int4 NOT NULL,
	CONSTRAINT host_access_types_access_type_key UNIQUE (access_type, port),
	CONSTRAINT host_access_types_pkey PRIMARY KEY (id)
);

-- Permissions

ALTER TABLE public.host_access_types OWNER TO "system";
GRANT ALL ON TABLE public.host_access_types TO "system";


-- public.host_types definição

-- Drop table

-- DROP TABLE public.host_types;

CREATE TABLE public.host_types (
	id serial4 NOT NULL,
	type_name varchar(100) NOT NULL,
	CONSTRAINT host_types_pkey PRIMARY KEY (id),
	CONSTRAINT host_types_type_name_key UNIQUE (type_name)
);

-- Permissions

ALTER TABLE public.host_types OWNER TO "system";
GRANT ALL ON TABLE public.host_types TO "system";


-- public.ipv4 definição

-- Drop table

-- DROP TABLE public.ipv4;

CREATE TABLE public.ipv4 (
	id serial4 NOT NULL,
	endereco inet NOT NULL,
	criado_em timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT ipv4_endereco_key UNIQUE (endereco),
	CONSTRAINT ipv4_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_ipv4 ON public.ipv4 USING btree (endereco);

-- Permissions

ALTER TABLE public.ipv4 OWNER TO "system";
GRANT ALL ON TABLE public.ipv4 TO "system";


-- public.ipv6 definição

-- Drop table

-- DROP TABLE public.ipv6;

CREATE TABLE public.ipv6 (
	id serial4 NOT NULL,
	endereco inet NOT NULL,
	criado_em timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT ipv6_endereco_key UNIQUE (endereco),
	CONSTRAINT ipv6_pkey PRIMARY KEY (id)
);
CREATE INDEX idx_ipv6 ON public.ipv6 USING btree (endereco);

-- Permissions

ALTER TABLE public.ipv6 OWNER TO "system";
GRANT ALL ON TABLE public.ipv6 TO "system";


-- public.parametros definição

-- Drop table

-- DROP TABLE public.parametros;

CREATE TABLE public.parametros (
	id serial4 NOT NULL,
	param varchar(100) NOT NULL,
	value varchar(100) NOT NULL
);

-- Permissions

ALTER TABLE public.parametros OWNER TO "system";
GRANT ALL ON TABLE public.parametros TO "system";


-- public.servers_access_methods definição

-- Drop table

-- DROP TABLE public.servers_access_methods;

CREATE TABLE public.servers_access_methods (
	id serial4 NOT NULL,
	method_type varchar(50) NOT NULL,
	port int4 NOT NULL,
	description text NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT servers_access_methods_pkey PRIMARY KEY (id)
);

-- Permissions

ALTER TABLE public.servers_access_methods OWNER TO "system";
GRANT ALL ON TABLE public.servers_access_methods TO "system";


-- public.service_types definição

-- Drop table

-- DROP TABLE public.service_types;

CREATE TABLE public.service_types (
	id serial4 NOT NULL,
	"name" varchar(100) NOT NULL,
	description text NULL,
	CONSTRAINT service_types_name_key UNIQUE (name),
	CONSTRAINT service_types_pkey PRIMARY KEY (id)
);

-- Permissions

ALTER TABLE public.service_types OWNER TO "system";
GRANT ALL ON TABLE public.service_types TO "system";


-- public.urls definição

-- Drop table

-- DROP TABLE public.urls;

CREATE TABLE public.urls (
	id serial4 NOT NULL,
	url text NOT NULL,
	criado_em timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT urls_pkey PRIMARY KEY (id),
	CONSTRAINT urls_url_key UNIQUE (url)
);
CREATE INDEX idx_url ON public.urls USING btree (url);

-- Permissions

ALTER TABLE public.urls OWNER TO "system";
GRANT ALL ON TABLE public.urls TO "system";


-- public.user_logs definição

-- Drop table

-- DROP TABLE public.user_logs;

CREATE TABLE public.user_logs (
	id serial4 NOT NULL,
	user_id int4 NULL,
	"action" text NULL,
	"timestamp" timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	details jsonb NULL,
	CONSTRAINT user_logs_pkey PRIMARY KEY (id)
);

-- Permissions

ALTER TABLE public.user_logs OWNER TO "system";
GRANT ALL ON TABLE public.user_logs TO "system";


-- public.users definição

-- Drop table

-- DROP TABLE public.users;

CREATE TABLE public.users (
	id serial4 NOT NULL,
	username varchar(150) NOT NULL,
	email varchar(255) NOT NULL,
	"password" text NOT NULL,
	contato varchar(255) NULL,
	chatid varchar(255) NULL,
	is_admin bool DEFAULT false NULL,
	is_collaborator bool DEFAULT false NULL,
	is_client bool DEFAULT false NULL,
	date_joined timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	last_login timestamp NULL,
	CONSTRAINT users_email_key UNIQUE (email),
	CONSTRAINT users_pkey PRIMARY KEY (id),
	CONSTRAINT users_username_key UNIQUE (username)
);

-- Permissions

ALTER TABLE public.users OWNER TO "system";
GRANT ALL ON TABLE public.users TO "system";


-- public.vendors definição

-- Drop table

-- DROP TABLE public.vendors;

CREATE TABLE public.vendors (
	id serial4 NOT NULL,
	"name" varchar(100) NOT NULL,
	CONSTRAINT vendors_name_key UNIQUE (name),
	CONSTRAINT vendors_pkey PRIMARY KEY (id)
);

-- Permissions

ALTER TABLE public.vendors OWNER TO "system";
GRANT ALL ON TABLE public.vendors TO "system";


-- public.asn definição

-- Drop table

-- DROP TABLE public.asn;

CREATE TABLE public.asn (
	id serial4 NOT NULL,
	asn_number varchar(50) NOT NULL,
	cliente_id int4 NULL,
	CONSTRAINT asn_asn_number_key UNIQUE (asn_number),
	CONSTRAINT asn_pkey PRIMARY KEY (id),
	CONSTRAINT asn_cliente_id_fkey FOREIGN KEY (cliente_id) REFERENCES public.clientes(id) ON DELETE SET NULL
);

-- Permissions

ALTER TABLE public.asn OWNER TO "system";
GRANT ALL ON TABLE public.asn TO "system";


-- public.automation_logs definição

-- Drop table

-- DROP TABLE public.automation_logs;

CREATE TABLE public.automation_logs (
	id serial4 NOT NULL,
	user_id int4 NULL,
	automation_id int4 NULL,
	"action" text NULL,
	"timestamp" timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	details jsonb NULL,
	action_type varchar(50) NULL,
	"source" varchar(50) NULL,
	CONSTRAINT automation_logs_pkey PRIMARY KEY (id),
	CONSTRAINT automation_logs_automation_id_fkey FOREIGN KEY (automation_id) REFERENCES public.automations(id) ON DELETE CASCADE,
	CONSTRAINT automation_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE SET NULL
);

-- Permissions

ALTER TABLE public.automation_logs OWNER TO "system";
GRANT ALL ON TABLE public.automation_logs TO "system";


-- public.client_accounts definição

-- Drop table

-- DROP TABLE public.client_accounts;

CREATE TABLE public.client_accounts (
	id serial4 NOT NULL,
	cliente_id int4 NOT NULL,
	account_type varchar(50) NOT NULL,
	username varchar(255) NOT NULL,
	"password" text NOT NULL,
	access_url varchar(255) NULL,
	description text NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT client_accounts_pkey PRIMARY KEY (id),
	CONSTRAINT fk_client_accounts_cliente FOREIGN KEY (cliente_id) REFERENCES public.clientes(id) ON DELETE CASCADE
);

-- Permissions

ALTER TABLE public.client_accounts OWNER TO "system";
GRANT ALL ON TABLE public.client_accounts TO "system";


-- public.client_permissions definição

-- Drop table

-- DROP TABLE public.client_permissions;

CREATE TABLE public.client_permissions (
	id serial4 NOT NULL,
	user_id int4 NULL,
	cliente_id int4 NULL,
	can_edit_info bool DEFAULT false NULL,
	can_edit_hosts bool DEFAULT false NULL,
	can_view_information bool DEFAULT true NULL,
	can_view_hosts bool DEFAULT true NULL,
	CONSTRAINT client_permissions_pkey PRIMARY KEY (id),
	CONSTRAINT client_permissions_cliente_id_fkey FOREIGN KEY (cliente_id) REFERENCES public.clientes(id) ON DELETE CASCADE,
	CONSTRAINT client_permissions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE
);

-- Permissions

ALTER TABLE public.client_permissions OWNER TO "system";
GRANT ALL ON TABLE public.client_permissions TO "system";


-- public.client_ptp_blocks definição

-- Drop table

-- DROP TABLE public.client_ptp_blocks;

CREATE TABLE public.client_ptp_blocks (
	id serial4 NOT NULL,
	client_id int4 NOT NULL,
	ip_block_start cidr NOT NULL,
	ip_block_end cidr NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT client_ptp_blocks_pkey PRIMARY KEY (id),
	CONSTRAINT fk_client_ptp FOREIGN KEY (client_id) REFERENCES public.clientes(id) ON DELETE CASCADE
);

-- Permissions

ALTER TABLE public.client_ptp_blocks OWNER TO "system";
GRANT ALL ON TABLE public.client_ptp_blocks TO "system";


-- public.domains definição

-- Drop table

-- DROP TABLE public.domains;

CREATE TABLE public.domains (
	id serial4 NOT NULL,
	domain_name varchar(255) NOT NULL,
	cliente_id int4 NULL,
	CONSTRAINT domains_domain_name_key UNIQUE (domain_name),
	CONSTRAINT domains_pkey PRIMARY KEY (id),
	CONSTRAINT domains_cliente_id_fkey FOREIGN KEY (cliente_id) REFERENCES public.clientes(id) ON DELETE SET NULL
);

-- Permissions

ALTER TABLE public.domains OWNER TO "system";
GRANT ALL ON TABLE public.domains TO "system";


-- public.host_access_credentials definição

-- Drop table

-- DROP TABLE public.host_access_credentials;

CREATE TABLE public.host_access_credentials (
	id serial4 NOT NULL,
	username varchar(100) NULL,
	"password" text NULL,
	cliente_id int4 NULL,
	description text NULL,
	CONSTRAINT host_access_credentials_pkey PRIMARY KEY (id),
	CONSTRAINT host_access_credentials_cliente_id_fkey FOREIGN KEY (cliente_id) REFERENCES public.clientes(id) ON DELETE SET NULL
);
CREATE INDEX idx_host_access_credentials_cliente_id ON public.host_access_credentials USING btree (cliente_id);

-- Permissions

ALTER TABLE public.host_access_credentials OWNER TO "system";
GRANT ALL ON TABLE public.host_access_credentials TO "system";


-- public.ipv4_prefixes definição

-- Drop table

-- DROP TABLE public.ipv4_prefixes;

CREATE TABLE public.ipv4_prefixes (
	id serial4 NOT NULL,
	prefix varchar(50) NOT NULL,
	cliente_id int4 NULL,
	CONSTRAINT ipv4_prefixes_pkey PRIMARY KEY (id),
	CONSTRAINT ipv4_prefixes_prefix_key UNIQUE (prefix),
	CONSTRAINT ipv4_prefixes_cliente_id_fkey FOREIGN KEY (cliente_id) REFERENCES public.clientes(id) ON DELETE SET NULL
);

-- Permissions

ALTER TABLE public.ipv4_prefixes OWNER TO "system";
GRANT ALL ON TABLE public.ipv4_prefixes TO "system";


-- public.ipv6_prefixes definição

-- Drop table

-- DROP TABLE public.ipv6_prefixes;

CREATE TABLE public.ipv6_prefixes (
	id serial4 NOT NULL,
	prefix varchar(50) NOT NULL,
	cliente_id int4 NULL,
	CONSTRAINT ipv6_prefixes_pkey PRIMARY KEY (id),
	CONSTRAINT ipv6_prefixes_prefix_key UNIQUE (prefix),
	CONSTRAINT ipv6_prefixes_cliente_id_fkey FOREIGN KEY (cliente_id) REFERENCES public.clientes(id) ON DELETE SET NULL
);

-- Permissions

ALTER TABLE public.ipv6_prefixes OWNER TO "system";
GRANT ALL ON TABLE public.ipv6_prefixes TO "system";


-- public.models definição

-- Drop table

-- DROP TABLE public.models;

CREATE TABLE public.models (
	id serial4 NOT NULL,
	"name" varchar(100) NOT NULL,
	vendor_id int4 NOT NULL,
	CONSTRAINT models_name_key UNIQUE (name),
	CONSTRAINT models_pkey PRIMARY KEY (id),
	CONSTRAINT models_vendor_id_fkey FOREIGN KEY (vendor_id) REFERENCES public.vendors(id) ON DELETE CASCADE
);

-- Permissions

ALTER TABLE public.models OWNER TO "system";
GRANT ALL ON TABLE public.models TO "system";


-- public.servers_access_credentials definição

-- Drop table

-- DROP TABLE public.servers_access_credentials;

CREATE TABLE public.servers_access_credentials (
	id serial4 NOT NULL,
	cliente_id int4 NOT NULL,
	username varchar(255) NULL,
	"password" text NULL,
	description text NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT servers_access_credentials_pkey PRIMARY KEY (id),
	CONSTRAINT fk_access_credentials_client FOREIGN KEY (cliente_id) REFERENCES public.clientes(id) ON DELETE CASCADE
);

-- Permissions

ALTER TABLE public.servers_access_credentials OWNER TO "system";
GRANT ALL ON TABLE public.servers_access_credentials TO "system";


-- public.service_versions definição

-- Drop table

-- DROP TABLE public.service_versions;

CREATE TABLE public.service_versions (
	id serial4 NOT NULL,
	service_type_id int4 NOT NULL,
	"version" varchar(50) NOT NULL,
	description text NULL,
	CONSTRAINT service_versions_pkey PRIMARY KEY (id),
	CONSTRAINT fk_service_versions_service_type FOREIGN KEY (service_type_id) REFERENCES public.service_types(id) ON DELETE CASCADE
);

-- Permissions

ALTER TABLE public.service_versions OWNER TO "system";
GRANT ALL ON TABLE public.service_versions TO "system";


-- public.snmp_info definição

-- Drop table

-- DROP TABLE public.snmp_info;

CREATE TABLE public.snmp_info (
	id serial4 NOT NULL,
	"version" varchar(10) NOT NULL,
	community varchar(255) NULL,
	security_name varchar(255) NULL,
	security_level varchar(50) NULL,
	auth_protocol varchar(50) NULL,
	auth_passphrase text NULL,
	priv_protocol varchar(50) NULL,
	priv_passphrase text NULL,
	cliente_id int4 NULL,
	CONSTRAINT snmp_info_pkey PRIMARY KEY (id),
	CONSTRAINT snmp_info_cliente_id_fkey FOREIGN KEY (cliente_id) REFERENCES public.clientes(id) ON DELETE SET NULL
);
CREATE INDEX idx_snmp_info_cliente_id ON public.snmp_info USING btree (cliente_id);

-- Permissions

ALTER TABLE public.snmp_info OWNER TO "system";
GRANT ALL ON TABLE public.snmp_info TO "system";


-- public.hosts definição

-- Drop table

-- DROP TABLE public.hosts;

CREATE TABLE public.hosts (
	id serial4 NOT NULL,
	"name" varchar(255) NOT NULL,
	comentario text NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	cliente_id int4 NULL,
	deleted_at timestamp NULL,
	model_id int4 NULL,
	status varchar(20) DEFAULT 'ativo'::character varying NULL,
	CONSTRAINT hosts_name_key UNIQUE (name),
	CONSTRAINT hosts_pkey PRIMARY KEY (id),
	CONSTRAINT hosts_status_check CHECK (((status)::text = ANY ((ARRAY['ativo'::character varying, 'desativado'::character varying])::text[]))),
	CONSTRAINT hosts_cliente_id_fkey FOREIGN KEY (cliente_id) REFERENCES public.clientes(id) ON DELETE SET NULL,
	CONSTRAINT hosts_model_id_fkey FOREIGN KEY (model_id) REFERENCES public.models(id) ON DELETE SET NULL
);
CREATE INDEX idx_hosts_status ON public.hosts USING btree (status);

-- Permissions

ALTER TABLE public.hosts OWNER TO "system";
GRANT ALL ON TABLE public.hosts TO "system";


-- public.ips definição

-- Drop table

-- DROP TABLE public.ips;

CREATE TABLE public.ips (
	id serial4 NOT NULL,
	ip_address varchar(45) NOT NULL,
	"version" varchar(10) NOT NULL,
	"type" varchar(50) NULL,
	host_id int4 NOT NULL,
	CONSTRAINT ips_pkey PRIMARY KEY (id),
	CONSTRAINT fk_host_ips FOREIGN KEY (host_id) REFERENCES public.hosts(id) ON DELETE CASCADE,
	CONSTRAINT fk_host_ips_host FOREIGN KEY (host_id) REFERENCES public.hosts(id) ON DELETE CASCADE
);

-- Permissions

ALTER TABLE public.ips OWNER TO "system";
GRANT ALL ON TABLE public.ips TO "system";


-- public.ptp_links definição

-- Drop table

-- DROP TABLE public.ptp_links;

CREATE TABLE public.ptp_links (
	id serial4 NOT NULL,
	ptp_number int4 NOT NULL,
	host_a_id int4 NOT NULL,
	host_b_id int4 NOT NULL,
	ip_v4_host_a cidr NOT NULL,
	ip_v4_host_b cidr NOT NULL,
	vlan_ipv4 int4 NOT NULL,
	vlan_ipv6 int4 NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT ptp_links_pkey PRIMARY KEY (id),
	CONSTRAINT fk_host_a FOREIGN KEY (host_a_id) REFERENCES public.hosts(id) ON DELETE CASCADE,
	CONSTRAINT fk_host_b FOREIGN KEY (host_b_id) REFERENCES public.hosts(id) ON DELETE CASCADE
);

-- Permissions

ALTER TABLE public.ptp_links OWNER TO "system";
GRANT ALL ON TABLE public.ptp_links TO "system";


-- public.servers definição

-- Drop table

-- DROP TABLE public.servers;

CREATE TABLE public.servers (
	id serial4 NOT NULL,
	cliente_id int4 NOT NULL,
	service_version_id int4 NOT NULL,
	hostname varchar(255) NULL,
	status varchar(20) DEFAULT 'ativo'::character varying NULL,
	description text NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT servers_pkey PRIMARY KEY (id),
	CONSTRAINT fk_servers_service_version FOREIGN KEY (service_version_id) REFERENCES public.service_versions(id) ON DELETE CASCADE
);

-- Permissions

ALTER TABLE public.servers OWNER TO "system";
GRANT ALL ON TABLE public.servers TO "system";


-- public.servers_domains definição

-- Drop table

-- DROP TABLE public.servers_domains;

CREATE TABLE public.servers_domains (
	id serial4 NOT NULL,
	server_id int4 NOT NULL,
	domain_name varchar(255) NOT NULL,
	description text NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT servers_domains_pkey PRIMARY KEY (id),
	CONSTRAINT fk_domains_server FOREIGN KEY (server_id) REFERENCES public.servers(id) ON DELETE CASCADE
);

-- Permissions

ALTER TABLE public.servers_domains OWNER TO "system";
GRANT ALL ON TABLE public.servers_domains TO "system";


-- public.servers_ips definição

-- Drop table

-- DROP TABLE public.servers_ips;

CREATE TABLE public.servers_ips (
	id serial4 NOT NULL,
	server_id int4 NOT NULL,
	ip_address varchar(45) NOT NULL,
	ip_type varchar(10) NOT NULL,
	description text NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT servers_ips_pkey PRIMARY KEY (id),
	CONSTRAINT fk_ips_server FOREIGN KEY (server_id) REFERENCES public.servers(id) ON DELETE CASCADE
);

-- Permissions

ALTER TABLE public.servers_ips OWNER TO "system";
GRANT ALL ON TABLE public.servers_ips TO "system";


-- public.audits definição

-- Drop table

-- DROP TABLE public.audits;

CREATE TABLE public.audits (
	id serial4 NOT NULL,
	audit_date timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	client_id int4 NULL,
	equipment_id int4 NULL,
	auditor_name varchar(255) NOT NULL,
	audit_type varchar(20) NOT NULL,
	description text NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT audits_pkey PRIMARY KEY (id),
	CONSTRAINT fk_audits_client FOREIGN KEY (client_id) REFERENCES public.clientes(id) ON DELETE CASCADE,
	CONSTRAINT fk_audits_equipment FOREIGN KEY (equipment_id) REFERENCES public.hosts(id) ON DELETE CASCADE
);

-- Permissions

ALTER TABLE public.audits OWNER TO "system";
GRANT ALL ON TABLE public.audits TO "system";


-- public.host_host_access_credentials definição

-- Drop table

-- DROP TABLE public.host_host_access_credentials;

CREATE TABLE public.host_host_access_credentials (
	host_id int4 NOT NULL,
	host_access_credentials_id int4 NOT NULL,
	CONSTRAINT host_host_access_credentials_pkey PRIMARY KEY (host_id, host_access_credentials_id),
	CONSTRAINT fk_host_access_credentials_credentials FOREIGN KEY (host_access_credentials_id) REFERENCES public.host_access_credentials(id) ON DELETE CASCADE,
	CONSTRAINT fk_host_access_credentials_host FOREIGN KEY (host_id) REFERENCES public.hosts(id) ON DELETE CASCADE
);
CREATE INDEX idx_host_access_credentials_credentials_id ON public.host_host_access_credentials USING btree (host_access_credentials_id);
CREATE INDEX idx_host_access_credentials_host_id ON public.host_host_access_credentials USING btree (host_id);

-- Permissions

ALTER TABLE public.host_host_access_credentials OWNER TO "system";
GRANT ALL ON TABLE public.host_host_access_credentials TO "system";


-- public.host_host_access_types definição

-- Drop table

-- DROP TABLE public.host_host_access_types;

CREATE TABLE public.host_host_access_types (
	host_id int4 NOT NULL,
	host_access_type_id int4 NOT NULL,
	CONSTRAINT host_host_access_types_pkey PRIMARY KEY (host_id, host_access_type_id),
	CONSTRAINT fk_host_access_types_access_type FOREIGN KEY (host_access_type_id) REFERENCES public.host_access_types(id) ON DELETE CASCADE,
	CONSTRAINT fk_host_access_types_host FOREIGN KEY (host_id) REFERENCES public.hosts(id) ON DELETE CASCADE
);
CREATE INDEX idx_host_access_types_access_type_id ON public.host_host_access_types USING btree (host_access_type_id);
CREATE INDEX idx_host_access_types_host_id ON public.host_host_access_types USING btree (host_id);

-- Permissions

ALTER TABLE public.host_host_access_types OWNER TO "system";
GRANT ALL ON TABLE public.host_host_access_types TO "system";


-- public.host_host_types definição

-- Drop table

-- DROP TABLE public.host_host_types;

CREATE TABLE public.host_host_types (
	host_id int4 NOT NULL,
	host_type_id int4 NOT NULL,
	CONSTRAINT host_host_types_pkey PRIMARY KEY (host_id, host_type_id),
	CONSTRAINT fk_host_host_types_host FOREIGN KEY (host_id) REFERENCES public.hosts(id) ON DELETE CASCADE,
	CONSTRAINT fk_host_host_types_host_type FOREIGN KEY (host_type_id) REFERENCES public.host_types(id) ON DELETE CASCADE
);
CREATE INDEX idx_host_host_types_host_id ON public.host_host_types USING btree (host_id);
CREATE INDEX idx_host_host_types_host_type_id ON public.host_host_types USING btree (host_type_id);

-- Permissions

ALTER TABLE public.host_host_types OWNER TO "system";
GRANT ALL ON TABLE public.host_host_types TO "system";


-- public.host_logs definição

-- Drop table

-- DROP TABLE public.host_logs;

CREATE TABLE public.host_logs (
	id serial4 NOT NULL,
	user_id int4 NULL,
	host_id int4 NULL,
	"action" text NULL,
	"timestamp" timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	details jsonb NULL,
	CONSTRAINT host_logs_pkey PRIMARY KEY (id),
	CONSTRAINT host_logs_host_id_fkey FOREIGN KEY (host_id) REFERENCES public.hosts(id) ON DELETE CASCADE,
	CONSTRAINT host_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE SET NULL
);

-- Permissions

ALTER TABLE public.host_logs OWNER TO "system";
GRANT ALL ON TABLE public.host_logs TO "system";


-- public.host_snmp_info definição

-- Drop table

-- DROP TABLE public.host_snmp_info;

CREATE TABLE public.host_snmp_info (
	host_id int4 NOT NULL,
	snmp_info_id int4 NOT NULL,
	CONSTRAINT host_snmp_info_pkey PRIMARY KEY (host_id, snmp_info_id),
	CONSTRAINT fk_host_snmp_info_host FOREIGN KEY (host_id) REFERENCES public.hosts(id) ON DELETE CASCADE,
	CONSTRAINT fk_host_snmp_info_snmp_info FOREIGN KEY (snmp_info_id) REFERENCES public.snmp_info(id) ON DELETE CASCADE
);
CREATE INDEX idx_host_snmp_info_host_id ON public.host_snmp_info USING btree (host_id);
CREATE INDEX idx_host_snmp_info_snmp_info_id ON public.host_snmp_info USING btree (snmp_info_id);

-- Permissions

ALTER TABLE public.host_snmp_info OWNER TO "system";
GRANT ALL ON TABLE public.host_snmp_info TO "system";


-- public.methods_servers_access_credentials definição

-- Drop table

-- DROP TABLE public.methods_servers_access_credentials;

CREATE TABLE public.methods_servers_access_credentials (
	server_id int4 NOT NULL,
	servers_access_credentials_id int4 NOT NULL,
	servers_access_methods_id int4 NOT NULL,
	CONSTRAINT pk_methods_servers_access_credentials PRIMARY KEY (server_id, servers_access_credentials_id, servers_access_methods_id),
	CONSTRAINT fk_methods_servers_access_credentials_credentials FOREIGN KEY (servers_access_credentials_id) REFERENCES public.servers_access_credentials(id) ON DELETE CASCADE,
	CONSTRAINT fk_methods_servers_access_credentials_methods FOREIGN KEY (servers_access_methods_id) REFERENCES public.servers_access_methods(id) ON DELETE CASCADE,
	CONSTRAINT fk_methods_servers_access_credentials_server FOREIGN KEY (server_id) REFERENCES public.servers(id) ON DELETE CASCADE
);

-- Permissions

ALTER TABLE public.methods_servers_access_credentials OWNER TO "system";
GRANT ALL ON TABLE public.methods_servers_access_credentials TO "system";


-- public.audit_equipments definição

-- Drop table

-- DROP TABLE public.audit_equipments;

CREATE TABLE public.audit_equipments (
	id serial4 NOT NULL,
	audit_id int4 NOT NULL,
	equipment_id int4 NOT NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT audit_equipments_pkey PRIMARY KEY (id),
	CONSTRAINT fk_audit_equipments_audit FOREIGN KEY (audit_id) REFERENCES public.audits(id) ON DELETE CASCADE,
	CONSTRAINT fk_audit_equipments_equipment FOREIGN KEY (equipment_id) REFERENCES public.hosts(id) ON DELETE CASCADE
);

-- Permissions

ALTER TABLE public.audit_equipments OWNER TO "system";
GRANT ALL ON TABLE public.audit_equipments TO "system";


-- public.audit_results definição

-- Drop table

-- DROP TABLE public.audit_results;

CREATE TABLE public.audit_results (
	id serial4 NOT NULL,
	audit_equipment_id int4 NULL,
	audit_item_id int4 NOT NULL,
	is_configured bool NOT NULL,
	"comments" text NULL,
	created_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	updated_at timestamp DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT audit_results_pkey PRIMARY KEY (id),
	CONSTRAINT fk_audit_results_audit_equipment FOREIGN KEY (audit_equipment_id) REFERENCES public.audit_equipments(id) ON DELETE CASCADE,
	CONSTRAINT fk_audit_results_audit_item FOREIGN KEY (audit_item_id) REFERENCES public.audit_items(id) ON DELETE CASCADE
);

-- Permissions

ALTER TABLE public.audit_results OWNER TO "system";
GRANT ALL ON TABLE public.audit_results TO "system";




-- Permissions

GRANT ALL ON SCHEMA public TO pg_database_owner;
GRANT USAGE ON SCHEMA public TO public;
