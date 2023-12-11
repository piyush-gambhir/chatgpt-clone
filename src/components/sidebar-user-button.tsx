"use client";
import { useState } from "react";
import Image from "next/image";
import CustomIcon from "./custom-icons";

import { signOut } from "next-auth/react";
type Props = {
  userName: string;
  userAvatar: string;
};

export default function SidebarUserButton({ userName, userAvatar }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative ">
      {isDropdownOpen && (
        <div className="absolute top-[-310%] flex flex-col w-full pt-1 pb-1.5 bg-white dark:bg-[#202123] rounded-lg border dark:border-[#40414f] shadow-md text-sm font-semibold">
          <div className="flex flex-col border-b border-white/10 dark:border-black/20 ">
            <div className="flex flex-row gap-3 items-center  min-h-[44px] px-3 py-1 dark:hover:bg-[#343541] transition-colors">
              <CustomIcon iconName="CustomIntructions" className="w-4 h-4" />
              <div className="">Custom intrusctions</div>
            </div>
            <div className="flex flex-row gap-3 items-center min-h-[44px] px-3 py-1 dark:hover:bg-[#343541] transition-colors">
              <CustomIcon iconName="Settings" className="w-4 h-4" />
              <div className="">Settings</div>
            </div>
          </div>
          <button
            onClick={() => signOut()}
            className="flex flex-row gap-3 items-center  min-h-[44px] px-3 py-1 dark:hover:bg-[#343541] transition-colors"
          >
            <CustomIcon iconName="Logout" className="w-4 h-4" />
            <div className="">Logout</div>
          </button>
        </div>
      )}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex flex-row w-full items-center gap-2 rounded-lg p-2 text-sm dark:text-[#ECECF1] dark:hover:bg-[#202123] "
      >
        <div className="flex items-center justify-center overflow-hidden rounded-full">
          <Image
            src={userAvatar}
            alt="avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
        <div className="font-semibold">{userName}</div>
      </button>
    </div>
  );
}
