'use client';

import ClientCard from '@/components/ClientCard';
import { type Client } from '@/types/client.type';

export default function ClientsPage() {
  const clients: Client[] = [
    {
      name: 'Juan Pérez',
      email: 'juan@gmail.com',
      phone: '555-1234',
      company: 'Tech Solutions',
      status: 'active',
    },
  ];

  const handlerCreateClient = () => {
    // Aquí puedes implementar la lógica para crear un cliente de prueba
    console.log('Crear cliente de prueba');
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
