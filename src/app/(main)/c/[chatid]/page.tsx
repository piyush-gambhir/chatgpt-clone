import { redirect } from "next/navigation";
import getUser from "@/lib/utils/getUser";

import ChatHeader from "@/components/chat/chat-header";
import Chat from "@/components/chat/chat";
import ChatInputBox from "@/components/chat/chat-input-box";

export default async function Page({ params }: { params: { chatid: string } }) {
  const chatId = params.chatid;

  const user = await getUser();
  if (!user) {
    redirect("/auth/login");
  }

  return (
    <main className="h-full w-full flex flex-col overflow-hidden">
      <ChatHeader />
      <Chat />
      <div className="bg-[#343541] lg:mx-auto lg:max-w-2xl xl:max-w-3xl w-full flex flex-col items-center">
        <ChatInputBox />
        <div className="px-2 py-2 text-center text-xs text-[#c5c5d2] dark:text-gray-300 md:px-[60px]">
          ChatGPT can make mistakes. Consider checking important information.
        </div>
      </div>
    </main>
  );
}
