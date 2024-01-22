import Link from "next/link";

type Props = {};

export default function AuthFooter({}: Props) {
  return (
    <div className="w-full flex flex-row items-center justify-center pb-6 pt-3 text-sm">
      <Link href="" className="px-[10px] text-[#10A37F]">
        Terms of use
      </Link>
      <span>|</span>
      <Link href="" className="px-[10px] text-[#10A37F]">
        Privacy policy
      </Link>
    </div>
  );
}
