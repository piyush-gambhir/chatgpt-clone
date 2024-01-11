"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

type Props = {
  SocialName: string;
};

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export default function SocialLoginButton({ SocialName }: Props) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const onSocialButtonClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <button
      onClick={() =>
        onSocialButtonClick(SocialName.toLowerCase() as "google" | "github")
      }
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
