"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Check } from "lucide-react";
import { Service } from "@/types";

interface ServicesListProps {
  services: Service[];
  categoryFilter?: string;
  searchQuery?: string;
}

export default function ServicesList({ services, categoryFilter, searchQuery }: ServicesListProps) {
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

  const getCategoryColor = (category: string): string => {
    const categoryMap: Record<string, string> = {
      'Plumbing': 'bg-blue-500',
      'Electrical': 'bg-amber-500',
      'Handyman': 'bg-green-600',
      'Carpentry': 'bg-amber-800',
      'Painting': 'bg-purple-500',
      'Roofing': 'bg-red-500',
      'Drainage': 'bg-teal-500',
      'Locksmith': 'bg-slate-700',
      'Glazing': 'bg-cyan-500',
      'HVAC': 'bg-cyan-600',
      'Renovation': 'bg-slate-800',
      'Seasonal': 'bg-orange-500',
      'Landlord': 'bg-stone-600',
      'Housekeeping': 'bg-pink-600',
      'Gardens': 'bg-green-500',
    };
    return categoryMap[category] || 'bg-primary';
  };

  const isHousekeeping = categoryFilter === 'Housekeeping';
  const pageTitle = searchQuery
    ? `Search Results for "${searchQuery}"`
    : categoryFilter
      ? `${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)} Services`
      : 'All Services';

  return (
    <main 
      className={`max-w-5xl mx-auto px-6 py-12 ${isHousekeeping ? 'bg-slate-50' : ''}`}
      role="main"
      aria-labelledby="services-heading"
    >
      <div className="mb-12 text-center">
        <h1 id="services-heading" className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-heading text-primary">
          {pageTitle}
        </h1>
        {isHousekeeping && (
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-full shadow-premium text-sm font-medium text-foreground">
            <span className="text-primary" aria-hidden="true">🛡️</span>
            <span>Vetted, Insured &amp; Employed by Hampstead Renovations</span>
          </div>
        )}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
          Transparent pricing. No hidden fees. Book in seconds.
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2"
        role="list"
        aria-label={`${services.length} services available`}
      >
        {services.map((service) => (
          <motion.div variants={item} key={service.id} role="listitem">
            <Card
              className="h-full flex flex-col hover:shadow-premium-hover transition-all duration-300 relative overflow-hidden shadow-premium border-border/50"
              aria-labelledby={`service-title-${service.id}`}
            >
              <div
                className={`absolute top-0 right-0 text-xs font-bold px-3 py-1 rounded-bl-lg z-10 ${getCategoryColor(service.category)} text-white`}
                aria-label="Fixed price service"
              >
                Fixed Price
              </div>
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <Badge
                      variant="secondary"
                      className={`mb-2 ${getCategoryColor(service.category)} text-white border-0`}
                    >
                      {service.category}
                    </Badge>
                    <CardTitle id={`service-title-${service.id}`} className="text-xl font-heading text-primary">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base mt-2 font-body">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  <span aria-label={`Duration: ${service.duration_minutes ? `${service.duration_minutes} minutes` : service.duration}`}>
                    {service.duration_minutes ? `${service.duration_minutes} mins` : service.duration}
                  </span>
                </div>
                
                <div className="mb-6 p-4 bg-muted/30 rounded-lg border border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Fixed Price</span>
                    <span className="text-2xl font-bold text-accent font-heading" aria-label={`Price: £${service.price}`}>
                      £{service.price}
                    </span>
                  </div>
                </div>

                {service.features && service.features.length > 0 && (
                  <ul className="space-y-2" aria-label="Service features">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-500" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full group bg-accent hover:bg-accent/90 shadow-md hover:shadow-lg transition-all">
                  <Link
                    href={`/book/${service.id}`}
                    aria-label={`Book ${service.title} for £${service.price}`}
                  >
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {services.length === 0 && (
        <div className="text-center py-12" role="status" aria-live="polite">
          <p className="text-muted-foreground">
            {searchQuery
              ? `No services found matching "${searchQuery}"`
              : 'No services found in this category.'}
          </p>
          <Button variant="link" asChild className="mt-4">
            <Link href="/services">View all services</Link>
          </Button>
        </div>
      )}
    </main>
  );
}
