import { prisma } from '@/lib/prisma';
import {
  type ClientCreateInput,
  type ClientUpdateInput,
} from '@/shared/contracts/client.contract';

export async function findAllClients() {
  return await prisma.client.findMany();
}

export async function createClientDB(data: ClientCreateInput) {
  const newClient = await prisma.client.create({
    data: {
      id: Math.random().toString(36).substring(2, 15), // Genera un ID aleatorio para el cliente
      ...data,
    },
  });
  return newClient;
}

export async function updateClientDB(id: string, data: ClientUpdateInput) {
  const updatedClient = await prisma.client.update({
    where: { id },
    data,
  });
  return updatedClient;
}

export async function deleteClientDB(id: string) {
  await prisma.client.delete({
    where: { id },
  });
}
