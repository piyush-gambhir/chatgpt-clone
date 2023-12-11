import { getServerSession } from "next-auth";
import cn from "clsx";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatGPT Clone",
  description: "ChatGPT Clone",
};

import SessionProvider from "@components/SessionProvider";
import Sidebar from "@components/sidebar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body
        className={cn(
          "h-screen w-screen",
          inter.className,
          session
            ? "dark:bg-[#343541] dark:text-white"
            : "bg-[#FFFFDB] dark:bg-[#00002E]"
        )}
      >
        <SessionProvider session={session}>
          {session ? (
            <div className="w-full h-full flex flex-row">
              <Sidebar />
              {children}
            </div>
          ) : (
            <div className="h-full w-full">{children}</div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
