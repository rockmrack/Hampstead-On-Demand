import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hampsteadmaintenance.co.uk'

  // Service categories for SEO
  const services = [
    'plumbing',
    'electrical',
    'handyman',
    'locksmith',
    'cleaning',
    'gardens',
    'boiler-repair',
    'emergency-plumber',
    'emergency-electrician',
    'carpet-cleaning',
    'deep-cleaning',
    'end-of-tenancy-cleaning',
    'lawn-mowing',
    'hedge-trimming',
    'gutter-cleaning',
    'lock-change',
    'emergency-lockout',
  ]

  // Blog posts (will be dynamically generated)
  const blogPosts = Array.from({ length: 100 }, (_, i) => ({
    url: `${baseUrl}/blog/post-${i + 1}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Service pages
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    // Blog posts
    ...blogPosts,
  ]
}
