import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Mock data for now - in real app this comes from Supabase
const services = [
  {
    id: '1',
    category: 'Plumbing',
    title: 'Replace Kitchen Tap',
    description: 'We supply standard tap or fit yours',
    price: 120,
    duration: '60 mins'
  },
  {
    id: '2',
    category: 'Plumbing',
    title: 'Unblock Sink',
    description: 'Clear blockage in kitchen or bathroom sink',
    price: 85,
    duration: '45 mins'
  },
  {
    id: '3',
    category: 'Heating',
    title: 'Boiler Service',
    description: 'Annual safety check and service',
    price: 90,
    duration: '60 mins'
  },
  {
    id: '4',
    category: 'Handyman',
    title: 'General Handyman (1 Hour)',
    description: 'Small repairs, hanging pictures, etc.',
    price: 85,
    duration: '60 mins'
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

  return (
    <main className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">
          {categoryFilter ? `${categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)} Services` : 'All Services'}
        </h1>
        <p className="text-gray-600 mb-8">Select a service to book instantly.</p>

        <div className="grid gap-4">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-lg text-gray-900">{service.title}</h3>
                  <span className="text-xs bg-blue-50 text-primary px-2 py-1 rounded-full font-medium">
                    {service.duration}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
              
              <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto mt-2 md:mt-0">
                <span className="font-bold text-xl text-gray-900">£{service.price}</span>
                <Link href={`/book/${service.id}`}>
                  <Button className="bg-secondary hover:bg-secondary/90 text-white min-w-[100px]">
                    Book
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
