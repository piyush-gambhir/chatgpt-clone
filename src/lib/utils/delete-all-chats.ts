"use server";
import { prisma } from "@lib/prisma-client";
import getUser from "@lib/utils/get-user";

export default async function createNewConversation() {
  const user = await getUser();
  try {
    await prisma.conversation.deleteMany({
      where: {
        userId: user.id,
      },
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
