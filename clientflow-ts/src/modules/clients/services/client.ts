import {
  type ClientCreateInput,
  ClientResponseSchema,
} from '@/shared/contracts/client.contract';

const API_URL = '/api/clients';

export async function fetchClients() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Failed to fetch clients');
  }

  const clients = await response.json();
  const parsedClients = ClientResponseSchema.array().safeParse(clients.data);

  if (!parsedClients.success) {
    console.error('Error parsing clients:', parsedClients.error);
    throw new Error('Failed to parse clients');
  }

  return parsedClients.data;
}

export async function createClientRequest(data: ClientCreateInput) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to create client');
  }

  const newClient = await response.json();
  const parsedClient = ClientResponseSchema.safeParse(newClient.data);

  if (!parsedClient.success) {
    console.error('Error parsing new client:', parsedClient.error);
    throw new Error('Failed to parse new client');
  }

  return parsedClient.data;
}
