export interface Category {
  id: string;
  name: string;
  icon_slug: string;
  created_at?: string;
}

export interface Service {
  id: string;
  category_id?: string; // Optional because we might join or just use category name in frontend for now
  category: string; // Kept for compatibility with current frontend filtering
  title: string;
  description: string;
  price: number;
  duration: string; // Display string e.g. "60 mins"
  duration_minutes?: number; // DB column
  features: string[];
  is_active?: boolean;
}

export interface Booking {
  id: string;
  user_id: string;
  service_id: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  scheduled_date: string;
  scheduled_slot: 'Morning' | 'Afternoon';
  customer_notes?: string;
  photo_url?: string;
  created_at: string;
  service?: Service; // For joined queries
  user?: User; // For joined queries
}

export interface User {
  id: string;
  email?: string;
  full_name?: string;
  phone?: string;
  address?: string;
  postcode?: string;
  is_admin?: boolean;
  referral_code?: string;
  created_at?: string;
}
