
import { auth } from "@/auth";

import {
  DEFAULT_PAGE,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";

export default auth((request) => {
  const isLoggedIn = !!request.auth;
  const isAuthRoute = authRoutes.includes(request.nextUrl.pathname);
  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname);
  const isApiAuthRoute = request.nextUrl.pathname.startsWith(apiAuthPrefix);

  if (isLoggedIn && isAuthRoute) {
    return Response.redirect(new URL(DEFAULT_PAGE, request.url));
  }

  if (!isLoggedIn && !isPublicRoute && !isApiAuthRoute) {
    return Response.redirect(new URL("/auth", request.url));
  }

  return null;
});

// export default auth((req) => {
//   const { nextUrl } = req;

//   const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
//   const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
//   const isAuthRoute = authRoutes.includes(nextUrl.pathname);

//   if (isApiAuthRoute) {
//     return null;
//   }

//   if (isAuthRoute) {
//     if (isLoggedIn) {
//       return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
//     }
//     return null;
//   }

//   if (!isLoggedIn && !isPublicRoute) {
//     let callbackUrl = nextUrl.pathname;
//     if (nextUrl.search) {
//       callbackUrl += nextUrl.search;
//     }

//     const encodedCallbackUrl = encodeURIComponent(callbackUrl);

//     return Response.redirect(
//       new URL(`/auth/?callbackUrl=${encodedCallbackUrl}`, nextUrl)
//     );
//   }

//   return null;
// });

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
