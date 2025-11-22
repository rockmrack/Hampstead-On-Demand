-- Migration: Add Housekeeping Features
-- Date: 2025-11-22

-- Ensure service_requests table exists
CREATE TABLE IF NOT EXISTS service_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 1. Update service_requests table
-- Add 'source' column with enum type
DO $$ BEGIN
    CREATE TYPE request_source AS ENUM ('client', 'staff_report');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

ALTER TABLE service_requests ADD COLUMN IF NOT EXISTS source request_source DEFAULT 'client';

-- 2. Update bookings table
-- Add 'recurring_frequency' column with enum type
DO $$ BEGIN
    CREATE TYPE recurring_frequency AS ENUM ('one_off', 'weekly', 'bi_weekly');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

ALTER TABLE bookings ADD COLUMN IF NOT EXISTS recurring_frequency recurring_frequency DEFAULT 'one_off';

-- 3. Add Housekeeping Category
INSERT INTO categories (name, icon_slug) VALUES ('Housekeeping', 'sparkles') ON CONFLICT (name) DO NOTHING;
