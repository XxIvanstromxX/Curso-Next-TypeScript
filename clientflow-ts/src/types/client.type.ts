export type Client = {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  company: string;
  status: string;
};

export type Project = {
  id?: number;
  name: string;
  description: string;
  status: string;
  clientId: number;
};

// type ClientFormData = {
//   name: string;
//   email: string;
//   phone: string | null;
//   company: string;
//   status: string;
// };

// interface ClientFormData {
//   name: string;
//   email: string;
//   phone: string | null;
//   company: string;
//   status: string;
// }
