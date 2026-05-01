'use client';

import ClientCard from '@/components/ClientCard';
import { type Client } from '@/types/client.type';
import { useState, useEffect } from 'react';
import ClientForm from '@/components/ClientForm';
import { type CreateClientData } from '@/server/schemas';

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch('/api/clients');
        const data = await response.json();
        console.log('Fetched clients:', data);
        setClients(data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchClients();
  }, []);

  const handlerCreateClient = async (data: CreateClientData) => {
    try {
      const response = await fetch('/api/clients', {
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
      console.log('Created client:', newClient.data);
      setClients((prevClients) => [...prevClients, newClient.data]);
      console.log('Updated clients list:', [...clients, newClient.data]);
    } catch (error) {
      console.error('Error creating client:', error);
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

        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Crear nuevo cliente
          </h2>
          <ClientForm
            onSubmit={(data) => {
              handlerCreateClient(data);
            }}
          />
        </div>
      </div>
    </main>
  );
}
