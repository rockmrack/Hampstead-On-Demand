# Hampstead On-Demand API Documentation

## Base URL

```
Production: https://hampstead-on-demand.vercel.app/api
Development: http://localhost:3000/api
```

## Authentication

All authenticated endpoints require a valid Supabase session. The auth token is automatically handled via cookies when using the web application.

---

## Endpoints

### POST /api/bookings

Create a new booking request and send confirmation emails.

#### Rate Limiting
- **Limit:** 100 requests per minute
- **Headers:** `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`

#### Request Body

```json
{
  "serviceName": "string (required, max 200 chars)",
  "date": "string (required, ISO date)",
  "slot": "Morning | Afternoon (required)",
  "notes": "string (optional, max 1000 chars)",
  "email": "string (required, valid email)"
}
```

#### Response

**Success (200)**
```json
{
  "success": true
}
```

**Validation Error (400)**
```json
{
  "error": "Invalid input",
  "details": {
    "fieldErrors": {},
    "formErrors": []
  }
}
```

**Rate Limit Exceeded (429)**
```json
{
  "error": "Too many requests",
  "message": "Please wait before submitting another booking."
}
```

**Server Error (500)**
```json
{
  "error": "Failed to send email"
}
```

---

### POST /api/chat

Send a message to the AI chatbot assistant.

#### Rate Limiting
- **Limit:** 200 requests per minute
- **Headers:** `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`

#### Request Body

```json
{
  "message": "string (required, 1-1000 chars)",
  "conversationHistory": [
    {
      "role": "user | assistant",
      "content": "string"
    }
  ]
}
```

#### Response

**Success (200)**
```json
{
  "message": "string (AI response)",
  "timestamp": "string (ISO datetime)"
}
```

**Validation Error (400)**
```json
{
  "error": "Invalid request",
  "details": []
}
```

**Rate Limit Exceeded (429)**
```json
{
  "error": "Too many requests",
  "message": "Please wait a moment before sending another message."
}
```

---

### GET /auth/callback

OAuth callback handler for Supabase authentication.

#### Query Parameters
- `code`: Authorization code from Supabase
- `next`: Redirect URL after authentication (default: `/`)

#### Response
Redirects to the specified `next` URL or `/` on success.

---

## Error Handling

All endpoints return consistent error responses:

```json
{
  "error": "Error type",
  "message": "Human-readable message",
  "details": {} // Optional additional info
}
```

### HTTP Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 400 | Bad Request - Invalid input |
| 401 | Unauthorized - Authentication required |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found |
| 429 | Too Many Requests - Rate limit exceeded |
| 500 | Internal Server Error |

---

## Rate Limiting

All API endpoints are rate-limited to prevent abuse:

| Endpoint | Limit | Window |
|----------|-------|--------|
| `/api/bookings` | 100 requests | 1 minute |
| `/api/chat` | 200 requests | 1 minute |

Rate limit information is included in response headers:
- `X-RateLimit-Limit`: Maximum requests allowed
- `X-RateLimit-Remaining`: Requests remaining in current window
- `X-RateLimit-Reset`: Unix timestamp when the limit resets
- `Retry-After`: Seconds to wait (only on 429 responses)

---

## Data Models

### Service

```typescript
interface Service {
  id: string;          // UUID
  category: string;    // Service category name
  title: string;       // Service title
  description: string; // Service description
  price: number;       // Price in GBP
  duration: string;    // e.g., "60 mins"
  features: string[];  // List of features included
}
```

### Booking

```typescript
interface Booking {
  id: string;           // UUID
  user_id: string;      // User UUID
  service_id: string;   // Service UUID
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  scheduled_date: string;  // ISO date
  scheduled_slot: 'Morning' | 'Afternoon';
  customer_notes?: string;
  photo_url?: string;
  created_at: string;   // ISO datetime
}
```

---

## Service Categories

1. Plumbing & Heating
2. Electrical
3. Handyman
4. Carpentry
5. Painting & Decorating
6. Roofing & Gutters
7. Drainage
8. Locksmith & Security
9. Glazing
10. Air Conditioning
11. Major Renovations
12. Seasonal & Lifestyle
13. Landlord Services
14. Housekeeping
15. Gardens & Outdoors

---

## Examples

### Create a Booking (cURL)

```bash
curl -X POST https://hampstead-on-demand.vercel.app/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "serviceName": "Boiler Service (Annual)",
    "date": "2025-01-15",
    "slot": "Morning",
    "email": "customer@example.com",
    "notes": "Please call before arriving"
  }'
```

### Chat with Assistant (cURL)

```bash
curl -X POST https://hampstead-on-demand.vercel.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "How much does a boiler service cost?"
  }'
```

---

## Changelog

### v1.0.0 (2025-12-15)
- Initial API release
- Booking endpoint with email notifications
- AI chatbot endpoint
- Rate limiting on all endpoints
