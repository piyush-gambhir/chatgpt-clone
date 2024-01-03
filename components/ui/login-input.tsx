import cn from "clsx";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  type?: string;
};

export default function LoginInput({
  onChange,
  value,
  label,
  type = "text",
}: Props) {
  return (
    <div className="relative">
      <input
        type={type}
        className="peer w-full h-[52px] px-4 bg-transparent rounded-md border border-[rgb(194,200,208)] focus:border-[#10A37F] focus:outline-none focus:text-[#2d333a] transition-colors duration-300"
        onChange={onChange}
        value={value}
      />
      <label
        className={cn(
          value.length && "-top-2 left-2 text-xs bg-white px-1",
          "absolute top-3 peer-focus:-top-2 left-4 peer-focus:left-2 text-base peer-focus:text-xs text-[#6f7780] peer-focus:text-[#10A37F] peer-focus:bg-white peer-focus:px-1 transition-all duration-300"
        )}
      >
        {label}
      </label>
    </div>
  );
}
