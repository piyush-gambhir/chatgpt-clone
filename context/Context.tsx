"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

import { Conversation } from "@/lib/types";

const AppContext = createContext(
  {} as {
    chats: Conversation[];
    setChats: React.Dispatch<React.SetStateAction<Conversation[]>>;
  }
);

export const useAppContext = () => {
  return useContext(AppContext);
};

export const ContextProvider = ({
  children,
  initialChats = [],
}: {
  children: React.ReactNode;
  initialChats: Conversation[];
}) => {
  const [chats, setChats] = useState(initialChats);
  return (
    <AppContext.Provider value={{ chats, setChats }}>
      {children}
    </AppContext.Provider>
  );
};
