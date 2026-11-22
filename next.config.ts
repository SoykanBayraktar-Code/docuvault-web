import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { withSentryConfig } from "@sentry/nextjs";
import { withContentCollections } from "@content-collections/next";
import path from "path";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  poweredByHeader: false,
  compress: true,
  // DocuVault's web pages moved to woowcode.com (22.11.2026). Every page here
  // redirects permanently to its counterpart there; link.appdocuvault.com (the
  // share-link viewer) is a separate project and keeps working.
  async redirects() {
    const base = "https://www.woowcode.com/apps/docuvault";
    return [
      { source: "/en/privacy", destination: `${base}/privacy`, permanent: true },
      { source: "/privacy", destination: `${base}/gizlilik`, permanent: true },
      { source: "/tr/privacy", destination: `${base}/gizlilik`, permanent: true },
      { source: "/en/terms", destination: `${base}/terms`, permanent: true },
      { source: "/terms", destination: `${base}/kosullar`, permanent: true },
      { source: "/tr/terms", destination: `${base}/kosullar`, permanent: true },
      { source: "/:locale(en|tr)?/aydinlatma-metni", destination: `${base}/kvkk`, permanent: true },
      { source: "/:locale(en|tr)?/kvkk", destination: `${base}/kvkk`, permanent: true },
      { source: "/", destination: base, permanent: true },
      { source: "/:path((?!_next|api).*)", destination: base, permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*\\.(webp|avif|png|jpg|jpeg|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

// Wrapping order:
//   next-intl must be the *innermost* plugin so its turbopack rules attach
//   directly to the config. Sentry then wraps that, and Content Collections
//   sits on the outside as its own build step (it's a Next.js plugin only by
//   convention — it doesn't compose into the runtime config).
const withIntl = withNextIntl(nextConfig);
const withSentry = withSentryConfig(withIntl, {
  org: "docuvault",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  sourcemaps: {
    disable: false,
  },
});

export default withContentCollections(withSentry as NextConfig);
