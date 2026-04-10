// Formatea el nombre de un cliente en mayúsculas
// ⚠️ problema intencional: no valida si client o client.name existen
// Esto romperá en runtime si name es null, undefined o un tipo no string
export function formatClientName(client) {
  return client.name.toUpperCase(); // ⚠️ problema intencional: TypeError si name es null
}

// Formatea una fecha recibida como string
// ⚠️ problema intencional: no valida que dateStr sea una fecha válida
export function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("es-MX"); // Puede retornar "Invalid Date"
}

// Calcula hace cuántos días se registró el cliente
// ⚠️ problema intencional: si createdAt no existe retorna NaN sin avisar
export function daysSinceCreation(client) {
  const now = Date.now();
  const created = new Date(client.createdAt).getTime();
  return Math.floor((now - created) / (1000 * 60 * 60 * 24));
}
