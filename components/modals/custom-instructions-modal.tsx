"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import Input from "@/components/ui/input";
import CustomIcon from "@/components/ui/custom-icons";
import Modal from "@/components/modals/modal";
import Button from "@/components/sidebar/settings-modal-button";
import { useCurrentUser } from "@/hooks/use-current-user";

type Props = {
  onClose: () => void;
};

export default function ExportDataModal({ onClose }: Props) {
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
      modalHeading="Delete account - are you sure?"
      className="dark:bg-[#202123] md:max-w-md w-full"
      showCloseButton={true}
      onClose={() => onClose()}
    >
      <div className="p-4 md:p-6 ">
        <div className="text-sm font-medium text-black dark:text-white">
          <ul className=" my-3 flex list-disc flex-col gap-1 pl-3  ">
            <li>Deleting your account is permanent and cannot be undone.</li>
            <li>
              Deletion will prevent you from accessing OpenAI services,
              including ChatGPT, API, and DALL·E.
            </li>
            <li>
              You cannot create a new account using the same email address.
            </li>
            <li>
              Your data will be deleted within 30 days, except we may retain a
              limited set of data for longer where required or permitted by law.
            </li>
            <li>
              You will need to cancel your in-app purchase subscription in the
              Google Play Store. We cannot cancel your subscription for you.
            </li>
            <li>
              Read our{" "}
              <Link href="" className="underline">
                help center article
              </Link>{" "}
              for more information.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 mt-2">
          <Input
            label="Please type your account email."
            placeholder={user?.email!}
            type="text"
            className=""
            onChange={(e) =>
              setDeleteForm({ ...deleteForm, email: e.target.value })
            }
            value={deleteForm.email}
          />
          <Input
            label='To proceed, type "DELETE" in the box below.'
            type="text"
            className=""
            onChange={(e) =>
              setDeleteForm({ ...deleteForm, delete: e.target.value })
            }
            value={deleteForm.delete}
          />
        </div>
        <div className="flex flex-row justify-end mt-4 gap-3">
          <Button
            onClick={() => onClose()}
            className="bg-[#b91c1c] hover:bg-[#991b1b] text-white w-full flex flex-row items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed font-medium border-none disabled:bg-[#ECECF1] disabled:text-black disabled:dark:text-white"
            disabled={isLocked}
          >
            {isLocked ? (
              <CustomIcon iconName="Lock" className="w-4 h-4 mr-2" />
            ) : (
              <CustomIcon iconName="Danger" className="w-4 h-4 mr-2" />
            )}
            {isLocked ? "Locked" : "Permenantly delete my account"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
