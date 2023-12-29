import { redirect } from "next/navigation";

import getUser from "@lib/utils/get-user";

import ChatHeader from "@components/chat-header";
import OpenAIIconLogo from "@components/ui/openai-icon-logo";
import ChatInputBox from "@components/chat-input-box";
import ActionButton from "@components/ui/action-button";

export default async function Page() {
  const user = await getUser();
  if (!user) {
    redirect("/auth/login");
  }
  return (
    <main className="relative w-full h-full flex flex-col justify-between">
      <ChatHeader />
      <div className="h-full w-full items-center justify-center flex flex-col">
        <div className="dark:bg-white rounded-full p-3 text-black mb-3">
          <OpenAIIconLogo className="w-12 h-12" />
        </div>
        <div className="mb-5 text-2xl font-medium">
          How can I help you today?
        </div>
      </div>
      <div className="md:mx-4 lg:mx-auto lg:max-w-2xl xl:max-w-3xl w-full flex flex-col items-center">
        <div className="w-full grid md:grid-flow-row grid-cols-1 md:grid-cols-2  gap-2 mb-4 px-1 pb-1 sm:px-2 sm:pb-0">
          <ActionButton
            title="Give me ideas"
            description="about how to plan my New Year's resolutions"
          />
          <ActionButton
            title="Help me pick"
            description="a gift for my dad who loves fishing"
          />
          <ActionButton
            title="Tell me a fun fact"
            description="about the Roman Empire"
          />
          <ActionButton
            title="Write a text"
            description="inviting my neighbors to a barbecue"
          />
        </div>
        <div className="w-full">
          <ChatInputBox />
        </div>
        <div className="px-2 py-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px]">
          ChatGPT can make mistakes. Consider checking important information.
        </div>
      </div>
    </main>
  );
}
