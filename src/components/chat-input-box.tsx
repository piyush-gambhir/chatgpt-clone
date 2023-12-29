"use client";

import { FormEvent, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

import CustomIcon from "@components/ui/custom-icons";

import createNewConversation from "@lib/utils/create-new-conversation";
import createNewQuery from "@lib/utils/create-new-query";

import dialoGPT from "@lib/dialoGPT-medium";

type Props = {
  conversationId?: string;
};

export default function ChatInputBox({ conversationId }: Props) {
  const [prompt, setPrompt] = useState("");
  const [isDisabled, setIsDisabled] = useState(prompt.length === 0);

  const router = useRouter();
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!conversationId) {
      const conversation = await createNewConversation();
      conversationId = conversation.id;
      router.push(`/c/${conversation.id}`);
    }

    try {
      await createNewQuery({
        conversationId: conversationId,
        data: prompt,
        isUser: true,
      });
    } catch (err) {
      console.log(err);
    }
    try {
      const response = await dialoGPT({
        inputs: {
          past_user_inputs: [],
          generated_responses: [],
          text: prompt,
        },
      });
      await createNewQuery({
        conversationId: conversationId,
        data: response.generated_text,
        isUser: false,
      });
    } catch (err) {
      console.log(err);
    }

    setPrompt("");
    setIsDisabled(true);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative bg-transparent border-[0.5px] border-black/20 dark:border-[#555768] flex w-full items-center rounded-[1rem]"
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
        className="absolute right-2 p-0.5 text-white disabled:text-white dark:text-black dark:disabled:text-[#2f303a] disabled:bg-black/10 bg-black dark:bg-white dark:disabled:bg-[#494a54] disabled:bg-black dark:hover:bg-[#202123] dark:disabled:hover:bg-transparent  border disabled:border-transparent border-black rounded-lg dark:border-white dark:disabled:border-[#494a54] transition-colors"
      >
        <CustomIcon iconName="Arrow" className="w-6 h-6" />
      </button>
    </form>
  );
}
