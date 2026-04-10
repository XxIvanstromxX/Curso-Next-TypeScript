import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900">
          ClientFlow
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Mini CRM para gestión de clientes
        </p>
        <p className="mt-2 text-sm text-amber-600 font-medium">
          ⚠️ Proyecto de demostración — contiene errores intencionales de JavaScript
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/clients"
            className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-700"
          >
            Ver clientes
          </Link>
        </div>
      </div>
    </main>
  );
}
