import { getServerSession } from "next-auth";

export default async function getUser() {
  const user = async () => {
    "use server";
    const session = await getServerSession();
    return session?.user?.email || null;
  };
  return await user();
}
