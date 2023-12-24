"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import CustomIcon from "@/components/ui/custom-icons";

type Props = {};

export default function ChatInputBox({}: Props) {
  const router = useRouter();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/c/1");
  };

  const [prompt, setPrompt] = useState("");
  const [isDisabled, setIsDisabled] = useState(prompt.length === 0);

  return (
    <form
      onSubmit={onSubmit}
      className="relative bg-transparent border-[0.5px] dark:border-[#555768] flex w-full items-center rounded-[1rem]"
    >
      <input
        type="text"
        placeholder="Message ChatGPT…"
        onChange={(e) => {
          setPrompt(e.target.value);
          setIsDisabled(e.target.value.length === 0);
        }}
        className="break-words flex max-h-[200px] h-[52px] overflow-y-hidden w-full resize-none border-0 bg-transparent py-[10px] pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:py-3.5 md:pr-12 placeholder-black/50 dark:placeholder-white/50 pl-3 md:pl-4 focus:outline-none"
      />
      <button
        type="submit"
        disabled={isDisabled}
        className="absolute right-2 p-0.5 dark:bg-white dark:disabled:bg-[#494a54] disabled:bg-black dark:hover:bg-[#202123] dark:disabled:hover:bg-transparent dark:text-black dark:disabled:text-[#2f303a] border border-black rounded-lg dark:border-white dark:disabled:border-[#494a54] transition-colors"
      >
        <CustomIcon iconName="Arrow" className="w-6 h-6" />
      </button>
    </form>
  );
}
