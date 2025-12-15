import { describe, it, expect } from 'vitest';
import { services } from '@/lib/data';

describe('Services Data', () => {
  it('should have services defined', () => {
    expect(services).toBeDefined();
    expect(Array.isArray(services)).toBe(true);
    expect(services.length).toBeGreaterThan(0);
  });

  it('should have valid UUIDs for all services', () => {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    services.forEach(service => {
      expect(service.id).toMatch(uuidRegex);
    });
  });

  it('should have all required fields for each service', () => {
    services.forEach(service => {
      expect(service).toHaveProperty('id');
      expect(service).toHaveProperty('category');
      expect(service).toHaveProperty('title');
      expect(service).toHaveProperty('description');
      expect(service).toHaveProperty('price');
      expect(service).toHaveProperty('duration');
      expect(service).toHaveProperty('features');
    });
  });

  it('should have non-negative prices for all services', () => {
    services.forEach(service => {
      expect(service.price).toBeGreaterThanOrEqual(0);
    });
  });

  it('should have at least one feature for each service', () => {
    services.forEach(service => {
      expect(service.features).toBeDefined();
      expect(Array.isArray(service.features)).toBe(true);
      expect(service.features.length).toBeGreaterThan(0);
    });
  });

  it('should have categories from expected list', () => {
    const expectedCategories = [
      'Plumbing & Heating',
      'Electrical',
      'Handyman',
      'Carpentry',
      'Painting & Decorating',
      'Roofing & Gutters',
      'Drainage',
      'Locksmith & Security',
      'Glazing',
      'Air Conditioning',
      'Major Renovations',
      'Seasonal & Lifestyle',
      'Landlord Services',
      'Housekeeping',
      'Gardens & Outdoors'
    ];
    
    const uniqueCategories = [...new Set(services.map(s => s.category))];
    
    uniqueCategories.forEach(category => {
      expect(expectedCategories).toContain(category);
    });
  });

  it('should have unique IDs', () => {
    const ids = services.map(s => s.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('should have prices in expected range (0-2500, 0 for consultations)', () => {
    services.forEach(service => {
      expect(service.price).toBeGreaterThanOrEqual(0);
      expect(service.price).toBeLessThanOrEqual(2500);
    });
  });

  it('should have duration in expected format', () => {
    const durationRegex = /^\d+\s*(mins?|hours?)$/i;
    services.forEach(service => {
      expect(service.duration).toMatch(durationRegex);
    });
  });

  it('should have at least 50 services', () => {
    expect(services.length).toBeGreaterThanOrEqual(50);
  });

  it('should have at least 10 categories', () => {
    const uniqueCategories = new Set(services.map(s => s.category));
    expect(uniqueCategories.size).toBeGreaterThanOrEqual(10);
  });
});
