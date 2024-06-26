/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /
 * @type {string[]}
 */
export const authRoutes = ["/auth"];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string} 
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default page for both login and redirect
 * @type {string}
 */
export const DEFAULT_PAGE = "/";