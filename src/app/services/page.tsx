import Navbar from "@/components/Navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import ServicesList from "@/components/ServicesList";
import { Service } from "@/types";

export const dynamic = 'force-dynamic';

// Type for the raw service data from Supabase join query
interface ServiceRow {
  id: string;
  category_id: string;
  title: string;
  description: string | null;
  price: number;
  duration_minutes: number | null;
  features: string[] | null;
  is_active: boolean;
  created_at: string;
  category: { name: string } | null;
}

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const supabase = createServerComponentClient({ cookies });
  const categoryFilter = searchParams.category;

  const { data: servicesData, error } = await supabase
    .from('services')
    .select('*, category:categories(name)')
    .eq('is_active', true);
    
  if (error) {
    // In production, this could be sent to an error reporting service
    throw new Error(`Failed to fetch services: ${error.message}`);
  }

  // Transform database rows to frontend Service type with proper typing
  let services: Service[] = (servicesData as ServiceRow[] || []).map((s) => ({
    id: s.id,
    category_id: s.category_id,
    category: s.category?.name || 'Uncategorized',
    title: s.title,
    description: s.description || '',
    price: s.price,
    duration: `${s.duration_minutes || 0} mins`,
    duration_minutes: s.duration_minutes || 0,
    features: s.features || [],
    is_active: s.is_active,
  }));

  // Filter by category if provided (handles partial matching like "plumbing" -> "Plumbing & Heating")
  if (categoryFilter) {
    const filterLower = categoryFilter.toLowerCase();
    services = services.filter(s => {
      const categoryLower = s.category.toLowerCase();
      return categoryLower.includes(filterLower) || 
        filterLower.includes(categoryLower.split(' ')[0]);
    });
  }

  return (
    <main className="min-h-screen bg-muted/30 pb-20 md:pb-0">
      <Navbar />
      <ServicesList services={services} categoryFilter={categoryFilter} />
    </main>
  );
}
