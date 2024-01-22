"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import * as z from "zod";

import LoginInput from "@/components/auth/login-input";
import SocialLoginButton from "@/components/auth/social-login-button";
import AuthButton from "@/components/auth/auth-button";
import FormSuccess from "@/components/auth/form-success";
import FormError from "@/components/auth/form-error";

import { register } from "@/actions/register";

import { RegisterSchema } from "@/schemas";

type Props = {};

export default function SignUpForm({}: Props) {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [currentStep, setCurrentStep] = useState(0);
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <div className="p-20 ">
      {currentStep === 0 && (
        <div className="w-[400px] px-10 flex flex-col items-center justify-center">
          <div className="w-full pt-10 pb-6 flex justify-center">
            <h1 className="mt-6 text-3xl font-bold">Create your account</h1>
          </div>
          <div className="w-full flex flex-col">
            <div className="">
              <LoginInput
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    email: e.target.value,
                  })
                }
                value={credentials.email}
                label="Email address"
                type="email"
              />
            </div>
            <AuthButton onClick={() => setCurrentStep(1)}>Continue</AuthButton>

            <div className="pt-3 text-sm flex items-center justify-center">
              Already have an account?
              <Link href="/auth/signin" className="text-[#10A37F] p-1">
                Sign in
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
      )}
      {currentStep === 1 && (
        <div className="w-[400px] px-10 flex flex-col items-center justify-center">
          <div className="w-full pt-10 pb-6 flex justify-center">
            <h1 className="mt-6 text-3xl font-bold">Enter your details</h1>
          </div>
          <div className="w-full flex flex-col">
            <div className="flex flex-col gap-3">
              <LoginInput
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    name: e.target.value,
                  })
                }
                value={credentials.name}
                label="Name"
                type="text"
              />
              <LoginInput
                onChange={() => {}}
                value={credentials.email}
                label="Email address"
                type="email"
                disabled={isPending}
                editable={false}
                onEditButtonClick={() => {
                  setError("");
                  setSuccess("");
                  setCredentials({
                    ...credentials,
                    name: "",
                    password: "",
                  });
                  setCurrentStep(0);
                }}
              />
              <LoginInput
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    password: e.target.value,
                  })
                }
                value={credentials.password}
                label="Password"
                type="password"
                autofill={false}
              />
            </div>
            <AuthButton
              onClick={() => onSubmit(credentials)}
              className="mt-4 bg-[#10A37F] h-[52px] text-white rounded-md text-base font-medium"
            >
              Continue
            </AuthButton>
            <FormError message={error} />
            <FormSuccess message={success} />
            <div className="pt-3 text-sm flex items-center justify-center">
              Don&apos;t have an account?
              <Link href="/auth/signin" className="text-[#10A37F] p-1">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
