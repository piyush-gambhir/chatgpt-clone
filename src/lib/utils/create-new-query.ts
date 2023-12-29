"use server";
import { prisma } from "@lib/prisma-client";
import getUser from "@lib/utils/get-user";

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