"use client";

import { useRouter } from "next/navigation";

import Modal from "@/components/modals/modal";
import Button from "@/components/sidebar/settings-modal-button";

import { deleteUserConversation } from "@/data/user-conversations";

type Props = {
  conversationId: string;
  conversationTitle: string;
  onClose: () => void;
};

export default function DeleteConversationConfirmationModal({
  conversationId,
  conversationTitle,
  onClose,
}: Props) {
  const router = useRouter();

  return (
    <Modal
      modalHeading="Delete chat?"
      className="dark:bg-[#202123] md:max-w-md w-full"
      showCloseButton={false}
      onClose={() => onClose()}
    >
      <div className="p-6 flex flex-col">
        <div className="text-black">
          This will delete{" "}
          <span className="font-medium">{conversationTitle}</span>.
        </div>
        <div className="flex flex-row justify-end mt-4 gap-3 font-medium">
          <Button className="" onClick={() => onClose()}>
            Cancel
          </Button>
          <Button
            className="text-white bg-red-700"
            onClick={() => {
              router.push("/");
              deleteUserConversation(conversationId);
              onClose();
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}
