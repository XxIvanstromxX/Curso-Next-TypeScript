'use client';

import ClientCard from '@/components/ClientCard';
import { useState, useEffect } from 'react';
import { type Client } from '@/types/client.type';

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch('/api/clients');
        if (!response.ok) {
          throw new Error('Error al obtener los clientes', {
            cause: response.statusText,
          });
        }
        const data = await response.json();
        setClients(data);
      } catch (error) {
        console.error('Error al obtener los clientes:', error);
      }
    };

    fetchClients();
  }, []);

  const handlerCreateClient = async () => {
    const clientePrueba = {
      name: 'Cliente de prueba',
      email: 'prueba@gmail.com',
      phone: null,
      company: 'Empresa de prueba',
    };

    try {
      const response = await fetch('/api/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientePrueba),
      });

      if (!response.ok) {
        throw new Error('Error al crear el cliente', {
          cause: response.statusText,
        });
      }

      const newClient = await response.json();
      if (newClient) {
        setClients((prevClients) => [...prevClients, newClient]);
      }
      console.log('Cliente creado:', newClient);
    } catch (error) {
      console.error('Error al crear el cliente:', error);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Clientes</h1>
        <p className="mb-8 text-gray-500">
          Lista de todos los clientes registrados en ClientFlow.
        </p>

        <div className="space-y-4">
          {clients.map((client) => {
            return (
              <ClientCard
                key={client.email}
                client={client}
                formattedName={client.name}
              />
            );
          })}
        </div>

        <button
          className="mt-8 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          onClick={() => handlerCreateClient()}
        >
          Crear cliente de prueba
        </button>
      </div>
    </main>
  );
}
