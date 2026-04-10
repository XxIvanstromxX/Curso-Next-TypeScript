# ClientFlow JS

Mini CRM construido con **Next.js** y **JavaScript** como punto de partida para un curso de migración a TypeScript.

## ⚠️ IMPORTANTE: Este proyecto contiene errores intencionales

Este repositorio está diseñado específicamente para un curso de TypeScript. **No corrijas los errores** — son parte del aprendizaje.

### Errores intencionales incluidos

| Archivo | Error | Efecto en runtime |
|---|---|---|
| `src/server/db.js` | Cliente con `name: null` | Rompe al intentar `.toUpperCase()` |
| `src/server/db.js` | Cliente con `name: 42` (número) | Tipo incorrecto, comportamiento inesperado |
| `src/server/db.js` | Cliente sin campo `name` | `undefined` no manejado |
| `src/server/clients.js` | `Math.random()` como ID | IDs no enteros, posibles colisiones |
| `src/server/clients.js` | Sin validación en `createClient` | Acepta cualquier dato |
| `src/lib/utils.js` | `client.name.toUpperCase()` sin validar | `TypeError` si name es null |
| `src/lib/utils.js` | `new Date(dateStr)` sin validar | Puede retornar `Invalid Date` |
| `src/components/ClientCard.js` | Props sin validación | Renderiza null/undefined silenciosamente |

### ¿Por qué existen estos errores?

JavaScript permite estas situaciones sin advertencias en tiempo de desarrollo. Son exactamente el tipo de bugs que aparecen en producción en proyectos reales y que **TypeScript previene** con su sistema de tipos.

---

## Objetivo del curso

Este proyecto será migrado a **TypeScript** paso a paso durante las clases, demostrando cómo el tipado estático:

1. Detecta errores **antes** de ejecutar el código
2. Obliga a validar datos en los límites del sistema
3. Hace el código más predecible y mantenible
4. Mejora la experiencia de desarrollo con autocompletado e inferencia

---

## Estructura del proyecto

```
/src
  /app
    page.js               → Página principal (home)
    /clients
      page.js             → Lista de clientes (aquí explota el error)
  /server
    db.js                 → Mock de base de datos en memoria
    clients.js            → Funciones CRUD de clientes
  /lib
    utils.js              → Funciones utilitarias (con errores)
  /components
    ClientCard.js         → Componente de tarjeta de cliente
```

---

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) y navega a `/clients` para ver el error en acción.

---

## Flujo del error principal

1. `/clients` llama a `getClients()` → retorna array con cliente `name: null`
2. Por cada cliente se llama `formatClientName(client)`
3. `formatClientName` ejecuta `client.name.toUpperCase()`
4. JavaScript lanza: `TypeError: Cannot read properties of null (reading 'toUpperCase')`
5. La página entera falla

Este es un error clásico de JavaScript en producción. TypeScript lo hubiera detectado en el paso 1.
