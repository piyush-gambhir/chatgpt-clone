import { redirect } from "next/navigation";
import Link from "next/link";

import getUser from "@/lib/utils/getUser";

import OpenAILogo from "@components/openai-logo";

export default async function page() {
  const user = await getUser();
  if (user) {
    redirect("/");
  }

  return (
    <div className="w-full h-full md:grid md:grid-flow-col md:grid-cols-4 lg:grid-cols-5 ">
      <nav className="text-[#000] dark:text-[#fff] md:text-[#FE7600] md:dark:text-[#D292FF] left-0 top-8 flex w-full px-6 absolute md:top-[22px] md:px-6 lg:px-8">
        <h1 aria-label="ChatGPT by OpenAI">
          <div className="flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]">
            <div>
              ChatGPT<span className="text-3xl">●</span>
            </div>
          </div>
        </h1>
      </nav>

      <div className="hidden md:flex items-center w-full h-full col-span-2 lg:col-span-3 text-[#FE7600] dark:text-[#D292FF] px-6 lg:px-8 py-[22px]">
        <div className="flex flex-col">
          <h1 className="flex flex-col text-[32px] leading-[1.2] md:text-[40px]"></h1>
          <div className="flex flex-wrap"></div>
        </div>
      </div>

      <div className="h-full w-full dark:bg-black md:col-span-2 px-5 md:px-6 py-8 flex flex-col items-center justify-center text-black dark:text-white ">
        <div className="my-auto w-full flex flex-col justify-center items-center">
          <h2 className="text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8 font-semibold">
            Get Started
          </h2>
          <div className="items-center justify-center mt-5 w-full max-w-[440px] flex flex-row flex-wrap gap-4">
            <div className="w-full grid gap-x-3 gap-y-2 sm:grid-cols-2 sm:gap-y-0">
              <Link
                href="/api/auth/signin"
                className="w-full relative flex h-12 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]"
              >
                Login
              </Link>
              <Link
                href="/api/auth/signin"
                className="w-full relative flex h-12 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-center ">
          <div className="mb-3 flex items-center justify-center w-full text-[#cdcdcd]">
            <OpenAILogo className="" />
          </div>
          <div className="text-gray-500 flex flex-row text-xs py-3 ">
            <Link href="/" className="mx-3">
              <span className=" flex-nowrap">Terms of use</span>
            </Link>
            <span>|</span>
            <Link href="/" className="mx-3">
              <span className=" flex-nowrap">Privacy policy</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
