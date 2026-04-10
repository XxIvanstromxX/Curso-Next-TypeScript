import { clients } from "./db";

// Retorna todos los clientes de la base de datos en memoria
export function getClients() {
  return clients;
}

// Busca un cliente por id
// ⚠️ problema intencional: si id no existe retorna undefined sin avisar
export function getClientById(id) {
  return clients.find((c) => c.id === id);
}

// Crea un nuevo cliente y lo agrega al array
// ⚠️ problema intencional: sin validación de ningún campo
// ⚠️ problema intencional: Math.random() como id puede colisionar y no es un entero
export function createClient(client) {
  const newClient = {
    id: Math.random(), // ⚠️ problema intencional: id no determinista y no entero
    ...client,
  };

  clients.push(newClient);
  return newClient;
}
