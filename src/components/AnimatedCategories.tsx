"use client"

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Droplet, Zap, Hammer, Home as HomeIcon, Brush, CloudRain, Waves, Lock, Maximize, Wind, Axe, Sun, Key, Sparkles, Leaf } from "lucide-react";

// Categories defined in client component to avoid serialization issues
const categories = [
  { name: 'Housekeeping', icon: Sparkles, color: 'text-slate-600', bg: 'bg-slate-100' },
  { name: 'Gardens & Outdoors', icon: Leaf, color: 'text-green-600', bg: 'bg-green-50' },
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
];

export default function AnimatedCategories() {
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
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
      role="list"
      aria-label="Service categories"
    >
      {categories.map((category) => (
        <motion.div variants={item} key={category.name} role="listitem">
          <Link 
            href={`/services?category=${category.name.toLowerCase()}`}
            aria-label={`Browse ${category.name} services`}
          >
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-muted h-full focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
              <CardContent className="flex flex-col items-center justify-center p-8 gap-4">
                <div className={`w-16 h-16 ${category.bg} rounded-full flex items-center justify-center ${category.color}`}>
                  <category.icon size={32} aria-hidden="true" />
                </div>
                <span className="font-semibold text-lg">{category.name}</span>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
