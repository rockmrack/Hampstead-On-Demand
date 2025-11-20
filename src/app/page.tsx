import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Instant Property Maintenance for NW London.
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Transparent pricing. Local team. No call-out fees. Join for free.
        </p>
        <div className="max-w-md mx-auto bg-white rounded-lg p-2 flex items-center">
          <input 
            type="text" 
            placeholder="What do you need help with?" 
            className="flex-1 px-4 py-2 text-gray-900 outline-none"
          />
          <Button className="bg-secondary hover:bg-secondary/90 text-white">
            Search
          </Button>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Popular Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {['Plumbing', 'Heating', 'Handyman', 'Electrical', 'Roofing'].map((category) => (
            <Link 
              href={`/services?category=${category.toLowerCase()}`} 
              key={category}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center gap-4 border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary">
                {/* Icon placeholder */}
                <span className="text-2xl">🛠️</span>
              </div>
              <span className="font-medium text-gray-900">{category}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary">Fixed Prices</h3>
            <p className="text-gray-600">Know exactly what you'll pay before you book. No hidden costs.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary">Local Experts</h3>
            <p className="text-gray-600">Trusted tradespeople from the Hampstead area.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary">Instant Booking</h3>
            <p className="text-gray-600">Choose your slot and pay securely online.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
