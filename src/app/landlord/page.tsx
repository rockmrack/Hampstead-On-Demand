import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Landlord Property Maintenance Services | Hampstead Maintenance',
  description: 'Dedicated property maintenance for landlords and letting agents across North West London. EICR certificates, Gas Safety, emergency response, and multi-property discounts.',
  keywords: 'landlord maintenance services, property management NW3, letting agent maintenance, EICR certificate London, Gas Safety certificate landlord',
}

const services = [
  {
    icon: '⚡',
    title: 'EICR Certificates',
    description: 'Electrical Installation Condition Reports required every 5 years for rental properties.',
    price: 'From £150',
  },
  {
    icon: '🔥',
    title: 'Gas Safety Certificates',
    description: 'Annual CP12 certificates from Gas Safe registered engineers. Legal requirement.',
    price: 'From £75',
  },
  {
    icon: '🔐',
    title: 'Lock Changes',
    description: 'Fast lock changes between tenancies. All major lock brands. Keys cut on-site.',
    price: 'From £85',
  },
  {
    icon: '🧹',
    title: 'End of Tenancy Cleaning',
    description: 'Professional deep cleaning to deposit return standard. Inventory ready.',
    price: 'From £180',
  },
  {
    icon: '🔧',
    title: 'Maintenance Repairs',
    description: 'General repairs, plumbing, electrical, carpentry. Fast response times.',
    price: 'From £65/hr',
  },
  {
    icon: '🚨',
    title: 'Emergency Response',
    description: '24/7 emergency callout for tenant emergencies. Average 45 min response.',
    price: 'From £95',
  },
]

const benefits = [
  {
    icon: '💷',
    title: 'Multi-Property Discounts',
    description: '10% off for 3+ properties, 15% off for 10+ properties',
  },
  {
    icon: '📱',
    title: 'Dedicated Account Manager',
    description: 'Single point of contact for all your properties',
  },
  {
    icon: '📋',
    title: 'Digital Reports',
    description: 'All certificates and reports delivered digitally within 24 hours',
  },
  {
    icon: '⏰',
    title: 'Priority Scheduling',
    description: 'Faster response times and flexible scheduling',
  },
  {
    icon: '🧾',
    title: 'Monthly Invoicing',
    description: 'Consolidated monthly invoices for easy accounting',
  },
  {
    icon: '🔔',
    title: 'Compliance Reminders',
    description: 'Automatic reminders for certificate renewals',
  },
]

const stats = [
  { value: '500+', label: 'Properties Managed' },
  { value: '45 min', label: 'Avg Response Time' },
  { value: '98%', label: 'Client Retention' },
  { value: '24/7', label: 'Emergency Support' },
]

export default function LandlordPage() {
  return (
    <div className="landlord-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">FOR LANDLORDS & LETTING AGENTS</div>
          <h1>Property Maintenance Made Simple</h1>
          <p>Reliable maintenance services for your rental portfolio across North West London. One call, everything handled.</p>
          
          <div className="hero-stats">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <Link href="/quote" className="btn btn-primary">Get a Quote</Link>
            <a href="tel:07459345456" className="btn btn-outline">Call 07459 345456</a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="section-inner">
          <h2>Landlord Services</h2>
          <p className="section-subtitle">Everything you need to keep your properties compliant and tenants happy</p>
          
          <div className="services-grid">
            {services.map((service, idx) => (
              <div key={idx} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-price">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section">
        <div className="section-inner">
          <h2>Why Landlords Choose Us</h2>
          
          <div className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-item">
                <div className="benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="compliance-section">
        <div className="section-inner">
          <h2>Stay Compliant</h2>
          <p className="section-subtitle">We help you meet all legal requirements for rental properties</p>
          
          <div className="compliance-grid">
            <div className="compliance-card">
              <h4>Gas Safety (CP12)</h4>
              <div className="compliance-req">Required: Annually</div>
              <p>All gas appliances must be checked annually by a Gas Safe registered engineer. Tenants must receive a copy within 28 days.</p>
              <div className="compliance-penalty">Penalty: Up to £6,000 fine</div>
            </div>
            
            <div className="compliance-card">
              <h4>EICR Certificate</h4>
              <div className="compliance-req">Required: Every 5 years</div>
              <p>Electrical Installation Condition Report mandatory for all new tenancies since April 2021. Required for all tenancies.</p>
              <div className="compliance-penalty">Penalty: Up to £30,000 fine</div>
            </div>
            
            <div className="compliance-card">
              <h4>EPC Rating</h4>
              <div className="compliance-req">Required: Minimum E rating</div>
              <p>Energy Performance Certificate must be rated E or above to legally let your property. New builds from 2025 require C rating.</p>
              <div className="compliance-penalty">Penalty: Up to £5,000 fine</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="pricing-section">
        <div className="section-inner">
          <h2>Portfolio Packages</h2>
          <p className="section-subtitle">Discounted rates for landlords with multiple properties</p>
          
          <div className="pricing-grid">
            <div className="pricing-card">
              <h4>Essential</h4>
              <div className="pricing-properties">1-2 Properties</div>
              <div className="pricing-price">Standard Rates</div>
              <ul>
                <li>✓ Priority scheduling</li>
                <li>✓ Digital certificates</li>
                <li>✓ 24/7 emergency line</li>
                <li>✓ Same-day quotes</li>
              </ul>
              <Link href="/quote" className="btn btn-outline">Get Quote</Link>
            </div>
            
            <div className="pricing-card featured">
              <div className="featured-badge">Most Popular</div>
              <h4>Portfolio</h4>
              <div className="pricing-properties">3-9 Properties</div>
              <div className="pricing-price">10% Off All Services</div>
              <ul>
                <li>✓ Everything in Essential</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ Monthly invoicing</li>
                <li>✓ Compliance calendar</li>
              </ul>
              <Link href="/quote" className="btn btn-primary">Get Quote</Link>
            </div>
            
            <div className="pricing-card">
              <h4>Enterprise</h4>
              <div className="pricing-properties">10+ Properties</div>
              <div className="pricing-price">15% Off + Custom Terms</div>
              <ul>
                <li>✓ Everything in Portfolio</li>
                <li>✓ Custom SLA agreements</li>
                <li>✓ Quarterly reviews</li>
                <li>✓ Bulk booking discounts</li>
              </ul>
              <a href="tel:07459345456" className="btn btn-outline">Call to Discuss</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial-section">
        <div className="section-inner">
          <blockquote>
            "Hampstead Maintenance handles all 12 of our properties across NW London. From annual gas checks to emergency callouts, they're incredibly reliable. The compliance reminders alone have saved us from potential fines."
          </blockquote>
          <div className="testimonial-author">
            <strong>Sarah Mitchell</strong>
            <span>Portfolio Landlord, 12 properties</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="section-inner">
          <h2>Ready to Simplify Your Property Maintenance?</h2>
          <p>Join 200+ landlords who trust Hampstead Maintenance with their properties</p>
          <div className="cta-actions">
            <Link href="/quote" className="btn btn-primary">Get Your Quote</Link>
            <a href="tel:07459345456" className="btn btn-white">Call 07459 345456</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .landlord-page {
          min-height: 100vh;
        }
        .hero {
          background: linear-gradient(135deg, #1a365d 0%, #2c5282 100%);
          color: white;
          padding: 120px 24px 80px;
          text-align: center;
        }
        .hero-inner {
          max-width: 900px;
          margin: 0 auto;
        }
        .hero-badge {
          display: inline-block;
          background: rgba(255,255,255,0.15);
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin-bottom: 24px;
        }
        .hero h1 {
          font-size: 48px;
          color: white;
          margin-bottom: 16px;
          line-height: 1.2;
        }
        .hero > .hero-inner > p {
          font-size: 18px;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto 40px;
        }
        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 48px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .stat-item {
          text-align: center;
        }
        .stat-value {
          display: block;
          font-size: 36px;
          font-weight: 700;
          color: #f6e05e;
        }
        .stat-label {
          font-size: 14px;
          opacity: 0.8;
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
          display: inline-block;
          border: none;
          cursor: pointer;
        }
        .btn-primary {
          background: #f6e05e;
          color: #1a365d;
        }
        .btn-primary:hover {
          background: #ecc94b;
        }
        .btn-outline {
          border: 2px solid white;
          color: white;
          background: transparent;
        }
        .btn-white {
          background: white;
          color: #1a365d;
        }
        .section-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .services-section {
          padding: 80px 24px;
          background: white;
        }
        .services-section h2, .benefits-section h2, .compliance-section h2, .pricing-section h2 {
          font-size: 36px;
          color: #2c3e50;
          text-align: center;
          margin-bottom: 8px;
        }
        .section-subtitle {
          text-align: center;
          color: #666;
          font-size: 18px;
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
          background: #f8f9fa;
          padding: 32px;
          border-radius: 12px;
          text-align: center;
        }
        .service-icon {
          font-size: 40px;
          margin-bottom: 16px;
        }
        .service-card h3 {
          font-size: 18px;
          color: #2c3e50;
          margin-bottom: 12px;
        }
        .service-card p {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .service-price {
          font-weight: 700;
          color: #1a365d;
        }
        .benefits-section {
          padding: 80px 24px;
          background: #f8f9fa;
        }
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        @media (max-width: 900px) {
          .benefits-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .benefits-grid { grid-template-columns: 1fr; }
        }
        .benefit-item {
          text-align: center;
        }
        .benefit-icon {
          font-size: 32px;
          margin-bottom: 12px;
        }
        .benefit-item h4 {
          font-size: 16px;
          color: #2c3e50;
          margin-bottom: 8px;
        }
        .benefit-item p {
          font-size: 14px;
          color: #666;
        }
        .compliance-section {
          padding: 80px 24px;
          background: white;
        }
        .compliance-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 800px) {
          .compliance-grid { grid-template-columns: 1fr; }
        }
        .compliance-card {
          background: #fff3cd;
          padding: 32px;
          border-radius: 12px;
          border-left: 4px solid #f59e0b;
        }
        .compliance-card h4 {
          font-size: 18px;
          color: #92400e;
          margin-bottom: 8px;
        }
        .compliance-req {
          font-size: 12px;
          font-weight: 700;
          color: #b45309;
          margin-bottom: 12px;
        }
        .compliance-card p {
          font-size: 14px;
          color: #78350f;
          line-height: 1.6;
          margin-bottom: 12px;
        }
        .compliance-penalty {
          font-size: 13px;
          font-weight: 600;
          color: #dc2626;
        }
        .pricing-section {
          padding: 80px 24px;
          background: #1a365d;
          color: white;
        }
        .pricing-section h2 {
          color: white;
        }
        .pricing-section .section-subtitle {
          color: rgba(255,255,255,0.8);
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: stretch;
        }
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; }
        }
        .pricing-card {
          background: white;
          color: #2c3e50;
          padding: 40px 32px;
          border-radius: 16px;
          text-align: center;
          position: relative;
        }
        .pricing-card.featured {
          transform: scale(1.05);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        .featured-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #f6e05e;
          color: #1a365d;
          padding: 6px 20px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
        }
        .pricing-card h4 {
          font-size: 24px;
          margin-bottom: 8px;
        }
        .pricing-properties {
          color: #888;
          font-size: 14px;
          margin-bottom: 16px;
        }
        .pricing-price {
          font-size: 20px;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 24px;
        }
        .pricing-card ul {
          list-style: none;
          padding: 0;
          text-align: left;
          margin-bottom: 32px;
        }
        .pricing-card li {
          padding: 8px 0;
          font-size: 14px;
          color: #555;
        }
        .testimonial-section {
          padding: 80px 24px;
          background: #f8f9fa;
          text-align: center;
        }
        .testimonial-section blockquote {
          font-size: 24px;
          color: #2c3e50;
          max-width: 800px;
          margin: 0 auto 24px;
          line-height: 1.6;
          font-style: italic;
        }
        .testimonial-author strong {
          display: block;
          color: #2c3e50;
        }
        .testimonial-author span {
          color: #888;
          font-size: 14px;
        }
        .cta-section {
          padding: 80px 24px;
          background: linear-gradient(135deg, #8b7355 0%, #a0896d 100%);
          color: white;
          text-align: center;
        }
        .cta-section h2 {
          font-size: 36px;
          color: white;
          margin-bottom: 12px;
        }
        .cta-section p {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: 32px;
        }
        .cta-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cta-section .btn-primary {
          background: white;
          color: #8b7355;
        }
      `}</style>
    </div>
  )
}
