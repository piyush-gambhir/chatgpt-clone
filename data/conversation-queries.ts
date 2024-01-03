"use server";
import { db } from "@/lib/db";

export const createConversationQuery = async (
  conversationId: string,
  data: string,
  isUser: boolean
) => {
  try {
    await db.query.create({
      data: {
        conversationId: conversationId,
        data: data,
        isUser: isUser,
      },
    });
  } catch {
    return null;
  }
};

export const getConversationQueries = async (conversationId: string) => {
  try {
    const conversationQueries = await db.query.findMany({
      where: { conversationId: conversationId },
      orderBy: { updatedAt: "asc" },
    });
    return conversationQueries;
  } catch {
    return null;
  }
};
