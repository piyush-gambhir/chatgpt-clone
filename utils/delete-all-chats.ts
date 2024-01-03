"use server";
import { prisma } from "@/lib/db";

export default async function createNewConversation() {
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
