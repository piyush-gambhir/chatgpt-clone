"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";

import { Conversation } from "@/lib/types";

import SidebarChatButton from "@/components/sidebar/sidebar-chat-button";

import { getUserConversations } from "@/data/user-conversations";

type Props = {};

export default function SidebarChatSection({}: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [conversations, setConversations] = useState<Conversation[]>([]);

  const fetchConversations = useCallback(async () => {
    try {
      const conversations = await getUserConversations();
      setConversations(conversations!);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchConversations();
  }, [fetchConversations]);

  const groupConversationsByDate = (conversations: Conversation[]) => {
    const groupedConversations: { [key: string]: Conversation[] } = {
      Today: [],
      Yesterday: [],
      "Past 7 days": [],
      "Older than 7 days": [],
    };

    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);

    conversations.forEach((conversation) => {
      const updatedAt = new Date(conversation.updatedAt);

      // Grouping logic based on date
      if (updatedAt.toDateString() === today.toDateString()) {
        groupedConversations["Today"].push(conversation);
      } else if (updatedAt.toDateString() === sevenDaysAgo.toDateString()) {
        groupedConversations["Yesterday"].push(conversation);
      } else if (updatedAt > sevenDaysAgo) {
        groupedConversations["Past 7 days"].push(conversation);
      } else {
        groupedConversations["Older than 7 days"].push(conversation);
      }
    });

    return groupedConversations;
  };

  const groupedConversations = groupConversationsByDate(conversations);

  const currentPath = usePathname();

  return (
    <div className="w-full h-full">
      {isLoading && (
        <div className="w-full h-full flex flex-col justify-center items-center text-white">
          Loading...
        </div>
      )}
      {error && (
        <div className="w-full h-full flex flex-col justify-center items-center text-white">
          Something went wrong...
          <button
            onClick={() => {
              setError(false);
              setIsLoading(true);
              fetchConversations();
            }}
            className="bg-white bg-opacity-20 white p-1 border border-white rounded-md mt-1 "
          >
            Retry
          </button>
        </div>
      )}
      {!isLoading && Object.keys(groupedConversations).length !== 0 && (
        <div>
          {Object.keys(groupedConversations).map((group, index) => (
            <div key={index}>
              {groupedConversations[group].length !== 0 && (
                <div>
                  <h3 className="h-9 pb-2 pt-3 px-2 text-xs font-medium text-ellipsis overflow-hidden break-all text-[#666666]">
                    {group}
                  </h3>
                  <ol className="flex flex-col">
                    {groupedConversations[group].map((conversation) => (
                      <li key={conversation.id}>
                        <SidebarChatButton
                          id={conversation.id}
                          title={conversation.title}
                          active={
                            conversation.id ===
                            currentPath.split("/").slice(-1)[0]
                          }
                        />
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
