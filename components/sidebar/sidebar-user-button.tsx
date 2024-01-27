"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

import CustomIcon from "@/components/ui/custom-icons";
import SettingsModal from "@/components/modals/settings-modal";

import { useClickOutside } from "@/hooks/use-click-outside";
import { useCurrentUser } from "@/hooks/use-current-user";

import { logout } from "@/actions/logout";

type Props = {};

export default function SidebarUserButton({}: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  useEffect(() => {
    const currentURL = window.location.href;
    if (currentURL.includes("#settings")) {
      setIsSettingsModalOpen(true);
    }
  }, []);

  const dropdownRef = useRef(null);
  useClickOutside({
    ref: dropdownRef,
    handler: () => setIsDropdownOpen(false),
  });

  const router = useRouter();
  const pathname = usePathname();

  const user = useCurrentUser();

  return (
    <div className="relative ">
      {isSettingsModalOpen && (
        <SettingsModal
          onClose={() => {
            router.push(pathname);
            setIsSettingsModalOpen(false);
          }}
        />
      )}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-[-310%] flex flex-col w-full pt-1 pb-1.5 bg-[#202123] rounded-lg border border-[#40414f] shadow-md text-sm font-medium"
        >
          <div className="flex flex-col border-b border-white/20 ">
            <button className="flex flex-row gap-3 items-center  min-h-[44px] px-3 py-1 hover:bg-[#343541] transition-colors">
              <CustomIcon iconName="CustomIntructions" className="w-4 h-4" />
              <div className="">Custom instructions</div>
            </button>
            <button
              onClick={() => {
                setIsDropdownOpen(false);
                setIsSettingsModalOpen(true);
                router.push(`${pathname}#settings`);
              }}
              className="flex flex-row gap-3 items-center min-h-[44px] px-3 py-1 hover:bg-[#343541] transition-colors"
            >
              <CustomIcon iconName="Settings" className="w-4 h-4" />
              <div className="">Settings</div>
            </button>
          </div>
          <button
            onClick={() => logout()}
            className="flex flex-row gap-3 items-center  min-h-[44px] px-3 py-1 hover:bg-[#343541] transition-colors"
          >
            <CustomIcon iconName="Logout" className="w-4 h-4" />
            <div className="">Logout</div>
          </button>
        </div>
      )}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex flex-row w-full items-center gap-2 rounded-lg p-2 text-sm hover:bg-[#202123] "
      >
        <div className="flex items-center justify-center overflow-hidden rounded-full">
          <Image
            src={user?.image || "/images/default-user-image.webp"}
            alt="avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
        <div className="font-semibold">{user?.name!}</div>
      </button>
    </div>
  );
}
