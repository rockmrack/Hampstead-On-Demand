'use client'

import Link from 'next/link'

export default function HandymanPage() {
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
            🔨 Professional Handyman Service
          </div>
          <h1 style={{ fontSize: '56px', fontWeight: 'bold', marginBottom: '24px', lineHeight: '1.2' }}>
            Handyman Services Hampstead
          </h1>
          <p style={{ fontSize: '24px', marginBottom: '40px', opacity: 0.9, maxWidth: '800px', margin: '0 auto 40px' }}>
            From furniture assembly to picture hanging, our skilled handymen handle all your home repairs and installations across Hampstead, NW3, NW8, NW1 & NW6.
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
                Same Day Service
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Fast response times for urgent repairs and installations. Available 7 days a week.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>💷</div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#2C3E50' }}>
                Fixed Pricing
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Transparent pricing with no hidden charges. Know the cost before work begins.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🛡️</div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#2C3E50' }}>
                Fully Insured
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                All work covered by public liability insurance. Professional and reliable handymen.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔧</div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#2C3E50' }}>
                All Jobs Welcome
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                No job too small. From minor repairs to complete room transformations.
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
              Handyman Services & Pricing
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
              { name: 'Furniture Assembly', price: '£60-£120', time: '1-2 hours', desc: 'Expert assembly of flat-pack furniture including wardrobes, desks, beds, and shelving units.' },
              { name: 'TV Wall Mounting', price: '£80-£150', time: '1-2 hours', desc: 'Professional TV mounting on any wall type with cable management and level installation.' },
              { name: 'Shelving Installation', price: '£70-£140', time: '1-2 hours', desc: 'Custom shelving installation including floating shelves, alcove units, and storage solutions.' },
              { name: 'Picture & Mirror Hanging', price: '£40-£80', time: '30-60 mins', desc: 'Professional hanging of pictures, mirrors, and artwork with proper wall fixings.' },
              { name: 'Curtain Rail/Blind Fitting', price: '£60-£120', time: '1-2 hours', desc: 'Installation of curtain rails, poles, and blinds including Roman, Venetian, and roller blinds.' },
              { name: 'Door Repairs & Adjustments', price: '£50-£100', time: '30-90 mins', desc: 'Fix sticking doors, replace handles, adjust hinges, and repair door frames.' },
              { name: 'Minor Carpentry Work', price: '£80-£160', time: '2-3 hours', desc: 'Skirting boards, architrave, boxing in pipes, and other general carpentry tasks.' },
              { name: 'Sealant Replacement', price: '£60-£120', time: '1-2 hours', desc: 'Remove old sealant and apply fresh professional sealant around baths, sinks, and tiles.' },
              { name: 'Kitchen Appliance Installation', price: '£70-£140', time: '1-2 hours', desc: 'Install washing machines, dishwashers, ovens, and other kitchen appliances.' },
              { name: 'General Repairs & Maintenance', price: '£60/hour', time: 'As needed', desc: 'Hourly rate for various small repairs, maintenance tasks, and odd jobs around your home.' },
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

      {/* Popular Services */}
      <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '40px', color: '#2C3E50', textAlign: 'center' }}>
            Popular Handyman Services
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}>
            {[
              '✓ Flat pack furniture assembly',
              '✓ TV wall mounting & setup',
              '✓ Shelving & storage installation',
              '✓ Picture hanging & gallery walls',
              '✓ Curtain & blind installation',
              '✓ Door hanging & adjustment',
              '✓ Kitchen appliance installation',
              '✓ Bathroom sealant replacement',
              '✓ Boxing in pipes',
              '✓ Minor plumbing fixes',
              '✓ Small electrical jobs',
              '✓ Garden furniture assembly',
            ].map((service, idx) => (
              <div key={idx} style={{
                padding: '20px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                fontSize: '16px',
                color: '#2C3E50',
                fontWeight: '500',
              }}>
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section style={{ padding: '80px 24px', backgroundColor: '#2C3E50', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
          }}>
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
                Why Choose Our Handyman Service?
              </h3>
              <ul style={{ lineHeight: '1.8', paddingLeft: '20px', opacity: 0.9 }}>
                <li>Experienced and skilled handymen</li>
                <li>All work guaranteed</li>
                <li>Competitive fixed pricing</li>
                <li>Same day service available</li>
                <li>Fully insured and vetted</li>
                <li>No job too small</li>
              </ul>
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
                <p><strong>Available:</strong> 7 Days a Week</p>
                <p><strong>Email:</strong> info@hampsteadmaintenance.co.uk</p>
                <p><strong>Response:</strong> Same Day Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '60px 24px', backgroundColor: '#C19A5B', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>
            Need a Handyman Today?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '32px', color: 'white', opacity: 0.9 }}>
            Call us now for same-day handyman services across Hampstead and surrounding areas.
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
