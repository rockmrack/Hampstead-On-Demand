/**
 * Simple in-memory rate limiter for API routes
 * Uses a sliding window approach for fair rate limiting
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  rateLimitStore.forEach((entry, key) => {
    if (entry.resetAt < now) {
      rateLimitStore.delete(key);
    }
  });
}, 60000); // Clean every minute

export interface RateLimitConfig {
  /** Maximum number of requests allowed in the window */
  limit: number;
  /** Window size in milliseconds */
  windowMs: number;
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetAt: number;
}

const DEFAULT_CONFIG: RateLimitConfig = {
  limit: 100,
  windowMs: 60000, // 1 minute
};

/**
 * Check if a request should be rate limited
 * @param identifier - Unique identifier for the client (IP, user ID, etc.)
 * @param config - Rate limit configuration
 * @returns Rate limit result with remaining requests info
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig = DEFAULT_CONFIG
): RateLimitResult {
  const now = Date.now();
  const key = identifier;
  
  let entry = rateLimitStore.get(key);
  
  // Create new entry if none exists or window has expired
  if (!entry || entry.resetAt < now) {
    entry = {
      count: 0,
      resetAt: now + config.windowMs,
    };
    rateLimitStore.set(key, entry);
  }
  
  entry.count++;
  
  const remaining = Math.max(0, config.limit - entry.count);
  const success = entry.count <= config.limit;
  
  return {
    success,
    limit: config.limit,
    remaining,
    resetAt: entry.resetAt,
  };
}

/**
 * Get client identifier from request headers
 * @param request - The incoming request
 * @returns Client identifier string
 */
export function getClientIdentifier(request: Request): string {
  // Try various headers that might contain the real IP
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  
  // Use the first available identifier
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  if (realIp) {
    return realIp;
  }
  if (cfConnectingIp) {
    return cfConnectingIp;
  }
  
  // Fallback to a generic identifier
  return 'anonymous';
}

/**
 * Create rate limit headers for the response
 * @param result - Rate limit check result
 * @returns Headers object with rate limit info
 */
export function createRateLimitHeaders(result: RateLimitResult): Record<string, string> {
  return {
    'X-RateLimit-Limit': result.limit.toString(),
    'X-RateLimit-Remaining': result.remaining.toString(),
    'X-RateLimit-Reset': Math.ceil(result.resetAt / 1000).toString(),
  };
}

/**
 * Higher-order function to wrap API handlers with rate limiting
 * @param handler - The API handler function
 * @param config - Rate limit configuration
 * @returns Wrapped handler with rate limiting
 */
export function withRateLimit<T>(
  handler: (request: Request) => Promise<Response>,
  config?: RateLimitConfig
): (request: Request) => Promise<Response> {
  return async (request: Request): Promise<Response> => {
    const identifier = getClientIdentifier(request);
    const result = checkRateLimit(identifier, config);
    
    if (!result.success) {
      return new Response(
        JSON.stringify({
          error: 'Too many requests',
          message: 'Rate limit exceeded. Please try again later.',
          retryAfter: Math.ceil((result.resetAt - Date.now()) / 1000),
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            ...createRateLimitHeaders(result),
            'Retry-After': Math.ceil((result.resetAt - Date.now()) / 1000).toString(),
          },
        }
      );
    }
    
    // Call the original handler
    const response = await handler(request);
    
    // Add rate limit headers to the response
    const newHeaders = new Headers(response.headers);
    const rateLimitHeaders = createRateLimitHeaders(result);
    for (const [key, value] of Object.entries(rateLimitHeaders)) {
      newHeaders.set(key, value);
    }
    
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  };
}

// Preset configurations for different use cases
export const RATE_LIMIT_PRESETS = {
  /** Standard API routes - 100 requests per minute */
  standard: { limit: 100, windowMs: 60000 },
  /** Strict rate limit for sensitive operations - 10 requests per minute */
  strict: { limit: 10, windowMs: 60000 },
  /** Auth endpoints - 5 requests per minute to prevent brute force */
  auth: { limit: 5, windowMs: 60000 },
  /** Public read-only endpoints - 200 requests per minute */
  lenient: { limit: 200, windowMs: 60000 },
} as const;
