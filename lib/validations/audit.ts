import * as z from 'zod';

export const auditItemSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  importance: z.enum(['CRITICAL', 'HIGH', 'MEDIUM', 'LOW']),
});

export const auditSchema = z.object({
  type: z.enum(['GENERAL', 'SPECIFIC']),
  client_id: z.number(),
  auditor_id: z.string(),
  description: z.string().optional(),
  equipment_ids: z.array(z.number()),
});

export const auditResultSchema = z.object({
  audit_equipment_id: z.number(),
  audit_item_id: z.number(),
  configured: z.boolean(),
  comments: z.string().optional(),
});

export type AuditItemFormData = z.infer<typeof auditItemSchema>;
export type AuditFormData = z.infer<typeof auditSchema>;
export type AuditResultFormData = z.infer<typeof auditResultSchema>;