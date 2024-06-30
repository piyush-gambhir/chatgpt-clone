import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

import Sidebar from "@/components/sidebar/sidebar";

import { ContextProvider } from "@/context/context";
import { getUserConversations } from "@/data/user-conversations";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getUserConversations();
  console.log(conversations)
  const session = await auth();
  return (
    <ContextProvider initialChats={[]}>
      <SessionProvider session={session}>
        <div className="w-full h-full flex flex-row dark:bg-[#343541] dark:text-white">
          <Sidebar />
          {/* <div className="my-auto ml-4 w-2 h-6 bg-black/20 rounded-full hover:bg-black hover:scale-x-[2] transition-all duration-200"></div> */}
          <Toaster position="top-center" expand={true} richColors />
          {children}
        </div>
      </SessionProvider>
    </ContextProvider>
  );
}
