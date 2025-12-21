import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSearch from "@/components/HeroSearch";
import AnimatedCategories from "@/components/AnimatedCategories";
import { Shield, CheckCircle2, Clock } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Client Component for animations */}
      <HeroSearch />

      {/* Categories Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto" aria-labelledby="services-heading">
        <div className="text-center mb-16">
          <h2 id="services-heading" className="text-3xl font-bold mb-4">Popular Services</h2>
          <p className="text-muted-foreground text-lg">Everything you need to maintain your home.</p>
        </div>
        
        <AnimatedCategories />
      </section>

      {/* Value Props */}
      <section className="bg-muted/50 py-24 px-6" aria-labelledby="why-us-heading">
        <h2 id="why-us-heading" className="sr-only">Why Choose Us</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <article className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-2">
              <Shield size={32} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold">Fixed Prices</h3>
            <p className="text-muted-foreground leading-relaxed">
              Know exactly what you&apos;ll pay before you book. No hidden costs or surprise fees at the end of the job.
            </p>
          </article>
          <article className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-2">
              <CheckCircle2 size={32} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold">Local Experts</h3>
            <p className="text-muted-foreground leading-relaxed">
              Trusted tradespeople from the Hampstead area. Vetted, insured, and ready to help.
            </p>
          </article>
          <article className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-2">
              <Clock size={32} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold">Instant Booking</h3>
            <p className="text-muted-foreground leading-relaxed">
              Choose your slot and book instantly. We&apos;ll confirm your appointment within minutes.
            </p>
          </article>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
