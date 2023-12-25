import { getServerSession } from "next-auth";
import { prisma } from "@lib/prisma-client";

export default async function getUser() {
  "use server";
  const session = await getServerSession();
  if (!session) return null;
  const user = await prisma.user.findUnique({
    select: {
      email: true,
      name: true,
      avatar: true,
      conversations: true,
    },
    where: {
      email: session.user.email,
    },
  });
  return user;
}
