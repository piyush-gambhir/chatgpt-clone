import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT",
  description: "ChatGPT",
};

import cn from "clsx";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import SessionProvider from "@/components/providers/session-provider";
import ClientThemeProvider from "@/components/providers/client-theme-provider";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={cn("h-screen w-screen", inter.className)}>
        <SessionProvider session={session}>
          <ClientThemeProvider>{children}</ClientThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
