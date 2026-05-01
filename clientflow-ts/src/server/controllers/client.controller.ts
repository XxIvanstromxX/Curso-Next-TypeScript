import { NextResponse } from 'next/server';
import {
  createClientSchema,
  idParamSchema,
  showClient,
  updateClientSchema,
} from '@/server/schemas';
import { prisma } from '@/lib/prisma';

export async function getClients() {
  try {
    const clients = await prisma.client.findMany();
    const parsedClients = clients.map((client) => showClient.parse(client));

    return NextResponse.json(parsedClients, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}

export async function createClient(req: Request) {
  try {
    const body = await req.json();
    const parsedData = createClientSchema.safeParse(body);

    if (!parsedData.success) {
      return NextResponse.json(
        { message: 'Validation failed', errors: parsedData.error.issues },
        { status: 400 },
      );
    }

    await prisma.client.create({
      data: {
        id: Math.random().toString(36).substring(2, 15), // Genera un ID aleatorio para el cliente
        ...parsedData.data,
      },
    });

    return NextResponse.json(
      { message: 'Client created successfully', data: parsedData.data },
      { status: 201 },
    );
  } catch (e) {
    return NextResponse.json(
      {
        message: 'Internal server error',
        error: e instanceof Error ? e.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}

export async function updateClient(req: Request) {
  try {
    const body = await req.json();
    const parsedId = idParamSchema.safeParse(body);
    const parsedData = updateClientSchema.safeParse(body);

    if (!parsedId.success) {
      return NextResponse.json(
        { message: 'Validation failed', errors: parsedId.error.issues },
        { status: 400 },
      );
    }

    if (!parsedData.success) {
      return NextResponse.json(
        { message: 'Validation failed', errors: parsedData.error.issues },
        { status: 400 },
      );
    }

    await prisma.client.update({
      where: { id: parsedId.data.id },
      data: {
        ...parsedData.data,
      },
    });

    return NextResponse.json(
      { message: 'Client updated successfully', data: parsedData },
      { status: 200 },
    );
  } catch (e) {
    return NextResponse.json(
      {
        message: 'Internal server error',
        error: e instanceof Error ? e.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}

export async function deleteClient(req: Request) {
  try {
    const body = await req.json();
    const parsedId = idParamSchema.safeParse(body);
    if (!parsedId.success) {
      return NextResponse.json(
        { message: 'Validation failed', errors: parsedId.error.issues },
        { status: 400 },
      );
    }

    await prisma.client.delete({
      where: { id: parsedId.data.id },
    });

    return NextResponse.json(
      { message: 'Client deleted successfully' },
      { status: 200 },
    );
  } catch (e) {
    return NextResponse.json(
      {
        message: 'Internal server error',
        error: e instanceof Error ? e.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
