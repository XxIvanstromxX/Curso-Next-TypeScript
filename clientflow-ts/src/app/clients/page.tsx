'use client';

import ClientCard from '@/modules/clients/components/ClientCard';
import ClientForm from '@/modules/clients/components/ClientForm';
import { useClients } from '@/modules/clients/hooks/useClients';

export default function ClientsPage() {
  const { clients, loading, error, createClient } = useClients();

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Clientes</h1>
        <p className="mb-8 text-gray-500">
          Lista de todos los clientes registrados en ClientFlow.
        </p>

        {loading && <p className="text-gray-500">Cargando clientes...</p>}

        {error && <p className="text-red-500">Error: {error}</p>}

        <div className="space-y-4">
          {clients.map((client) => {
            return (
              <ClientCard
                key={client.id}
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
              void createClient(data);
            }}
          />
        </div>
      </div>
    </main>
  );
}
