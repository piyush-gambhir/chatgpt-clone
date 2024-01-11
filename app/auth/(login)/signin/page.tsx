import OpenAIIconLogo from "@/components/ui/openai-icon-logo";
import SignInForm from "@/components/auth/sign-in-form";
import AuthFooter from "@/components/auth/auth-footer";

export default function SignIn() {
  return (
    <div className="h-full flex flex-col justify-between items-center">
      <div className="flex justify-center items-center pt-8">
        <OpenAIIconLogo className="h-8 w-8" />
      </div>
      <SignInForm />
      <AuthFooter />
    </div>
  );
}
