"use client"

import { useState, useEffect } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import { User } from "@/types"

export default function AdminReports() {
  const supabase = createClientComponentClient()
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedUser, setSelectedUser] = useState<string>("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await supabase.from('users').select('*')
      if (data) setUsers(data)
      setLoading(false)
    }
    fetchUsers()
  }, [supabase])

  const createReport = async () => {
    if (!selectedUser || !title || !description) {
        toast.error("Please fill in all fields")
        return
    }

    const { error } = await supabase
      .from('service_requests')
      .insert({
        user_id: selectedUser,
        title,
        description,
        source: 'staff_report',
        status: 'pending'
      })

    if (error) {
      console.error(error)
      toast.error("Failed to create report")
    } else {
      toast.success("Report sent to client")
      setTitle("")
      setDescription("")
      setSelectedUser("")
    }
  }

  if (loading) return <div className="flex justify-center p-12"><Loader2 className="animate-spin" /></div>

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Staff Reports (Trojan Horse)</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Create New Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Client</label>
            <select 
              className="w-full p-2 border rounded-md"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
            >
              <option value="">Select Client...</option>
              {users.map(u => (
                <option key={u.id} value={u.id}>{u.full_name || u.email}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Issue Title</label>
            <Input 
              placeholder="e.g. Damp patch in living room" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <Textarea 
              placeholder="Details about the issue..." 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <Button onClick={createReport}>Send to Client</Button>
        </CardContent>
      </Card>
    </div>
  )
}
