import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || "",

  // Only enable if DSN is configured
  enabled: !!process.env.SENTRY_DSN || !!process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Performance Monitoring - lower sample rate for server
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,

  // Environment
  environment: process.env.NODE_ENV,

  // Debug mode in development only
  debug: false,

  // Sanitize sensitive data from server errors
  beforeSend(event) {
    // Remove any potential PII or sensitive data
    if (event.request) {
      // Remove authorization headers
      if (event.request.headers) {
        delete event.request.headers["authorization"];
        delete event.request.headers["cookie"];
        delete event.request.headers["x-api-key"];
      }
      // Remove cookies
      if (event.request.cookies) {
        event.request.cookies = {};
      }
    }
    return event;
  },
});
