// Simulación de base de datos en memoria
// ⚠️ problema intencional: sin esquema definido, los datos pueden tener cualquier forma

const clients = [
  {
    id: 1,
    name: 'Ana García',
    email: 'ana@empresa.com',
    phone: '555-1234',
    company: 'Tech Solutions',
    status: 'active',
  },
  {
    id: 2,
    name: 'Carlos López',
    email: 'carlos@corp.mx',
    phone: '555-5678',
    company: 'Innovatech',
    status: 'inactive',
  },
  {
    id: 3,
    name: 'Holanda', // ⚠️ problema intencional: name es null, romperá en runtime
    email: 'desconocido@mail.com',
    phone: null,
    company: 'Sin empresa',
    status: 'active',
  },
  // {
  //   id: 4,
  //   name: 42, // ⚠️ problema intencional: name es un número, no un string
  //   email: 'numero@test.com',
  //   phone: '555-9999',
  //   company: 'Números S.A.',
  //   status: 'active',
  // },
  // {
  //   id: 5,
  //   // ⚠️ problema intencional: name no existe en este objeto
  //   email: 'sincampo@mail.com',
  //   company: 'Campo Faltante',
  //   status: 'pending',
  // },
];

export { clients };
