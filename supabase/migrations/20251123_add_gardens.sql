-- Migration: Add Gardens & Outdoors Category
-- Date: 2025-11-23

INSERT INTO categories (name, icon_slug) VALUES ('Gardens & Outdoors', 'leaf') ON CONFLICT (name) DO NOTHING;
