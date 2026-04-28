import * as z from 'zod';

// DTO para crear un nuevo cliente, con validación de datos usando Zod
export const createClientSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3, 'Name is required'),
  email: z.email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string(),
});

export type CreateClientData = z.infer<typeof createClientSchema>;

export const updateClientSchema = createClientSchema.partial();

export const idParamSchema = z.object({
  id: z.string(),
});

// DTO para mostrar datos de un cliente, con validación de datos usando Zod
export const showClient = z.object({
  name: z.string(),
  email: z.string(),
});

export type ShowClientData = z.infer<typeof showClient>;
