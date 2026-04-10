'use client';

import { getClients } from '@/server/clients';
import { formatClientName } from '@/lib/utils';
import ClientCard from '@/components/ClientCard';
import { createClient } from '@/server/clients';

// Página que lista todos los clientes del CRM
// ⚠️ problema intencional: si algún cliente tiene name=null,
// formatClientName lanzará un TypeError en runtime y la página entera fallará
export default function ClientsPage() {
  const clients = getClients();

  const handlerCreateClient = () => {
    const newClient = createClient({
      name: 'Cliente de prueba',
      email: '',
      phone: '',
      company: '',
      status: 'active',
    });

    console.log('Nuevo cliente creado:', newClient);
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
            // ⚠️ problema intencional: formatClientName puede lanzar error aquí
            // const formattedName = formatClientName(client);

            return (
              <ClientCard
                key={client.id} // ⚠️ problema intencional: id puede ser un float (Math.random)
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
          {/* ⚠️ problema intencional: createClient no tiene validación, puede crear clientes con datos inválidos */}
          Crear cliente de prueba
        </button>
      </div>
    </main>
  );
}
