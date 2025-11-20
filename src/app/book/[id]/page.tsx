"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { format } from "date-fns"
import { Loader2, Upload, CheckCircle2, Star } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { services } from "@/lib/data"

const bookingSchema = z.object({
  date: z.date({
    required_error: "Please select a date",
  }),
  slot: z.enum(["Morning", "Afternoon"], {
    required_error: "Please select a time slot",
  }),
  notes: z.string().min(10, "Please provide a bit more detail about the issue"),
})

type BookingFormValues = z.infer<typeof bookingSchema>

export default function BookingPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<any>(null)

  const service = services.find(s => s.id === params.id)

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      slot: "Morning",
      notes: "",
    },
  })

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        // router.push('/login') // Uncomment in production
      }
      setUser(user)
    }
    getUser()
  }, [supabase, router])

  const onSubmit = async (data: BookingFormValues) => {
    if (!service) return

    setLoading(true)

    try {
      let photoUrl = null

      // Upload photo if exists
      if (file) {
        const fileExt = file.name.split('.').pop()
        const fileName = `${Math.random()}.${fileExt}`
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('booking-photos')
          .upload(fileName, file)

        if (uploadError) throw uploadError
        if (uploadData) {
            photoUrl = uploadData.path
        }
      }

      // Create Booking
      const { error: bookingError } = await supabase
        .from('bookings')
        .insert({
          user_id: user?.id,
          service_id: service.id,
          scheduled_date: data.date.toISOString(),
          scheduled_slot: data.slot,
          customer_notes: data.notes,
          photo_url: photoUrl,
          status: 'pending'
        })

      if (bookingError) {
          console.error(bookingError)
          toast.error("Failed to book. Please try again.")
      } else {
          // Send Email Notification (via API)
          await fetch('/api/bookings', {
            method: 'POST',
            body: JSON.stringify({
              serviceName: service.title,
              date: data.date,
              slot: data.slot,
              notes: data.notes,
              email: user?.email
            })
          })
          
          toast.success("Booking Requested!", {
            description: "We will confirm your appointment shortly."
          })
          router.push('/bookings')
      }

    } catch (error) {
      console.error(error)
      toast.error("An unexpected error occurred.")
    } finally {
      setLoading(false)
    }
  }

  if (!service) return <div className="p-12 text-center">Service not found</div>

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Complete your booking</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            You are booking <span className="font-semibold text-foreground">{service.title}</span>
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1fr_300px]">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Select Date & Time</CardTitle>
                <CardDescription>Choose a convenient slot for our team to arrive.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-center p-4 border rounded-lg bg-card">
                    <Calendar
                      mode="single"
                      selected={form.watch("date")}
                      onSelect={(date) => form.setValue("date", date as Date)}
                      disabled={(date) => date < new Date()}
                      className="rounded-md border shadow-sm"
                    />
                  </div>
                  {form.formState.errors.date && (
                    <p className="text-sm text-destructive text-center">{form.formState.errors.date.message}</p>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    {["Morning", "Afternoon"].map((slot) => (
                      <div
                        key={slot}
                        onClick={() => form.setValue("slot", slot as "Morning" | "Afternoon")}
                        className={cn(
                          "cursor-pointer rounded-lg border-2 p-4 hover:border-primary transition-all",
                          form.watch("slot") === slot ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-muted bg-card"
                        )}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold">{slot}</span>
                          {form.watch("slot") === slot && <CheckCircle2 className="h-4 w-4 text-primary" />}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {slot === "Morning" ? "8:00 AM - 12:00 PM" : "12:00 PM - 5:00 PM"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Job Details</CardTitle>
                <CardDescription>Help us prepare for the job.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Upload a Photo (Optional)
                  </label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:bg-muted/50 transition-colors relative cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {file ? file.name : "Click to upload a photo"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">Notes</label>
                  <Textarea
                    placeholder="Describe the issue... (e.g. 'The tap is dripping constantly')"
                    className="min-h-[120px]"
                    {...form.register("notes")}
                  />
                  {form.formState.errors.notes && (
                    <p className="text-sm text-destructive">{form.formState.errors.notes.message}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Service</span>
                  <span className="font-medium">{service.title}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium">
                    {form.watch("date") ? format(form.watch("date"), "MMM d, yyyy") : "Select date"}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Time</span>
                  <span className="font-medium">{form.watch("slot")}</span>
                </div>
                
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Standard Price</span>
                    <span className="font-bold text-lg text-muted-foreground line-through decoration-destructive/50">£{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center bg-primary/5 p-2 rounded-md -mx-2">
                    <div className="flex items-center gap-1.5">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold text-primary text-sm">Member Price</span>
                    </div>
                    <span className="font-bold text-xl text-primary">£{service.memberPrice}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full" 
                  size="lg" 
                  onClick={form.handleSubmit(onSubmit)}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Confirm Booking"
                  )}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  No payment required today. Pay on completion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
