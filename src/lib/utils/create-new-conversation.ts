"use server";
import { prisma } from "@lib/prisma-client";
import getUser from "@lib/utils/get-user";

export default async function createNewConversation() {
  const user = await getUser();
  const conversation = await prisma.conversation.create({
    data: {
      title: "New Conversation",
      userId: user.id,
    },
  });
  return conversation;
}
