import { z } from 'zod';

/**
 * Server-side environment variables schema
 * These are only available on the server and should not be exposed to the client
 */
const serverEnvSchema = z.object({
  RESEND_API_KEY: z.string().optional(),
  ADMIN_EMAIL: z.string().email().optional(),
  SENDER_EMAIL: z.string().email().optional(),
});

/**
 * Client-side environment variables schema
 * These are exposed to the client via NEXT_PUBLIC_ prefix
 */
const clientEnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url('Invalid Supabase URL'),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1, 'Supabase anon key is required'),
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),
});

/**
 * Validate server environment variables
 * Call this at application startup to ensure all required variables are set
 */
export function validateServerEnv() {
  const result = serverEnvSchema.safeParse(process.env);
  if (!result.success) {
    console.warn('⚠️ Server environment validation warnings:', result.error.flatten());
  }
  return result;
}

/**
 * Validate client environment variables
 * Call this at application startup
 */
export function validateClientEnv() {
  const clientEnv = {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  };
  
  const result = clientEnvSchema.safeParse(clientEnv);
  if (!result.success) {
    throw new Error(
      `❌ Invalid client environment variables:\n${JSON.stringify(result.error.flatten(), null, 2)}`
    );
  }
  return result.data;
}

/**
 * Get typed server environment variables
 */
export function getServerEnv() {
  return {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    SENDER_EMAIL: process.env.SENDER_EMAIL,
  };
}

/**
 * Get typed client environment variables
 */
export function getClientEnv() {
  return {
    SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  };
}
