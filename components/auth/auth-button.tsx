import cn from "clsx";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export default function AuthButton({
  children,
  onClick,
  className = "",
}: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        className,
        "mt-4 bg-[#10A37F] h-[52px] text-white rounded-md text-base font-medium"
      )}
    >
      {children}
    </button>
  );
}
