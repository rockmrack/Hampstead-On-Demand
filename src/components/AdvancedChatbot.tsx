"use client"

import { useState, useRef, useEffect, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Loader2,
  Mic,
  MicOff,
  Image as ImageIcon,
  Paperclip,
  Phone,
  Star,
  Clock,
  CheckCheck,
  Sparkles,
  Volume2,
  VolumeX,
  Zap,
  TrendingUp,
  Shield,
  Award
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  suggestions?: ServiceSuggestion[]
  status?: 'sending' | 'sent' | 'read'
  sentiment?: 'urgent' | 'normal' | 'happy'
  imageUrl?: string
}

interface ServiceSuggestion {
  id: string
  title: string
  price: number | string
  category: string
  popular?: boolean
  urgent?: boolean
  rating?: number
}

// Enhanced service data with ratings and popularity
const serviceData = [
  { id: 'e1302833-87ae-4f2f-abc4-34dbff66f882', category: 'Plumbing & Heating', title: 'Boiler Service (Annual)', price: 120, rating: 4.9, popular: true, keywords: ['boiler', 'heating', 'gas', 'service', 'annual', 'cp12', 'safety'] },
  { id: '5feeadb9-61c2-4969-a642-576ca81e8575', category: 'Plumbing & Heating', title: 'Tap Repair / Replace', price: 130, rating: 4.8, keywords: ['tap', 'faucet', 'drip', 'leak', 'replace', 'repair'] },
  { id: 'f151ccfc-0b3c-422e-aafe-0ed073615b6b', category: 'Plumbing & Heating', title: 'Toilet Unblock', price: 160, rating: 4.7, urgent: true, keywords: ['toilet', 'blocked', 'clogged', 'unblock', 'bathroom'] },
  { id: '0fab8cc9-ec3b-4756-b2a1-e65af3d7bcb8', category: 'Plumbing & Heating', title: 'Radiator Bleed (All)', price: 110, rating: 4.9, keywords: ['radiator', 'bleed', 'heating', 'cold', 'warm'] },
  { id: '87acdde3-9571-4e3a-9a7a-f7c43aab615a', category: 'Plumbing & Heating', title: 'Leak Investigation', price: 120, rating: 4.8, urgent: true, keywords: ['leak', 'water', 'drip', 'pipe', 'investigation'] },
  { id: 'd24850fe-8739-4524-8ea0-e50926c92225', category: 'Plumbing & Heating', title: 'Gas Safety Cert (CP12)', price: 110, rating: 5.0, popular: true, keywords: ['gas', 'safety', 'certificate', 'landlord', 'cp12', 'legal'] },
  { id: '43f7fdb0-baca-4fbc-971c-d90d8eb9ed21', category: 'Electrical', title: 'Replace Socket / Switch', price: 110, rating: 4.9, keywords: ['socket', 'switch', 'plug', 'electrical', 'outlet'] },
  { id: 'c43c4f81-9677-4d24-ab1c-12417fb2e9a8', category: 'Electrical', title: 'Hang Chandelier', price: 180, rating: 4.8, keywords: ['chandelier', 'light', 'hanging', 'ceiling', 'fixture'] },
  { id: '222f035d-b76a-4bc4-bfd2-09460b8d0955', category: 'Electrical', title: 'EICR (1-2 Bed Flat)', price: 200, rating: 5.0, popular: true, keywords: ['eicr', 'electrical', 'safety', 'certificate', 'landlord', 'inspection'] },
  { id: '7b98a1c5-8c4e-48ec-a734-1e79e00904c6', category: 'Electrical', title: 'Fault Finding', price: 120, rating: 4.7, urgent: true, keywords: ['fault', 'electrical', 'tripping', 'fuse', 'power'] },
  { id: '492186ba-41be-41e3-9c2e-984a801c0c15', category: 'Handyman', title: 'General Handyman (1 Hour)', price: 95, rating: 4.9, popular: true, keywords: ['handyman', 'general', 'repair', 'fix', 'odd jobs', 'help'] },
  { id: '87cb3cd3-29a0-4164-ac21-1a0970447fec', category: 'Handyman', title: 'TV Wall Mounting', price: 140, rating: 4.9, popular: true, keywords: ['tv', 'television', 'wall', 'mount', 'bracket', 'hanging'] },
  { id: '2726a07b-ada1-48a8-839a-d47a63c60f1f', category: 'Handyman', title: 'Hang Mirror / Art', price: 85, rating: 4.8, keywords: ['mirror', 'art', 'picture', 'frame', 'hang', 'wall'] },
  { id: '18269f73-8e7c-4bfa-89e6-874669d4a302', category: 'Handyman', title: 'Flatpack Assembly (Large)', price: 180, rating: 4.7, keywords: ['flatpack', 'ikea', 'assembly', 'furniture', 'wardrobe', 'bed'] },
  { id: 'bf04c567-a58a-47af-aaf1-f2d6a4cd9a60', category: 'Locksmith & Security', title: 'Gain Entry (Standard)', price: 140, rating: 4.9, urgent: true, keywords: ['lockout', 'locked out', 'entry', 'keys', 'emergency'] },
  { id: 'a995b48b-6094-49de-aa27-f5a04514ea23', category: 'Locksmith & Security', title: 'Change Rim Cylinder (Yale)', price: 110, rating: 4.8, keywords: ['lock', 'change', 'yale', 'cylinder', 'keys'] },
  { id: '11111111-1111-1111-1111-111111111111', category: 'Housekeeping', title: 'The Hampstead Deep Clean (Flat)', price: 250, rating: 5.0, popular: true, keywords: ['deep clean', 'cleaning', 'flat', 'spring clean', 'thorough'] },
  { id: '22222222-2222-2222-2222-222222222222', category: 'Housekeeping', title: 'The Hampstead Deep Clean (House)', price: 450, rating: 5.0, popular: true, keywords: ['deep clean', 'cleaning', 'house', 'spring clean', 'thorough'] },
  { id: '88888888-8888-8888-8888-888888888888', category: 'Gardens & Outdoors', title: 'Lawn Mowing & Edging', price: 60, rating: 4.8, keywords: ['lawn', 'mowing', 'grass', 'garden', 'cut', 'edge'] },
  { id: 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', category: 'Gardens & Outdoors', title: 'Jet Wash Patio (Up to 20sqm)', price: 'From £250', rating: 4.9, popular: true, keywords: ['patio', 'jet wash', 'pressure', 'clean', 'garden', 'path'] },
]

// Detect sentiment from message
function detectSentiment(message: string): 'urgent' | 'normal' | 'happy' {
  const urgentWords = /emergency|urgent|asap|now|immediately|broken|burst|flood|help|stuck|locked/i
  const happyWords = /thank|thanks|great|perfect|excellent|wonderful|awesome/i

  if (urgentWords.test(message)) return 'urgent'
  if (happyWords.test(message)) return 'happy'
  return 'normal'
}

// Find matching services with enhanced scoring
function findMatchingServices(query: string): ServiceSuggestion[] {
  const queryLower = query.toLowerCase()
  const words = queryLower.split(/\s+/)
  const sentiment = detectSentiment(query)

  const scored = serviceData.map(service => {
    let score = 0

    // Title match
    if (service.title.toLowerCase().includes(queryLower)) score += 15

    // Category match
    if (service.category.toLowerCase().includes(queryLower)) score += 8

    // Keyword matches
    for (const keyword of service.keywords) {
      for (const word of words) {
        if (word.length > 2 && keyword.includes(word)) score += 4
        if (keyword === word) score += 7
      }
    }

    // Boost urgent services for urgent queries
    if (sentiment === 'urgent' && service.urgent) score += 10

    // Boost popular services
    if (service.popular) score += 3

    // Boost highly rated services
    if (service.rating && service.rating >= 4.9) score += 2

    return { ...service, score }
  })

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ id, title, price, category, popular, urgent, rating }) => ({
      id,
      title,
      price,
      category,
      popular,
      urgent,
      rating
    }))
}

// Generate enhanced AI response
function generateResponse(userMessage: string, conversationHistory: Message[]): { content: string; suggestions: ServiceSuggestion[] } {
  const messageLower = userMessage.toLowerCase()
  const suggestions = findMatchingServices(userMessage)
  const sentiment = detectSentiment(userMessage)
  const isReturningUser = conversationHistory.length > 4

  // Greeting responses with personalization
  if (/^(hi|hello|hey|good morning|good afternoon|good evening)/i.test(messageLower)) {
    const greetings = isReturningUser
      ? [
          "Welcome back! 👋 Great to see you again. How can I assist you today?",
          "Hello again! 😊 What can I help you with this time?",
          "Hi there! Nice to have you back. What do you need help with?"
        ]
      : [
          "Hello! 👋 Welcome to Hampstead Maintenance. I'm your AI assistant. How can I help make your property perfect today?",
          "Hi! 😊 I'm here to help you find the perfect service for your home. What do you need?",
          "Welcome! 🏠 I'm your 24/7 property maintenance assistant. What can I help you with?"
        ]

    return {
      content: greetings[Math.floor(Math.random() * greetings.length)],
      suggestions: []
    }
  }

  // Emergency handling with priority
  if (sentiment === 'urgent') {
    const emergencyServices = findMatchingServices(userMessage)
    return {
      content: "🚨 **EMERGENCY PRIORITY** 🚨\n\nI understand this is urgent! For immediate assistance:\n\n📞 **Call Now: 07459 345456**\n⚡ 30-60 minute response time\n\nMeanwhile, here are relevant services you can book:",
      suggestions: emergencyServices.length > 0 ? emergencyServices : [
        { id: 'bf04c567-a58a-47af-aaf1-f2d6a4cd9a60', title: 'Gain Entry (Standard)', price: 140, category: 'Locksmith & Security', urgent: true, rating: 4.9 },
        { id: 'f151ccfc-0b3c-422e-aafe-0ed073615b6b', title: 'Toilet Unblock', price: 160, category: 'Plumbing & Heating', urgent: true, rating: 4.7 },
      ]
    }
  }

  // Price inquiry with transparency
  if (/(how much|price|cost|quote|expensive|cheap|affordable)/i.test(messageLower)) {
    if (suggestions.length > 0) {
      return {
        content: `💰 **Fixed Price Guarantee** - No hidden fees!\n\nHere are our transparent prices for services matching your needs:`,
        suggestions
      }
    }
    return {
      content: "We pride ourselves on transparent, fixed pricing:\n\n✅ No hidden fees\n✅ No call-out charges\n✅ Price includes labor & materials\n✅ Same-day service available\n\nWhat type of service do you need? (e.g., plumbing, electrical, handyman)",
      suggestions: []
    }
  }

  // Booking with urgency options
  if (/(book|booking|schedule|appointment|available|when|today|tomorrow)/i.test(messageLower)) {
    if (suggestions.length > 0) {
      return {
        content: "📅 **Book Your Service**\n\nI can help you schedule:\n\n⚡ Same-day slots (subject to availability)\n🌅 Morning slots: 8am - 12pm\n🌆 Afternoon slots: 1pm - 6pm\n\nClick 'Book Now' on any service below:",
        suggestions
      }
    }
    return {
      content: "I'd love to help you book! We offer:\n\n• Same-day service (when available)\n• Morning & afternoon slots\n• Weekend availability\n• Emergency 30-60 min response\n\nWhat service do you need?",
      suggestions: []
    }
  }

  // Landlord specific with certifications
  if (/(landlord|tenant|rental|let|letting|property manager|hmo)/i.test(messageLower)) {
    return {
      content: "🏢 **Landlord Services**\n\nWe specialize in landlord compliance:\n\n✅ Gas Safety Certificates (CP12)\n✅ Electrical Certificates (EICR)\n✅ Property turnaround packages\n✅ HMO maintenance\n✅ Tenant-ready services\n\nAll with fast turnaround for re-letting:",
      suggestions: [
        { id: 'd24850fe-8739-4524-8ea0-e50926c92225', title: 'Gas Safety Cert (CP12)', price: 110, category: 'Plumbing & Heating', popular: true, rating: 5.0 },
        { id: '222f035d-b76a-4bc4-bfd2-09460b8d0955', title: 'EICR (1-2 Bed Flat)', price: 200, category: 'Electrical', popular: true, rating: 5.0 },
      ]
    }
  }

  // Service categories with popular options
  if (/(what services|what do you|categories|list|all services|everything)/i.test(messageLower)) {
    return {
      content: "🏠 **57 Premium Services Across 15 Categories:**\n\n• ⚙️ Plumbing & Heating\n• ⚡ Electrical\n• 🔧 Handyman (Most Popular!)\n• 🪚 Carpentry\n• 🎨 Painting & Decorating\n• 🏠 Roofing & Gutters\n• 🚰 Drainage\n• 🔐 Locksmith (30-60 min response!)\n• 🪟 Glazing\n• ❄️ Air Conditioning\n• 🏗️ Major Renovations\n• 🧹 Housekeeping\n• 🌳 Gardens & Outdoors\n\nWhat interests you?",
      suggestions: [
        { id: '492186ba-41be-41e3-9c2e-984a801c0c15', title: 'General Handyman (1 Hour)', price: 95, category: 'Handyman', popular: true, rating: 4.9 },
        { id: '87cb3cd3-29a0-4164-ac21-1a0970447fec', title: 'TV Wall Mounting', price: 140, category: 'Handyman', popular: true, rating: 4.9 },
        { id: '11111111-1111-1111-1111-111111111111', title: 'The Hampstead Deep Clean (Flat)', price: 250, category: 'Housekeeping', popular: true, rating: 5.0 },
      ]
    }
  }

  // Thank you with follow-up
  if (/(thank|thanks|cheers|ta|appreciate|grateful)/i.test(messageLower)) {
    return {
      content: "You're very welcome! 😊\n\nIs there anything else I can help you with?\n\n💡 **Pro tip:** Save our number: 07459 345456 for emergencies!",
      suggestions: []
    }
  }

  // Goodbye with callback
  if (/(bye|goodbye|see you|later|that's all|done)/i.test(messageLower)) {
    return {
      content: "Thanks for chatting! 👋\n\n**Remember:**\n✅ Same-day service available\n✅ Fixed transparent pricing\n✅ £10M insured & vetted pros\n\nWe're here 24/7 whenever you need us! 🏠",
      suggestions: []
    }
  }

  // Default with AI-matched suggestions
  if (suggestions.length > 0) {
    const hasPopular = suggestions.some(s => s.popular)
    const hasUrgent = suggestions.some(s => s.urgent)

    let prefix = "Based on what you've described, I recommend:"
    if (hasUrgent) prefix = "⚡ **Quick Response Available** - These services match your needs:"
    if (hasPopular) prefix = "⭐ **Popular Choices** - Our customers love these services:"

    return {
      content: prefix,
      suggestions
    }
  }

  // Intelligent fallback with context
  return {
    content: "I'd love to help! 🤖\n\nTry asking:\n\n• \"I need a plumber\"\n• \"My boiler isn't working\"\n• \"Book a deep clean\"\n• \"Locksmith near me\"\n• \"Handyman for TV mounting\"\n\n**Or browse all 57 services** in our catalog below! 👇",
    suggestions: []
  }
}

export function AdvancedChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! 👋 I'm your **AI Property Assistant** powered by Hampstead Maintenance.\n\n✨ I can help you:\n• Find the perfect service\n• Get instant quotes\n• Book same-day appointments\n• Answer questions 24/7\n\nWhat do you need help with today?",
      timestamp: new Date(),
      suggestions: [],
      status: 'read'
    }
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const recognitionRef = useRef<any>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
      setUnreadCount(0)
    }
  }, [isOpen])

  // Load chat history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('hampstead-chat-history')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (parsed.length > 1) {
          setMessages(parsed.map((m: any) => ({ ...m, timestamp: new Date(m.timestamp) })))
        }
      } catch (e) {
        console.error('Failed to load chat history')
      }
    }
  }, [])

  // Save chat history to localStorage
  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem('hampstead-chat-history', JSON.stringify(messages))
    }
  }, [messages])

  // Voice recognition setup
  useEffect(() => {
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = false
      recognitionRef.current.interimResults = false

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setInput(transcript)
        setIsListening(false)
      }

      recognitionRef.current.onerror = () => {
        setIsListening(false)
      }

      recognitionRef.current.onend = () => {
        setIsListening(false)
      }
    }
  }, [])

  const toggleVoiceInput = () => {
    if (!recognitionRef.current) {
      alert('Voice input not supported in your browser')
      return
    }

    if (isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
    } else {
      recognitionRef.current.start()
      setIsListening(true)
    }
  }

  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text.replace(/[*#]/g, '').replace(/\n/g, '. '))
      utterance.rate = 0.9
      utterance.pitch = 1
      utterance.onstart = () => setIsSpeaking(true)
      utterance.onend = () => setIsSpeaking(false)
      window.speechSynthesis.speak(utterance)
    }
  }

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setInput("I've uploaded an image of the issue")
        // In production, you'd upload to server here
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
      status: 'sending',
      sentiment: detectSentiment(input)
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Update message status to sent
    setTimeout(() => {
      setMessages(prev => prev.map(m =>
        m.id === userMessage.id ? { ...m, status: 'sent' as const } : m
      ))
    }, 300)

    // Simulate realistic typing delay based on response length
    const response = generateResponse(userMessage.content, messages)
    const typingDelay = Math.min(1500, 500 + response.content.length * 10)

    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.content,
        timestamp: new Date(),
        suggestions: response.suggestions,
        status: 'sent'
      }
      setMessages(prev => [...prev, assistantMessage])
      setIsTyping(false)

      // Update user message to read
      setMessages(prev => prev.map(m =>
        m.id === userMessage.id ? { ...m, status: 'read' as const } : m
      ))

      // Increment unread if chat is closed
      if (!isOpen) {
        setUnreadCount(prev => prev + 1)
      }
    }, typingDelay)
  }

  const handleQuickAction = (action: string) => {
    setInput(action)
    setTimeout(() => inputRef.current?.form?.requestSubmit(), 100)
  }

  return (
    <>
      {/* Advanced Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-24 md:bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="relative h-16 w-16 rounded-full shadow-2xl bg-gradient-to-br from-accent via-accent-light to-accent hover:scale-110 transition-all duration-300 group"
              aria-label="Open AI assistant"
            >
              {/* Pulse animation */}
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20"></span>

              {/* Unread badge */}
              {unreadCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 h-6 w-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white"
                >
                  {unreadCount}
                </motion.span>
              )}

              {/* Icon with sparkle */}
              <div className="relative">
                <MessageCircle className="h-7 w-7 text-white" />
                <Sparkles className="absolute -top-2 -right-2 h-4 w-4 text-yellow-300 animate-pulse" />
              </div>

              {/* Tooltip */}
              <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                💬 Chat with AI Assistant
              </span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Advanced Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 md:bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-md"
          >
            <Card className="flex flex-col h-[600px] max-h-[80vh] shadow-2xl border-2 overflow-hidden">
              {/* Premium Header */}
              <div className="relative flex items-center justify-between p-4 border-b bg-gradient-to-r from-primary via-primary to-accent text-white">
                {/* Animated background */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

                <div className="relative flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                      <Bot className="h-6 w-6" />
                    </div>
                    {/* Online indicator */}
                    <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 border-2 border-white rounded-full"></span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-lg">AI Assistant</h3>
                      <Sparkles className="h-4 w-4 text-yellow-300" />
                    </div>
                    <div className="flex items-center gap-2 text-xs opacity-90">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Online • Instant response</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center gap-2">
                  {isSpeaking && (
                    <Button
                      onClick={stopSpeaking}
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 hover:bg-white/20 text-white"
                    >
                      <VolumeX className="h-4 w-4" />
                    </Button>
                  )}
                  <Button
                    onClick={() => setIsOpen(false)}
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 hover:bg-white/20 text-white"
                    aria-label="Close chat"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Trust badges */}
              <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border-b flex items-center justify-around text-xs">
                <div className="flex items-center gap-1 text-blue-700">
                  <Shield className="h-3 w-3" />
                  <span className="font-medium">£10M Insured</span>
                </div>
                <div className="flex items-center gap-1 text-purple-700">
                  <Award className="h-3 w-3" />
                  <span className="font-medium">4.9★ Rated</span>
                </div>
                <div className="flex items-center gap-1 text-green-700">
                  <Zap className="h-3 w-3" />
                  <span className="font-medium">Same-Day</span>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
                {messages.map((message, idx) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex gap-2 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.role === 'user'
                          ? 'bg-gradient-to-br from-primary to-accent text-white shadow-md'
                          : 'bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-md'
                      }`}>
                        {message.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                      </div>
                      <div className={`rounded-2xl px-4 py-3 shadow-sm ${
                        message.role === 'user'
                          ? 'bg-gradient-to-br from-primary to-accent text-white rounded-br-md'
                          : 'bg-white border-2 rounded-bl-md'
                      }`}>
                        {/* Sentiment indicator for user messages */}
                        {message.role === 'user' && message.sentiment === 'urgent' && (
                          <div className="flex items-center gap-1 mb-1 text-xs font-semibold">
                            <Zap className="h-3 w-3" />
                            <span>Urgent</span>
                          </div>
                        )}

                        <p className="text-sm whitespace-pre-line leading-relaxed">{message.content}</p>

                        {/* Service Suggestions */}
                        {message.suggestions && message.suggestions.length > 0 && (
                          <div className="mt-3 space-y-2">
                            {message.suggestions.map((service) => (
                              <Link
                                key={service.id}
                                href={`/book/${service.id}`}
                                className="block group"
                                onClick={() => setIsOpen(false)}
                              >
                                <motion.div
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className="p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:from-blue-50 hover:to-purple-50 transition-all border-2 border-transparent hover:border-accent shadow-sm hover:shadow-md"
                                >
                                  <div className="flex justify-between items-start gap-2">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 mb-1">
                                        <p className="font-semibold text-sm text-gray-900">{service.title}</p>
                                        {service.popular && (
                                          <Badge className="bg-yellow-400 text-yellow-900 text-[10px] px-1.5 py-0">
                                            <TrendingUp className="h-2.5 w-2.5 mr-0.5" />
                                            Popular
                                          </Badge>
                                        )}
                                        {service.urgent && (
                                          <Badge className="bg-red-500 text-white text-[10px] px-1.5 py-0">
                                            <Zap className="h-2.5 w-2.5 mr-0.5" />
                                            Fast
                                          </Badge>
                                        )}
                                      </div>
                                      <p className="text-xs text-gray-500">{service.category}</p>
                                      {service.rating && (
                                        <div className="flex items-center gap-1 mt-1">
                                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                          <span className="text-xs font-medium text-gray-700">{service.rating}</span>
                                        </div>
                                      )}
                                    </div>
                                    <div className="text-right">
                                      <span className="font-bold text-accent text-base">{typeof service.price === 'number' ? `£${service.price}` : service.price}</span>
                                      <div className="text-[10px] text-gray-500 mt-0.5">Fixed Price</div>
                                    </div>
                                  </div>
                                  <div className="mt-2 pt-2 border-t border-gray-200 flex items-center justify-between text-xs">
                                    <span className="text-gray-600">Click to book →</span>
                                    <div className="flex items-center gap-1 text-green-600">
                                      <Clock className="h-3 w-3" />
                                      <span>Same-day</span>
                                    </div>
                                  </div>
                                </motion.div>
                              </Link>
                            ))}
                          </div>
                        )}

                        {/* Message status and timestamp */}
                        <div className={`flex items-center gap-1 mt-1 text-[10px] ${
                          message.role === 'user' ? 'text-white/70 justify-end' : 'text-gray-400'
                        }`}>
                          <span>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                          {message.role === 'user' && message.status && (
                            <CheckCheck className={`h-3 w-3 ${message.status === 'read' ? 'text-blue-300' : 'text-white/50'}`} />
                          )}
                        </div>

                        {/* Speak button for assistant messages */}
                        {message.role === 'assistant' && (
                          <Button
                            onClick={() => speakMessage(message.content)}
                            size="sm"
                            variant="ghost"
                            className="h-6 px-2 mt-2 text-xs hover:bg-gray-100"
                          >
                            <Volume2 className="h-3 w-3 mr-1" />
                            Listen
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Enhanced Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex gap-2 max-w-[85%]">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="rounded-2xl rounded-bl-md bg-white border-2 px-4 py-3 shadow-sm">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            <motion.span
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            />
                            <motion.span
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                              className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                            />
                            <motion.span
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                              className="w-2 h-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"
                            />
                          </div>
                          <span className="text-xs text-gray-500">AI is thinking...</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Smart Quick Actions */}
              {messages.length <= 2 && (
                <div className="px-4 py-3 border-t bg-white">
                  <div className="text-xs text-gray-500 mb-2 font-medium">💡 Quick actions:</div>
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {[
                      { icon: "⚡", text: "Emergency help", action: "I have an emergency" },
                      { icon: "🔧", text: "Handyman", action: "I need a handyman" },
                      { icon: "🚰", text: "Plumbing", action: "I need a plumber" },
                      { icon: "🧹", text: "Cleaning", action: "I need cleaning" },
                      { icon: "🏡", text: "Landlord", action: "I'm a landlord" },
                    ].map((item, idx) => (
                      <motion.button
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleQuickAction(item.action)}
                        className="flex items-center gap-1.5 px-3 py-2 text-xs bg-gradient-to-r from-gray-100 to-gray-50 rounded-full whitespace-nowrap hover:from-blue-50 hover:to-purple-50 transition-all border border-gray-200 hover:border-accent shadow-sm"
                      >
                        <span>{item.icon}</span>
                        <span className="font-medium">{item.text}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Advanced Input */}
              <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
                <div className="flex gap-2">
                  {/* Hidden file input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />

                  {/* Image upload button */}
                  <Button
                    type="button"
                    size="icon"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="shrink-0 hover:bg-accent hover:text-white transition-colors"
                    title="Upload image"
                  >
                    <ImageIcon className="h-4 w-4" />
                  </Button>

                  {/* Voice input button */}
                  <Button
                    type="button"
                    size="icon"
                    variant="outline"
                    onClick={toggleVoiceInput}
                    className={`shrink-0 transition-all ${isListening ? 'bg-red-500 text-white animate-pulse' : 'hover:bg-accent hover:text-white'}`}
                    title={isListening ? "Stop listening" : "Voice input"}
                  >
                    {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  </Button>

                  {/* Text input */}
                  <Input
                    ref={inputRef}
                    type="text"
                    placeholder={isListening ? "Listening..." : "Type your message..."}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 border-2 focus:border-accent transition-colors"
                    disabled={isListening}
                    aria-label="Chat message"
                  />

                  {/* Send button */}
                  <Button
                    type="submit"
                    size="icon"
                    disabled={!input.trim() || isTyping}
                    className="shrink-0 bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent shadow-md disabled:opacity-50"
                    aria-label="Send message"
                  >
                    {isTyping ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                {/* Voice listening indicator */}
                {isListening && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-xs text-red-600 flex items-center gap-2"
                  >
                    <div className="flex gap-1">
                      <motion.span animate={{ height: [4, 12, 4] }} transition={{ duration: 0.5, repeat: Infinity }} className="w-1 bg-red-500 rounded-full" />
                      <motion.span animate={{ height: [4, 12, 4] }} transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }} className="w-1 bg-red-500 rounded-full" />
                      <motion.span animate={{ height: [4, 12, 4] }} transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }} className="w-1 bg-red-500 rounded-full" />
                    </div>
                    <span className="font-medium">Listening... Speak now</span>
                  </motion.div>
                )}

                <div className="mt-2 text-[10px] text-gray-400 text-center">
                  Powered by AI • Instant responses • 100% secure
                </div>
              </form>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
