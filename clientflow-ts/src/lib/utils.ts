import { type Client } from '@/types/client.type';

// Formatea el nombre de un cliente en mayúsculas
// ⚠️ problema intencional: no valida si client o client.name existen
// Esto romperá en runtime si name es null, undefined o un tipo no string
export function formatClientName(client: Client): string {
  return client.name.toUpperCase(); // ⚠️ problema intencional: TypeError si name es null
}
