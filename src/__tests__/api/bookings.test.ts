import { describe, it, expect } from 'vitest';
import { z } from 'zod';

// Test the booking validation schema
const bookingEmailSchema = z.object({
  serviceName: z.string().min(1, 'Service name is required').max(200),
  date: z.string().min(1, 'Date is required'),
  slot: z.enum(['Morning', 'Afternoon'], { 
    errorMap: () => ({ message: 'Slot must be Morning or Afternoon' }) 
  }),
  notes: z.string().max(1000).optional(),
  email: z.string().email('Invalid email address'),
});

describe('Booking API Validation', () => {
  it('validates correct booking data', () => {
    const validData = {
      serviceName: 'Boiler Service',
      date: '2024-01-15',
      slot: 'Morning',
      email: 'test@example.com',
    };

    const result = bookingEmailSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('rejects invalid email', () => {
    const invalidData = {
      serviceName: 'Boiler Service',
      date: '2024-01-15',
      slot: 'Morning',
      email: 'invalid-email',
    };

    const result = bookingEmailSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.email).toBeDefined();
    }
  });

  it('rejects invalid slot', () => {
    const invalidData = {
      serviceName: 'Boiler Service',
      date: '2024-01-15',
      slot: 'Evening',
      email: 'test@example.com',
    };

    const result = bookingEmailSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('rejects missing required fields', () => {
    const incompleteData = {
      serviceName: '',
      date: '',
      slot: 'Morning',
      email: 'test@example.com',
    };

    const result = bookingEmailSchema.safeParse(incompleteData);
    expect(result.success).toBe(false);
  });

  it('allows optional notes', () => {
    const dataWithNotes = {
      serviceName: 'Boiler Service',
      date: '2024-01-15',
      slot: 'Afternoon',
      email: 'test@example.com',
      notes: 'Please call before arriving',
    };

    const result = bookingEmailSchema.safeParse(dataWithNotes);
    expect(result.success).toBe(true);
  });

  it('rejects notes that are too long', () => {
    const dataWithLongNotes = {
      serviceName: 'Boiler Service',
      date: '2024-01-15',
      slot: 'Morning',
      email: 'test@example.com',
      notes: 'x'.repeat(1001),
    };

    const result = bookingEmailSchema.safeParse(dataWithLongNotes);
    expect(result.success).toBe(false);
  });
});
