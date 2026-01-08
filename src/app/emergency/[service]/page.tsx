'use client'

import Link from 'next/link'

// Emergency page data
const emergencyServices = {
  'emergency-plumber-hampstead': {
    title: 'Emergency Plumber Hampstead',
    shortTitle: 'Emergency Plumber',
    service: 'plumber',
    icon: '🔧',
    phone: '07459 345456',
    response: '30-60 minutes',
    price: 'From £95',
    description: 'Burst pipe? Flooding? Boiler emergency? Our emergency plumbers in Hampstead respond within 30-60 minutes, 24/7.',
    keywords: 'emergency plumber Hampstead, 24 hour plumber NW3, burst pipe Hampstead, flooding emergency NW3',
    issues: [
      'Burst pipes & flooding',
      'No hot water / boiler breakdown',
      'Blocked toilets & drains',
      'Leaking radiators',
      'Gas leaks (also call 0800 111 999)',
      'Water heater failures',
    ],
    beforeArrival: [
      'Turn off the main water stopcock (usually under kitchen sink)',
      'Turn off water heater/boiler if safe',
      'Mop up standing water',
      'Move valuables away from the leak',
      'Take photos for insurance',
    ],
  },
  'emergency-locksmith-nw3': {
    title: 'Emergency Locksmith NW3 Hampstead',
    shortTitle: 'Emergency Locksmith',
    service: 'locksmith',
    icon: '🔐',
    phone: '07459 345456',
    response: '20-40 minutes',
    price: 'From £95',
    description: 'Locked out in Hampstead? Lost your keys? Our emergency locksmiths arrive in 20-40 minutes with non-destructive entry.',
    keywords: 'emergency locksmith NW3, locked out Hampstead, 24 hour locksmith NW3, lock change Hampstead',
    issues: [
      'Locked out of home',
      'Lost or stolen keys',
      'Broken lock / key stuck',
      'Break-in damage repair',
      'Lock upgrades after burglary',
      'UPVC door lock failures',
    ],
    beforeArrival: [
      'Check all windows and back doors',
      'Ask neighbours if they have a spare key',
      'Have ID ready to prove residence',
      'Stay near the property',
      'Note any visible damage to locks',
    ],
  },
  'emergency-electrician-london': {
    title: 'Emergency Electrician London NW',
    shortTitle: 'Emergency Electrician',
    service: 'electrician',
    icon: '⚡',
    phone: '07459 345456',
    response: '45-90 minutes',
    price: 'From £95',
    description: 'Power outage? Electrical emergency in North West London? Our NICEIC certified electricians respond fast to keep you safe.',
    keywords: 'emergency electrician London, power outage NW3, electrical emergency Hampstead, 24 hour electrician',
    issues: [
      'Complete power outage',
      'Tripping fuses/circuit breakers',
      'Burning smell from outlets',
      'Sparking switches or sockets',
      'Exposed wiring',
      'Electric shock incidents',
    ],
    beforeArrival: [
      'Turn off the main breaker if safe to do so',
      'Unplug appliances that may have caused the issue',
      'DO NOT touch any exposed wires',
      'Keep children and pets away',
      'Note which circuits are affected',
    ],
  },
  '24-hour-boiler-repair': {
    title: '24 Hour Boiler Repair Hampstead',
    shortTitle: '24hr Boiler Repair',
    service: 'boiler',
    icon: '🔥',
    phone: '07459 345456',
    response: '60-90 minutes',
    price: 'From £120',
    description: 'Boiler broken in winter? No heating or hot water? Our Gas Safe engineers provide 24-hour boiler repair across Hampstead.',
    keywords: '24 hour boiler repair Hampstead, emergency boiler repair NW3, no heating Hampstead, Gas Safe engineer',
    issues: [
      'No heating in cold weather',
      'No hot water',
      'Boiler not igniting',
      'Strange noises from boiler',
      'Boiler leaking water',
      'Error codes displayed',
    ],
    beforeArrival: [
      'Check boiler pressure gauge (should be 1-1.5 bar)',
      'Try resetting the boiler once',
      'Check if pilot light is on (if visible)',
      'Note any error codes',
      'Check thermostat batteries',
    ],
  },
}

type EmergencyKey = keyof typeof emergencyServices

export default function EmergencyPage({ params }: { params: { service: string } }) {
  const data = emergencyServices[params.service as EmergencyKey]

  if (!data) {
    return (
      <div className="emergency-page not-found">
        <h1>Service Not Found</h1>
        <Link href="/">Return to Homepage</Link>
      </div>
    )
  }

  return (
    <div className="emergency-page">
      {/* Emergency Hero - Maximum conversion focus */}
      <section className="emergency-hero">
        <div className="hero-inner">
          <div className="emergency-badge">🚨 24/7 EMERGENCY SERVICE</div>
          <div className="service-icon">{data.icon}</div>
          <h1>{data.title}</h1>
          <p className="hero-description">{data.description}</p>
          
          <div className="response-box">
            <div className="response-item">
              <span className="response-label">Response Time</span>
              <span className="response-value">{data.response}</span>
            </div>
            <div className="response-item">
              <span className="response-label">Price</span>
              <span className="response-value">{data.price}</span>
            </div>
          </div>

          <a href={`tel:${data.phone.replace(/\s/g, '')}`} className="emergency-call-btn">
            📞 CALL NOW: {data.phone}
          </a>
          
          <p className="call-note">Lines open 24/7 including weekends & bank holidays</p>
        </div>
      </section>

      {/* What we fix */}
      <section className="issues-section">
        <div className="section-inner">
          <h2>We Handle All {data.shortTitle} Emergencies</h2>
          <ul className="issues-list">
            {data.issues.map((issue, idx) => (
              <li key={idx}>
                <span className="check">✓</span>
                {issue}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Before we arrive */}
      <section className="before-section">
        <div className="section-inner">
          <h2>While You Wait for Our {data.shortTitle}</h2>
          <p>Stay safe and help us help you faster:</p>
          <ol className="before-list">
            {data.beforeArrival.map((step, idx) => (
              <li key={idx}>
                <span className="step-number">{idx + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Trust signals */}
      <section className="trust-section">
        <div className="section-inner">
          <div className="trust-grid">
            <div className="trust-item">
              <span className="trust-icon">🛡️</span>
              <span className="trust-text">Fully Insured (£10M)</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span className="trust-text">DBS Checked</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">⭐</span>
              <span className="trust-text">4.8★ Google Rating</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">💳</span>
              <span className="trust-text">No Hidden Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="section-inner">
          <h2>Don't Wait - Get Help Now</h2>
          <a href={`tel:${data.phone.replace(/\s/g, '')}`} className="emergency-call-btn large">
            📞 {data.phone}
          </a>
          <p>Or <Link href="/quote">get an instant quote</Link> for non-emergencies</p>
        </div>
      </section>

      <style jsx>{`
        .emergency-page {
          min-height: 100vh;
        }
        .emergency-hero {
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
          color: white;
          padding: 100px 24px 80px;
          text-align: center;
        }
        .hero-inner {
          max-width: 700px;
          margin: 0 auto;
        }
        .emergency-badge {
          display: inline-block;
          background: rgba(255,255,255,0.2);
          padding: 10px 24px;
          border-radius: 24px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin-bottom: 24px;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .service-icon {
          font-size: 64px;
          margin-bottom: 16px;
        }
        .emergency-hero h1 {
          font-size: 42px;
          color: white;
          margin-bottom: 16px;
          line-height: 1.2;
        }
        .hero-description {
          font-size: 18px;
          opacity: 0.95;
          margin-bottom: 32px;
          line-height: 1.6;
        }
        .response-box {
          display: flex;
          justify-content: center;
          gap: 32px;
          margin-bottom: 32px;
        }
        .response-item {
          background: rgba(255,255,255,0.15);
          padding: 16px 32px;
          border-radius: 12px;
        }
        .response-label {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.8;
          margin-bottom: 4px;
        }
        .response-value {
          font-size: 24px;
          font-weight: 700;
        }
        .emergency-call-btn {
          display: inline-block;
          background: white;
          color: #dc2626;
          padding: 20px 48px;
          border-radius: 12px;
          font-size: 24px;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.3s;
        }
        .emergency-call-btn:hover {
          transform: scale(1.05);
        }
        .emergency-call-btn.large {
          font-size: 28px;
          padding: 24px 56px;
        }
        .call-note {
          font-size: 14px;
          opacity: 0.8;
          margin-top: 16px;
        }
        .section-inner {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .issues-section {
          padding: 60px 24px;
          background: white;
        }
        .issues-section h2 {
          font-size: 28px;
          color: #2c3e50;
          margin-bottom: 32px;
          text-align: center;
        }
        .issues-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        @media (max-width: 600px) {
          .issues-list { grid-template-columns: 1fr; }
          .response-box { flex-direction: column; gap: 16px; }
        }
        .issues-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #f8f9fa;
          border-radius: 8px;
          font-size: 15px;
        }
        .check {
          color: #22c55e;
          font-weight: 700;
        }
        .before-section {
          padding: 60px 24px;
          background: #f8f9fa;
        }
        .before-section h2 {
          font-size: 24px;
          color: #2c3e50;
          margin-bottom: 8px;
        }
        .before-section > .section-inner > p {
          color: #666;
          margin-bottom: 32px;
        }
        .before-list {
          list-style: none;
          padding: 0;
          counter-reset: step;
        }
        .before-list li {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px;
          background: white;
          border-radius: 8px;
          margin-bottom: 12px;
          font-size: 15px;
        }
        .step-number {
          width: 28px;
          height: 28px;
          background: #2c3e50;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          flex-shrink: 0;
        }
        .trust-section {
          padding: 40px 24px;
          background: #2c3e50;
        }
        .trust-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 32px;
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: white;
        }
        .trust-icon {
          font-size: 20px;
        }
        .trust-text {
          font-size: 14px;
          font-weight: 600;
        }
        .final-cta {
          padding: 80px 24px;
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
          color: white;
          text-align: center;
        }
        .final-cta h2 {
          font-size: 32px;
          color: white;
          margin-bottom: 32px;
        }
        .final-cta p {
          margin-top: 24px;
          font-size: 16px;
        }
        .final-cta a {
          color: white;
        }
      `}</style>
    </div>
  )
}
