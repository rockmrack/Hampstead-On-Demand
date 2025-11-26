import Link from "next/link";
import { Home, Search, Calendar, User } from "lucide-react";

export default function Navbar() {
  return (
    <>
      {/* Desktop Header */}
      <header 
        className="hidden md:flex items-center justify-between px-6 py-4 bg-white border-b sticky top-0 z-50"
        role="banner"
      >
        <Link 
          href="/" 
          className="text-xl font-bold text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
          aria-label="Hampstead On-Demand - Home"
        >
          Hampstead On-Demand
        </Link>
        <nav className="flex gap-6" role="navigation" aria-label="Main navigation">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1"
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className="text-gray-600 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1"
          >
            Services
          </Link>
          <Link 
            href="/bookings" 
            className="text-gray-600 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1"
          >
            My Bookings
          </Link>
        </nav>
        <div className="flex gap-4" role="group" aria-label="Account actions">
          <Link 
            href="/login" 
            className="text-primary font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1"
          >
            Log in
          </Link>
          <Link 
            href="/signup" 
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Sign up
          </Link>
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
