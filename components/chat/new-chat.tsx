"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import OpenAIIconLogo from "@/components/ui/openai-icon-logo";
import ChatHeader from "@/components/chat/chat-header";
import ActionButton from "@/components/chat/action-button";
import ChatInputBox from "@/components/chat/chat-input-box";
import ChatMessage from "@/components/chat/chat-message";
import MessageSkeleton from "@/components/chat/message-skeleton";

import { createConversationMessage } from "@/data/conversation-messages";
import { createUserConversation } from "@/data/user-conversations";

import dialoGPT from "@/lib/dialoGPT-medium";

import { Message } from "@/lib/types";

export default function NewChat() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isNewChat, setIsNewChat] = useState(true);
  const [conversationId, setConversationId] = useState("");

  const router = useRouter();

  const onPromptSubmit = async () => {
    try {
      if (isNewChat) {
        setIsNewChat(false);
        const userConversation = await createUserConversation(prompt);
        setConversationId(userConversation.id);
      }
      const userMessage = await createConversationMessage(
        conversationId,
        prompt,
        true
      );
      console.log("1");

      const message = {
        id: userMessage.id,
        isUser: true,
        data: prompt,
        createdAt: userMessage.createdAt,
        updatedAt: userMessage.updatedAt,
        conversationId: userMessage.conversationId,
      };
      setMessages((prev) => [...prev, message]);
      setPrompt("");
      setLoading(true);
      await createConversationMessage(conversationId, prompt, true);
      console.log("1");

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
        id: modelResponseDatabase.id,
        isUser: false,
        data: modelResponse.generated_text,
        createdAt: modelResponseDatabase.createdAt,
        updatedAt: modelResponseDatabase.updatedAt,
        conversationId: modelResponseDatabase.conversationId,
      };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative w-full h-full flex flex-col">
      <ChatHeader />
      {isNewChat ? (
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
      ) : (
        <div className="h-full w-full flex flex-col overflow-y-hidden ">
          <div className="flex-1 overflow-y-auto chat-scrollbar">
            {messages.map((message, index) => (
              <div key={index}>
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
          </div>
        </div>
      )}
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
  );
}
