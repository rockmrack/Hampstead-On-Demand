import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Shield, CheckCircle2, Clock, Star, Phone, MapPin, Award, Users, Calendar, Wrench } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-light to-primary py-32 md:py-40 px-6">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-accent rounded-full text-white text-xs font-bold uppercase tracking-wider mb-8">
              <Star className="w-4 h-4 fill-current" />
              <span>On-Demand Property Services</span>
              <Star className="w-4 h-4 fill-current" />
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Expert Tradespeople Available <br className="hidden md:block" />When You Need Them
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              From emergency plumbing to routine maintenance, Hampstead On-Demand connects you with trusted local professionals. Fixed prices, instant booking, guaranteed quality.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-5 h-5 text-accent-light" />
                <span>Vetted Professionals</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-5 h-5 text-accent-light" />
                <span>Fixed Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-5 h-5 text-accent-light" />
                <span>Instant Availability</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 uppercase tracking-wide text-sm"
              >
                <Calendar className="w-5 h-5" />
                Book Service Now
              </Link>
              <Link
                href="tel:07459345456"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-grey-light transition-all shadow-lg hover:-translate-y-0.5 uppercase tracking-wide text-sm"
              >
                <Phone className="w-5 h-5" />
                Call 07459 345456
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-grey-light py-8 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
            <div className="p-4">
              <div className="font-heading text-3xl font-bold text-accent mb-1">15+</div>
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Years Trading</div>
            </div>
            <div className="p-4">
              <div className="font-heading text-3xl font-bold text-accent mb-1">2000+</div>
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Jobs Completed</div>
            </div>
            <div className="p-4">
              <div className="font-heading text-3xl font-bold text-accent mb-1">£5M</div>
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Insurance Cover</div>
            </div>
            <div className="p-4">
              <div className="font-heading text-3xl font-bold text-accent mb-1">4.9★</div>
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Average Rating</div>
            </div>
            <div className="p-4">
              <div className="font-heading text-3xl font-bold text-accent mb-1">50+</div>
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Professionals</div>
            </div>
            <div className="p-4">
              <div className="font-heading text-3xl font-bold text-accent mb-1">24/7</div>
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">Availability</div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gradient-to-br from-dark via-primary to-primary-light py-24 px-6 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block text-xs font-bold tracking-widest uppercase text-accent-light mb-4 relative">
                <span className="absolute right-full mr-4 top-1/2 w-10 h-px bg-accent-light"></span>
                Why Choose Us
                <span className="absolute left-full ml-4 top-1/2 w-10 h-px bg-accent-light"></span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl mb-4">Your Trusted Property Partner</h2>
              <p className="text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
                We've simplified property maintenance with instant access to verified professionals and transparent fixed pricing
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white/8 backdrop-blur-lg border border-white/12 rounded-xl p-8 text-center hover:bg-white/12 transition-all hover:-translate-y-1">
                <div className="w-14 h-14 mx-auto mb-5 bg-accent rounded-xl flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-body text-lg font-bold mb-3">Vetted Experts</h3>
                <p className="text-sm text-white/80 leading-relaxed">All professionals are background-checked, insured, and verified for quality</p>
              </div>
              
              <div className="bg-white/8 backdrop-blur-lg border border-white/12 rounded-xl p-8 text-center hover:bg-white/12 transition-all hover:-translate-y-1">
                <div className="w-14 h-14 mx-auto mb-5 bg-accent rounded-xl flex items-center justify-center">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-body text-lg font-bold mb-3">Fixed Prices</h3>
                <p className="text-sm text-white/80 leading-relaxed">Transparent pricing with no hidden costs or surprise fees at completion</p>
              </div>
              
              <div className="bg-white/8 backdrop-blur-lg border border-white/12 rounded-xl p-8 text-center hover:bg-white/12 transition-all hover:-translate-y-1">
                <div className="w-14 h-14 mx-auto mb-5 bg-accent rounded-xl flex items-center justify-center">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-body text-lg font-bold mb-3">Instant Booking</h3>
                <p className="text-sm text-white/80 leading-relaxed">Choose your time slot and book online—confirmation within minutes</p>
              </div>
              
              <div className="bg-white/8 backdrop-blur-lg border border-white/12 rounded-xl p-8 text-center hover:bg-white/12 transition-all hover:-translate-y-1">
                <div className="w-14 h-14 mx-auto mb-5 bg-accent rounded-xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-body text-lg font-bold mb-3">Local Team</h3>
                <p className="text-sm text-white/80 leading-relaxed">North West London specialists who know the area and properties</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block text-xs font-bold tracking-widest uppercase text-accent mb-4 relative">
                <span className="absolute right-full mr-4 top-1/2 w-10 h-px bg-accent"></span>
                Our Services
                <span className="absolute left-full ml-4 top-1/2 w-10 h-px bg-accent"></span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">Complete Property Solutions</h2>
              <p className="text-lg text-grey max-w-2xl mx-auto leading-relaxed">
                From emergency repairs to planned maintenance across all trades
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { name: "Plumbing Services", desc: "Emergency & planned plumbing", price: "From £75", icon: "💧" },
                { name: "Electrical Work", desc: "Certified electricians available", price: "From £85", icon: "⚡" },
                { name: "Handyman Services", desc: "General repairs & maintenance", price: "From £65", icon: "🔧" },
                { name: "Carpentry", desc: "Custom woodwork & repairs", price: "From £90", icon: "🪚" },
                { name: "Painting & Decorating", desc: "Interior & exterior work", price: "From £70", icon: "🎨" },
                { name: "Roofing & Gutters", desc: "Repairs & maintenance", price: "From £95", icon: "🏠" },
                { name: "HVAC Services", desc: "Heating & cooling systems", price: "From £100", icon: "❄️" },
                { name: "Locksmith", desc: "24/7 emergency access", price: "From £80", icon: "🔑" },
              ].map((service, i) => (
                <div key={i} className="bg-white border border-grey-light rounded-lg p-6 text-center hover:border-accent hover:shadow-lg transition-all hover:-translate-y-1 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-light to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                  <div className="w-13 h-13 mx-auto mb-4 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="font-body text-lg font-bold text-primary mb-2">{service.name}</h3>
                  <p className="text-sm text-grey mb-3 leading-relaxed">{service.desc}</p>
                  <span className="inline-block px-3 py-1 bg-grey-light text-accent text-xs font-bold rounded-full">{service.price}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-light transition-all shadow-md hover:shadow-lg uppercase tracking-wide text-sm"
              >
                <Wrench className="w-5 h-5" />
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="bg-grey-light py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block text-xs font-bold tracking-widest uppercase text-accent mb-4">Service Areas</div>
              <h2 className="font-heading text-3xl text-primary mb-4">Serving North West London</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {["NW3 Hampstead", "NW8 St John's Wood", "NW1 Primrose Hill", "NW6 West Hampstead", "NW11 Golders Green", "N6 Highgate", "N2 East Finchley", "N10 Muswell Hill", "N8 Crouch End", "N1 Islington"].map((area, i) => (
                <div key={i} className="bg-white rounded-full px-6 py-4 text-center border-2 border-transparent hover:border-accent transition-all cursor-pointer">
                  <div className="font-heading text-lg font-bold text-primary mb-0.5">{area.split(' ')[0]}</div>
                  <div className="text-xs text-grey">{area.split(' ').slice(1).join(' ')}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary via-primary-light to-primary rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 animate-rotate" style={{
              background: 'radial-gradient(circle, rgba(139, 115, 85, 0.2) 0%, transparent 60%)'
            }}></div>
            
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">Ready to Book a Service?</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Choose your service, select a time slot, and book instantly. No phone calls, no waiting—just simple online booking.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-grey-light transition-all shadow-lg uppercase tracking-wide text-sm"
                >
                  Browse Services
                </Link>
                <Link
                  href="tel:07459345456"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-light transition-all shadow-lg uppercase tracking-wide text-sm border-2 border-white/20"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
