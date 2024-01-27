"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import CustomIcon from "@/components/ui/custom-icons";
import Modal from "@/components/modals/modal";
import { useCurrentUser } from "@/hooks/use-current-user";

type Props = {
  onClose: () => void;
};

export default function PricingModal({ onClose }: Props) {
  const user = useCurrentUser();
  const [deleteForm, setDeleteForm] = useState({
    email: "",
    delete: "",
  });
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    if (deleteForm.email === user?.email && deleteForm.delete === "DELETE") {
      setIsLocked(false);
    } else {
      setIsLocked(true);
    }
  }, [deleteForm, user]);

  return (
    <Modal
      modalHeading="Upgrade your plan"
      className="dark:bg-[#202123] w-full md:max-w-4xl h-full"
      modalHeadingClassName="bg-[#f7f7f8] rounded-t-lg"
      showCloseButton={true}
      onClose={() => onClose()}
    >
      <div className="h-full w-full flex flex-col">
        <div className="h-full flex flex-col md:flex-row">
          <div className="h-full text-sm relative flex-1 flex gap-5 flex-col border-t py-4 px-6 border-token-border-light md:border-r last:border-r-0 md:border-t-0 md:max-w-xs">
            <div className="">
              <h1 className="font-bold text-xl">Free</h1>
              <p className="text-black/20">USD $0/month</p>
            </div>
            <div className="font-bold">
              For people just getting started with ChatGPT
            </div>
            <div className="-full flex flex-col justify-between">
              <div className="w-full flex flex-col gap-2 font-medium text-xs">
                <div className="flex flex-row">
                  <CustomIcon iconName="Tick" className="w-4 h-4 mr-4" />
                  <div className="flex flex-wrap">
                    Unlimited messages, interactions, and history
                  </div>
                </div>
                <div className="flex flex-row">
                  <CustomIcon iconName="Tick" className="w-4 h-4 mr-4" />
                  <div>Access to our GPT-3.5 model</div>
                </div>
                <div className="flex flex-row">
                  <CustomIcon iconName="Tick" className="w-4 h-4 mr-4" />
                  <div>Access on Web, iOS, and Android</div>
                </div>
              </div>
              <div className="">Have an existing plan? See billing help</div>
            </div>
          </div>
        </div>
        <div className="py-6 rounded-lg flex items-center justify-center bg-[#f7f7f8]">
          Need more capabilities? See
          <Link href="" className="">
            <span className="font-bold underline">ChatGPT Enterprise</span>
          </Link>
        </div>
      </div>
    </Modal>
  );
}
