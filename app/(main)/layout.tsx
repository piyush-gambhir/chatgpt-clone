import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

import Sidebar from "@/components/sidebar/sidebar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <div className="w-full h-full flex flex-row dark:bg-[#343541] dark:text-white">
        <Sidebar />
        {children}
      </div>
    </SessionProvider>
  );
}
