"use client";
import { useState } from "react";
import Link from "next/link";

import OpenAIIconLogo from "@/components/ui/openai-icon-logo";
import LoginInput from "@/components/auth/login-input";
import SocialLoginButton from "@/components/auth/social-login-button";

export default function SignUp() {
  const [email, setEmail] = useState("");

  return (
    <div className="h-full flex flex-col justify-between items-center">
      <div className="flex justify-center items-center pt-8">
        <OpenAIIconLogo className="h-8 w-8" />
      </div>
      <div className="p-20 ">
        <div className="w-[400px] px-10 flex flex-col items-center justify-center">
          <div className="w-full pt-10 pb-6 flex">
            <h1 className="mt-6 text-3xl font-bold">Create your account</h1>
          </div>
          <div className="w-full flex flex-col">
            <div className="">
              <LoginInput
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                label="Email address"
                type="email"
              />
            </div>
            <button className="mt-4 bg-[#10A37F] h-[52px] text-white rounded-md">
              Continue
            </button>
            <div className="pt-3 text-sm flex items-center justify-center">
              Already have an accout?
              <Link href="" className="text-[#10A37F] p-1">
                Log in
              </Link>
            </div>
            <div className="pt-6 flex flex-row items-center justify-between">
              <div className="h-[1px] w-full bg-[#c2c8d0]"></div>
              <div className="text-xs px-2 ">OR</div>
              <div className="h-[1px] w-full bg-[#c2c8d0]"></div>
            </div>
            <div className="mt-6 w-full flex flex-col gap-1">
              <SocialLoginButton SocialName="Google" />
              <SocialLoginButton SocialName="GitHub" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center pb-6 pt-3 text-sm ">
        <Link href="" className="px-[10px] text-[#10A37F]">
          Terms of use
        </Link>
        <span>|</span>
        <Link href="" className="px-[10px] text-[#10A37F]">
          Privacy policy
        </Link>
      </div>
    </div>
  );
}
