// Structured Data (JSON-LD) for SEO

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://hampsteadmaintenance.co.uk/#organization',
  name: 'Hampstead Maintenance',
  alternateName: 'Hampstead On-Demand Property Services',
  description: 'Premier property maintenance and repair services in Hampstead and North West London since 2009. Plumbing, electrical, handyman, locksmith, cleaning, and garden services available on-demand.',
  url: 'https://hampsteadmaintenance.co.uk',
  logo: 'https://hampsteadmaintenance.co.uk/logo.svg',
  image: 'https://hampsteadmaintenance.co.uk/og-image.jpg',
  telephone: '+44-7459-345456',
  email: 'info@hampsteadmaintenance.co.uk',
  foundingDate: '2009',
  priceRange: '££',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hampstead',
    addressLocality: 'London',
    addressRegion: 'Greater London',
    postalCode: 'NW3',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5558,
    longitude: -0.1779,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Hampstead, London',
    },
    {
      '@type': 'PostalCodeRange',
      postalCode: 'NW3',
    },
    {
      '@type': 'PostalCodeRange',
      postalCode: 'NW8',
    },
    {
      '@type': 'PostalCodeRange',
      postalCode: 'NW1',
    },
    {
      '@type': 'PostalCodeRange',
      postalCode: 'NW6',
    },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
      description: '24/7 Emergency Services Available',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '156',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.facebook.com/hampsteadmaintenance',
    'https://www.instagram.com/hampsteadmaintenance',
    'https://twitter.com/hampsteadmaint',
  ],
}

export const servicesOffered = [
  {
    '@type': 'Service',
    serviceType: 'Plumbing Services',
    provider: {
      '@id': 'https://hampsteadmaintenance.co.uk/#organization',
    },
    areaServed: {
      '@type': 'City',
      name: 'Hampstead, London, NW3, NW8, NW1, NW6',
    },
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '95',
        priceCurrency: 'GBP',
        description: 'From £95 emergency callout',
      },
    },
  },
  {
    '@type': 'Service',
    serviceType: 'Electrical Services',
    provider: {
      '@id': 'https://hampsteadmaintenance.co.uk/#organization',
    },
    areaServed: {
      '@type': 'City',
      name: 'Hampstead, London, NW3, NW8, NW1, NW6',
    },
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '85',
        priceCurrency: 'GBP',
        description: 'From £85 callout',
      },
    },
  },
  {
    '@type': 'Service',
    serviceType: 'Locksmith Services',
    provider: {
      '@id': 'https://hampsteadmaintenance.co.uk/#organization',
    },
    areaServed: {
      '@type': 'City',
      name: 'Hampstead, London, NW3, NW8, NW1, NW6',
    },
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '95',
        priceCurrency: 'GBP',
        description: 'From £95 emergency lockout - 30-60min response',
      },
    },
  },
  {
    '@type': 'Service',
    serviceType: 'Handyman Services',
    provider: {
      '@id': 'https://hampsteadmaintenance.co.uk/#organization',
    },
    areaServed: {
      '@type': 'City',
      name: 'Hampstead, London, NW3, NW8, NW1, NW6',
    },
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '60',
        priceCurrency: 'GBP',
        description: 'From £60 for small jobs',
      },
    },
  },
  {
    '@type': 'Service',
    serviceType: 'Cleaning Services',
    provider: {
      '@id': 'https://hampsteadmaintenance.co.uk/#organization',
    },
    areaServed: {
      '@type': 'City',
      name: 'Hampstead, London, NW3, NW8, NW1, NW6',
    },
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '280',
        priceCurrency: 'GBP',
        description: 'From £280 for 2-bed deep clean',
      },
    },
  },
  {
    '@type': 'Service',
    serviceType: 'Garden & Landscape Services',
    provider: {
      '@id': 'https://hampsteadmaintenance.co.uk/#organization',
    },
    areaServed: {
      '@type': 'City',
      name: 'Hampstead, London, NW3, NW8, NW1, NW6',
    },
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '45',
        priceCurrency: 'GBP',
        description: 'From £45 lawn mowing',
      },
    },
  },
]

export function getBlogPostSchema(post: {
  title: string
  description: string
  slug: string
  publishedDate: string
  modifiedDate: string
  author: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image || 'https://hampsteadmaintenance.co.uk/blog-default.jpg',
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@id': 'https://hampsteadmaintenance.co.uk/#organization',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://hampsteadmaintenance.co.uk/blog/${post.slug}`,
    },
  }
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
