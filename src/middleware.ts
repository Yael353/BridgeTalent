import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all paths except for the ones starting with _next, api, and static files
  matcher: ["/", "/(en|sv)/:path*"],
};
