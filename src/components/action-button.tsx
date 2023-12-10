import React from "react";

type Props = {
  title: string;
  description: string;
  onClick?: () => void;
};

export default function ActionButton({ title, description, onClick }: Props) {
  return (
    <div className="text-sm w-full border-[0.5px] border-[#555768] rounded-xl">
      <button className="group w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-gray-700 dark:text-gray-300 md:whitespace-normal">
        <div className="flex w-full gap-2 items-center justify-center">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col overflow-hidden">
              <div className="truncate font-semibold">{title}</div>
              <div className="truncate font-normal opacity-50">
                {description}
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
