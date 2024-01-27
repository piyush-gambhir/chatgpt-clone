"use server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

export const getSharedLinks = async () => {
  try {
    const user = await currentUser();
    const sharedLinks = await db.sharedConversation.findMany({
      orderBy: { updatedAt: "asc" },
      where: {
        userId: user?.id,
      },
    });
    return sharedLinks;
  } catch {
    return null;
  }
};
