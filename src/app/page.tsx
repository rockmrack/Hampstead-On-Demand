"use client"

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Wrench, Zap, Droplet, Hammer, Home as HomeIcon, CheckCircle2, Clock, Shield, Brush, CloudRain, Waves, Lock, Maximize, Wind, Axe, Sun, Key, Sparkles } from "lucide-react";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731117-104f2a41272c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Hampstead On-Demand
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-light">
              Instant property maintenance for NW London. Transparent pricing. Local team. No call-out fees.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-md mx-auto bg-background/95 backdrop-blur rounded-xl p-2 flex items-center shadow-2xl"
          >
            <Search className="ml-3 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="What do you need help with?" 
              className="border-0 focus-visible:ring-0 bg-transparent text-foreground placeholder:text-muted-foreground text-lg h-12"
            />
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8">
              Search
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Popular Services</h2>
          <p className="text-muted-foreground text-lg">Everything you need to maintain your home.</p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {[
            { name: 'Housekeeping', icon: Sparkles, color: 'text-slate-600', bg: 'bg-slate-100' },
            { name: 'Plumbing', icon: Droplet, color: 'text-blue-500', bg: 'bg-blue-50' },
            { name: 'Electrical', icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-50' },
            { name: 'Handyman', icon: Hammer, color: 'text-orange-500', bg: 'bg-orange-50' },
            { name: 'Carpentry', icon: Axe, color: 'text-amber-700', bg: 'bg-amber-50' },
            { name: 'Painting', icon: Brush, color: 'text-pink-500', bg: 'bg-pink-50' },
            { name: 'Roofing', icon: CloudRain, color: 'text-slate-600', bg: 'bg-slate-50' },
            { name: 'Drainage', icon: Waves, color: 'text-cyan-600', bg: 'bg-cyan-50' },
            { name: 'Locksmith', icon: Lock, color: 'text-red-500', bg: 'bg-red-50' },
            { name: 'Glazing', icon: Maximize, color: 'text-sky-400', bg: 'bg-sky-50' },
            { name: 'AC', icon: Wind, color: 'text-teal-500', bg: 'bg-teal-50' },
            { name: 'Renovations', icon: HomeIcon, color: 'text-purple-500', bg: 'bg-purple-50' },
            { name: 'Seasonal', icon: Sun, color: 'text-yellow-400', bg: 'bg-yellow-50' },
            { name: 'Landlord', icon: Key, color: 'text-indigo-500', bg: 'bg-indigo-50' }
          ].map((category) => (
            <motion.div variants={item} key={category.name}>
              <Link href={`/services?category=${category.name.toLowerCase()}`}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-muted h-full">
                  <CardContent className="flex flex-col items-center justify-center p-8 gap-4">
                    <div className={`w-16 h-16 ${category.bg} rounded-full flex items-center justify-center ${category.color}`}>
                      <category.icon size={32} />
                    </div>
                    <span className="font-semibold text-lg">{category.name}</span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Value Props */}
      <section className="bg-muted/50 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-2">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-bold">Fixed Prices</h3>
            <p className="text-muted-foreground leading-relaxed">
              Know exactly what you'll pay before you book. No hidden costs or surprise fees at the end of the job.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-2">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-xl font-bold">Local Experts</h3>
            <p className="text-muted-foreground leading-relaxed">
              Trusted tradespeople from the Hampstead area. Vetted, insured, and ready to help.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-2">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold">Instant Booking</h3>
            <p className="text-muted-foreground leading-relaxed">
              Choose your slot and book instantly. We'll confirm your appointment within minutes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
