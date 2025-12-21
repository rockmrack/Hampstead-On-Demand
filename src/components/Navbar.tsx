"use client"

import Link from "next/link";
import { Home, Search, Calendar, User, LogOut, Phone, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Navbar() {
  const [user, setUser] = useState<any>(null)
  const [scrolled, setScrolled] = useState(false)
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

    // Scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      subscription.unsubscribe()
      window.removeEventListener('scroll', handleScroll)
    }
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
        className={`hidden md:block fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-glass z-50 transition-shadow duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-sm border-b border-grey-light/50'
        }`}
        role="banner"
      >
        <div className="max-w-[1400px] mx-auto px-6 py-3.5 flex justify-between items-center">
          <Link
            href="/"
            className="flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded transition-opacity hover:opacity-80"
            aria-label="Hampstead On-Demand - Home"
          >
            <span className="text-[22px] font-heading font-bold text-primary tracking-tight leading-none">Hampstead On-Demand</span>
            <span className="text-[11px] font-semibold text-accent tracking-[0.15em] uppercase -mt-0.5">Property Services Since 2009</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-6 text-grey text-sm">
            <div className="flex items-center gap-2 pr-6 border-r border-grey-light">
              <MapPin className="w-4 h-4 text-accent" />
              <div>
                <div className="text-xs text-primary font-semibold">Serving NW London</div>
                <div className="text-[11px]">NW3, NW8, NW1, NW6 & More</div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <Link
              href="tel:07459345456"
              className="flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              <Phone className="w-[18px] h-[18px]" />
              <span className="text-[15px]">07459 345456</span>
            </Link>
            
            <Link
              href="/services"
              className="px-6 py-2.5 bg-accent text-white rounded font-semibold text-sm uppercase tracking-wide hover:bg-accent-light transition-all shadow-md hover:shadow-lg"
            >
              Book Service
            </Link>
          </div>
        </div>
      </header>

      {/* Desktop Navigation Bar */}
      <nav 
        className="hidden md:block fixed top-[68px] left-0 right-0 bg-primary z-40 shadow-lg"
        role="navigation" 
        aria-label="Main navigation"
      >
        <div className="max-w-full mx-auto">
          <ul className="flex justify-around max-w-[1400px] mx-auto">
            <li className="flex-1 text-center">
              <Link
                href="/"
                className="block px-4 py-6 text-white/95 text-[15px] font-semibold tracking-wider uppercase hover:text-white hover:bg-white/5 transition-all relative group"
              >
                <span>Home</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-accent group-hover:w-3/5 transition-all duration-300"></span>
              </Link>
            </li>
            <li className="flex-1 text-center">
              <Link
                href="/services"
                className="block px-4 py-6 text-white/95 text-[15px] font-semibold tracking-wider uppercase hover:text-white hover:bg-white/5 transition-all relative group"
              >
                <span>Services</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-accent group-hover:w-3/5 transition-all duration-300"></span>
              </Link>
            </li>
            <li className="flex-1 text-center">
              <Link
                href="/bookings"
                className="block px-4 py-6 text-white/95 text-[15px] font-semibold tracking-wider uppercase hover:text-white hover:bg-white/5 transition-all relative group"
              >
                <span>My Bookings</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-accent group-hover:w-3/5 transition-all duration-300"></span>
              </Link>
            </li>
            {user ? (
              <>
                <li className="flex-1 text-center">
                  <Link
                    href="/profile"
                    className="block px-4 py-6 text-white/95 text-[15px] font-semibold tracking-wider uppercase hover:text-white hover:bg-white/5 transition-all relative group"
                  >
                    <span>Profile</span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-accent group-hover:w-3/5 transition-all duration-300"></span>
                  </Link>
                </li>
                <li className="flex-1 text-center">
                  <button
                    onClick={handleSignOut}
                    className="w-full block px-4 py-6 text-white/95 text-[15px] font-semibold tracking-wider uppercase hover:text-white hover:bg-white/5 transition-all relative group"
                  >
                    <span>Sign Out</span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-accent group-hover:w-3/5 transition-all duration-300"></span>
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="flex-1 text-center">
                  <Link
                    href="/login"
                    className="block px-4 py-6 text-white/95 text-[15px] font-semibold tracking-wider uppercase hover:text-white hover:bg-white/5 transition-all relative group"
                  >
                    <span>Log In</span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-accent group-hover:w-3/5 transition-all duration-300"></span>
                  </Link>
                </li>
                <li className="flex-1 text-center">
                  <Link
                    href="/signup"
                    className="block px-4 py-6 text-white/95 text-[15px] font-semibold tracking-wider uppercase hover:text-white hover:bg-white/5 transition-all relative group"
                  >
                    <span>Sign Up</span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-accent group-hover:w-3/5 transition-all duration-300"></span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      {/* Mobile Header - Simplified */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-50 px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex flex-col">
            <span className="text-lg font-heading font-bold text-primary">Hampstead On-Demand</span>
            <span className="text-[9px] font-semibold text-accent tracking-wider uppercase">Property Services</span>
          </Link>
          <Link
            href="tel:07459345456"
            className="flex items-center gap-1.5 px-3 py-2 bg-accent text-white rounded text-sm font-semibold"
          >
            <Phone className="w-4 h-4" />
            <span>Call</span>
          </Link>
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <nav 
        className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-grey-light flex justify-around py-3 z-50 pb-safe shadow-lg"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <Link 
          href="/" 
          className="flex flex-col items-center text-grey hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded p-1 transition-colors"
          aria-label="Home"
        >
          <Home size={24} aria-hidden="true" />
          <span className="text-xs mt-1 font-medium">Home</span>
        </Link>
        <Link 
          href="/services" 
          className="flex flex-col items-center text-grey hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded p-1 transition-colors"
          aria-label="Browse services"
        >
          <Search size={24} aria-hidden="true" />
          <span className="text-xs mt-1 font-medium">Browse</span>
        </Link>
        <Link 
          href="/bookings" 
          className="flex flex-col items-center text-grey hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded p-1 transition-colors"
          aria-label="My bookings"
        >
          <Calendar size={24} aria-hidden="true" />
          <span className="text-xs mt-1 font-medium">Bookings</span>
        </Link>
        <Link 
          href="/profile" 
          className="flex flex-col items-center text-grey hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded p-1 transition-colors"
          aria-label="User profile"
        >
          <User size={24} aria-hidden="true" />
          <span className="text-xs mt-1 font-medium">Profile</span>
        </Link>
      </nav>

      {/* Spacer for fixed header on desktop */}
      <div className="hidden md:block h-[164px]"></div>
      
      {/* Spacer for fixed header on mobile */}
      <div className="md:hidden h-[60px]"></div>
    </>
  );
}
