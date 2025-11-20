"use client"

import { useState, useEffect } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { Loader2, Check, X, MapPin } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const supabase = createClientComponentClient()
  const [bookings, setBookings] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const fetchBookings = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('bookings')
      .select(`
        *,
        users ( full_name, email, address, postcode, phone ),
        services ( title, price )
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

  if (loading) {
    return <div className="flex justify-center p-12"><Loader2 className="animate-spin" /></div>
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button onClick={fetchBookings} variant="outline">Refresh</Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden border">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 font-medium text-gray-500">Date</th>
              <th className="p-4 font-medium text-gray-500">Customer</th>
              <th className="p-4 font-medium text-gray-500">Service</th>
              <th className="p-4 font-medium text-gray-500">Status</th>
              <th className="p-4 font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {bookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50">
                <td className="p-4">
                  <div className="font-medium">{format(new Date(booking.scheduled_date), 'MMM d, yyyy')}</div>
                  <div className="text-sm text-gray-500">{booking.scheduled_slot}</div>
                </td>
                <td className="p-4">
                  <div className="font-medium">{booking.users?.full_name || 'Unknown'}</div>
                  <div className="text-sm text-gray-500">{booking.users?.phone}</div>
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <MapPin size={12} />
                    {booking.users?.postcode}
                  </div>
                </td>
                <td className="p-4">
                  <div className="font-medium">{booking.services?.title}</div>
                  <div className="text-sm text-gray-500">£{booking.services?.price}</div>
                  {booking.photo_url && (
                    <a 
                      href={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/booking-photos/${booking.photo_url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-xs underline mt-1 block"
                    >
                      View Photo
                    </a>
                  )}
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                    booking.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                    booking.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    {booking.status === 'pending' && (
                      <>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 h-8 w-8 p-0" onClick={() => updateStatus(booking.id, 'confirmed')}>
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
          <div className="p-12 text-center text-gray-500">No bookings found.</div>
        )}
      </div>
    </div>
  )
}
