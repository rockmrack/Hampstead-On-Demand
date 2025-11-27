/**
 * Chat API Route
 * Handles chatbot conversations for Hampstead On-Demand
 * Provides intelligent responses about services, pricing, and bookings
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { services } from "@/lib/data";

// Request validation schema
const chatRequestSchema = z.object({
  message: z.string().min(1).max(1000),
  conversationHistory: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string(),
      })
    )
    .optional(),
});

// Get unique categories from services
const categories = Array.from(new Set(services.map(s => s.category))).map(name => ({ name }));

// Service matching keywords
const serviceKeywords: Record<string, string[]> = {
  plumbing: ["plumber", "pipe", "leak", "tap", "faucet", "toilet", "drain", "water", "boiler", "heating"],
  electrical: ["electrician", "electric", "socket", "outlet", "light", "wiring", "fuse", "power"],
  handyman: ["repair", "fix", "install", "mount", "shelf", "door", "furniture", "assembly"],
  carpentry: ["wood", "carpenter", "cabinet", "wardrobe", "deck", "fence", "timber"],
  painting: ["paint", "painter", "wall", "ceiling", "decorator", "wallpaper"],
  roofing: ["roof", "gutter", "tile", "leak", "chimney"],
  drainage: ["drain", "blocked", "clog", "sewer", "jetting"],
  locksmith: ["lock", "key", "door", "security", "break-in"],
  glazing: ["window", "glass", "glazier", "double glazing", "broken window"],
  ac: ["air conditioning", "ac", "hvac", "cooling", "air con"],
  renovation: ["renovation", "remodel", "extension", "loft", "bathroom renovation", "kitchen renovation"],
  seasonal: ["gutter", "boiler service", "winter", "summer"],
  landlord: ["landlord", "tenant", "rental", "property management", "certificate"],
  housekeeping: ["clean", "cleaning", "maid", "housekeeping", "deep clean", "end of tenancy"],
  garden: ["garden", "lawn", "hedge", "tree", "landscaping", "outdoor"],
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
  
  return "general";
}

function findRelevantServices(message: string): typeof services {
  const lowerMessage = message.toLowerCase();
  const matchedCategories: string[] = [];

  // Find matching categories based on keywords
  for (const [category, keywords] of Object.entries(serviceKeywords)) {
    if (keywords.some((keyword) => lowerMessage.includes(keyword))) {
      matchedCategories.push(category);
    }
  }

  if (matchedCategories.length === 0) {
    return [];
  }

  // Find services in matched categories
  return services.filter((service) => {
    const categoryName = service.category.toLowerCase();
    return matchedCategories.some((cat) => categoryName.includes(cat));
  });
}

function formatServicesResponse(matchedServices: typeof services): string {
  if (matchedServices.length === 0) {
    return "";
  }

  const serviceList = matchedServices
    .slice(0, 5)
    .map((s) => `• **${s.title}** - £${s.price} (${s.duration})`)
    .join("\n");

  return `\n\nHere are some relevant services:\n${serviceList}`;
}

function generateResponse(message: string): string {
  const intent = detectIntent(message);
  const matchedServices = findRelevantServices(message);
  const servicesText = formatServicesResponse(matchedServices);

  switch (intent) {
    case "greeting":
      return `Hello! 👋 Welcome to Hampstead On-Demand. I'm here to help you with all your property maintenance needs in NW London. 

How can I assist you today? You can ask me about:
• Our services and pricing
• Booking an appointment
• Emergency repairs
• Coverage areas`;

    case "pricing":
      if (matchedServices.length > 0) {
        return `Here's the pricing information you requested:${servicesText}

All prices include VAT and our standard service guarantee. Would you like to book any of these services?`;
      }
      return `Our prices vary depending on the service. Here are some examples:

• **Plumbing** - from £110
• **Electrical** - from £110
• **Handyman** - from £85
• **Cleaning** - from £85
• **Gardening** - from £60

What specific service are you interested in? I can give you exact pricing.`;

    case "booking":
      return `I'd be happy to help you book a service! 📅

To proceed, please tell me:
1. What service do you need?
2. Your preferred date and time
3. Your postcode in NW London

Or you can visit our **Services** page to browse and book directly.${servicesText}`;

    case "emergency":
      return `🚨 **Emergency Service Available!**

We understand emergencies can't wait. Here's what to do:

1. **Call us directly** for fastest response
2. We offer same-day emergency services for:
   • Plumbing emergencies (burst pipes, flooding)
   • Electrical emergencies (power outages, safety hazards)
   • Locksmith services (lockouts, break-ins)
   • Glazing (broken windows, security)

Emergency callout rates apply. A technician can usually reach you within 1-2 hours.

What's your emergency?`;

    case "services":
      const categoryList = categories
        .slice(0, 8)
        .map((c) => `• ${c.name}`)
        .join("\n");
      return `We offer a wide range of property maintenance services in NW London! 🏠

**Our Main Categories:**
${categoryList}
...and more!

We have **57 different services** available. What type of work do you need done?`;

    case "location":
      return `📍 **Service Area: NW London**

We proudly serve the Hampstead area and surrounding NW London postcodes, including:
• Hampstead (NW3)
• Belsize Park (NW3)
• Swiss Cottage (NW3)
• St John's Wood (NW8)
• Primrose Hill (NW1)
• Camden (NW1)
• Kilburn (NW6)
• West Hampstead (NW6)

All our technicians are local to the area, ensuring quick response times. What's your postcode?`;

    case "hours":
      return `⏰ **Working Hours:**

**Standard Services:**
Monday - Friday: 8am - 6pm
Saturday: 9am - 4pm

**Emergency Services:**
Available 24/7 for urgent issues

You can book appointments online anytime, and we'll confirm your slot within 2 hours during business hours.`;

    case "contact":
      return `📞 **Contact Us:**

The best way to reach us is through our booking system on this website. You can also:

• Use this chat for quick questions
• Email us through the contact form
• Book directly on our Services page

How can I help you today?`;

    case "thanks":
      return `You're welcome! 😊 

Is there anything else I can help you with? Feel free to ask about our services, pricing, or to book an appointment anytime.`;

    default:
      if (matchedServices.length > 0) {
        return `I found some services that might help:${servicesText}

Would you like to:
• Get more details about any of these?
• Book one of these services?
• See other options?`;
      }
      return `Thanks for your message! I'm here to help with property maintenance in NW London. 

I can assist you with:
• **Finding the right service** for your needs
• **Pricing information** for any service
• **Booking appointments** at convenient times
• **Emergency repairs** (24/7 available)

What would you like to know more about?`;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request
    const result = chatRequestSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid request", details: result.error.issues },
        { status: 400 }
      );
    }

    const { message } = result.data;
    
    // Generate response
    const response = generateResponse(message);

    return NextResponse.json({
      message: response,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
