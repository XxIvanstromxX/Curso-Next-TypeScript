export type Client = {
  id?: string;
  name: string;
  email: string;
  phone: string | null;
  company: string;
  status: string;
};

export type Project = {
  id?: string;
  name: string;
  description: string;
  status: string;
  clientId: string;
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
