"use client";
import Link from "next/link";
import cn from "clsx";
import { useState } from "react";

import CustomIcon from "@components/custom-icons";

type Props = {
  name: string;
  link: string;
  active?: boolean;
};

export default function SidebarChatButton({ name, link, active }: Props) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  return (
    <div className="reltive">
      <div
        className={cn(
          "flex flex-row justify-between group hover:cursor-pointer rounded-lg p-2 text-[#ECECF1] hover:bg-[#202123]",
          active ? "bg-[#202123]" : ""
        )}
      >
        {/* <Link href={link} className="flex items-center gap-2"> */}
        <div className="grow overflow-hidden whitespace-nowrap">{name}</div>
        {/* </Link> */}
        {active && (
          <button
            onClick={() => {
              setIsDropDownOpen((prev) => !prev);
            }}
            className="item-center"
          >
            <CustomIcon iconName="HorizontalDots" className="h-4 w-4" />
          </button>
        )}
      </div>
      {isDropDownOpen && (
        <div className="absolute top-10w-[220px] p-1 flex flex-col gap-1 dark:bg-[#202123] rounded-xl border border-[#40414f]">
          <button
            onClick={() => {}}
            className="py-1 px-3 font-medium text-[#D9D9E3] flex flex-row gap-1 items-center rounded-lg hover:bg-[#494a54] hover:bg-opacity-30"
          >
            Share
          </button>
          <button
            onClick={() => {}}
            className="py-1 px-3 font-medium text-[#D9D9E3] flex flex-row gap-1 items-center rounded-lg hover:bg-[#494a54] hover:bg-opacity-30"
          >
            Rename
          </button>
          <button className="py-1 px-3 font-medium text-[#D9D9E3] flex flex-row gap-1 items-center rounded-lg hover:bg-[#494a54] hover:bg-opacity-30">
            Delete chat
          </button>
        </div>
      )}
    </div>
  );
}
