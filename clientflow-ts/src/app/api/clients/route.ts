import {
  getClients,
  createClient,
  updateClient,
  deleteClient,
} from '@/server/controllers/client.controller';

export async function GET() {
  return await getClients();
}

export async function POST(req: Request) {
  return await createClient(req);
}

export async function PUT(req: Request) {
  return await updateClient(req);
}

export async function DELETE(req: Request) {
  return await deleteClient(req);
}
