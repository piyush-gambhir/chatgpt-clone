import React from "react";

type Props = {};
import OpenAIIconLogo from "@/components/ui/openai-icon-logo";
import CustomIcon from "@/components/ui/custom-icons";
export default function NewChatButton({}: Props) {
  return (
    <button className="w-full rounded-lg text-[#ECECF1] hover:bg-[#202123] flex flex-row items-center justify-between group h-10 px-2">
      <div className="flex flex-row gap-2 items-center">
        <div className="items-center h-7 w-7 flex-shrink-0 dark:bg-white rounded-full text-black ">
          <div className="p-1 relative flex h-full items-center justify-center rounded-full bg-white text-black">
            <OpenAIIconLogo className="h-[1rem] w-[1rem]" />
          </div>
        </div>
        <div className="grow overflow-hidden text-ellipsis whitespace-nowrap text-sm text-token-text-primary font-semibold">
          New chat
        </div>
      </div>
      <div className="items-center">
        <CustomIcon
          iconName="NewChat"
          className="stroke-[1.5] h-[18px] w-[18px] text-token-text-secondary"
        />
      </div>
    </button>
  );
}
