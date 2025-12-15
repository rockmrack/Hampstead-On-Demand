import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || "",
  
  // Only enable if DSN is configured
  enabled: !!process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Performance Monitoring
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,

  // Session Replay (reduced in production to save costs)
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  // Environment
  environment: process.env.NODE_ENV,

  // Debug mode in development
  debug: process.env.NODE_ENV === "development",

  // Ignore common non-actionable errors
  ignoreErrors: [
    // Browser extensions
    /chrome-extension/,
    /moz-extension/,
    // Network errors that are often user-side
    "Network request failed",
    "Failed to fetch",
    "Load failed",
    // AbortController cancellations
    "AbortError",
    // React hydration mismatches (often caused by browser extensions)
    "Hydration failed",
    "There was an error while hydrating",
  ],

  // Sanitize sensitive data
  beforeSend(event) {
    // Remove sensitive data from errors
    if (event.request?.cookies) {
      event.request.cookies = {};
    }
    if (event.request?.headers) {
      delete event.request.headers["authorization"];
      delete event.request.headers["cookie"];
    }
    return event;
  },
});
