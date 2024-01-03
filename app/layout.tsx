import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT",
  description: "ChatGPT",
};

import cn from "clsx";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import ClientThemeProvider from "@/components/providers/client-theme-provider";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("h-screen w-screen", inter.className)}>
        <ClientThemeProvider>{children}</ClientThemeProvider>
      </body>
    </html>
  );
}
