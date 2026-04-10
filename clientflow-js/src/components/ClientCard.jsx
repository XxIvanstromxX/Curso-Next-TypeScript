// Componente que muestra la información básica de un cliente
// ⚠️ problema intencional: no valida las props, asume que name y email siempre existen
export default function ClientCard({ client, formattedName }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          {/* ⚠️ problema intencional: formattedName puede fallar antes de llegar aquí */}
          <h2 className="text-lg font-semibold text-gray-900">{formattedName}</h2>
          <p className="text-sm text-gray-500">{client.company}</p>
        </div>
        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${
            client.status === "active"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {/* ⚠️ problema intencional: si status no existe, no muestra nada */}
          {client.status}
        </span>
      </div>

      <div className="mt-3 space-y-1 text-sm text-gray-600">
        <p>
          <span className="font-medium">Email:</span> {client.email}
        </p>
        <p>
          <span className="font-medium">Teléfono:</span>{" "}
          {/* ⚠️ problema intencional: phone puede ser null, se renderiza sin verificar */}
          {client.phone}
        </p>
        <p>
          <span className="font-medium">ID:</span> {client.id}
        </p>
      </div>
    </div>
  );
}
