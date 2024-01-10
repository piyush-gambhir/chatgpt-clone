"use server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

export const createUserConversation = async (conversationTitle: string) => {
  const user = await currentUser();

  const conversation = await db.conversation.create({
    data: {
      title: conversationTitle,
      userId: user?.id,
    },
  });
  return conversation;
};

export const getUserConversations = async () => {
  const user = await currentUser();
  try {
    const conversations = await db.conversation.findMany({
      where: {
        userId: user?.id,
      },
    });
    return conversations;
  } catch {
    return null;
  }
};

export async function deleteUserConversations() {
  try {
    const user = await currentUser();
    await db.conversation.deleteMany({
      where: {
        userId: user?.id,
      },
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
