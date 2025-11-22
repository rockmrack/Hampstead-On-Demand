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
}

export default function ServicesList({ services, categoryFilter }: ServicesListProps) {
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

  const isHousekeeping = categoryFilter === 'Housekeeping';

  return (
    <div className={`max-w-5xl mx-auto px-6 py-12 ${isHousekeeping ? 'bg-slate-50' : ''}`}>
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          {categoryFilter ? `${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)} Services` : 'All Services'}
        </h1>
        {isHousekeeping && (
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm text-sm font-medium text-slate-700">
            <span className="text-blue-600">🛡️</span>
            Vetted, Insured & Employed by Hampstead Renovations
          </div>
        )}
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
        {services.map((service) => (
          <motion.div variants={item} key={service.id}>
            <Card className={`h-full flex flex-col hover:shadow-md transition-shadow duration-200 relative overflow-hidden ${service.category === 'Housekeeping' ? 'border-slate-200 bg-white' : ''}`}>
              <div className={`absolute top-0 right-0 text-xs font-bold px-3 py-1 rounded-bl-lg z-10 ${service.category === 'Housekeeping' ? 'bg-slate-200 text-slate-800' : 'bg-primary text-primary-foreground'}`}>
                Fixed Price
              </div>
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <Badge variant={service.category === 'Housekeeping' ? "outline" : "secondary"} className="mb-2">
                      {service.category}
                    </Badge>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <Clock className="h-4 w-4" />
                  <span>{service.duration_minutes ? `${service.duration_minutes} mins` : service.duration}</span>
                </div>
                
                <div className="mb-6 p-4 bg-muted/50 rounded-lg border border-muted">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">Fixed Price</span>
                    <span className="text-2xl font-bold text-primary">£{service.price}</span>
                  </div>
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

      {services.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No services found in this category.</p>
          <Button variant="link" asChild className="mt-4">
            <Link href="/services">View all services</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
