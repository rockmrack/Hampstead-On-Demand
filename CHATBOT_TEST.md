# Advanced Chatbot - Testing Guide

## ✅ Chat Button Should Be Visible

The chat button is a **gold/bronze circular button** located in the bottom-right corner of the screen.

### Visual Characteristics:
- **Size:** 64px × 64px (16rem)
- **Color:** Gold gradient (#C19A5B to #D4AF6A)
- **Border:** 4px white border
- **Position:** Bottom-right corner
  - Mobile: 96px from bottom (above mobile nav)
  - Desktop: 24px from bottom
  - 24px from right edge
- **Effects:**
  - Pulsing animation (subtle ping effect)
  - Sparkle icon in top-right
  - Scales up on hover
  - White tooltip on hover: "💬 Chat with AI Assistant"

### Z-Index: 9999
This is the HIGHEST z-index in the app, ensuring it's always visible above:
- Navigation (z-50)
- Modals
- Other overlays

## 🔍 Troubleshooting

### If you DON'T see the button:

1. **Check Browser Console** (F12):
   - Look for JavaScript errors
   - Check if component is mounting

2. **Verify Page Load**:
   - Refresh the page (Ctrl+F5 for hard refresh)
   - Clear browser cache

3. **Check Element Inspector**:
   - Right-click → Inspect
   - Search for "AdvancedChatbot" in Elements tab
   - Button should have className: "fixed bottom-24 md:bottom-6 right-6 z-[9999]"

4. **Mobile View**:
   - Button is positioned ABOVE the mobile bottom navigation
   - Should be at `bottom: 6rem` on mobile (96px)

## 🎯 Testing the Chat Features

Once the button is visible and you click it:

### Basic Features:
- [x] Chat window opens
- [x] AI responds to messages
- [x] Service suggestions appear
- [x] Can type and send messages

### Advanced Features to Test:

#### 1. Voice Input 🎤
- Click the microphone icon
- Allow microphone access when prompted
- Speak your query (e.g., "I need a plumber")
- Should transcribe your speech to text

#### 2. Image Upload 📸
- Click the image icon
- Select an image file
- Should auto-fill message: "I've uploaded an image of the issue"

#### 3. Text-to-Speech 🔊
- Send a message and get AI response
- Click "Listen" button on AI messages
- Should speak the response out loud

#### 4. Smart Suggestions
- Type: "I have an emergency"
- Should show 🚨 priority badge and emergency phone number
- Should suggest urgent services

#### 5. Service Recommendations
- Type: "I need a plumber"
- Should show 3 plumbing services with:
  - Service name & price
  - Star rating
  - Category
  - "Popular" or "Fast" badges
  - "Click to book" button

#### 6. Persistence
- Have a conversation
- Close the browser
- Re-open the same page
- Chat history should be restored

#### 7. Unread Counter
- Close chat window
- Wait for AI to respond
- Red badge with number should appear on button

## 📊 Expected Behavior

### Smart Queries to Test:
1. **"Emergency help"** → Shows 🚨 priority, phone number, urgent services
2. **"I'm a landlord"** → Shows compliance certificates (CP12, EICR)
3. **"How much for cleaning?"** → Shows cleaning services with fixed prices
4. **"Thank you"** → Polite response with pro tip
5. **"What services do you offer?"** → Lists all 15 categories

### UI Elements to Verify:
- ✅ Trust badges: £10M Insured, 4.9★ Rated, Same-Day
- ✅ Online status indicator (green dot)
- ✅ Typing indicator (bouncing dots)
- ✅ Read receipts (double check marks)
- ✅ Message timestamps
- ✅ Gradient chat bubbles
- ✅ Quick action chips (first 2 messages only)

## 🐛 Known Limitations

1. **Voice Input**: Only works in Chrome/Edge (uses WebKit Speech Recognition)
2. **Text-to-Speech**: May not work on some mobile browsers
3. **Image Upload**: Currently just triggers message, actual upload requires backend

## 🚀 Next Steps

Once confirmed working:
1. ✅ Button is visible
2. ✅ Chat opens/closes smoothly
3. ✅ AI responds correctly
4. ✅ Service suggestions work
5. ⏳ Connect to real backend API (when ready)
6. ⏳ Implement actual image upload to server

---

**If you see the gold button in the bottom-right corner, the chatbot is working!** 🎉
