import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except:
    // - /api, /_next, /_vercel, dynamic OG/icons, sitemap, robots, manifest
    // - static files with extensions (e.g. /logo.webp, /favicon.ico)
    "/((?!api|_next|_vercel|sitemap.xml|robots.txt|manifest.webmanifest|opengraph-image|twitter-image|icon|apple-icon|.*\\..*).*)",
  ],
};
