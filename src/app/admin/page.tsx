"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { format } from "date-fns"
import { Loader2, Check, X, MapPin, ShieldAlert } from "lucide-react"
import Link from "next/link"
import { Booking } from "@/types"
import Navbar from "@/components/Navbar"

export default function AdminDashboard() {
  const supabase = createClientComponentClient()
  const router = useRouter()
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null)

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
        return
      }
      const { data: profile } = await supabase
        .from('users')
        .select('is_admin')
        .eq('id', user.id)
        .single()
      
      if (!profile?.is_admin) {
        setIsAdmin(false)
        return
      }
      setIsAdmin(true)
    }
    checkAdmin()
  }, [supabase, router])

  const fetchBookings = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('bookings')
      .select(`
        *,
        user:users ( full_name, email, address, postcode, phone ),
        service:services ( title, price )
      `)
      .order('created_at', { ascending: false })

    if (error) {
      console.error(error)
    } else {
      setBookings(data || [])
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchBookings()
  }, [])

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from('bookings')
      .update({ status })
      .eq('id', id)

    if (error) {
      alert("Failed to update status")
    } else {
      fetchBookings()
    }
  }

  if (isAdmin === null || loading) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center p-12 pb-20 md:pb-12"><Loader2 className="animate-spin" /></div>
      </>
    )
  }

  if (isAdmin === false) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 pb-20 md:pb-0">
          <ShieldAlert className="h-16 w-16 text-destructive" />
          <h1 className="text-2xl font-bold">Access Denied</h1>
          <p className="text-muted-foreground">You do not have admin privileges.</p>
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </>
    )
  }

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'confirmed': return 'default'
      case 'completed': return 'secondary'
      case 'cancelled': return 'destructive'
      default: return 'outline'
    }
  }

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12 pb-20 md:pb-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-2">
            <Button asChild variant="secondary">
                <Link href="/admin/reports">Staff Reports</Link>
            </Button>
            <Button onClick={fetchBookings} variant="outline">Refresh</Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th className="p-4 font-medium text-muted-foreground">Date</th>
                  <th className="p-4 font-medium text-muted-foreground">Customer</th>
                  <th className="p-4 font-medium text-muted-foreground">Service</th>
                  <th className="p-4 font-medium text-muted-foreground">Status</th>
                  <th className="p-4 font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-muted/30 transition-colors">
                    <td className="p-4">
                      <div className="font-medium">{format(new Date(booking.scheduled_date), 'MMM d, yyyy')}</div>
                      <div className="text-sm text-muted-foreground">{booking.scheduled_slot}</div>
                    </td>
                    <td className="p-4">
                      <div className="font-medium">{booking.user?.full_name || 'Unknown'}</div>
                      <div className="text-sm text-muted-foreground">{booking.user?.phone}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin size={12} />
                        {booking.user?.postcode}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="font-medium">{booking.service?.title}</div>
                      <div className="text-sm text-muted-foreground">£{booking.service?.price}</div>
                      {booking.photo_url && (
                        <a
                          href={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/booking-photos/${booking.photo_url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary text-xs underline mt-1 block hover:text-primary/80"
                        >
                          View Photo
                        </a>
                      )}
                    </td>
                    <td className="p-4">
                      <Badge variant={getStatusVariant(booking.status)}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        {booking.status === 'pending' && (
                          <>
                            <Button size="sm" className="h-8 w-8 p-0" onClick={() => updateStatus(booking.id, 'confirmed')}>
                              <Check size={16} />
                            </Button>
                            <Button size="sm" variant="destructive" className="h-8 w-8 p-0" onClick={() => updateStatus(booking.id, 'cancelled')}>
                              <X size={16} />
                            </Button>
                          </>
                        )}
                        {booking.status === 'confirmed' && (
                          <Button size="sm" variant="outline" onClick={() => updateStatus(booking.id, 'completed')}>
                            Mark Complete
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {bookings.length === 0 && (
              <div className="p-12 text-center text-muted-foreground">No bookings found.</div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
    </>
  )
}
