import cn from "clsx";

type Props = {
  className?: string;
  placeholder?: string;
  label?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export default function Input({
  className,
  placeholder,
  label,
  type,
  value,
  onChange,
  disabled,
}: Props) {
  return (
    <div className="">
      {label && (
        <label className="text-sm font-medium text-black dark:text-white">
          {label}
        </label>
      )}
      <input
        className={cn(
          "dark:bg-[#343541] w-full px-3 py-2 text-sm font-medium rounded-md border border-black/10 text-black dark:text-white",
          className
        )}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}
