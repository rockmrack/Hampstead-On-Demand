"use client"

import Navbar from "@/components/Navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import ServicesList from "@/components/ServicesList";
import { Service } from "@/types";

export const dynamic = 'force-dynamic';

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const supabase = createServerComponentClient({ cookies });
  const categoryFilter = searchParams.category;

  let query = supabase
    .from('services')
    .select('*, category:categories(name)')
    .eq('is_active', true);

  // If we have a category filter, we need to filter by the joined category name.
  // Supabase doesn't support filtering on joined columns easily in one go without !inner or similar.
  // But since we have a small dataset, we can fetch all and filter in JS, OR use !inner.
  if (categoryFilter) {
    query = supabase
      .from('services')
      .select('*, category:categories!inner(name)')
      .eq('is_active', true)
      .ilike('category.name', categoryFilter); // Case insensitive match? category names are capitalized in DB usually.
      // Actually, category names in DB are "Plumbing & Heating". Filter is "plumbing".
      // This is hard to match exactly via DB query if slugs aren't used.
      // The schema has `icon_slug`. Maybe we should filter by that?
      // The URL uses `category=plumbing`.
      // Let's assume we filter in JS for flexibility with the current URL structure.
  }

  const { data: servicesData, error } = await supabase
    .from('services')
    .select('*, category:categories(name)')
    .eq('is_active', true);
    
  if (error) {
    console.error("Error fetching services:", error);
    // Fallback or error state? For now, empty list.
  }

  let services: Service[] = (servicesData || []).map((s: any) => ({
    ...s,
    category: s.category?.name || 'Uncategorized',
    duration: `${s.duration_minutes} mins`,
    features: s.features || []
  }));

  if (categoryFilter) {
    services = services.filter(s => 
      s.category.toLowerCase().includes(categoryFilter.toLowerCase()) || 
      categoryFilter.toLowerCase().includes(s.category.toLowerCase().split(' ')[0]) // Handle "Plumbing" vs "Plumbing & Heating"
    );
  }

  return (
    <main className="min-h-screen bg-muted/30 pb-20 md:pb-0">
      <Navbar />
      <ServicesList services={services} categoryFilter={categoryFilter} />
    </main>
  );
}
