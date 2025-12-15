import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/utils';

describe('Utils', () => {
  describe('cn (className merger)', () => {
    it('should merge class names', () => {
      const result = cn('class1', 'class2');
      expect(result).toContain('class1');
      expect(result).toContain('class2');
    });

    it('should handle conditional classes', () => {
      const result = cn('base', true && 'included', false && 'excluded');
      expect(result).toContain('base');
      expect(result).toContain('included');
      expect(result).not.toContain('excluded');
    });

    it('should handle undefined and null values', () => {
      const result = cn('base', undefined, null, 'other');
      expect(result).toContain('base');
      expect(result).toContain('other');
    });

    it('should merge tailwind classes correctly', () => {
      // tailwind-merge should resolve conflicting classes
      const result = cn('px-4', 'px-2');
      // The second class should win in tailwind-merge
      expect(result).toBe('px-2');
    });

    it('should handle empty input', () => {
      const result = cn();
      expect(result).toBe('');
    });

    it('should handle arrays of classes', () => {
      const result = cn(['class1', 'class2'], 'class3');
      expect(result).toContain('class1');
      expect(result).toContain('class2');
      expect(result).toContain('class3');
    });
  });
});
