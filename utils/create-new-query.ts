"use server";
import { prisma } from "@/lib/db";

type Props = {
  conversationId: string;
  data: string;
  isUser: boolean;
};
export default async function createNewConversation({
  conversationId,
  data,
  isUser,
}: Props) {
  try {
    await prisma.query.create({
      data: {
        conversationId: conversationId,
        data: data,
        isUser: isUser,
      },
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
