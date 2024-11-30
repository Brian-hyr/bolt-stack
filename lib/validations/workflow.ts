import * as z from 'zod';

export const workflowSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
  nodes: z.array(z.object({
    id: z.string(),
    type: z.string(),
    position: z.object({
      x: z.number(),
      y: z.number()
    }),
    data: z.record(z.any())
  })),
  edges: z.array(z.object({
    id: z.string(),
    source: z.string(),
    target: z.string()
  })),
  user_id: z.string(),
  client_id: z.number().optional()
});

export type WorkflowFormData = z.infer<typeof workflowSchema>;