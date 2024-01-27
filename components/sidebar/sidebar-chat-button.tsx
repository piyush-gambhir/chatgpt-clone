"use client";

import cn from "clsx";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

import { useClickOutside } from "@/hooks/use-click-outside";

import CustomIcon from "@/components/ui/custom-icons";
import DeleteConversationConfirmationModal from "@/components/modals/delete-conversation-confirmation-modal";

type Props = {
  id: string;
  title: string;
  active?: boolean;
};

export default function SidebarChatButton({ id, title, active }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDeleteConversationModalOpen, setIsDeleteConversationModalOpen] =
    useState(false);
  const router = useRouter();

  const dropdownRef = useRef(null);
  useClickOutside({
    ref: dropdownRef,
    handler: () => setIsDropdownOpen(false),
  });

  return (
    <div
      className={cn(
        "group flex flex-row justify-between hover:cursor-pointer rounded-lg p-2 text-[#ECECF1] hover:bg-[#202123]",
        active ? "bg-[#343541]" : ""
      )}
    >
      <div
        onClick={() => {
          router.push(`/c/${id}`);
        }}
        className="w-full flex-1 flex items-center overflow-hidden whitespace-nowrap"
      >
        {title}
      </div>

      <div
        className={cn(
          "flex-row gap-1 px-1",
          active ? "flex" : "hidden group-hover:flex"
        )}
      >
        <button
          onClick={() => {
            setIsDropdownOpen(true);
          }}
          className="item-center"
        >
          <CustomIcon iconName="HorizontalDots" className="h-4 w-4" />
        </button>
        <button onClick={() => {}} className="item-center">
          <CustomIcon iconName="Archive" className="h-4 w-4" />
        </button>
      </div>

      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="w-full max-w-[200px] shadow absolute left-48 top p-2 flex flex-col gap-1 bg-white dark:bg-[#202123] rounded-lg"
        >
          <button
            onClick={() => {}}
            className="py-2 px-3 font-medium text-black flex flex-row gap-2 items-center rounded-md  hover:bg-[#f2f2f2] transition-colors duration-200"
          >
            <CustomIcon iconName="Share" className="h-4 w-4" />
            Share
          </button>
          <button
            onClick={() => {}}
            className="py-2 px-3 font-medium text-black flex flex-row gap-2 items-center rounded-md  hover:bg-[#f2f2f2] transition-colors duration-200"
          >
            <CustomIcon iconName="Pencil" className="h-4 w-4" />
            Rename
          </button>
          <button
            onClick={() => {
              setIsDeleteConversationModalOpen(true);
              setIsDropdownOpen(false);
            }}
            className="py-2 px-3 font-medium text-red-500 flex flex-row gap-2 items-center rounded-md  hover:bg-[#f2f2f2] transition-colors duration-200"
          >
            <CustomIcon iconName="Bin" className="h-4 w-4" />
            Delete chat
          </button>
        </div>
      )}

      {isDeleteConversationModalOpen && (
        <DeleteConversationConfirmationModal
          conversationId={id}
          conversationTitle={title}
          onClose={() => setIsDeleteConversationModalOpen(false)}
        />
      )}
    </div>
  );
}
