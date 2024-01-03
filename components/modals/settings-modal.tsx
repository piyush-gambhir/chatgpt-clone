"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import cn from "clsx";
import { useTheme } from "next-themes";

import Modal from "@/components/modals/modal";
import ExportDataModal from "@/components/modals/export-data-modal";
import SharedLinksModal from "@/components/modals/shared-links-modal";
import CustomIcon from "@/components/ui/custom-icons";
import Button from "@/components/sidebar/settings-modal-button";

import { useMounted } from "@/hooks/use-mounted";
import { useClickOutside } from "@/hooks/use-click-outside";
import { deleteUserConversations } from "@/data/user-conversations";
import { on } from "events";

type Props = {
  onClose: () => void;
};

export default function SettingsModal({ onClose }: Props) {
  const userTheme = "Light";
  const themeOptions = ["System", "Dark", "Light"];
  const { theme, setTheme } = useTheme();
  const [currentTab, setCurrentTab] = useState("general");
  const [currentTheme, setCurrentTheme] = useState(userTheme);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const [isChatHistoryEnabled, setIsChatHistoryEnabled] = useState(true);
  const [showSettingsModal, setShowSettingsModal] = useState(true);
  const [isSharedLinksModalOpen, setIsSharedLinksModalOpen] = useState(false);
  const [isExportDataModalOpen, setIsExportDataModalOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (userTheme === "System") {
      setTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    }
  }, [userTheme, setTheme]);

  if (!useMounted) return null;

  const themeDropdownRef = useRef(null);
  useClickOutside({
    ref: themeDropdownRef,
    handler: () => setIsThemeDropdownOpen(false),
  });

  if (isSharedLinksModalOpen) {
    return (
      <SharedLinksModal
        onClose={() => {
          setIsSharedLinksModalOpen(false);
          setShowSettingsModal(true);
        }}
      />
    );
  }

  if (isExportDataModalOpen) {
    return (
      <ExportDataModal
        onClose={() => {
          setIsExportDataModalOpen(false);
          setShowSettingsModal(true);
        }}
      />
    );
  }

  return (
    showSettingsModal && (
      <Modal
        onClose={onClose}
        modalHeading="Settings"
        className="bg-white dark:bg-[#202123] md:max-w-[680px] w-full text-[#0f0f0f] dark:text-[#ECECF1]"
      >
        <div className="flex flex-row gap-6 w-full text-[#0f0f0f] dark:text-[#ECECF1]">
          <div className="text-sm font-medium flex flex-col flex-shrink-0 gap-2 m-2 md:m-0 md:px-4 md:pl-6 md:pt-4 md:-ml-[8px] md:min-w-[180px] max-w-[200px] ">
            <button
              onClick={() => {
                setCurrentTab("general"),
                  router.push(`${pathname}#settings/General`);
              }}
              className={cn(
                "flex flex-row gap-2 items-center rounded-md px-2 py-1.5",
                currentTab === "general" ? "bg-[#ececf1] dark:bg-[#40414f]" : ""
              )}
            >
              <CustomIcon iconName="Settings" className="w-4 h-4" />
              <div>General</div>
            </button>
            <button
              onClick={() => {
                setCurrentTab("data-controls");
                router.push(`${pathname}#settings/DataControls`);
              }}
              className={cn(
                "flex flex-row gap-2 items-center rounded-md px-2 py-1.5",
                currentTab === "data-controls"
                  ? "bg-[#ececf1] dark:bg-[#40414f]"
                  : ""
              )}
            >
              <CustomIcon iconName="DataControls" className="w-4 h-4" />
              <div>Data controls</div>
            </button>
          </div>

          {currentTab === "general" && (
            <div className="flex flex-col gap-3 pt-4 pr-6 md:min-h-[330px] w-full">
              <div className="flex flex-row justify-between items-center pb-3  border-b border-black/10 dark:border-white/10 text-sm">
                <div className="">Theme</div>
                <div className="relative">
                  <button
                    onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
                    className="py-2 px-3 font-medium flex flex-row gap-1 items-center rounded-lg hover:bg-[#f7f7f8] dark:hover:bg-[#494a54]"
                  >
                    <div>{currentTheme}</div>
                    <CustomIcon iconName="DropdownArrow" className="w-4 h-4" />
                  </button>
                  {isThemeDropdownOpen && (
                    <div
                      ref={themeDropdownRef}
                      className="absolute top-10 md:left-0 right-0 min-w-[220px] p-1 flex flex-col gap-1 bg-white dark:bg-[#202123] w-full rounded-xl border dark:border-[#40414f]"
                    >
                      {themeOptions.map((themeOption) => (
                        <button
                          key={currentTheme}
                          onClick={() => {
                            setTheme(themeOption.toLocaleLowerCase());
                            setCurrentTheme(themeOption);
                            setIsThemeDropdownOpen(false);
                          }}
                          className="py-1 px-3 font-medium dark:text-[#D9D9E3] flex flex-row gap-1 items-center rounded-lg hover:bg-[#f7f7f8] darkLhover:bg-[#494a54] dark:hover:bg-opacity-30"
                        >
                          <div>{themeOption}</div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-row justify-between items-center pb-3 text-sm">
                <div className="">Delete all chats</div>
                <button
                  onClick={() => {
                    deleteUserConversations();
                    onClose();
                  }}
                  className="py-2 px-3 font-medium text-white bg-[#D3191C] hover:bg-[#D3191C]/80 rounded-lg"
                >
                  Delete all
                </button>
              </div>
            </div>
          )}
          {currentTab === "data-controls" && (
            <div className="flex flex-col gap-3 pt-4 pr-6 md:min-h-[330px]">
              <div className="flex flex-col gap-1 pb-3  border-b border-black/10 dark:border-white/10">
                <div className="flex flex-row justify-between">
                  <div className="text-sm font-medium">
                    Chat history and training
                  </div>
                  <button
                    onClick={() =>
                      setIsChatHistoryEnabled(!isChatHistoryEnabled)
                    }
                    className={cn(
                      "cursor-pointer relative shrink-0 rounded-full h-[25px] w-[42px]",
                      isChatHistoryEnabled ? "bg-[#10a37f]" : "bg-gray-200"
                    )}
                  >
                    <span
                      data-state="checked"
                      className={cn(
                        "flex items-center justify-center rounded-full transition-transform duration-100 will-change-transform bg-white shadow-[0_1px_2px_rgba(0,0,0,0.45)] h-[21px] w-[21px]",
                        isChatHistoryEnabled
                          ? "translate-x-[19px]"
                          : "translate-x-0.5"
                      )}
                    ></span>
                  </button>
                </div>
                <p className="text-xs pr-12 text-[#666666] ">
                  Save new chats on this browser to your history and allow them
                  to be used to improve our models. Unsaved chats will be
                  deleted from our systems within 30 days. This setting does not
                  sync across browsers or devices.{" "}
                  <Link href="" className=" underline">
                    Learn more
                  </Link>
                </p>
              </div>
              <div className="flex flex-row justify-between items-center pb-3 border-b border-black/10 dark:border-white/10 text-sm">
                <div className="">Shared Links</div>
                <Button
                  onClick={() => {
                    setShowSettingsModal(false),
                      setIsSharedLinksModalOpen(true);
                  }}
                  className=""
                >
                  Manage
                </Button>
              </div>
              <div className="flex flex-row justify-between items-center pb-3  border-b border-black/10 dark:border-white/10 text-sm">
                <div className="">Export data</div>
                <Button
                  onClick={() => {
                    setShowSettingsModal(false), setIsExportDataModalOpen(true);
                  }}
                  className=""
                >
                  Export
                </Button>
              </div>
              <div className="flex flex-row justify-between items-center pb-3 text-sm">
                <div className="">Delete account</div>
                <button className="py-2 px-3 font-medium text-[white] bg-[#D3191C] hover:bg-[#D3191C]/80  rounded-lg ">
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    )
  );
}
