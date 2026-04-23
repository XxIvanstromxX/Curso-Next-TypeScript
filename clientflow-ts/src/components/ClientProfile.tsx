import { prisma } from '../lib/prisma';

export const ClientProfile = async () => {
  const client = await prisma.client.findFirst({
    include: {
      projects: true,
    },
  });
  console.log(client);
};
