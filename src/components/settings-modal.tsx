"use client";

import { useState } from "react";
import Link from "next/link";
import cn from "clsx";

import Modal from "@components/modal";
import CustomIcon from "@components/custom-icons";

export default function SettingsModal() {
  const themeOptions = ["System", "Dark", "Light"];

  const [currentTab, setCurrentTab] = useState("general");
  const [currentTheme, setCurrentTheme] = useState("Dark");
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const [isChatHistoryEnabled, setIsChatHistoryEnabled] = useState(true);

  return (
    <Modal modalHeading="Settings" className="dark:bg-[#202123] md:max-w-[680px] w-full text-[#ECECF1]">
      <div className="flex flex-row gap-6 w-full">
        <div className="text-sm font-semibold flex flex-col flex-shrink-0 gap-2 m-2 md:m-0 md:px-4 md:pl-6 md:pt-4 md:-ml-[8px] md:min-w-[180px] max-w-[200px] ">
          <button
            onClick={() => setCurrentTab("general")}
            className={cn(
              "flex flex-row gap-2 items-center rounded-md px-2 py-1.5",
              currentTab === "general" ? "bg-[#40414f]" : ""
            )}
          >
            <CustomIcon iconName="Settings" className="w-4 h-4" />
            <div>General</div>
          </button>
          <button
            onClick={() => setCurrentTab("data-controls")}
            className={cn(
              "flex flex-row gap-2 items-center rounded-md px-2 py-1.5",
              currentTab === "data-controls" ? "bg-[#40414f]" : ""
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
                  className="py-2 px-3 font-medium text-[#D9D9E3] flex flex-row gap-1 items-center rounded-lg hover:bg-[#494a54]"
                >
                  <div>{currentTheme}</div>
                  <CustomIcon iconName="DropdownArrow" className="w-4 h-4" />
                </button>
                {isThemeDropdownOpen && (
                  <div className="absolute top-10 md:left-0 right-0 min-w-[220px] p-1 flex flex-col gap-1 dark:bg-[#202123] w-full rounded-xl border border-[#40414f]">
                    {themeOptions.map((themeOption) => (
                      <button
                        key={themeOption}
                        onClick={() => {
                          setCurrentTheme(themeOption);
                          setIsThemeDropdownOpen(false);
                        }}
                        className="py-1 px-3 font-medium text-[#D9D9E3] flex flex-row gap-1 items-center rounded-lg hover:bg-[#494a54] hover:bg-opacity-30"
                      >
                        <div>{themeOption}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-row justify-between items-center pb-3 text-sm">
              <div className="text-[#ECECF1]">Clear all chats</div>
              <button className="py-2 px-3 font-medium text-white bg-[#D3191C] hover:bg-[#D3191C]/80 rounded-lg">
                Clear
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
                  onClick={() => setIsChatHistoryEnabled(!isChatHistoryEnabled)}
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
              <p className="text-xs pr-12 text-[#C5C5D2]">
                Save new chats on this browser to your history and allow them to
                be used to improve our models. Unsaved chats will be deleted
                from our systems within 30 days. This setting does not sync
                across browsers or devices.{" "}
                <Link href="" className=" underline">
                  Learn more
                </Link>
              </p>
            </div>
            <div className="flex flex-row justify-between items-center pb-3  border-b border-black/10 dark:border-white/10 text-sm">
              <div className="text-[#ECECF1]">Shared Links</div>
              <button className="py-2 px-3 font-medium text-[#D9D9E3] bg-[#343541] hover:bg-[#40414f] rounded-lg border border-[#555768]">
                Manage
              </button>
            </div>
            <div className="flex flex-row justify-between items-center pb-3  border-b border-black/10 dark:border-white/10 text-sm">
              <div className="text-[#ECECF1]">Export data</div>
              <button className="py-2 px-3 font-medium text-[#D9D9E3] bg-[#343541] hover:bg-[#40414f] rounded-lg border border-[#555768]">
                Export
              </button>
            </div>
            <div className="flex flex-row justify-between items-center pb-3 text-sm">
              <div className="text-[#ECECF1]">Delete account</div>
              <button className="py-2 px-3 font-medium text-[white] bg-[#D3191C] hover:bg-[#D3191C]/80  rounded-lg ">
                Delete
              </button>
            </div>
          </div>
        )}
      </div> 
    </Modal>
  );
}
