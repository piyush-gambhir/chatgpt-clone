import cn from "clsx";

type Props = {
  value: string;
  label: string;
  type?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  editable?: boolean;
  onEditButtonClick?: () => void;
  autofill?: boolean;
};

export default function LoginInput({
  onChange,
  value,
  label,
  type = "text",
  disabled = false,
  editable = true,
  onEditButtonClick,
  autofill = false,
}: Props) {
  return editable ? (
    <div className="relative">
      <input
        type={type}
        className={cn(
          "peer w-full h-[52px] px-4 bg-transparent rounded-md border border-[rgb(194,200,208)] focus:border-[#10A37F] focus:outline-none focus:text-[#2d333a] transition-colors duration-200"
        )}
        onChange={onChange}
        value={value}
        disabled={disabled}
        autoComplete={autofill ? "on" : "off"}
      />

      <label
        className={cn(
          "absolute peer-focus:text-sm peer-focus:font-medium text-[#6f7780] peer-focus:text-[#10A37F] peer-focus:bg-white peer-focus:px-2 transition-all duration-200",
          value.length > 0
            ? "-top-2.5 left-2 text-sm font-medium bg-white px-2 text-[#10A37F] transition-all duration-200"
            : "top-3.5 peer-focus:-top-2.5 left-4 peer-focus:left-2 text-base"
        )}
      >
        {label}
      </label>
    </div>
  ) : (
    <div className="relative w-full h-[52px] px-4 pr-10 rounded-md border border-[rgb(194,200,208)] flex items-center">
      <textarea
        name="text"
        className={cn(
          "w-full bg-transparent resize-none appearance-none text-base auto"
        )}
        wrap="soft"
        value={value}
        disabled={!editable}
      ></textarea>
      <button
        onClick={onEditButtonClick}
        className="absolute top-4 right-3 text-sm text-[#10A37F]"
      >
        Edit
      </button>
    </div>
  );
}
