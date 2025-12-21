import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-[180px] px-6 md:py-[100px] bg-gradient-to-br from-[#2c3e50] to-[#546e7a] relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
          
          <div className="max-w-[1000px] mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#8b7355] rounded-full text-white text-xs font-bold uppercase tracking-[0.12em] mb-8">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              <span>On-Demand Property Services</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </div>
            
            <h1 className="font-heading text-[clamp(2rem,4.5vw,3.25rem)] text-white mb-6 leading-[1.2]">
              Expert Tradespeople Available<br />When You Need Them
            </h1>
            
            <p className="text-lg text-white/90 max-w-[800px] mx-auto mb-10 leading-[1.8]">
              From emergency plumbing to routine maintenance, Hampstead On-Demand connects you with trusted local professionals. Fixed prices, instant booking, guaranteed quality.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="flex items-center gap-2 text-white/90 text-[0.9375rem] font-medium">
                <svg className="w-5 h-5 fill-[#a0896d]" viewBox="0 0 24 24"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/></svg>
                <span>Vetted Professionals</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 text-[0.9375rem] font-medium">
                <svg className="w-5 h-5 fill-[#a0896d]" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24z"/></svg>
                <span>Fixed Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 text-[0.9375rem] font-medium">
                <svg className="w-5 h-5 fill-[#a0896d]" viewBox="0 0 24 24"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>
                <span>Instant Availability</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 text-[0.9375rem] font-medium">
                <svg className="w-5 h-5 fill-[#a0896d]" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l4.59-4.58L18 11l-6 6z"/></svg>
                <span>Quality Guaranteed</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="tel:07459345456"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8b7355] text-white font-semibold rounded uppercase tracking-[0.05em] text-sm transition-all hover:bg-[#9d8466] hover:-translate-y-0.5 shadow-lg"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                Call 07459 345456
              </Link>
              <Link
                href="https://wa.me/447459345456?text=Hello%2C%20I%27d%20like%20to%20book%20a%20service"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#2c3e50] font-semibold rounded uppercase tracking-[0.05em] text-sm transition-all hover:bg-[#f5f7f9] hover:-translate-y-0.5 shadow-lg"
              >
                WhatsApp Us
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/50 text-white font-semibold rounded uppercase tracking-[0.05em] text-sm transition-all hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-[#f5f7f9] py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
              <div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-[#8b7355] mb-1">15+</div>
                <div className="text-xs font-semibold text-[#2c3e50] uppercase tracking-wide">Years Trading</div>
              </div>
              <div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-[#8b7355] mb-1">2000+</div>
                <div className="text-xs font-semibold text-[#2c3e50] uppercase tracking-wide">Jobs Completed</div>
              </div>
              <div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-[#8b7355] mb-1">£5M</div>
                <div className="text-xs font-semibold text-[#2c3e50] uppercase tracking-wide">Insurance Cover</div>
              </div>
              <div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-[#8b7355] mb-1">4.9★</div>
                <div className="text-xs font-semibold text-[#2c3e50] uppercase tracking-wide">Average Rating</div>
              </div>
              <div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-[#8b7355] mb-1">50+</div>
                <div className="text-xs font-semibold text-[#2c3e50] uppercase tracking-wide">Professionals</div>
              </div>
              <div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-[#8b7355] mb-1">24/7</div>
                <div className="text-xs font-semibold text-[#2c3e50] uppercase tracking-wide">Availability</div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#8b7355] mb-3">Why Choose Us</div>
              <h2 className="font-heading text-3xl md:text-5xl text-[#2c3e50] mb-4">Your Trusted Property Partner</h2>
              <p className="text-base md:text-lg text-[#607d8b] max-w-2xl mx-auto leading-relaxed">
                We've simplified property maintenance with instant access to verified professionals and transparent fixed pricing
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:border-[#8b7355] hover:shadow-xl transition-all">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#8b7355] rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                </div>
                <h3 className="font-heading text-xl text-[#2c3e50] mb-3">Vetted Experts</h3>
                <p className="text-sm text-[#607d8b] leading-relaxed">All professionals are background-checked, insured, and verified for quality</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:border-[#8b7355] hover:shadow-xl transition-all">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#8b7355] rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 className="font-heading text-xl text-[#2c3e50] mb-3">Fixed Prices</h3>
                <p className="text-sm text-[#607d8b] leading-relaxed">Transparent pricing with no hidden costs or surprise fees at completion</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:border-[#8b7355] hover:shadow-xl transition-all">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#8b7355] rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 className="font-heading text-xl text-[#2c3e50] mb-3">Instant Booking</h3>
                <p className="text-sm text-[#607d8b] leading-relaxed">Choose your time slot and book online—confirmation within minutes</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:border-[#8b7355] hover:shadow-xl transition-all">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#8b7355] rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                </div>
                <h3 className="font-heading text-xl text-[#2c3e50] mb-3">Local Team</h3>
                <p className="text-sm text-[#607d8b] leading-relaxed">North West London specialists who know the area and properties</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-[#f5f7f9] py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#8b7355] mb-3">Our Services</div>
              <h2 className="font-heading text-3xl md:text-5xl text-[#2c3e50] mb-4">Complete Property Solutions</h2>
              <p className="text-base md:text-lg text-[#607d8b] max-w-2xl mx-auto leading-relaxed">
                From emergency repairs to planned maintenance across all trades
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { name: "Plumbing Services", desc: "Emergency & planned plumbing work", price: "From £75", icon: "💧" },
                { name: "Electrical Work", desc: "Certified electricians available 24/7", price: "From £85", icon: "⚡" },
                { name: "Handyman Services", desc: "General repairs & maintenance", price: "From £65", icon: "🔧" },
                { name: "Carpentry", desc: "Custom woodwork & repairs", price: "From £90", icon: "🪚" },
                { name: "Painting & Decorating", desc: "Interior & exterior work", price: "From £70", icon: "🎨" },
                { name: "Roofing & Gutters", desc: "Repairs & maintenance", price: "From £95", icon: "🏠" },
                { name: "HVAC Services", desc: "Heating & cooling systems", price: "From £100", icon: "❄️" },
                { name: "Locksmith", desc: "24/7 emergency access", price: "From £80", icon: "🔑" },
              ].map((service, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#8b7355] hover:shadow-xl transition-all group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8b7355] to-[#9d8466] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#8b7355] to-[#9d8466] rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-lg text-[#2c3e50] mb-2 text-center">{service.name}</h3>
                  <p className="text-sm text-[#607d8b] mb-4 text-center leading-relaxed">{service.desc}</p>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-[#8b7355]/10 text-[#8b7355] text-xs font-bold rounded-full">{service.price}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#8b7355] text-white font-semibold rounded-md hover:bg-[#9d8466] transition-all shadow-md uppercase tracking-wide text-sm"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Areas Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#8b7355] mb-3">Service Areas</div>
              <h2 className="font-heading text-3xl md:text-5xl text-[#2c3e50] mb-4">Serving North West London</h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {["NW3 Hampstead", "NW8 St John's Wood", "NW1 Primrose Hill", "NW6 West Hampstead", "NW11 Golders Green", "N6 Highgate", "N2 East Finchley", "N10 Muswell Hill", "N8 Crouch End", "N1 Islington"].map((area, i) => (
                <div key={i} className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-[#8b7355] hover:bg-[#8b7355] hover:text-white transition-all cursor-pointer">
                  <span className="text-sm font-semibold">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#2c3e50] via-[#34495e] to-[#2c3e50] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl text-white mb-6">Ready to Book a Service?</h2>
            <p className="text-base md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Choose your service, select a time slot, and book instantly. No phone calls, no waiting—just simple online booking.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#2c3e50] font-semibold rounded-md hover:bg-gray-100 transition-all shadow-lg uppercase tracking-wide text-sm"
              >
                Browse Services
              </Link>
              <Link
                href="tel:07459345456"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8b7355] text-white font-semibold rounded-md hover:bg-[#9d8466] transition-all shadow-lg uppercase tracking-wide text-sm"
              >
                Call 07459 345456
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
