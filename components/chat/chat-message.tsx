"use client";
import Image from "next/image";
import { useState } from "react";
import cn from "clsx";

import TypewriterEffect from "@/components/chat/typewriter-effect";
import CustomIcon from "@/components/ui/custom-icons";

import { useCurrentUser } from "@/hooks/use-current-user";
import useClipboard from "@/hooks/use-clipboard";

type Props = {
  isUser: boolean;
  data: string;
  error?: boolean;
};

export default function ChatMessage({ isUser, data, error = false }: Props) {
  const chatGPT = {
    name: "ChatGPT",
    avatar: "/images/avatars/chatgpt-avatar.jpg",
  };
  const user = useCurrentUser();
  const [isClipboardCopied, setIsClipboardCopied] = useState(false);
  const { value, copy } = useClipboard();

  return (
    <div className=" px-4 py-2 text-base md:gap-6 mx-auto">
      <div className="group flex flex-row text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] } group">
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
            {error ? (
              <div className="inline-block bg-red-200 bg-opacity-40 border-2 border-red-500 p-2 rounded-md">
                An error occured. If the issue persists please contact us
                through our help center at help.openai.com.
              </div>
            ) : (
              <div>{data}</div>
            )}
          </div>
          <div className="flex flex-row min-h-4">
            {!isUser ? (
              <div>
                {isClipboardCopied ? (
                  <CustomIcon iconName="Tick" className="w-4 h-4" />
                ) : (
                  <button
                    onClick={() => {
                      copy(data);
                      setIsClipboardCopied(true);
                      setTimeout(() => setIsClipboardCopied(false), 2000);
                    }}
                  >
                    <CustomIcon
                      iconName="Clipboard"
                      className="hidden group-hover:block text-[#acacbe] hover:text-black w-4 h-4"
                    />
                  </button>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
