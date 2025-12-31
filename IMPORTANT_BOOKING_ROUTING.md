# CRITICAL: Booking Routing Configuration

## Major Renovation Consultation - Special Routing Required

### Service Details
- **Service Name:** Full Property Renovation Consultation
- **Price:** FREE
- **Location:** Major Renovations category
- **Data Attribute:** `data-service-type="major-renovation-consultation"`
- **Button Attribute:** `data-requires-director="true"`

### CRITICAL REQUIREMENT

**This booking MUST be routed directly to the Director, NOT the dispatcher.**

### Why This Matters
- This is a £200k+ project consultation, not a £90 repair
- Sending a plumber or handyman to discuss a basement renovation will:
  - Damage client trust
  - Lose the high-value project
  - Make the company look unprofessional

### Implementation Required
When implementing the booking system, ensure that:

1. Any booking with `data-requires-director="true"` triggers a DIFFERENT notification path
2. The notification should go to:
   - Director's email/phone
   - NOT the standard dispatcher queue
3. The booking confirmation should mention "Our Director will contact you directly"

### Code Implementation Hint
```javascript
// When processing booking
const button = event.target;
const requiresDirector = button.dataset.requiresDirector === "true";

if (requiresDirector) {
  // Route to director
  sendNotification(DIRECTOR_EMAIL, bookingDetails);
  sendSMS(DIRECTOR_PHONE, bookingDetails);
} else {
  // Route to standard dispatcher
  sendNotification(DISPATCHER_EMAIL, bookingDetails);
}
```

### Testing
Before going live, test that:
1. Booking "Full Property Renovation Consultation" sends notification to Director
2. Booking any standard service (e.g., "Fix Tap") sends to dispatcher
3. Client receives appropriate confirmation message

---

**Last Updated:** 2025-12-31
**Priority:** CRITICAL - Must be implemented before site launch
