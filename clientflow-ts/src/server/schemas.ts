import * as z from 'zod';

// DTO para crear un nuevo cliente, con validación de datos usando Zod
export const ClientCreateSchema = z.object({
  name: z.string().min(3, 'Name is required'),
  email: z.email('Invalid email address'),
  phone: z.string().nullable(),
  status: z.enum(['active', 'inactive']).default('active'),
  company: z.string(),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  // age: z.string().transform((val) => Number(val)),
});

// DTO para la salida de datos de un cliente, con validación de datos usando Zod
export const ClientResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string().nullable(),
  status: z.enum(['active', 'inactive']).default('active'),
  company: z.string(),
});

export type ClientCreateInput = z.infer<typeof ClientCreateSchema>;
export type ClientCreateFormData = z.input<typeof ClientCreateSchema>;
export type ClientCreateOutput = z.input<typeof ClientResponseSchema>;

export const ClientUpdateSchema = ClientCreateSchema.partial();

export const idParamSchema = z.object({
  id: z.string(),
});
