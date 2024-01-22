import CustomIcon from "../ui/custom-icons";

type Props = {
  message?: string;
};

export default function FormError({ message }: Props) {
  if (!message) return null;
  return (
    <div className="w-full px-4 bg-transparent rounded-md border border-[rgb(194,200,208)] min-h-[52px] flex flex-row items-center mt-4 text-red-500">
      <CustomIcon iconName="Close" className="h-4 w-4 mr-2 text-red-500" />
      {message}
    </div>
  );
}
