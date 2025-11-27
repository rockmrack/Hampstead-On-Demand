/**
 * Chatbot Tests
 * Tests for chatbot response generation logic
 */

import { describe, it, expect } from 'vitest';

// Service matching keywords (extracted from Chatbot component)
const serviceKeywords: Record<string, string[]> = {
  plumbing: ['plumber', 'pipe', 'leak', 'tap', 'faucet', 'toilet', 'drain', 'water', 'boiler', 'heating'],
  electrical: ['electrician', 'electric', 'socket', 'outlet', 'light', 'wiring', 'fuse', 'power'],
  handyman: ['repair', 'fix', 'install', 'mount', 'shelf', 'door', 'furniture', 'assembly'],
  carpentry: ['wood', 'carpenter', 'cabinet', 'wardrobe', 'deck', 'fence', 'timber'],
  painting: ['paint', 'painter', 'wall', 'ceiling', 'decorator', 'wallpaper'],
  roofing: ['roof', 'gutter', 'tile', 'leak', 'chimney'],
  drainage: ['drain', 'blocked', 'clog', 'sewer', 'jetting'],
  locksmith: ['lock', 'key', 'door', 'security', 'break-in'],
  glazing: ['window', 'glass', 'glazier', 'double glazing', 'broken window'],
  ac: ['air conditioning', 'ac', 'hvac', 'cooling', 'air con'],
  renovation: ['renovation', 'remodel', 'extension', 'loft', 'bathroom renovation', 'kitchen renovation'],
  seasonal: ['gutter', 'boiler service', 'winter', 'summer'],
  landlord: ['landlord', 'tenant', 'rental', 'property management', 'certificate'],
  housekeeping: ['clean', 'cleaning', 'maid', 'housekeeping', 'deep clean', 'end of tenancy'],
  garden: ['garden', 'lawn', 'hedge', 'tree', 'landscaping', 'outdoor'],
};

// Intent detection patterns
const intents = {
  greeting: /^(hi|hello|hey|good morning|good afternoon|good evening)/i,
  pricing: /(price|cost|how much|fee|rate|charge|quote)/i,
  booking: /(book|schedule|appointment|available|when can|arrange)/i,
  emergency: /(emergency|urgent|asap|immediately|right now|today)/i,
  services: /(what services|what do you offer|what can you do|services available)/i,
  location: /(where|area|location|london|nw|hampstead|cover)/i,
  hours: /(hours|open|when are you|available time|working hours)/i,
  contact: /(contact|phone|email|call|reach)/i,
  thanks: /(thank|thanks|cheers|appreciate)/i,
};

function detectIntent(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  for (const [intent, pattern] of Object.entries(intents)) {
    if (pattern.test(lowerMessage)) {
      return intent;
    }
  }
  
  return 'general';
}

function findMatchingCategories(message: string): string[] {
  const lowerMessage = message.toLowerCase();
  const matchedCategories: string[] = [];

  for (const [category, keywords] of Object.entries(serviceKeywords)) {
    if (keywords.some((keyword) => lowerMessage.includes(keyword))) {
      matchedCategories.push(category);
    }
  }

  return matchedCategories;
}

describe('Chatbot Intent Detection', () => {
  it('should detect greeting intent', () => {
    expect(detectIntent('Hello')).toBe('greeting');
    expect(detectIntent('Hi there!')).toBe('greeting');
    expect(detectIntent('Good morning')).toBe('greeting');
    expect(detectIntent('Hey')).toBe('greeting');
  });

  it('should detect pricing intent', () => {
    expect(detectIntent('How much does it cost?')).toBe('pricing');
    expect(detectIntent('What is the price?')).toBe('pricing');
    expect(detectIntent('Can I get a quote?')).toBe('pricing');
  });

  it('should detect booking intent', () => {
    expect(detectIntent('I want to book a service')).toBe('booking');
    expect(detectIntent('Can I schedule an appointment?')).toBe('booking');
    expect(detectIntent('Are you available tomorrow?')).toBe('booking');
  });

  it('should detect emergency intent', () => {
    expect(detectIntent('This is an emergency!')).toBe('emergency');
    expect(detectIntent('I need help urgently')).toBe('emergency');
    expect(detectIntent('Can someone come today?')).toBe('emergency');
  });

  it('should detect services inquiry intent', () => {
    expect(detectIntent('What services do you offer?')).toBe('services');
    expect(detectIntent('What can you do?')).toBe('services');
  });

  it('should detect location intent', () => {
    expect(detectIntent('Do you cover Hampstead?')).toBe('location');
    expect(detectIntent('Where are you located?')).toBe('location');
    expect(detectIntent('Do you work in NW London?')).toBe('location');
  });

  it('should detect hours intent', () => {
    expect(detectIntent('What are your working hours?')).toBe('hours');
    expect(detectIntent('When are you open?')).toBe('hours');
  });

  it('should detect thanks intent', () => {
    expect(detectIntent('Thank you!')).toBe('thanks');
    expect(detectIntent('Thanks for the help')).toBe('thanks');
    expect(detectIntent('Cheers mate')).toBe('thanks');
  });

  it('should return general for unrecognized intents', () => {
    expect(detectIntent('asdfghjkl')).toBe('general');
    expect(detectIntent('random text')).toBe('general');
  });
});

describe('Chatbot Category Matching', () => {
  it('should match plumbing keywords', () => {
    const categories = findMatchingCategories('I have a leaky tap');
    expect(categories).toContain('plumbing');
  });

  it('should match electrical keywords', () => {
    const categories = findMatchingCategories('I need an electrician');
    expect(categories).toContain('electrical');
  });

  it('should match cleaning keywords', () => {
    const categories = findMatchingCategories('I need deep cleaning');
    expect(categories).toContain('housekeeping');
  });

  it('should match garden keywords', () => {
    const categories = findMatchingCategories('Can you mow my lawn?');
    expect(categories).toContain('garden');
  });

  it('should match landlord keywords', () => {
    const categories = findMatchingCategories("I'm a landlord needing a certificate");
    expect(categories).toContain('landlord');
  });

  it('should match multiple categories', () => {
    const categories = findMatchingCategories('I have a leak and need cleaning');
    expect(categories).toContain('plumbing');
    expect(categories).toContain('housekeeping');
  });

  it('should return empty for no match', () => {
    const categories = findMatchingCategories('hello how are you');
    expect(categories).toEqual([]);
  });
});
