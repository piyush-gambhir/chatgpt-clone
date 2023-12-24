import Link from "next/link";

import getUser from "@/lib/utils/getUser";

import NewChatButton from "@/components/sidebar/new-chat-button";
import SidebarChatSection from "@/components/sidebar/sidebar-chat-section";
import CustomIcon from "@/components/ui/custom-icons";
import SidebarUserButton from "./sidebar-user-button";

export default async function Sidebar() {
  return (
    <div className="h-full w-[260px] hidden md:flex flex-col px-3 pb-3.5 bg-black ">
      <div className="flex-col flex-1 transition-opacity duration-500 -mr-2 pr-2 overflow-y-auto gap-2 pb-2 dark:text-gray-100 text-gray-800 text-sm">
        <div className="sticky top-0 dark:bg-black pt-3.5">
          <div className="pb-0.5 last:pb-0">
            <NewChatButton />
          </div>
        </div>
        <div className="mt-5 ">
          <SidebarChatSection />
        </div>
      </div>
      <div className="flex flex-col pt-2 empty:hidden dark:border-white/20">
        <div className="">
          <div className="flex min-h-[44px] py-1 items-center gap-3 rounded-lg px-2 text-sm dark:text-[#ECECF1] dark:hover:bg-[#202123]">
            <div className="flex w-full flex-row flex-wrap-reverse justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-black">
                  <CustomIcon iconName="Star" className="stroke-2 h-4 w-4" />
                </span>
                <div className="font-semibold">Renew Plus</div>
              </div>
            </div>
          </div>
        </div>
        <SidebarUserButton
          userName={"Piyush Gambhir"}
          userAvatar={"/images/avatars/1.jpg"}
        />
      </div>
    </div>
  );
}
