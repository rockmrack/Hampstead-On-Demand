"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Star, Clock, Wrench } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function HeroSearch() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/services?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/services');
    }
  };

  return (
    <section
      className="relative bg-primary text-primary-foreground py-20 md:py-32 px-6 overflow-hidden"
      role="banner"
      aria-labelledby="hero-title"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        aria-hidden="true"
      />
      <div className="relative max-w-5xl mx-auto text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 text-sm font-semibold tracking-wide"
          >
            <Wrench className="h-3 w-3 mr-2" />
            NORTH WEST LONDON NW3
          </Badge>

          <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-heading">
            Professional Property Maintenance On-Demand
          </h1>

          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed font-body font-normal">
            From emergency plumbing to deep cleaning, our trusted local tradespeople handle all your property maintenance needs. Fixed prices. Vetted professionals. No call-out fees.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-6 md:gap-8 py-6"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1 font-heading">57</div>
            <div className="text-sm opacity-80 font-medium">Services</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1 font-heading">16</div>
            <div className="text-sm opacity-80 font-medium">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1 font-heading flex items-center justify-center gap-1">
              2hr
            </div>
            <div className="text-sm opacity-80 font-medium">Response</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1 font-heading flex items-center justify-center gap-1">
              5<Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            </div>
            <div className="text-sm opacity-80 font-medium">Rated</div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white/98 backdrop-blur-glass rounded-xl p-2 flex items-center shadow-premium-hover"
          onSubmit={handleSearch}
          role="search"
          aria-label="Search services"
        >
          <Search className="ml-4 text-muted-foreground h-5 w-5" aria-hidden="true" />
          <Input
            type="search"
            placeholder="What do you need help with?"
            className="border-0 focus-visible:ring-0 bg-transparent text-foreground placeholder:text-muted-foreground text-base md:text-lg h-14 font-body"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search for services"
          />
          <Button
            type="submit"
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 md:px-10 h-12 shadow-md"
          >
            Search
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
