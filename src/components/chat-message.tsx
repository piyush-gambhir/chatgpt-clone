import Image from "next/image";
import Typewriter from 'typewriter-effect';

import getUser from "@lib/utils/get-user";

type Props = {
  isUser: boolean;
  data: string;
};

export default async function ChatMessage({ isUser, data }: Props) {
  const user = await getUser();
  const chatGPT = {
    name: "ChatGPT",
    avatar: "/images/avatars/chatgpt-avatar.jpg",
  };
  return (
    <div className="px-4 py-2 justify-center text-base md:gap-6 m-auto">
      <div className="flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] } group">
        <div className="h-6 w-6 items-center justify-center overflow-hidden rounded-full">
          <Image
            src={isUser ? user.avatar : chatGPT.avatar}
            alt="avatar"
            className="rounded-full"
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-semibold">
            {isUser ? user.name : chatGPT.name}
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
