import Chatting from "@/components/chat/chat";
export default function Page({
  params,
}: {
  params: { conversationId: string };
}) {
  const conversationId = params.conversationId;

  return <Chatting conversationId={conversationId} />;
}
