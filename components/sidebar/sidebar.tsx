"use client";

import cn from "clsx";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

import NewChatButton from "@/components/sidebar/new-chat-button";
import SidebarChatSection from "@/components/sidebar/sidebar-chat-section";
import CustomIcon from "@/components/ui/custom-icons";
import SidebarUserButton from "@/components/sidebar/sidebar-user-button";
import PricingModal from "@/components/modals/pricing-modal";

import { useCurrentUser } from "@/hooks/use-current-user";
import { useModal } from "@/hooks/use-modal";


type Props = {
  className?: string;
};

export default function Sidebar({ className }: Props) {
  const {
    isOpen: pricingIsOpen,
    openModal: openPricingModal,
    closeModal: closePricingModal,
  } = useModal();


  const user = useCurrentUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const currentURL = window.location.href;
    if (currentURL.includes("#pricing")) {
      openPricingModal();
    }
  }, [openPricingModal]);

  return (
    <div
      className={cn(
        "h-full min-w-[260px] max-w-[260px] hidden md:flex flex-col px-3 pb-3.5 bg-black",
        className
      )}
    >
      <div className="flex-col flex-1 transition-opacity duration-500 -mr-2 pr-2 overflow-y-auto gap-2 pb-2 dark:text-gray-100 text-gray-800 text-sm">
        <div className="sticky top-0 dark:bg-black pt-3.5">
          <div className="pb-0.5 last:pb-0">
            <NewChatButton />
          </div>
        </div>
        <div className="mt-5 h-full">
          <SidebarChatSection />
        </div>
      </div>
      <div className="text-[#ECECF1] flex flex-col pt-2 empty:hidden border-white/20">
        {!user?.isPlusUser && (
          <button
            onClick={() => {
              openPricingModal();
              router.push(`${pathname}#pricing`);
            }}
            className="flex min-h-[44px] py-1 items-center gap-3 rounded-lg px-2 text-sm hover:bg-[#202123]"
          >
            <div className="flex w-full flex-row flex-wrap-reverse justify-between">
              <div className="flex items-center gap-2 ">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-black">
                  <CustomIcon iconName="Star" className="stroke-2 h-4 w-4" />
                </span>
                <div className="font-semibold">Renew Plus</div>
              </div>
            </div>
          </button>
        )}
        <SidebarUserButton />
      </div>
      {pricingIsOpen && (
        <PricingModal
          onClose={() => {
            router.push(pathname);
            closePricingModal();
          }}
        />
      )}
    </div>
  );
}
