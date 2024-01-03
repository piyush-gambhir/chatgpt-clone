"use server";
import { prisma } from "@/lib/db";

export default async function createNewConversation() {
  const conversation = await prisma.conversation.create({
    data: {
      title: "New Conversation",
      userId: user.id,
    },
  });
  return conversation;
}
