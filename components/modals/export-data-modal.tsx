import Modal from "@/components/modals/modal";
import Button from "@/components/sidebar/settings-modal-button";

type Props = {
  onClose: () => void;
};

export default function ExportDataModal({ onClose }: Props) {
  return (
    <Modal
      modalHeading="Request data export - are you sure?"
      className="dark:bg-[#202123] md:max-w-md w-full"
      showCloseButton={false}
      onClose={() => onClose()}
    >
      <div className="p-4 md:p-6 ">
        <ul className="text-sm my-3 flex list-disc flex-col gap-1 pl-3  ">
          <li>
            Your account details and conversations will be included in the
            export.
          </li>
          <li>
            The data will be sent to your registered email in a downloadable
            file.
          </li>
          <li>The download link will expire 24 hours after you receive it.</li>
          <li>
            Processing may take some time. You&apos;ll be notified when
            it&apos;s ready.
          </li>
        </ul>
        <div>To proceed, click &ldquo;Confirm export&ldquo; below.</div>
        <div className="flex flex-row justify-end mt-4 gap-3">
          <Button onClick={() => onClose()} className="">
            Cancel
          </Button>
          <Button className="text-white dark:text-white bg-[#10A37F] dark:bg-[#10A37F] dark:hover:bg-opacity-80">
            Confirm export
          </Button>
        </div>
      </div>
    </Modal>
  );
}
