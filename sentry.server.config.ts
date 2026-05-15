import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN =
  process.env.SENTRY_DSN ||
  process.env.NEXT_PUBLIC_SENTRY_DSN ||
  "https://54bf12d4aff570ffdbc83ad44386dbd9@o4511293704437760.ingest.de.sentry.io/4511395781935184";

Sentry.init({
  dsn: SENTRY_DSN,
  environment: process.env.NODE_ENV,
  enabled: process.env.NODE_ENV === "production",
  tracesSampleRate: 0.1,
  sendDefaultPii: false,
});
