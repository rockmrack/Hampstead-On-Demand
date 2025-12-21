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

  // Group services by category
  const servicesByCategory = services.reduce((acc, service) => {
    const category = service.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);

  const isHousekeeping = categoryFilter === 'Housekeeping';
  const pageTitle = searchQuery
    ? `Search Results for "${searchQuery}"`
    : categoryFilter
      ? `${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)} Services`
      : 'All Services';

  return (
    <main 
      className="min-h-screen bg-white"
      role="main"
      aria-labelledby="services-heading"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary py-20 px-6 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block text-xs font-bold tracking-widest uppercase text-accent-light mb-4">
            Our Services
          </div>
          <h1 id="services-heading" className="font-heading text-4xl md:text-5xl mb-4">
            {pageTitle}
          </h1>
          {isHousekeeping && (
            <div className="mb-6 inline-flex items-center gap-2 px-5 py-2.5 bg-accent rounded-full text-sm font-bold">
              <span aria-hidden="true">🛡️</span>
              <span>Vetted, Insured & Employed Professionals</span>
            </div>
          )}
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Transparent fixed pricing with no hidden fees. Expert tradespeople available when you need them.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {Object.keys(servicesByCategory).length > 1 ? (
          // Multiple categories - show with category headers
          Object.entries(servicesByCategory).map(([category, categoryServices]) => (
            <div key={category} className="mb-16 last:mb-0">
              <div className="flex items-center gap-4 mb-6 pb-3 border-b-2 border-grey-light">
                <h2 className="font-body text-2xl font-bold text-primary">{category}</h2>
              </div>
              
              <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="grid gap-5 md:grid-cols-4"
                role="list"
              >
                {categoryServices.map((service) => (
                  <motion.div variants={item} key={service.id} role="listitem">
                    <Card
                      className="h-full flex flex-col hover:border-accent hover:shadow-lg transition-all hover:-translate-y-1 group relative overflow-hidden bg-white border border-grey-light rounded-lg"
                      aria-labelledby={`service-title-${service.id}`}
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-light to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                      
                      <CardHeader className="text-center pb-4">
                        <div className="w-13 h-13 mx-auto mb-4 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                          {getCategoryIcon(service.category)}
                        </div>
                        <CardTitle id={`service-title-${service.id}`} className="text-lg font-body font-bold text-primary mb-2">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-grey leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="flex-1 text-center pb-4">
                        <div className="flex items-center justify-center gap-2 text-sm text-grey mb-3">
                          <Clock className="h-4 w-4" aria-hidden="true" />
                          <span>{service.duration_minutes ? `${service.duration_minutes} mins` : service.duration}</span>
                        </div>
                        
                        <span className="inline-block px-3 py-1.5 bg-grey-light text-accent text-sm font-bold rounded-full">
                          From £{service.price}
                        </span>
                      </CardContent>
                      
                      <CardFooter className="pt-0">
                        <Button asChild className="w-full group bg-accent hover:bg-accent-light shadow-md hover:shadow-lg transition-all text-white font-semibold uppercase tracking-wide text-xs">
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
            </div>
          ))
        ) : (
          // Single category or no filter - simple grid
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-5 md:grid-cols-4"
            role="list"
            aria-label={`${services.length} services available`}
          >
            {services.map((service) => (
              <motion.div variants={item} key={service.id} role="listitem">
                <Card
                  className="h-full flex flex-col hover:border-accent hover:shadow-lg transition-all hover:-translate-y-1 group relative overflow-hidden bg-white border border-grey-light rounded-lg"
                  aria-labelledby={`service-title-${service.id}`}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-light to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                  
                  <CardHeader className="text-center pb-4">
                    <div className="w-13 h-13 mx-auto mb-4 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {getCategoryIcon(service.category)}
                    </div>
                    <CardTitle id={`service-title-${service.id}`} className="text-lg font-body font-bold text-primary mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-grey leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1 text-center pb-4">
                    <div className="flex items-center justify-center gap-2 text-sm text-grey mb-3">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      <span>{service.duration_minutes ? `${service.duration_minutes} mins` : service.duration}</span>
                    </div>
                    
                    <span className="inline-block px-3 py-1.5 bg-grey-light text-accent text-sm font-bold rounded-full">
                      From £{service.price}
                    </span>
                    
                    {service.features && service.features.length > 0 && (
                      <ul className="mt-4 space-y-1 text-xs text-left" aria-label="Service features">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="h-3 w-3 text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                            <span className="text-grey">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                  
                  <CardFooter className="pt-0">
                    <Button asChild className="w-full group bg-accent hover:bg-accent-light shadow-md hover:shadow-lg transition-all text-white font-semibold uppercase tracking-wide text-xs">
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
        )}

        {services.length === 0 && (
          <div className="text-center py-20 bg-grey-light rounded-xl" role="status" aria-live="polite">
            <p className="text-grey text-lg mb-4">
              {searchQuery
                ? `No services found matching "${searchQuery}"`
                : 'No services found in this category.'}
            </p>
            <Button variant="default" asChild className="bg-accent hover:bg-accent-light">
              <Link href="/services">View all services</Link>
            </Button>
          </div>
        )}
      </section>
    </main>
  );
}

function getCategoryIcon(category: string): string {
  const iconMap: Record<string, string> = {
    'Plumbing': '💧',
    'Electrical': '⚡',
    'Handyman': '🔧',
    'Carpentry': '🪚',
    'Painting': '🎨',
    'Roofing': '🏠',
    'Drainage': '🚰',
    'Locksmith': '🔑',
    'Glazing': '🪟',
    'HVAC': '❄️',
    'Renovation': '🏗️',
    'Seasonal': '🍂',
    'Landlord': '🏘️',
    'Housekeeping': '🧹',
    'Gardens': '🌿',
  };
  return iconMap[category] || '🔨';
}
