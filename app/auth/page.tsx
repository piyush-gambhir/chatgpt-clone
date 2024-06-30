import React from "react";

import OpenAIIconLogo from "@/components/ui/openai-icon-logo";
import SignInForm from "@/components/auth/sign-in-form";
import SignUpForm from "@/components/auth/sign-up-form";
import AuthFooter from "@/components/auth/auth-footer";

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div>
      <div className="h-full flex flex-col justify-between items-center">
        <div className="flex justify-center items-center pt-8">
          <OpenAIIconLogo className="h-12 w-12" />
        </div>
        {searchParams.screen_hint === "signup" ? (
          <SignUpForm />
        ) : (
          <SignInForm />
        )}
        <AuthFooter />
      </div>
    </div>
  );
}
