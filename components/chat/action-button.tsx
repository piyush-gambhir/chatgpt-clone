import CustomIcon from "@/components/ui/custom-icons";

type Props = {
  title: string;
  description: string;
  onClick?: () => void;
};

export default function ActionButton({ title, description, onClick }: Props) {
  return (
    <div className="group relative text-sm w-full border border-black/20 dark:border-[#555768] rounded-xl hover:bg-[#f7f7f8] transition-all duration-200">
      <button
        onClick={onClick}
        className="group w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-gray-700 dark:text-gray-300 md:whitespace-normal"
      >
        <div className="flex w-full gap-2 items-center justify-center">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col overflow-hidden">
              <div className="truncate font-medium">{title}</div>
              <div className="truncate font-normal opacity-50">
                {description}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden group-hover:block absolute top-5 right-3 bg-white p-1 rounded-md backdrop-blur-md">
          <CustomIcon iconName="Arrow" className="h-4 w-4 text-black" />
        </div>
      </button>
    </div>
  );
}
