import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN =
  process.env.NEXT_PUBLIC_SENTRY_DSN ||
  "https://54bf12d4aff570ffdbc83ad44386dbd9@o4511293704437760.ingest.de.sentry.io/4511395781935184";

Sentry.init({
  dsn: SENTRY_DSN,
  environment: process.env.NODE_ENV,
  enabled: process.env.NODE_ENV === "production",

  // Performance — sample 10% of traces to stay within free tier
  tracesSampleRate: 0.1,

  // Session Replay disabled for KVKK/GDPR compliance — we never record user
  // screens, even on errors. Stack trace + breadcrumbs are enough.
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 0,

  // Strip identifying data before sending to Sentry
  sendDefaultPii: false,

  // Ignore noisy errors that don't indicate real issues
  ignoreErrors: [
    // Browser extensions
    "top.GLOBALS",
    "originalCreateNotification",
    "canvas.contentDocument",
    // Network blips
    "Network request failed",
    "NetworkError",
    "Failed to fetch",
    // Common browser quirks
    "ResizeObserver loop limit exceeded",
    "ResizeObserver loop completed with undelivered notifications",
    "Non-Error promise rejection captured",
  ],

  // Strip extension URLs from breadcrumbs
  denyUrls: [
    /extensions\//i,
    /^chrome:\/\//i,
    /^moz-extension:\/\//i,
    /^safari-extension:\/\//i,
  ],
});

// Track Next.js client-side navigations as Sentry transactions
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
