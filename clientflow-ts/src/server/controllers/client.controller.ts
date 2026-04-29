import { NextResponse } from 'next/server';
import {
  createClientSchema,
  idParamSchema,
  showClient,
  updateClientSchema,
  type CreateClientData,
} from '@/server/schemas';
import * as z from 'zod';
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
    const parsedData: CreateClientData = createClientSchema.parse(body);
    console.log(parsedData);

    await prisma.client.create({
      data: {
        id: Math.random().toString(36).substring(2, 15), // Genera un ID aleatorio para el cliente
        status: 'active', // Puedes ajustar esto según tus necesidades
        ...parsedData,
      },
    });

    return NextResponse.json(
      { message: 'Client created successfully', data: parsedData },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Validation failed', errors: error.issues },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}

export async function updateClient(req: Request) {
  try {
    const body = await req.json();
    const parsedId = idParamSchema.parse(body);
    const parsedData = updateClientSchema.parse(body);

    await prisma.client.update({
      where: { id: parsedId.id },
      data: {
        ...parsedData,
      },
    });

    return NextResponse.json(
      { message: 'Client updated successfully', data: parsedData },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Validation failed', errors: error.issues },
        { status: 400 },
      );
    }
    return NextResponse.json(
      {
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}

export async function deleteClient(req: Request) {
  try {
    const body = await req.json();
    const parsedId = idParamSchema.parse(body);

    await prisma.client.delete({
      where: { id: parsedId.id },
    });

    return NextResponse.json(
      { message: 'Client deleted successfully' },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Validation failed', errors: error.issues },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
