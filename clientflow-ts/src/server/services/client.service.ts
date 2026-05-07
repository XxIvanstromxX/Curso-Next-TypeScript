import {
  ClientCreateSchema,
  ClientResponseSchema,
  idParamSchema,
  ClientUpdateSchema,
  type ClientCreateInput,
} from '@/shared/contracts/client.contract';
import {
  findAllClients,
  createClientDB,
  updateClientDB,
  deleteClientDB,
} from '../repositories/client.repository';

export async function getClientsService() {
  const clients = await findAllClients();
  return clients.map((client) => ClientResponseSchema.parse(client));
}

export async function createClientService(data: ClientCreateInput) {
  const parsedData = ClientCreateSchema.safeParse(data);
  if (!parsedData.success) {
    throw new Error('Invalid client data');
  }
  const newClient = await createClientDB(parsedData.data);
  const parsedClient = ClientResponseSchema.safeParse(newClient);
  if (!parsedClient.success) {
    throw new Error('Error parsing new client data');
  }
  return parsedClient.data;
}

export async function updateClientService(
  id: string,
  data: Partial<ClientCreateInput>,
) {
  const parsedId = idParamSchema.safeParse({ id });
  if (!parsedId.success) {
    throw new Error('Invalid client ID');
  }
  const parsedData = ClientUpdateSchema.safeParse(data);
  if (!parsedData.success) {
    throw new Error('Invalid client data');
  }
  const updatedClient = await updateClientDB(parsedId.data.id, parsedData.data);
  const parsedClient = ClientResponseSchema.safeParse(updatedClient);
  if (!parsedClient.success) {
    throw new Error('Error parsing updated client data');
  }
  return parsedClient.data;
}

export async function deleteClientService(id: string) {
  const parsedId = idParamSchema.safeParse({ id });
  if (!parsedId.success) {
    throw new Error('Invalid client ID');
  }
  await deleteClientDB(parsedId.data.id);
}
