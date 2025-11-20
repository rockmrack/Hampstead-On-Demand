"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { Loader2, Upload } from "lucide-react"

// Mock data (replace with DB fetch)
const services = [
  { id: '1', title: 'Replace Kitchen Tap', price: 120 },
  { id: '2', title: 'Unblock Sink', price: 85 },
  { id: '3', title: 'Boiler Service', price: 90 },
  { id: '4', title: 'General Handyman (1 Hour)', price: 85 },
]

export async function generateMetadata({ params }: { params: { id: string } }) {
  const service = services.find(s => s.id === params.id)
  if (!service) return { title: 'Service Not Found' }
  
  return {
    title: `Book ${service.title} in Hampstead | Fixed Price £${service.price}`,
    description: `Instant booking for ${service.title}. Local, trusted, and fixed price. No call-out fees.`
  }
}

export default function BookingPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [slot, setSlot] = useState<"Morning" | "Afternoon">("Morning")
  const [notes, setNotes] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<any>(null)

  const service = services.find(s => s.id === params.id)

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        // Redirect to login if not authenticated
        // router.push('/login') // Uncomment in production
      }
      setUser(user)
    }
    getUser()
  }, [supabase, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!date || !service) return

    setLoading(true)

    try {
      let photoUrl = null

      // Upload photo if exists
      if (file) {
        const fileExt = file.name.split('.').pop()
        const fileName = `${Math.random()}.${fileExt}`
        const { data, error: uploadError } = await supabase.storage
          .from('booking-photos')
          .upload(fileName, file)

        if (uploadError) throw uploadError
        if (data) {
            photoUrl = data.path
        }
      }

      // Create Booking
      const { error: bookingError } = await supabase
        .from('bookings')
        .insert({
          user_id: user?.id, // In real app, ensure user is logged in
          service_id: service.id, // In real app, use UUIDs
          scheduled_date: date.toISOString(),
          scheduled_slot: slot,
          customer_notes: notes,
          photo_url: photoUrl,
          status: 'pending'
        })

      if (bookingError) {
          // For demo purposes, if table doesn't exist or RLS fails, we might just log it
          console.error(bookingError)
          alert("Failed to book. Please try again.")
      } else {
          // Send Email Notification (via API)
          await fetch('/api/bookings', {
            method: 'POST',
            body: JSON.stringify({
              serviceName: service.title,
              date: date,
              slot,
              notes,
              email: user?.email
            })
          })
          
          alert("Booking Requested! We will confirm shortly.")
          router.push('/bookings')
      }

    } catch (error) {
      console.error(error)
      alert("An error occurred.")
    } finally {
      setLoading(false)
    }
  }

  if (!service) return <div>Service not found</div>

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Request Booking</h1>
      <p className="text-gray-600 mb-8">
        {service.title} - <span className="font-bold text-primary">£{service.price}</span>
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Date Selection */}
        <div className="space-y-4">
          <h3 className="font-medium text-lg">1. Select a Date</h3>
          <div className="border rounded-md p-4 inline-block bg-white">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              disabled={(date) => date < new Date()} 
            />
          </div>
        </div>

        {/* Slot Selection */}
        <div className="space-y-4">
          <h3 className="font-medium text-lg">2. Select a Time Slot</h3>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setSlot("Morning")}
              className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                slot === "Morning"
                  ? "border-primary bg-blue-50 text-primary"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <span className="block font-bold">Morning</span>
              <span className="text-sm opacity-80">8:00 AM - 12:00 PM</span>
            </button>
            <button
              type="button"
              onClick={() => setSlot("Afternoon")}
              className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                slot === "Afternoon"
                  ? "border-primary bg-blue-50 text-primary"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <span className="block font-bold">Afternoon</span>
              <span className="text-sm opacity-80">12:00 PM - 5:00 PM</span>
            </button>
          </div>
        </div>

        {/* Photo Upload */}
        <div className="space-y-4">
          <h3 className="font-medium text-lg">3. Add a Photo (Optional)</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors relative">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center gap-2">
              <Upload className="text-gray-400" />
              <span className="text-sm text-gray-600">
                {file ? file.name : "Click to upload a photo of the issue"}
              </span>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="space-y-4">
          <h3 className="font-medium text-lg">4. Notes</h3>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Describe the issue... (e.g. 'The tap is dripping constantly')"
            className="w-full p-4 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full text-lg py-6" 
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Request Booking"
          )}
        </Button>
        <p className="text-center text-sm text-gray-500">
          No payment required today. You pay when the job is done.
        </p>
      </form>
    </div>
  )
}
