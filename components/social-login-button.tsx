import Image from "next/image";

type Props = {
  SocialName: string;
  onClick: (provider: "google" | "github") => void;
};

export default function SocialLoginButton({ SocialName, onClick }: Props) {
  return (
    <button
      onClick={() => onClick(SocialName.toLowerCase() as "google" | "github")}
      className="w-full h-[52px] flex flex-row text-base border border-[#c2c8d0] rounded-md hover:bg-[#e5e5e5] transition-colors duration-200 items-center"
    >
      <div className="px-3">
        <Image
          src={`/assets/icons/${SocialName.toLowerCase()}.svg`}
          alt={SocialName + " logo"}
          width={20}
          height={20}
          className=""
        />
      </div>
      <div>Continue with {SocialName}</div>
    </button>
  );
}
