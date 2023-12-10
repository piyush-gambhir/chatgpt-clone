"use client";
import { useState } from "react";

import SidebarChatButton from "@components/sidebar-chat-button";
const chatHistory = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    name: "Tech Support",
    link: "/c/550e8400-e29b-41d4-a716-446655440000",
    updatedAt: "2021-10-01T12:00:00.000Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "Alice Johnson",
    link: "/c/550e8400-e29b-41d4-a716-446655440001",
    updatedAt: "2021-05-15T08:30:00.000Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    name: "John Smith",
    link: "/c/550e8400-e29b-41d4-a716-446655440002",
    updatedAt: "2021-07-20T18:45:00.000Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    name: "Emily Davis",
    link: "/c/550e8400-e29b-41d4-a716-446655440003",
    updatedAt: "2021-09-03T09:15:00.000Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    name: "Customer Care",
    link: "/c/550e8400-e29b-41d4-a716-446655440004",
    updatedAt: "2022-01-08T14:20:00.000Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    name: "Alex Turner",
    link: "/c/550e8400-e29b-41d4-a716-446655440005",
    updatedAt: "2022-03-22T22:10:00.000Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440006",
    name: "Sophie Roberts",
    link: "/c/550e8400-e29b-41d4-a716-446655440006",
    updatedAt: "2022-06-05T11:45:00.000Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440007",
    name: "Daniel Brown",
    link: "/c/550e8400-e29b-41d4-a716-446655440007",
    updatedAt: "2022-08-14T16:30:00.000Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440008",
    name: "Olivia Miller is the key to success. Make me this all.",
    link: "/c/550e8400-e29b-41d4-a716-446655440008",
    updatedAt: "2022-10-27T07:55:00.000Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440009",
    name: "David White",
    link: "/c/550e8400-e29b-41d4-a716-446655440009",
    updatedAt: "2022-12-10T19:40:00.000Z",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440010",
    name: "Sophia Lee",
    link: "/c/550e8400-e29b-41d4-a716-446655440010",
    updatedAt: "2023-01-15T08:00:00.000Z",
  },
];

export default function SidebarChatSection() {
  const [activeChat, setActiveChat] = useState("");
  return (
    <div className="">
      <h3 className="h-9 pb-2 pt-3 px-2 text-xs font-medium text-ellipsis overflow-hidden break-all bg-white dark:bg-black text-[#666666]">
        Today
      </h3>
      <ol className="flex flex-col">
        {chatHistory.map((chat) => (
          <li key={chat.id} onClick={() => setActiveChat(chat.id)}>
            <SidebarChatButton
              name={chat.name}
              link={chat.link}
              active={activeChat === chat.id}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
