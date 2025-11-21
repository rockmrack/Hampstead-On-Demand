
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { services } from '../src/lib/data';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; // Or SERVICE_ROLE_KEY if needed for admin tasks

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase URL or Key in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  console.log('Starting seed...');

  // 1. Get Categories
  const { data: categories, error: catError } = await supabase
    .from('categories')
    .select('id, name');

  if (catError) {
    console.error('Error fetching categories:', catError);
    return;
  }

  if (!categories || categories.length === 0) {
    console.error('No categories found. Please run the schema.sql seed first or insert categories.');
    // Optionally we could insert categories here too, but let's assume schema.sql ran
    return;
  }

  const categoryMap = new Map(categories.map(c => [c.name, c.id]));

  // 2. Upsert Services
  for (const service of services) {
    const categoryId = categoryMap.get(service.category);

    if (!categoryId) {
      console.warn(`Category not found for service: ${service.title} (${service.category})`);
      continue;
    }

    const { error } = await supabase
      .from('services')
      .upsert({
        id: service.id,
        category_id: categoryId,
        title: service.title,
        description: service.description,
        price: service.price,
        duration_minutes: parseInt(service.duration) || 60, // Simple parse
        features: service.features,
        is_active: true
      });

    if (error) {
      console.error(`Error upserting service ${service.title}:`, error);
    } else {
      console.log(`Upserted: ${service.title}`);
    }
  }

  console.log('Seed complete.');
}

seed();
