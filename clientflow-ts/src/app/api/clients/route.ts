import { NextResponse } from 'next/server';
import {
  createClientSchema,
  idParamSchema,
  type CreateClientData,
} from '@/server/schemas';
import * as z from 'zod';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsedData: CreateClientData = createClientSchema.parse(body);
    console.log(parsedData);

    await prisma.client.create({
      data: {
        id: Math.random().toString(36).substring(2, 15), // Genera un ID aleatorio para el cliente
        status: 'active', // Puedes ajustar esto según tus necesidades
        phone: parsedData.phone || '', // Asegura que phone tenga un valor, incluso si es opcional
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

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const parsedId = idParamSchema.parse(body);
    const parsedData = createClientSchema.partial(body);
    console.log(parsedData);

    // Aquí podrías agregar la lógica para guardar el cliente en la base de datos
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

// Aquí podrías agregar más métodos HTTP como GET, DELETE, etc., siguiendo la misma estructura de validación y manejo de errores.
