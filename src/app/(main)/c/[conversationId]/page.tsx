import { redirect } from "next/navigation";
import getUser from "@lib/utils/get-user";

import ChatHeader from "@components/chat-header";
import Chat from "@components/chat";
import ChatInputBox from "@components/chat-input-box";

export default async function Page({
  params,
}: {
  params: { conversationId: string };
}) {
  const conversationId = params.conversationId;
  const user = await getUser();
  if (!user) {
    redirect("/auth/login");
  }

  return (
    <main className="h-full w-full flex flex-col overflow-hidden">
      <ChatHeader />
      <Chat conversationId={conversationId} />
      <div className="bg-white dark:bg-[#343541] lg:mx-auto lg:max-w-2xl xl:max-w-3xl w-full flex flex-col items-center">
        <ChatInputBox conversationId={conversationId} />
        <div className="px-2 py-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px]">
          ChatGPT can make mistakes. Consider checking important information.
        </div>
      </div>
    </main>
  );
}
