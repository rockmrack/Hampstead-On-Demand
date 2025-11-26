-- Add features column to services table
ALTER TABLE public.services ADD COLUMN IF NOT EXISTS features TEXT[];

-- Create service_requests table for custom service requests
CREATE TABLE IF NOT EXISTS public.service_requests (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id),
  email text not null,
  service_type text not null,
  description text not null,
  status text check (status in ('pending', 'reviewed', 'contacted', 'closed')) default 'pending',
  admin_notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS on service_requests
ALTER TABLE public.service_requests ENABLE ROW LEVEL SECURITY;

-- Users can create service requests
CREATE POLICY "Users can create service requests" ON public.service_requests
  FOR INSERT WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- Users can view their own service requests
CREATE POLICY "Users can view own service requests" ON public.service_requests
  FOR SELECT USING (auth.uid() = user_id);

-- Admins can view all service requests
CREATE POLICY "Admins can view all service requests" ON public.service_requests
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE public.users.id = auth.uid() AND public.users.is_admin = true
    )
  );

-- Admins can update service requests
CREATE POLICY "Admins can update service requests" ON public.service_requests
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE public.users.id = auth.uid() AND public.users.is_admin = true
    )
  );

-- Update services with features data for existing services
-- Note: These UUIDs won't match if database was seeded differently.
-- This is a best-effort migration that won't fail if services don't exist.

DO $$
BEGIN
  -- Add Housekeeping category if not exists
  INSERT INTO public.categories (name, icon_slug)
  SELECT 'Housekeeping', 'sparkles'
  WHERE NOT EXISTS (SELECT 1 FROM public.categories WHERE name = 'Housekeeping');
  
  -- Add Gardens & Outdoors category if not exists
  INSERT INTO public.categories (name, icon_slug)
  SELECT 'Gardens & Outdoors', 'leaf'
  WHERE NOT EXISTS (SELECT 1 FROM public.categories WHERE name = 'Gardens & Outdoors');
END $$;
