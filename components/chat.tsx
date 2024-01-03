import ChatMessage from "@/components/chat-message";

import getUser from "@/utils/get-user";
import { prisma } from "@/lib/db";

type Props = {
  conversationId: string;
};

export default async function Chat({ conversationId }: Props) {
  const user = await getUser();
  const conversation = await prisma.query.findMany({
    where: { conversationId: conversationId },
    orderBy: { updatedAt: "asc" },
  });

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden chat-scrollbar ">
      {conversation.map((query) => (
        <div key={query.id}>
          <ChatMessage isUser={query.isUser} data={query.data} />
        </div>
      ))}
    </div>
  );
}
