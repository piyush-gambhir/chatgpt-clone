"use client";

import { useCallback, useState, useEffect, useRef } from "react";

import ChatHeader from "@/components/chat/chat-header";
import ChatInputBox from "@/components/chat/chat-input-box";
import ChatMessage from "@/components/chat/chat-message";
import MessageSkeleton from "@/components/chat/message-skeleton";

import { createConversationMessage } from "@/data/conversation-messages";

import { dialoGPT } from "@/lib/dialoGPT-medium";

import { Message } from "@/lib/types";

type Props = {
  conversationId: string;
  conversationMessages: Message[];
  newChatPrompt?: string;
};

export default function Chat({
  conversationId,
  conversationMessages,
  newChatPrompt,
}: Props) {
  const [prompt, setPrompt] = useState(newChatPrompt || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [messages, setMessages] = useState<Message[]>(
    conversationMessages || []
  );
  const [isNewChat, setIsNewChat] = useState(newChatPrompt ? true : false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const onPromptSubmit = useCallback(async () => {
    try {
      setPrompt("");
      const userMessage = await createConversationMessage(
        conversationId,
        prompt,
        true
      );
      const message = {
        id: userMessage?.id!,
        isUser: true!,
        data: prompt!,
        createdAt: userMessage?.createdAt!,
        updatedAt: userMessage?.updatedAt!,
        conversationId: userMessage?.conversationId!,
      };
      setMessages((prev) => [...prev, message]);
      setLoading(true);
      const modelResponse = await dialoGPT({
        inputs: {
          past_user_inputs: [
            ...messages.filter((m) => m.isUser).map((m) => m.data),
            prompt,
          ],
          generated_responses: [
            ...messages.filter((m) => !m.isUser).map((m) => m.data),
          ],
          text: prompt,
        },
      });
      const modelResponseDatabase = await createConversationMessage(
        conversationId,
        modelResponse.generated_text,
        false
      );
      const modelMessage = {
        id: modelResponseDatabase?.id!,
        isUser: false!,
        data: modelResponse.generated_text!,
        createdAt: modelResponseDatabase?.createdAt!,
        updatedAt: modelResponseDatabase?.updatedAt!,
        conversationId: modelResponseDatabase?.conversationId!,
      };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [conversationId, messages, prompt]);

  return (
    <main className="h-full w-full flex flex-col px-6">
      <ChatHeader />
      <div className="h-full w-full flex flex-col overflow-y-hidden">
        <div className="lg:mx-auto lg:max-w-2xl xl:max-w-3xl w-full h-full overflow-y-auto chat-scrollbar">
          {messages.map((message, index) => (
            <div key={index} className="w-full">
              <ChatMessage isUser={message.isUser} data={message.data} />
            </div>
          ))}
          {error && (
            <ChatMessage
              isUser={false}
              data="Something went wrong. Please try again."
              error
            />
          )}

          {loading && <MessageSkeleton />}
          <div ref={messagesEndRef} />
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
      </div>
    </main>
  );
}
