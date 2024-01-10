"use server";
import { db } from "@/lib/db";

export const createConversationMessage = async (
  conversationId: string,
  data: string,
  isUser: boolean
) => {
  try {
    const message = await db.message.create({
      data: {
        conversationId: conversationId,
        data: data,
        isUser: isUser,
      },
    });
    return message;
  } catch {
    return null;
  }
};

export const getConversationMessages = async (conversationId: string) => {
  try {
    const conversationMessages = await db.message.findMany({
      where: { conversationId: conversationId },
      orderBy: { updatedAt: "asc" },
    });
    return conversationMessages;
  } catch {
    return null;
  }
};
