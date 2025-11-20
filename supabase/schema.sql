-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Users table
create table public.users (
  id uuid references auth.users not null primary key,
  email text not null,
  full_name text,
  phone text,
  address text,
  postcode text,
  is_admin boolean default false,
  referral_code text unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Categories table
create table public.categories (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  icon_slug text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Services table
create table public.services (
  id uuid default uuid_generate_v4() primary key,
  category_id uuid references public.categories(id) not null,
  title text not null,
  description text,
  price decimal(10, 2) not null,
  duration_minutes integer,
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Bookings table
create table public.bookings (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id) not null,
  service_id uuid references public.services(id) not null,
  status text check (status in ('pending', 'confirmed', 'completed', 'cancelled')) default 'pending',
  scheduled_date date not null,
  scheduled_slot text check (scheduled_slot in ('Morning', 'Afternoon')) not null,
  customer_notes text,
  photo_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Row Level Security (RLS)
alter table public.users enable row level security;
alter table public.categories enable row level security;
alter table public.services enable row level security;
alter table public.bookings enable row level security;

-- Policies

-- Users can read their own profile
create policy "Users can view own profile" on public.users
  for select using (auth.uid() = id);

-- Users can update their own profile
create policy "Users can update own profile" on public.users
  for update using (auth.uid() = id);

-- Categories are viewable by everyone
create policy "Categories are viewable by everyone" on public.categories
  for select using (true);

-- Services are viewable by everyone
create policy "Services are viewable by everyone" on public.services
  for select using (true);

-- Users can view their own bookings
create policy "Users can view own bookings" on public.bookings
  for select using (auth.uid() = user_id);

-- Users can create bookings
create policy "Users can create bookings" on public.bookings
  for insert with check (auth.uid() = user_id);

-- Admins can view all bookings (This requires a way to identify admins, usually via a claim or checking the users table. 
-- For simplicity in this schema, we'll assume a function or just rely on service role for admin dashboard for now, 
-- or add a policy checking the public.users table if circular dependency allows, or use custom claims).
-- A simple policy for admins if we trust the is_admin flag in public.users (Note: secure setup usually involves custom claims):
create policy "Admins can view all bookings" on public.bookings
  for select using (
    exists (
      select 1 from public.users
      where public.users.id = auth.uid() and public.users.is_admin = true
    )
  );

create policy "Admins can update all bookings" on public.bookings
  for update using (
    exists (
      select 1 from public.users
      where public.users.id = auth.uid() and public.users.is_admin = true
    )
  );

-- Seed Data
do $$
declare
  plumbing_id uuid;
  heating_id uuid;
  handyman_id uuid;
  electrical_id uuid;
  roofing_id uuid;
begin
  -- Insert Categories
  insert into public.categories (name, icon_slug) values ('Plumbing', 'droplet') returning id into plumbing_id;
  insert into public.categories (name, icon_slug) values ('Heating', 'flame') returning id into heating_id;
  insert into public.categories (name, icon_slug) values ('Handyman', 'hammer') returning id into handyman_id;
  insert into public.categories (name, icon_slug) values ('Electrical', 'zap') returning id into electrical_id;
  insert into public.categories (name, icon_slug) values ('Roofing', 'home') returning id into roofing_id;

  -- Insert Services for Plumbing
  insert into public.services (category_id, title, description, price, duration_minutes) values
  (plumbing_id, 'Replace Kitchen Tap', 'We supply standard tap or fit yours', 120.00, 60),
  (plumbing_id, 'Unblock Sink', 'Clear blockage in kitchen or bathroom sink', 85.00, 45),
  (plumbing_id, 'Fix Leaking Pipe', 'Repair visible leaking pipework', 95.00, 60);

  -- Insert Services for Heating
  insert into public.services (category_id, title, description, price, duration_minutes) values
  (heating_id, 'Boiler Service', 'Annual safety check and service', 90.00, 60),
  (heating_id, 'Radiator Bleeding', 'Bleed all radiators in property', 75.00, 45),
  (heating_id, 'Thermostat Installation', 'Install smart or standard thermostat', 110.00, 90);

  -- Insert Services for Handyman
  insert into public.services (category_id, title, description, price, duration_minutes) values
  (handyman_id, 'General Handyman (1 Hour)', 'Small repairs, hanging pictures, etc.', 85.00, 60),
  (handyman_id, 'Furniture Assembly', 'Assemble flat-pack furniture (per item)', 60.00, 90),
  (handyman_id, 'Door Handle Repair', 'Fix or replace loose door handles', 70.00, 45);

  -- Insert Services for Electrical
  insert into public.services (category_id, title, description, price, duration_minutes) values
  (electrical_id, 'Replace Light Fitting', 'Swap existing fitting for new one', 80.00, 45),
  (electrical_id, 'Socket Replacement', 'Replace single or double socket faceplate', 75.00, 30),
  (electrical_id, 'Fuse Box Inspection', 'Visual inspection and basic testing', 150.00, 120);

  -- Insert Services for Roofing
  insert into public.services (category_id, title, description, price, duration_minutes) values
  (roofing_id, 'Gutter Cleaning (Terrace)', 'Clean gutters front and back', 150.00, 90),
  (roofing_id, 'Replace Broken Tile', 'Replace up to 5 accessible tiles', 180.00, 120),
  (roofing_id, 'Chimney Pot Capping', 'Supply and fit chimney cap', 200.00, 120);

  -- Storage Policies (Note: You must create the 'booking-photos' bucket in the Supabase Dashboard first)
  -- insert into storage.buckets (id, name) values ('booking-photos', 'booking-photos');
  
  -- Policy to allow authenticated users to upload photos
  -- create policy "Authenticated users can upload booking photos"
  -- on storage.objects for insert
  -- with check ( bucket_id = 'booking-photos' and auth.role() = 'authenticated' );

  -- Policy to allow anyone to view photos (or restrict to admins/owners)
  -- create policy "Anyone can view booking photos"
  -- on storage.objects for select
  -- using ( bucket_id = 'booking-photos' );

end $$;
