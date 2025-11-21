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
  electrical_id uuid;
  handyman_id uuid;
  carpentry_id uuid;
  painting_id uuid;
  roofing_id uuid;
  drainage_id uuid;
  locksmith_id uuid;
  glazing_id uuid;
  ac_id uuid;
  renovations_id uuid;
  seasonal_id uuid;
  landlord_id uuid;
begin
  -- Insert Categories
  insert into public.categories (name, icon_slug) values ('Plumbing & Heating', 'droplet') returning id into plumbing_id;
  insert into public.categories (name, icon_slug) values ('Electrical', 'zap') returning id into electrical_id;
  insert into public.categories (name, icon_slug) values ('Handyman', 'hammer') returning id into handyman_id;
  insert into public.categories (name, icon_slug) values ('Carpentry', 'axe') returning id into carpentry_id;
  insert into public.categories (name, icon_slug) values ('Painting & Decorating', 'brush') returning id into painting_id;
  insert into public.categories (name, icon_slug) values ('Roofing & Gutters', 'cloud-rain') returning id into roofing_id;
  insert into public.categories (name, icon_slug) values ('Drainage', 'waves') returning id into drainage_id;
  insert into public.categories (name, icon_slug) values ('Locksmith & Security', 'lock') returning id into locksmith_id;
  insert into public.categories (name, icon_slug) values ('Glazing', 'maximize') returning id into glazing_id;
  insert into public.categories (name, icon_slug) values ('Air Conditioning', 'wind') returning id into ac_id;
  insert into public.categories (name, icon_slug) values ('Major Renovations', 'home') returning id into renovations_id;
  insert into public.categories (name, icon_slug) values ('Seasonal & Lifestyle', 'sun') returning id into seasonal_id;
  insert into public.categories (name, icon_slug) values ('Landlord Services', 'key') returning id into landlord_id;

  -- Insert Services for Plumbing & Heating
  insert into public.services (category_id, title, description, price, duration_minutes) values
  (plumbing_id, 'Boiler Service (Annual)', 'Full safety check & certificate (CP12). Essential for warranty validity.', 120.00, 60),
  (plumbing_id, 'Tap Repair / Replace', 'We supply standard tap or fit yours. Includes removal of old unit.', 130.00, 60),
  (plumbing_id, 'Toilet Unblock', 'Fixed price unblocking. Includes machinery if needed.', 160.00, 60),
  (plumbing_id, 'Radiator Bleed (All)', 'Improve heating efficiency. Bleed all radiators in property.', 110.00, 60),
  (plumbing_id, 'Leak Investigation', 'Diagnostic visit to identify source of leak.', 120.00, 60),
  (plumbing_id, 'Gas Safety Cert (CP12)', 'Landlord Gas Safety Certificate for one appliance.', 110.00, 45);

  -- Insert Services for Electrical
  insert into public.services (category_id, title, description, price, duration_minutes) values
  (electrical_id, 'Replace Socket / Switch', 'Per unit. White plastic standard faceplate included.', 110.00, 45),
  (electrical_id, 'Hang Chandelier', 'Installation up to 3m ceiling height. Heavy duty fixings.', 180.00, 90),
  (electrical_id, 'EICR (1-2 Bed Flat)', 'Electrical safety check for landlords (1-2 Bed Flat).', 200.00, 120),
  (electrical_id, 'Fault Finding', 'Diagnostic visit for tripping fuses or power loss.', 120.00, 60);

  -- Insert Services for Handyman
  insert into public.services (category_id, title, description, price, duration_minutes) values
  (handyman_id, 'General Handyman (1 Hour)', 'Small repairs, hanging pictures, etc.', 95.00, 60),
  (handyman_id, 'TV Wall Mounting', 'Up to 55 inch TV. Bracket not included (can be supplied).', 140.00, 90),
  (handyman_id, 'Hang Mirror / Art', 'Up to 3 items. Heavy duty fixings included for safety.', 85.00, 45),
  (handyman_id, 'Flatpack Assembly (Large)', 'Wardrobe or Bed frame assembly.', 180.00, 120);

  -- Insert Services for Carpentry
  insert into public.services (category_id, title, description, price, duration_minutes) values
  (carpentry_id, 'Hang Internal Door', 'Trimming and hanging 1 standard door (door not included).', 160.00, 90),
  (carpentry_id, 'Sash Window Cord Repair', 'Replace snapped cord (Lower sash). Per window.', 180.00, 120),
  (carpentry_id, 'Fit Door Lock/Latch', 'Install new handle/latch mechanism.', 110.00, 60),
  (carpentry_id, 'Build Shelves (Alcove)', 'Labour only. Floating or batten shelves in 1 alcove.', 250.00, 180),
  (carpentry_id, 'Boxing In Pipework', 'Hide unsightly pipes in bathroom/kitchen.', 140.00, 90);

  -- Insert Services for Painting & Decorating
  insert into public.services (category_id, title, description, price, duration_minutes) values
  (painting_id, 'Painter for a Day (8 Hrs)', 'One professional decorator. You supply paint.', 550.00, 480),
  (painting_id, 'Touch-Up Repairs', 'Filling cracks and painting patches (up to 2 hours).', 150.00, 120),
  (painting_id, 'Paint Front Door', 'Sand, prime, and gloss exterior door.', 220.00, 180),
  (painting_id, 'Wallpaper Feature Wall', 'Hanging paper on one standard wall.', 280.00, 180);

  -- Insert Services for Roofing & Gutters
  insert into public.services (category_id, title, description, price, duration_minutes) values
  (roofing_id, 'Gutter Clean (Terrace)', 'Clean gutters front and back. Ladder access only.', 160.00, 90),
  (roofing_id, 'Roof Inspection (Drone)', 'High resolution camera inspection with report.', 200.00, 60),
  (roofing_id, 'Replace Roof Tile', 'Replace up to 5 accessible tiles.', 150.00, 60);

  -- Insert Services for Drainage
  insert into public.services (category_id, title, description, price, duration_minutes) values
  (drainage_id, 'High Pressure Jetting', 'Clear external blockage/manhole.', 180.00, 60),
  (drainage_id, 'CCTV Drain Survey', 'Camera inspection with report (Look for rats/roots).', 250.00, 90);

  -- Insert Services for Locksmith & Security
  insert into public.services (category_id, title, description, price, duration_minutes) values
  (locksmith_id, 'Gain Entry (Standard)', 'Non-destructive entry (if possible).', 140.00, 45),
  (locksmith_id, 'Change Rim Cylinder (Yale)', 'Replace standard front door barrel.', 110.00, 30),
  (locksmith_id, 'Board Up Window', 'Emergency security boarding for broken glass.', 180.00, 60);

  -- Insert Services for Glazing
  insert into public.services (category_id, title, description, price, duration_minutes) values
  (glazing_id, 'Replace Single Pane', 'Standard small window glass replacement.', 160.00, 60),
  (glazing_id, 'Reseal Windows (Silicone)', 'Remove old silicone and reseal (up to 3 windows).', 120.00, 60);

  -- Insert Services for Air Conditioning
  insert into public.services (category_id, title, description, price, duration_minutes) values
  (ac_id, 'AC Service (Single Unit)', 'Clean filters, check gas levels, antibacterial spray.', 150.00, 60),
  (ac_id, 'AC Regas', 'Top up refrigerant gas.', 180.00, 60);

  -- Insert Services for Major Renovations
  insert into public.services (category_id, title, description, price, duration_minutes) values
  (renovations_id, 'Full Property Renovation Consultation', 'Site visit with Senior Architect to discuss layout & budget.', 0.00, 60),
  (renovations_id, 'Kitchen Design Visit', 'Measure up and material consultation.', 0.00, 60),
  (renovations_id, 'Full House Repainting Quote', 'Detailed quote for interior/exterior painting.', 0.00, 45),
  (renovations_id, 'The Pre-Sale Refresh Package', '2-Day blitz: Fix handles, touch-up paint, grout, deep clean.', 2500.00, 960);

  -- Insert Services for Seasonal & Lifestyle
  insert into public.services (category_id, title, description, price, duration_minutes) values
  (seasonal_id, 'Patio Jet Wash (Spring Prep)', 'High pressure clean of patio and garden furniture setup.', 250.00, 120),
  (seasonal_id, 'Holiday Home Check', 'We visit while you are away: Check boiler, post, plants.', 45.00, 30),
  (seasonal_id, 'Christmas Tree Disposal', 'Collection and recycling in January.', 40.00, 30);

  -- Insert Services for Landlord Services
  insert into public.services (category_id, title, description, price, duration_minutes) values
  (landlord_id, 'Rental Turnaround Package', 'Safety checks, lock change, smoke alarms, 1 room paint.', 1200.00, 480);

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
