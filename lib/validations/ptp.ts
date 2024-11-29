import * as z from 'zod';

export const ptpSchema = z.object({
  ptp_number: z.string().min(1, 'Número do PTP é obrigatório'),
  client_id: z.string().min(1, 'Cliente é obrigatório'),
  ip_block: z.string().min(1, 'Bloco IP é obrigatório'),
  router_a: z.string().min(1, 'Roteador A é obrigatório'),
  router_b: z.string().min(1, 'Roteador B é obrigatório'),
});

export type PtpFormData = z.infer<typeof ptpSchema>;