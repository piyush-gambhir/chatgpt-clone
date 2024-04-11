import { useSession } from "next-auth/react";
import useModal from "@/hooks/use-modal";
export const useCurrentUser = () => {
  const session = useSession();
  return session.data?.user;
};
