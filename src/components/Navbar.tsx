"use client"

import Link from "next/link";
import { Home, Search, Calendar, User, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Navbar() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }

    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [supabase])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    toast.success("Signed out successfully")
    router.push("/")
    router.refresh()
  }

  return (
    <>
      {/* Desktop Header */}
      <header
        className="hidden md:flex items-center justify-between px-6 py-4 bg-white/98 backdrop-blur-glass border-b border-border/50 sticky top-0 z-50 shadow-sm"
        role="banner"
      >
        <Link
          href="/"
          className="flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
          aria-label="Hampstead On-Demand - Home"
        >
          <span className="text-xl font-bold text-primary font-heading tracking-tight">Hampstead On-Demand</span>
          <span className="text-[10px] font-semibold text-accent tracking-[0.15em] uppercase -mt-0.5">PROPERTY MAINTENANCE</span>
        </Link>
        <nav className="flex gap-6" role="navigation" aria-label="Main navigation">
          <Link
            href="/"
            className="text-foreground/70 hover:text-primary font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-foreground/70 hover:text-primary font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1"
          >
            Services
          </Link>
          <Link
            href="/bookings"
            className="text-foreground/70 hover:text-primary font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1"
          >
            My Bookings
          </Link>
        </nav>
        <div className="flex gap-4 items-center" role="group" aria-label="Account actions">
          {user ? (
            <>
              <Link
                href="/profile"
                className="text-foreground/70 hover:text-primary font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1"
              >
                Profile
              </Link>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                className="gap-2 border-primary/20 hover:bg-primary/5"
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-primary font-semibold hover:text-primary/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-3 py-2"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="bg-accent text-accent-foreground px-5 py-2.5 rounded-lg hover:bg-accent/90 transition-all shadow-md hover:shadow-lg font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <nav 
        className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3 z-50 pb-safe"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <Link 
          href="/" 
          className="flex flex-col items-center text-gray-600 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded p-1"
          aria-label="Home"
        >
          <Home size={24} aria-hidden="true" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link 
          href="/services" 
          className="flex flex-col items-center text-gray-600 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded p-1"
          aria-label="Browse services"
        >
          <Search size={24} aria-hidden="true" />
          <span className="text-xs mt-1">Browse</span>
        </Link>
        <Link 
          href="/bookings" 
          className="flex flex-col items-center text-gray-600 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded p-1"
          aria-label="My bookings"
        >
          <Calendar size={24} aria-hidden="true" />
          <span className="text-xs mt-1">Bookings</span>
        </Link>
        <Link 
          href="/profile" 
          className="flex flex-col items-center text-gray-600 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded p-1"
          aria-label="User profile"
        >
          <User size={24} aria-hidden="true" />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </nav>
    </>
  );
}
