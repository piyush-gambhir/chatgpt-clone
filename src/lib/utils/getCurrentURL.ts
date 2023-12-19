"use client";
import { usePathname  } from "next/navigation";

export default function GetCurrentURl() {
  const currentPath = usePathname();
  return currentPath;
}
