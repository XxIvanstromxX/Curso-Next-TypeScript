import { clients } from './db';
import { type Client } from '@/types/client.type';

// Retorna todos los clientes de la base de datos en memoria
export function getClients(): Client[] {
  return clients;
}

// Busca un cliente por id
// ⚠️ problema intencional: si id no existe retorna undefined sin avisar
export function getClientById(id: number): Client | undefined {
  return clients.find((c) => c.id === id);
}

// Crea un nuevo cliente y lo agrega al array
// ⚠️ problema intencional: sin validación de ningún campo
// ⚠️ problema intencional: Math.random() como id puede colisionar y no es un entero
export function createClient(client: Client): Client {
  const newClient = {
    id: Math.random(), // ⚠️ problema intencional: id no determinista y no entero
    ...client,
  };

  clients.push(newClient);
  return newClient;
}
