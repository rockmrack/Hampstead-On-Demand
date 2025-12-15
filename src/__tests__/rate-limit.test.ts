import { describe, it, expect, beforeEach } from 'vitest';
import { checkRateLimit, getClientIdentifier, createRateLimitHeaders } from '@/lib/rate-limit';

describe('Rate Limit', () => {
  describe('checkRateLimit', () => {
    it('should allow requests within the limit', () => {
      const config = { limit: 5, windowMs: 60000 };
      const identifier = `test-${Date.now()}-1`;
      
      for (let i = 0; i < 5; i++) {
        const result = checkRateLimit(identifier, config);
        expect(result.success).toBe(true);
        expect(result.remaining).toBe(config.limit - i - 1);
      }
    });

    it('should block requests exceeding the limit', () => {
      const config = { limit: 3, windowMs: 60000 };
      const identifier = `test-${Date.now()}-2`;
      
      // Use up the limit
      for (let i = 0; i < 3; i++) {
        checkRateLimit(identifier, config);
      }
      
      // Next request should be blocked
      const result = checkRateLimit(identifier, config);
      expect(result.success).toBe(false);
      expect(result.remaining).toBe(0);
    });

    it('should track different identifiers separately', () => {
      const config = { limit: 2, windowMs: 60000 };
      const identifier1 = `test-${Date.now()}-3a`;
      const identifier2 = `test-${Date.now()}-3b`;
      
      // Use up limit for identifier1
      checkRateLimit(identifier1, config);
      checkRateLimit(identifier1, config);
      
      // identifier2 should still be allowed
      const result = checkRateLimit(identifier2, config);
      expect(result.success).toBe(true);
      expect(result.remaining).toBe(1);
    });

    it('should include correct limit info in result', () => {
      const config = { limit: 10, windowMs: 60000 };
      const identifier = `test-${Date.now()}-4`;
      
      const result = checkRateLimit(identifier, config);
      
      expect(result.limit).toBe(10);
      expect(result.remaining).toBe(9);
      expect(result.resetAt).toBeGreaterThan(Date.now());
    });
  });

  describe('getClientIdentifier', () => {
    it('should extract IP from x-forwarded-for header', () => {
      const mockRequest = {
        headers: {
          get: (name: string) => {
            if (name === 'x-forwarded-for') return '192.168.1.1, 10.0.0.1';
            return null;
          }
        }
      } as unknown as Request;
      
      expect(getClientIdentifier(mockRequest)).toBe('192.168.1.1');
    });

    it('should extract IP from x-real-ip header', () => {
      const mockRequest = {
        headers: {
          get: (name: string) => {
            if (name === 'x-real-ip') return '192.168.1.2';
            return null;
          }
        }
      } as unknown as Request;
      
      expect(getClientIdentifier(mockRequest)).toBe('192.168.1.2');
    });

    it('should return anonymous when no identifier available', () => {
      const mockRequest = {
        headers: {
          get: () => null
        }
      } as unknown as Request;
      
      expect(getClientIdentifier(mockRequest)).toBe('anonymous');
    });
  });

  describe('createRateLimitHeaders', () => {
    it('should create proper rate limit headers', () => {
      const result = {
        success: true,
        limit: 100,
        remaining: 95,
        resetAt: Date.now() + 60000,
      };
      
      const headers = createRateLimitHeaders(result);
      
      expect(headers['X-RateLimit-Limit']).toBe('100');
      expect(headers['X-RateLimit-Remaining']).toBe('95');
      expect(headers['X-RateLimit-Reset']).toBeDefined();
    });
  });
});
