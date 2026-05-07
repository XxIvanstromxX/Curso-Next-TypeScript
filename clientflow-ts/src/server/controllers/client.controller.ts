import { NextResponse } from 'next/server';
import {
  getClientsService,
  createClientService,
  updateClientService,
  deleteClientService,
} from '../services/client.service';

async function nextResponseSuccess<T>(
  data: T,
  message: string,
  status: number,
) {
  return NextResponse.json({ message, data }, { status });
}

async function nextResponseError<T>(error: T, message: string, status: number) {
  return NextResponse.json(
    {
      message,
      error: error instanceof Error ? error.message : 'Unknown error',
    },
    { status },
  );
}

export async function getClients() {
  try {
    const clients = await getClientsService();

    return nextResponseSuccess(clients, 'Clients retrieved successfully', 200);
  } catch (error) {
    return nextResponseError(error, 'Failed to retrieve clients', 500);
  }
}

export async function createClient(req: Request) {
  try {
    const body = await req.json();

    const newClient = await createClientService(body);

    return nextResponseSuccess(newClient, 'Client created successfully', 201);
  } catch (e) {
    return nextResponseError(e, 'Failed to create client', 500);
  }
}

export async function updateClient(req: Request) {
  try {
    const body = await req.json();
    const { id, ...data } = body;

    const updatedClient = await updateClientService(id, data);

    return nextResponseSuccess(
      updatedClient,
      'Client updated successfully',
      200,
    );
  } catch (e) {
    return nextResponseError(e, 'Failed to update client', 500);
  }
}

export async function deleteClient(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;

    await deleteClientService(id);

    return nextResponseSuccess(null, 'Client deleted successfully', 200);
  } catch (e) {
    return nextResponseError(e, 'Failed to delete client', 500);
  }
}
