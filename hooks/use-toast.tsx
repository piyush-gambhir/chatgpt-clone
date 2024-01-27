import { toast } from "sonner";

function successToast(message: string) {
  return (
    <div className="bg-[#10a37f] text-white text-sm rounded-md w-[200px] px-4 py-2 flex items-center justify-between flex-row gap-3">
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <p className="font-medium">
        Your data export request has been received. You&apos;ll be notified when
        it&apos;s ready.
      </p>
    </div>
  );
}

export default function useToast() {
  const success = ({
    message,
    undo,
    duration,
  }: {
    message: string;
    undo?: () => void;
    duration?: number;
  }) => {
    toast(successToast(message), {
      unstyled: true,
      ...(duration && { duration }),
    });
  };

  return { success };
}
