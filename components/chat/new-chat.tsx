"use client";

import { useState, useEffect } from "react";

import OpenAIIconLogo from "@/components/ui/openai-icon-logo";
import ChatHeader from "@/components/chat/chat-header";
import ActionButton from "@/components/chat/action-button";
import ChatInputBox from "@/components/chat/chat-input-box";
import Chat from "@/components/chat/chat";

import { createUserConversation } from "@/data/user-conversations";

export default function NewChat() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isNewChat, setIsNewChat] = useState(true);
  const [conversationId, setConversationId] = useState("");
  const onPromptSubmit = async () => {
    try {
      setLoading(true);
      const response = await createUserConversation(prompt);
      setConversationId(response.id);
      setIsNewChat(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return isNewChat ? (
    <main className="h-full w-full flex flex-col px-6">
      <ChatHeader />
      <div className="w-full h-full flex flex-col justify-between">
        <div className="h-full w-full items-center justify-center flex flex-col">
          <div className="dark:bg-white rounded-full p-3 text-black mb-3">
            <OpenAIIconLogo className="w-12 h-12" />
          </div>
          <div className="mb-5 text-2xl font-medium">
            How can I help you today?
          </div>
        </div>
        <div className="md:mx-4 lg:mx-auto lg:max-w-2xl xl:max-w-3xl w-full flex flex-col items-center">
          <div className="w-full grid md:grid-flow-row grid-cols-1 md:grid-cols-2  gap-2 mb-4 px-1 pb-1 sm:px-2 sm:pb-0">
            <ActionButton
              title="Give me ideas"
              description="about how to plan my New Year's resolutions"
            />
            <ActionButton
              title="Help me pick"
              description="a gift for my dad who loves fishing"
            />
            <ActionButton
              title="Tell me a fun fact"
              description="about the Roman Empire"
            />
            <ActionButton
              title="Write a text"
              description="inviting my neighbors to a barbecue"
            />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-[#343541]  lg:mx-auto lg:max-w-2xl xl:max-w-3xl w-full flex flex-col items-center">
        <ChatInputBox
          prompt={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onSubmit={onPromptSubmit}
          isDisabled={prompt.length === 0 || loading || error}
        />
        <div className="px-2 py-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px]">
          ChatGPT can make mistakes. Consider checking important information.
        </div>
      </div>
    </main>
  ) : (
    <Chat conversationId={conversationId} newChatPrompt={prompt} />
  );
}
