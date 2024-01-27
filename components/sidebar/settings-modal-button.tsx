import cn from "clsx";
type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  children,
  className,
  onClick,
  disabled = false,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "py-2 px-3 text-sm font-medium text-[#0F0F0F] dark:text-[#D9D9E3] dark:bg-[#343541] dark:hover:bg-[#40414f] rounded-lg border border-black/10 dark:border-[#555768]",
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
