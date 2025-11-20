"use client"

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Check } from "lucide-react";

// Mock data for now - in real app this comes from Supabase
const services = [
  {
    id: '1',
    category: 'Plumbing',
    title: 'Replace Kitchen Tap',
    description: 'We supply standard tap or fit yours. Includes removal of old tap and testing.',
    price: 120,
    duration: '60 mins',
    features: ['Parts included', '1 year guarantee', 'Disposal of old tap']
  },
  {
    id: '2',
    category: 'Plumbing',
    title: 'Unblock Sink',
    description: 'Clear blockage in kitchen or bathroom sink using professional equipment.',
    price: 85,
    duration: '45 mins',
    features: ['No chemicals used', 'Flow test included', 'Mess-free guarantee']
  },
  {
    id: '3',
    category: 'Heating',
    title: 'Boiler Service',
    description: 'Annual safety check and service to keep your warranty valid.',
    price: 90,
    duration: '60 mins',
    features: ['Gas Safe registered', 'Certificate issued', 'Efficiency check']
  },
  {
    id: '4',
    category: 'Handyman',
    title: 'General Handyman (1 Hour)',
    description: 'Small repairs, hanging pictures, assembling furniture, etc.',
    price: 85,
    duration: '60 mins',
    features: ['Tools provided', 'Multi-skilled', 'Clean & tidy']
  }
];

export default function ServicesPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const categoryFilter = searchParams.category;
  
  const filteredServices = categoryFilter 
    ? services.filter(s => s.category.toLowerCase() === categoryFilter.toLowerCase())
    : services;

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
    <main className="min-h-screen bg-muted/30 pb-20 md:pb-0">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {categoryFilter ? `${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)} Services` : 'All Services'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing. No hidden fees. Book in seconds.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2"
        >
          {filteredServices.map((service) => (
            <motion.div variants={item} key={service.id}>
              <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {service.category}
                      </Badge>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary">£{service.price}</span>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Clock className="h-4 w-4" />
                    <span>{service.duration}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features?.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full group">
                    <Link href={`/book/${service.id}`}>
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No services found in this category.</p>
            <Button variant="link" asChild className="mt-4">
              <Link href="/services">View all services</Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
