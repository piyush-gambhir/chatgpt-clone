import ChatMessage from "@/components/chat/chat-message";

import { getConversationQueries } from "@/data/conversation-queries";

type Props = {
  conversationId: string;
};

export default async function Chat({ conversationId }: Props) {
  const conversationQueries = await getConversationQueries(conversationId);
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden chat-scrollbar ">
      {conversationQueries?.map((query) => (
        <div key={query.id}>
          <ChatMessage isUser={query.isUser} data={query.data} />
        </div>
      ))}
    </div>
  );
}
