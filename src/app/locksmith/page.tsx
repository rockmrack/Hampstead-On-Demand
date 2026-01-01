'use client'

import Link from 'next/link'

export default function LocksmithPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Hero Section */}
      <section style={{
        backgroundColor: '#2C3E50',
        color: 'white',
        padding: '120px 24px 80px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(193, 154, 91, 0.2)',
            padding: '8px 20px',
            borderRadius: '24px',
            marginBottom: '24px',
            fontSize: '14px',
            fontWeight: '600',
          }}>
            🔐 24/7 Emergency Locksmith Service
          </div>
          <h1 style={{ fontSize: '56px', fontWeight: 'bold', marginBottom: '24px', lineHeight: '1.2' }}>
            Emergency Locksmith Hampstead
          </h1>
          <p style={{ fontSize: '24px', marginBottom: '40px', opacity: 0.9, maxWidth: '800px', margin: '0 auto 40px' }}>
            Locked out? Need urgent lock repairs? Our expert locksmiths arrive in 30-60 minutes across Hampstead, NW3, NW8, NW1 & NW6.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="tel:07459345456"
              style={{
                backgroundColor: '#C19A5B',
                color: 'white',
                padding: '18px 36px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '18px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              📞 Call Now: 07459 345456
            </a>
            <a
              href="#services"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '18px 36px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '18px',
                border: '2px solid white',
              }}
            >
              View Services & Prices
            </a>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}>
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚡</div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#2C3E50' }}>
                30-60 Min Response
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Fast emergency response across all Hampstead areas. Available 24/7 including weekends and bank holidays.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>💷</div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#2C3E50' }}>
                No Call-Out Fee
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Transparent pricing with no hidden charges. You only pay for the work we do, not for us showing up.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🛡️</div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#2C3E50' }}>
                Fully Insured
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                All work covered by public liability insurance. Professional, vetted, and DBS-checked locksmiths.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔧</div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#2C3E50' }}>
                All Lock Types
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Yale, mortice, UPVC, anti-snap, digital locks. We handle all residential and commercial locks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section id="services" style={{ padding: '80px 24px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '16px', color: '#2C3E50' }}>
              Locksmith Services & Pricing
            </h2>
            <p style={{ fontSize: '18px', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
              Fixed prices, no surprises. All prices include VAT and standard labor.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}>
            {/* Service Cards */}
            {[
              { name: 'Emergency Lockout / Gain Entry', price: '£140', time: '30-45 mins', desc: 'Locked out of your property? Non-destructive entry where possible.' },
              { name: 'Lock Change (Standard)', price: '£110', time: '30 mins', desc: 'Replace rim cylinder (Yale-type) lock. Includes new British Standard lock.' },
              { name: 'Lock Change (Mortice)', price: '£160', time: '45 mins', desc: 'Full mortice lock replacement with British Standard 5-lever lock.' },
              { name: 'UPVC Door Lock Repair', price: '£145', time: '45-60 mins', desc: 'Multi-point locking mechanism repair or replacement.' },
              { name: 'Anti-Snap Lock Upgrade', price: '£130', time: '30 mins', desc: 'Upgrade to anti-snap cylinder for enhanced security.' },
              { name: 'Board Up Service', price: '£180', time: '60 mins', desc: 'Emergency board up after break-in or damage.' },
              { name: 'Key Cutting (Standard)', price: '£15', time: '10 mins', desc: 'Standard key duplication while you wait.' },
              { name: 'Security Consultation', price: 'Free', time: '30 mins', desc: 'Free security assessment and recommendations for your property.' },
            ].map((service, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '32px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  marginBottom: '12px',
                  color: '#2C3E50',
                  minHeight: '50px',
                }}>
                  {service.name}
                </h3>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px',
                  paddingBottom: '16px',
                  borderBottom: '2px solid #f0f0f0',
                }}>
                  <span style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: '#C19A5B',
                  }}>
                    {service.price}
                  </span>
                  <span style={{
                    fontSize: '14px',
                    color: '#666',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}>
                    ⏱️ {service.time}
                  </span>
                </div>
                <p style={{
                  color: '#666',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  marginBottom: '24px',
                }}>
                  {service.desc}
                </p>
                <a
                  href="tel:07459345456"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    backgroundColor: '#2C3E50',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600',
                  }}
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Info */}
      <section style={{ padding: '80px 24px', backgroundColor: '#2C3E50', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
          }}>
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
                What to Do If You're Locked Out
              </h3>
              <ol style={{ lineHeight: '1.8', paddingLeft: '20px', opacity: 0.9 }}>
                <li>Stay calm and check all doors and windows</li>
                <li>Call us immediately: 07459 345456</li>
                <li>We'll arrive within 30-60 minutes</li>
                <li>Non-destructive entry attempted first</li>
                <li>New locks fitted if necessary</li>
              </ol>
            </div>
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
                Areas We Cover
              </h3>
              <ul style={{ lineHeight: '1.8', listStyle: 'none', padding: 0, opacity: 0.9 }}>
                <li>✓ Hampstead (NW3)</li>
                <li>✓ St John's Wood (NW8)</li>
                <li>✓ Camden (NW1)</li>
                <li>✓ West Hampstead (NW6)</li>
                <li>✓ Swiss Cottage (NW3)</li>
                <li>✓ Belsize Park (NW3)</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
                Contact Information
              </h3>
              <div style={{ lineHeight: '2', opacity: 0.9 }}>
                <p><strong>Phone:</strong> 07459 345456</p>
                <p><strong>Emergency:</strong> Available 24/7</p>
                <p><strong>Email:</strong> info@hampsteadmaintenance.co.uk</p>
                <p><strong>Response:</strong> 30-60 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '60px 24px', backgroundColor: '#C19A5B', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>
            Need an Emergency Locksmith Now?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '32px', color: 'white', opacity: 0.9 }}>
            Don't wait outside in the cold. Call us now for immediate assistance.
          </p>
          <a
            href="tel:07459345456"
            style={{
              backgroundColor: 'white',
              color: '#C19A5B',
              padding: '18px 48px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '20px',
              display: 'inline-block',
            }}
          >
            📞 Call 07459 345456 Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        padding: '40px 24px',
        textAlign: 'center',
      }}>
        <Link href="/" style={{ color: '#C19A5B', textDecoration: 'none', fontSize: '14px' }}>
          ← Back to All Services
        </Link>
      </footer>
    </div>
  )
}
