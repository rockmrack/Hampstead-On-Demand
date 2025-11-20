"use client"

import { useEffect, useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"
import { format } from "date-fns"

export default function BookingsPage() {
  const [bookings, setBookings] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClientComponentClient()

  useEffect(() => {
    const fetchBookings = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        setLoading(false)
        return
      }

      const { data, error } = await supabase
        .from('bookings')
        .select(`
          *,
          service:services(title, price)
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (data) setBookings(data)
      setLoading(false)
    }

    fetchBookings()
  }, [supabase])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading your bookings...</div>
      </div>
    )
  }

  return (
    <div className="container max-w-4xl py-12 px-4 mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">My Bookings</h1>
        <Button variant="outline" asChild>
          <Link href="/">Book New Service</Link>
        </Button>
      </div>

      {bookings.length === 0 ? (
        <Card className="text-center py-16">
          <CardContent>
            <div className="flex justify-center mb-4">
              <Calendar className="h-12 w-12 text-muted-foreground/50" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No bookings yet</h3>
            <p className="text-muted-foreground mb-6">You haven't made any service requests yet.</p>
            <Button asChild>
              <Link href="/">Browse Services</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {bookings.map((booking) => (
            <Card key={booking.id} className="overflow-hidden">
              <CardHeader className="bg-muted/40 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{booking.service?.title || 'Unknown Service'}</CardTitle>
                    <CardDescription>Ref: {booking.id.slice(0, 8)}</CardDescription>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize border ${
                    booking.status === 'confirmed' ? 'bg-green-100 text-green-800 border-green-200' :
                    booking.status === 'completed' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                    'bg-yellow-100 text-yellow-800 border-yellow-200'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid sm:grid-cols-3 gap-6 text-sm">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-foreground" />
                    <span>{format(new Date(booking.scheduled_date), "MMM d, yyyy")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="h-4 w-4 text-foreground" />
                    <span>{booking.scheduled_slot}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-foreground" />
                    <span>Hampstead, London</span>
                  </div>
                </div>
                
                {booking.customer_notes && (
                  <div className="mt-6 p-4 bg-muted/30 rounded-lg border text-sm">
                    <p className="font-medium mb-1 text-foreground">Your Notes:</p>
                    <p className="text-muted-foreground">{booking.customer_notes}</p>
                  </div>
                )}
                
                <div className="mt-6 flex justify-end border-t pt-4">
                   <p className="text-sm font-medium">Estimated Price: <span className="text-lg ml-2">£{booking.service?.price}</span></p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}