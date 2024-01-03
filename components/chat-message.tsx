import Image from "next/image";

import { currentUser } from "@/lib/auth";

type Props = {
  isUser: boolean;
  data: string;
};

export default async function ChatMessage({ isUser, data }: Props) {
  const chatGPT = {
    name: "ChatGPT",
    avatar: "/images/avatars/chatgpt-avatar.jpg",
  };
  const user = await currentUser();
  return (
    <div className="px-4 py-2 text-base md:gap-6 mx-auto">
      <div className="flex flex-row text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] } group">
        <Image
          src={isUser ? user?.image : chatGPT.avatar}
          alt="avatar"
          className="rounded-full h-6 w-6"
          width={24}
          height={24}
        />
        <div className="w-full flex flex-col gap-2">
          <div className="font-semibold">
            {isUser ? user?.name : chatGPT.name}
          </div>
          <div className="flex-col gap-1 md:gap-3">
            <div>{data}</div>
            <div className="mt-1 flex justify-start gap-3 empty:hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
