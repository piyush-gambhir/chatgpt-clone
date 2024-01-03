import { getUserConversations } from "@/data/user-conversations";

import SidebarChatButton from "@/components/sidebar/sidebar-chat-button";

export default async function SidebarChatSection() {
  const conversations = await getUserConversations();
  return (
    <div className="">
      <h3 className="h-9 pb-2 pt-3 px-2 text-xs font-medium text-ellipsis overflow-hidden break-all text-[#666666]">
        Today
      </h3>
      <ol className="flex flex-col">
        {conversations?.map((conversation) => (
          <li key={conversation.id}>
            <SidebarChatButton
              id={conversation.id}
              title={conversation.title}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
