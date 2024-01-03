import cn from "clsx";
import { useRef } from "react";

import { useClickOutside } from "@/hooks/use-click-outside";

import CustomIcon from "@/components/ui/custom-icons";

type Props = {
  children: React.ReactNode;
  className?: string;
  modalHeading: string;
  showCloseButton?: boolean;
  onClose: () => void;
};

export default function Modal({
  children,
  className,
  modalHeading,
  showCloseButton = true,
  onClose,
}: Props) {


  const handleClose = () => {
    onClose();
  };

  const modalRef = useRef(null);
  useClickOutside({
    ref: modalRef,
    handler: () => handleClose(),
  });
  return (
    <div className="fixed inset-0  bg-black dark:bg-[#565869] bg-opacity-50 dark:bg-opacity-70 z-10">
      <div className="fixed inset-0 flex items-center justify-center p-4 md:p-8">
        <div ref={modalRef} className={cn(className, "bg-white rounded-xl")}>
          <div className="w-full flex flex-col">
            <div className="px-4 pb-4 pt-5 sm:p-6 flex items-center justify-between border-b border-black/10 dark:border-white/10">
              <div className="text-lg font-semibold leading-6">
                {modalHeading}
              </div>
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <CustomIcon iconName="Close" className="w-5 h-5" />
                </button>
              )}
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
