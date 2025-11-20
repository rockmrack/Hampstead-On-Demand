import Link from "next/link";
import { Home, Search, Calendar, User } from "lucide-react";

export default function Navbar() {
  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex items-center justify-between px-6 py-4 bg-white border-b sticky top-0 z-50">
        <div className="text-xl font-bold text-primary">Hampstead On-Demand</div>
        <nav className="flex gap-6">
          <Link href="/" className="text-gray-600 hover:text-primary">Home</Link>
          <Link href="/services" className="text-gray-600 hover:text-primary">Services</Link>
          <Link href="/membership" className="text-primary font-medium hover:text-primary/80">Membership</Link>
          <Link href="/bookings" className="text-gray-600 hover:text-primary">My Bookings</Link>
        </nav>
        <div className="flex gap-4">
          <Link href="/login" className="text-primary font-medium">Log in</Link>
          <Link href="/signup" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90">Sign up</Link>
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3 z-50 pb-safe">
        <Link href="/" className="flex flex-col items-center text-gray-600 hover:text-primary">
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link href="/services" className="flex flex-col items-center text-gray-600 hover:text-primary">
          <Search size={24} />
          <span className="text-xs mt-1">Browse</span>
        </Link>
        <Link href="/bookings" className="flex flex-col items-center text-gray-600 hover:text-primary">
          <Calendar size={24} />
          <span className="text-xs mt-1">Bookings</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center text-gray-600 hover:text-primary">
          <User size={24} />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </nav>
    </>
  );
}
