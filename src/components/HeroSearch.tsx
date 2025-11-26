"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
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
      className="relative bg-primary text-primary-foreground py-24 px-6 overflow-hidden"
      role="banner"
      aria-labelledby="hero-title"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        aria-hidden="true"
      />
      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 id="hero-title" className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Hampstead On-Demand
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-light">
            We keep your home beautiful, inside and out.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-md mx-auto bg-background/95 backdrop-blur rounded-xl p-2 flex items-center shadow-2xl"
          onSubmit={handleSearch}
          role="search"
          aria-label="Search services"
        >
          <Search className="ml-3 text-muted-foreground" aria-hidden="true" />
          <Input 
            type="search" 
            placeholder="What do you need help with?" 
            className="border-0 focus-visible:ring-0 bg-transparent text-foreground placeholder:text-muted-foreground text-lg h-12"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search for services"
          />
          <Button 
            type="submit"
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8"
          >
            Search
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
