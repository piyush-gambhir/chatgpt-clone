import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
});

// import { PrismaAdapter } from "@auth/prisma-adapter";

// import { db } from "@/lib/db";
// import authConfig from "@/auth.config";
// import { getUserById } from "@/data/user";
// import { getAccountByUserId } from "@/data/account";

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
//   update,
// } = NextAuth({
//   pages: {
//     signIn: "/auth",
//     error: "/auth/error",
//   },

//   callbacks: {
//     async signIn({ user, account }) {
//       if (account?.provider !== "credentials") return true;
//       return true;
//     },
//     async session({ token, session }) {
//       if (token.sub && session.user) {
//         session.user.id = token.sub;
//       }

//       if (session.user) {
//         session.user.name = token.name;
//         session.user.email = token.email;
//         session.user.isOAuth = token.isOAuth as boolean;
//         session.user.isPlusUser = token.isPlusUser as boolean;
//       }

//       return session;
//     },
//     async jwt({ token }) {
//       if (!token.sub) return token;

//       const existingUser = await getUserById(token.sub);

//       if (!existingUser) return token;

//       const existingAccount = await getAccountByUserId(existingUser.id);

//       token.isOAuth = !!existingAccount;
//       token.name = existingUser.name;
//       token.email = existingUser.email;
//       token.isPlusUser = existingUser.isPlusUser;
//       return token;
//     },
//   },
//   adapter: PrismaAdapter(db),
//   session: { strategy: "jwt" },
//   ...authConfig,
// });
