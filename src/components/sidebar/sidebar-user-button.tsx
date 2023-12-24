"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { signOut } from "next-auth/react";

import CustomIcon from "@components/ui/custom-icons";
import SettingsModal from "@components/modals/settings-modal";

import { useClickOutside } from "@lib/hooks/use-click-outside";

type Props = {
  userName: string;
  userAvatar: string;
};

export default function SidebarUserButton({ userName, userAvatar }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const dropdownRef = useRef(null);
  useClickOutside({
    ref: dropdownRef,
    handler: () => setIsDropdownOpen(false),
  });

  const currentURL = window.location.href;
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (currentURL.includes("#settings")) {
      setIsSettingsModalOpen(true);
    }
  }, [currentURL]);

  const handleSettingsModalClose = () => {
    router.push(pathname);
    setIsSettingsModalOpen(false);
  };

  return (
    <div className="relative ">
      {isSettingsModalOpen && (
        <SettingsModal onClose={handleSettingsModalClose} />
      )}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-[-310%] flex flex-col w-full pt-1 pb-1.5 bg-white dark:bg-[#202123] rounded-lg border dark:border-[#40414f] shadow-md text-sm font-semibold"
        >
          <div className="flex flex-col border-b border-white/10 dark:border-black/20 ">
            <div className="flex flex-row gap-3 items-center  min-h-[44px] px-3 py-1 dark:hover:bg-[#343541] transition-colors">
              <CustomIcon iconName="CustomIntructions" className="w-4 h-4" />
              <div className="">Custom intrusctions</div>
            </div>
            <button
              onClick={() => {
                setIsDropdownOpen(false);
                setIsSettingsModalOpen(true);
                router.push(`${pathname}#settings`);
              }}
              className="flex flex-row gap-3 items-center min-h-[44px] px-3 py-1 dark:hover:bg-[#343541] transition-colors"
            >
              <CustomIcon iconName="Settings" className="w-4 h-4" />
              <div className="">Settings</div>
            </button>
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
