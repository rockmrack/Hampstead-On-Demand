'use client'

import Link from 'next/link'

// Area data for location-specific landing pages
const areas = {
  'hampstead-nw3': {
    name: 'Hampstead',
    postcode: 'NW3',
    responseTime: '30-45 minutes',
    description: 'Our home base - fastest response times in Hampstead village, South End Green, and surrounding areas.',
    landmarks: ['Hampstead Heath', 'Flask Walk', 'South End Green', 'Hampstead High Street'],
    coordinates: { lat: 51.5558, lng: -0.1779 },
  },
  'st-johns-wood-nw8': {
    name: "St John's Wood",
    postcode: 'NW8',
    responseTime: '35-50 minutes',
    description: "Premium property services for St John's Wood, including Abbey Road and the American School area.",
    landmarks: ["Lord's Cricket Ground", 'Abbey Road', 'Primrose Hill border', 'Avenue Road'],
    coordinates: { lat: 51.5347, lng: -0.1751 },
  },
  'camden-nw1': {
    name: 'Camden',
    postcode: 'NW1',
    responseTime: '40-55 minutes',
    description: "Covering Camden Town, Regent's Park, and the canal-side areas with expert maintenance services.",
    landmarks: ['Camden Market', "Regent's Park", 'Camden Lock', 'Primrose Hill'],
    coordinates: { lat: 51.5390, lng: -0.1426 },
  },
  'west-hampstead-nw6': {
    name: 'West Hampstead',
    postcode: 'NW6',
    responseTime: '35-50 minutes',
    description: 'Fast response across West Hampstead, Fortune Green, and the borders of Kilburn.',
    landmarks: ['West End Lane', 'Fortune Green', 'Hampstead Cemetery', 'Kilburn High Road'],
    coordinates: { lat: 51.5469, lng: -0.1913 },
  },
  'primrose-hill': {
    name: 'Primrose Hill',
    postcode: 'NW1/NW3',
    responseTime: '35-45 minutes',
    description: 'Serving the charming Primrose Hill village with its period properties and modern apartments.',
    landmarks: ['Primrose Hill Park', 'Regent\'s Park Road', 'Chalcot Square', 'The Queens pub'],
    coordinates: { lat: 51.5398, lng: -0.1617 },
  },
  'belsize-park': {
    name: 'Belsize Park',
    postcode: 'NW3',
    responseTime: '30-40 minutes',
    description: 'Expert services for Belsize Park\'s Victorian and Edwardian properties.',
    landmarks: ['Belsize Village', 'Haverstock Hill', 'England\'s Lane', 'Belsize Park Gardens'],
    coordinates: { lat: 51.5505, lng: -0.1647 },
  },
  'swiss-cottage': {
    name: 'Swiss Cottage',
    postcode: 'NW3',
    responseTime: '30-40 minutes',
    description: 'Covering Swiss Cottage and the Finchley Road corridor with rapid response times.',
    landmarks: ['Swiss Cottage Library', 'Finchley Road', 'Adelaide Road', 'Swiss Cottage Leisure Centre'],
    coordinates: { lat: 51.5432, lng: -0.1745 },
  },
  'kilburn-nw6': {
    name: 'Kilburn',
    postcode: 'NW6',
    responseTime: '40-55 minutes',
    description: 'Reliable property maintenance services across Kilburn and Brondesbury areas.',
    landmarks: ['Kilburn High Road', 'Brondesbury Park', 'Queen\'s Park border', 'Kilburn Priory'],
    coordinates: { lat: 51.5373, lng: -0.1918 },
  },
}

type AreaKey = keyof typeof areas

export default function AreaPage({ params }: { params: { area: string } }) {
  const areaData = areas[params.area as AreaKey]

  if (!areaData) {
    return (
      <div className="area-page not-found">
        <h1>Area Not Found</h1>
        <Link href="/">Return to Homepage</Link>
      </div>
    )
  }

  const services = [
    { name: 'Emergency Plumber', price: 'From £95', icon: '🔧', time: '60 min response' },
    { name: 'Electrician', price: 'From £85', icon: '⚡', time: 'Same day' },
    { name: 'Locksmith', price: 'From £95', icon: '🔐', time: '30-60 min' },
    { name: 'Handyman', price: 'From £60', icon: '🔨', time: 'Next day' },
    { name: 'Boiler Repair', price: 'From £120', icon: '🔥', time: 'Same day' },
    { name: 'Deep Cleaning', price: 'From £280', icon: '✨', time: 'Bookable' },
  ]

  return (
    <div className="area-page">
      {/* Hero */}
      <section className="area-hero">
        <div className="area-hero-inner">
          <div className="area-badge">{areaData.postcode} Coverage</div>
          <h1>Property Maintenance in {areaData.name}</h1>
          <p>{areaData.description}</p>
          <div className="response-time">
            <span className="response-icon">⚡</span>
            <span>Average response: <strong>{areaData.responseTime}</strong></span>
          </div>
          <div className="hero-actions">
            <a href="tel:02038742670" className="btn btn-primary">
              📞 Call 020 3874 2670
            </a>
            <Link href="/quote" className="btn btn-outline">
              Get Instant Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <section className="area-services">
        <div className="section-inner">
          <h2>Services Available in {areaData.name}</h2>
          <div className="services-grid">
            {services.map((service, idx) => (
              <div key={idx} className="service-card">
                <span className="service-icon">{service.icon}</span>
                <h3>{service.name}</h3>
                <p className="service-price">{service.price}</p>
                <p className="service-time">{service.time}</p>
                <a href="tel:02038742670" className="book-btn">Book Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local knowledge */}
      <section className="area-local">
        <div className="section-inner">
          <h2>We Know {areaData.name}</h2>
          <p>Our engineers are familiar with the unique challenges of {areaData.name} properties:</p>
          <ul className="local-features">
            <li>✓ Experience with Victorian & Edwardian plumbing systems</li>
            <li>✓ Conservation area regulations knowledge</li>
            <li>✓ Parking permit holders for quick access</li>
            <li>✓ Relationships with local suppliers for fast parts</li>
          </ul>
          <div className="landmarks">
            <h4>Areas We Cover:</h4>
            <div className="landmark-tags">
              {areaData.landmarks.map((landmark, idx) => (
                <span key={idx} className="landmark-tag">{landmark}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="emergency-cta">
        <div className="section-inner">
          <h2>🚨 Emergency in {areaData.name}?</h2>
          <p>Burst pipe? Power outage? Locked out? We're on our way.</p>
          <a href="tel:02038742670" className="emergency-btn">
            Call Now: 020 3874 2670
          </a>
          <p className="availability">Available 24/7 including weekends & bank holidays</p>
        </div>
      </section>

      {/* Other areas */}
      <section className="other-areas">
        <div className="section-inner">
          <h3>We Also Serve</h3>
          <div className="areas-links">
            {Object.entries(areas)
              .filter(([key]) => key !== params.area)
              .slice(0, 5)
              .map(([key, area]) => (
                <Link key={key} href={`/areas/${key}`} className="area-link">
                  {area.name} ({area.postcode})
                </Link>
              ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .area-page {
          min-height: 100vh;
        }
        .area-hero {
          background: linear-gradient(135deg, #2c3e50 0%, #546e7a 100%);
          color: white;
          padding: 120px 24px 80px;
          text-align: center;
        }
        .area-hero-inner {
          max-width: 800px;
          margin: 0 auto;
        }
        .area-badge {
          display: inline-block;
          background: rgba(255,255,255,0.15);
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
        }
        .area-hero h1 {
          font-size: 42px;
          margin-bottom: 16px;
          color: white;
        }
        .area-hero p {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: 24px;
        }
        .response-time {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(139,115,85,0.3);
          padding: 12px 24px;
          border-radius: 8px;
          margin-bottom: 32px;
        }
        .response-icon {
          font-size: 20px;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn {
          padding: 16px 32px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
        }
        .btn-primary {
          background: #8b7355;
          color: white;
        }
        .btn-primary:hover {
          background: #a0896d;
        }
        .btn-outline {
          border: 2px solid rgba(255,255,255,0.5);
          color: white;
        }
        .btn-outline:hover {
          background: rgba(255,255,255,0.1);
        }
        .section-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .area-services {
          padding: 80px 24px;
          background: #f8f9fa;
        }
        .area-services h2 {
          text-align: center;
          font-size: 32px;
          color: #2c3e50;
          margin-bottom: 48px;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr; }
        }
        .service-card {
          background: white;
          padding: 32px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }
        .service-icon {
          font-size: 40px;
          display: block;
          margin-bottom: 16px;
        }
        .service-card h3 {
          font-size: 18px;
          color: #2c3e50;
          margin-bottom: 8px;
        }
        .service-price {
          font-size: 20px;
          font-weight: 700;
          color: #8b7355;
          margin-bottom: 4px;
        }
        .service-time {
          font-size: 14px;
          color: #888;
          margin-bottom: 16px;
        }
        .book-btn {
          display: block;
          padding: 12px;
          background: #2c3e50;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
        }
        .book-btn:hover {
          background: #8b7355;
        }
        .area-local {
          padding: 80px 24px;
        }
        .area-local h2 {
          font-size: 32px;
          color: #2c3e50;
          margin-bottom: 16px;
        }
        .area-local > .section-inner > p {
          font-size: 18px;
          color: #666;
          margin-bottom: 32px;
        }
        .local-features {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 40px;
        }
        @media (max-width: 600px) {
          .local-features { grid-template-columns: 1fr; }
        }
        .local-features li {
          font-size: 16px;
          color: #444;
          padding: 16px;
          background: #f8f9fa;
          border-radius: 8px;
        }
        .landmarks h4 {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #888;
          margin-bottom: 16px;
        }
        .landmark-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .landmark-tag {
          background: #e8f4f8;
          color: #0891b2;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
        }
        .emergency-cta {
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          color: white;
          padding: 60px 24px;
          text-align: center;
        }
        .emergency-cta h2 {
          font-size: 32px;
          color: white;
          margin-bottom: 12px;
        }
        .emergency-cta p {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: 24px;
        }
        .emergency-btn {
          display: inline-block;
          background: white;
          color: #dc2626;
          padding: 18px 40px;
          border-radius: 8px;
          font-size: 20px;
          font-weight: 700;
          text-decoration: none;
        }
        .availability {
          font-size: 14px;
          margin-top: 16px;
          opacity: 0.8;
        }
        .other-areas {
          padding: 60px 24px;
          background: #f8f9fa;
          text-align: center;
        }
        .other-areas h3 {
          font-size: 18px;
          color: #888;
          margin-bottom: 24px;
        }
        .areas-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }
        .area-link {
          padding: 10px 20px;
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          color: #2c3e50;
          text-decoration: none;
          font-size: 14px;
        }
        .area-link:hover {
          border-color: #8b7355;
          color: #8b7355;
        }
      `}</style>
    </div>
  )
}
