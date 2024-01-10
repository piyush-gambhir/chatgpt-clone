"use client";

import { useEffect } from "react";

import CustomIcon from "@/components/ui/custom-icons";

type Props = {
  prompt: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  isDisabled: boolean;
};

export default function ChatInputBox({
  prompt,
  onChange,
  onSubmit,
  isDisabled,
}: Props) {
  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === "Enter" && isDisabled === false) {
        onSubmit();
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [isDisabled, onSubmit]);

  return (
    <div className=" relative bg-transparent border-[0.5px] border-black/20 dark:border-[#555768] flex w-full items-center rounded-[1rem]">
      <input
        type="text"
        onChange={(e) => onChange(e)}
        value={prompt}
        placeholder="Message ChatGPT…"
        className="break-words flex max-h-[200px] h-[52px] overflow-y-hidden w-full resize-none border-0 bg-transparent py-[10px] pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:py-3.5 md:pr-12 placeholder-black/50 dark:placeholder-white/50 pl-3 md:pl-4 focus:outline-none"
      />
      <button
        onClick={() => onSubmit()}
        disabled={isDisabled}
        className="absolute right-2 p-0.5 text-white disabled:text-white dark:text-black dark:disabled:text-[#2f303a] disabled:bg-black/10 bg-black dark:bg-white dark:disabled:bg-[#494a54] disabled:bg-black dark:hover:bg-[#202123] dark:disabled:hover:bg-transparent  border disabled:border-transparent border-black rounded-lg dark:border-white dark:disabled:border-[#494a54] transition-colors"
      >
        <CustomIcon iconName="Arrow" className="w-6 h-6" />
      </button>
    </div>
  );
}
