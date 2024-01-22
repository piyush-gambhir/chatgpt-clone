type Props = {
  message?: string;
};

export default function FormSuccess({ message }: Props) {
  if (!message) return null;
  return (
    <div className="w-full px-4 bg-transparent rounded-md border border-[rgb(194,200,208)] text-[#10A37F]">
      {message}
    </div>
  );
}
