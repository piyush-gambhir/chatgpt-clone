import cn from "clsx";
type Props = {
  buttonText: string;
  className?: string;
  onClick?: () => void;
};

export default function Button({ buttonText, className, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm py-2 px-3 font-medium text-[#D9D9E3] bg-[#343541] hover:bg-opacity-80 rounded-lg border border-[#555768]",
        className
      )}
    >
      {buttonText}
    </button>
  );
}
