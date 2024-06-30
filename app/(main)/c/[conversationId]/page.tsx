import React from "react";

import Chat from "@/components/chat/chat";

import { getConversationMessages } from "@/data/conversation-messages";

export default async function Page({
  params,
}: {
  params: { conversationId: string };
}) {
  const conversationId = params.conversationId;

  const conversationMessages = await getConversationMessages(conversationId);

  return (
    <Chat
      conversationId={conversationId}
      conversationMessages={conversationMessages}
    />
  );
}
