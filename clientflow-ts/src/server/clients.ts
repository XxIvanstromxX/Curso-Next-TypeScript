import { type Client } from '@/types/client.type';
import { type CreateClientData, createClientSchema } from './schemas';

const clients: Client[] = [];

export function getClients(): Client[] {
  return clients;
}

export function getClientById(id: string): Client | undefined {
  return clients.find((c) => c.id === id);
}

export function createClient(client: CreateClientData): CreateClientData {
  const data: CreateClientData = createClientSchema.parse(client);

  const newClient = {
    id: Math.random().toString(36).substring(2, 15), // Genera un ID aleatorio para el cliente
    status: 'active', // Puedes ajustar esto según tus necesidades
    ...data,
  };

  clients.push(newClient);
  return newClient;
}
