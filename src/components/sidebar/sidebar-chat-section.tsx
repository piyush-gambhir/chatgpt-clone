import SidebarChatButton from "@components/sidebar/sidebar-chat-button";

import getUser from "@lib/utils/get-user";

export default async function SidebarChatSection() {
  const user = await getUser();
  const conversations = user.conversations;
  return (
    <div className="">
      <h3 className="h-9 pb-2 pt-3 px-2 text-xs font-medium text-ellipsis overflow-hidden break-all text-[#666666]">
        Today
      </h3>
      <ol className="flex flex-col">
        {conversations.map((conversation) => (
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
