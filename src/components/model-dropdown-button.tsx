"use client";

import cn from "clsx";
import { useState } from "react";

import CustomIcon from "@components/custom-icons";
export default function ModelDropdownButton() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentModel, setCurrentModel] = useState("GPT-3.5");

  return (
    <div className="">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={cn(
          "group cursor-pointer gap-1 rounded-xl py-2 px-3 text-lg font-medium hover:bg-gray-50 dark:hover:bg-black/10",
          isDropdownOpen && "bg-gray-50 dark:bg-black/20"
        )}
      >
        <div className="flex flex-row items-center gap-1">
          <div className="font-bold">
            ChatGPT{" "}
            <span className="text-[#c5c5d2]">
              {currentModel === "GPT-3.5" ? "3.5" : "4"}
            </span>
          </div>
          <div className="text-[#999999]">
            <CustomIcon iconName="DropdownArrow" className="" />
          </div>
        </div>
      </button>
      {isDropdownOpen && (
        <div
          className={cn(
            "w-[340px] absolute mt-2 bg-[#202123] flex flex-col overflow-hidden rounded-lg border border-gray-100 shadow-lg dark:border-[#555768]"
          )}
        >
          <button
            onClick={() => {
              setCurrentModel("GPT-3.5");
              setIsDropdownOpen(false);
            }}
            className="group m-1.5 p-2.5 text-sm flex flex-row justify-between hover:bg-[#2b2c2e]"
          >
            <div className="flex flex-row gap-2">
              <div className="">
                <CustomIcon
                  iconName="LightningBolt"
                  className=" stroke-[1.5] h-[18px] w-[18px] "
                />
              </div>
              <div className="flex flex-col text-sm items-start">
                <div className="font-semi-bold ">GPT-3.5</div>
                <div className="font-medium text-[#999999]">
                  Great for everyday tasks
                </div>
              </div>
            </div>
            <div className="">
              <CustomIcon
                iconName="Checkmark"
                className="group-hover:hidden stroke-[1.5] h-[18px] w-[18px] fill-none"
              />
            </div>
          </button>
          <div className="border-[0.5px] border-[#939393]"></div>
          <button
            onClick={() => {
              setCurrentModel("GPT-4");
              setIsDropdownOpen(false);
            }}
            className="group m-1.5 p-2.5 text-sm flex flex-row justify-between hover:bg-[#2b2c2e]"
          >
            <div className="flex flex-row gap-2">
              <div className="">
                <CustomIcon
                  iconName="Star"
                  className=" stroke-[1.5] h-[18px] w-[18px] "
                />
              </div>
              <div className="flex flex-col text-sm items-start">
                <div className="font-semi-bold">GPT-4</div>
                <p className="font-medium text-[#999999] flex-wrap text-left">
                  Our smartest and most capable model. Includes DALL•E, browsing
                  and more.
                </p>
              </div>
            </div>
            <div className="">
              {currentModel === "GPT-4" && (
                <CustomIcon
                  iconName="Checkmark"
                  className="group-hover:hidden stroke-[1.5] h-[18px] w-[18px] fill-none"
                />
              )}
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
