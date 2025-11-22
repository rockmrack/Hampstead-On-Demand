"use client"

import { useState, useEffect } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, AlertTriangle } from "lucide-react"
import { useRouter } from "next/navigation"
import { ServiceRequest } from "@/types"

export default function ClientDashboard() {
  const supabase = createClientComponentClient()
  const router = useRouter()
  const [reports, setReports] = useState<ServiceRequest[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReports = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
        return
      }

      const { data, error } = await supabase
        .from('service_requests')
        .select('*')
        .eq('user_id', user.id)
        .eq('source', 'staff_report')
        .eq('status', 'pending')

      if (data) setReports(data)
      setLoading(false)
    }
    fetchReports()
  }, [supabase, router])

  if (loading) return <div className="flex justify-center p-12"><Loader2 className="animate-spin" /></div>

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">My Dashboard</h1>

      {reports.length > 0 ? (
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-amber-600">
            <AlertTriangle className="h-5 w-5" />
            Attention Required
          </h2>
          <div className="grid gap-6">
            {reports.map((report) => (
              <Card key={report.id} className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle>{report.title}</CardTitle>
                  <CardDescription>Reported by Housekeeping Team</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{report.description}</p>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => router.push(`/book/99999999-9999-9999-9999-999999999999`)}>
                    Book Investigation (£95)
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-muted-foreground">No new notifications.</p>
      )}
    </div>
  )
}
