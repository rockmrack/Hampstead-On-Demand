'use client'

import { useState } from 'react'
import Link from 'next/link'

const serviceCategories = [
  { id: 'plumbing', name: 'Plumbing & Heating', icon: '🔧', basePrice: 95 },
  { id: 'electrical', name: 'Electrical', icon: '⚡', basePrice: 85 },
  { id: 'handyman', name: 'Handyman', icon: '🔨', basePrice: 60 },
  { id: 'locksmith', name: 'Locksmith', icon: '🔐', basePrice: 95 },
  { id: 'cleaning', name: 'Cleaning', icon: '✨', basePrice: 45 },
  { id: 'gardens', name: 'Gardens', icon: '🌿', basePrice: 45 },
  { id: 'carpentry', name: 'Carpentry', icon: '🪚', basePrice: 110 },
  { id: 'painting', name: 'Painting', icon: '🎨', basePrice: 150 },
]

const propertySizes = [
  { id: 'studio', name: 'Studio/1 Bed', multiplier: 1 },
  { id: '2bed', name: '2 Bedroom', multiplier: 1.3 },
  { id: '3bed', name: '3 Bedroom', multiplier: 1.6 },
  { id: '4bed', name: '4+ Bedroom', multiplier: 2 },
  { id: 'commercial', name: 'Commercial', multiplier: 2.5 },
]

const urgencyOptions = [
  { id: 'flexible', name: 'Flexible (1-2 weeks)', multiplier: 1, discount: '10% off' },
  { id: 'standard', name: 'Standard (3-5 days)', multiplier: 1.1, discount: null },
  { id: 'priority', name: 'Priority (1-2 days)', multiplier: 1.25, discount: null },
  { id: 'emergency', name: 'Emergency (Same day)', multiplier: 1.5, discount: null },
]

export default function QuotePage() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedUrgency, setSelectedUrgency] = useState<string | null>(null)
  const [jobDescription, setJobDescription] = useState('')
  const [contact, setContact] = useState({ name: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  const calculateQuote = () => {
    if (!selectedService || !selectedSize || !selectedUrgency) return null

    const service = serviceCategories.find(s => s.id === selectedService)
    const size = propertySizes.find(s => s.id === selectedSize)
    const urgency = urgencyOptions.find(u => u.id === selectedUrgency)

    if (!service || !size || !urgency) return null

    const basePrice = service.basePrice * size.multiplier * urgency.multiplier
    const minPrice = Math.round(basePrice * 0.9)
    const maxPrice = Math.round(basePrice * 1.4)

    return { minPrice, maxPrice, discount: urgency.discount }
  }

  const quote = calculateQuote()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to an API
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="quote-page">
        <div className="quote-container success">
          <div className="success-icon">✓</div>
          <h1>Quote Request Received!</h1>
          <p>We'll contact you within 30 minutes during business hours.</p>
          <div className="quote-summary">
            <h3>Your Estimated Quote</h3>
            <div className="price-range">
              £{quote?.minPrice} - £{quote?.maxPrice}
            </div>
            <p className="quote-note">Final price confirmed after assessment</p>
          </div>
          <div className="next-steps">
            <h4>What happens next?</h4>
            <ol>
              <li>We'll call to confirm details and exact pricing</li>
              <li>Schedule a convenient time for the work</li>
              <li>Engineer arrives with all required tools</li>
              <li>Pay only when you're satisfied</li>
            </ol>
          </div>
          <Link href="/" className="back-home">Back to Home</Link>
        </div>
        <style jsx>{`
          .quote-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            padding: 40px 20px;
          }
          .quote-container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            padding: 48px;
            box-shadow: 0 4px 24px rgba(0,0,0,0.1);
          }
          .quote-container.success {
            text-align: center;
          }
          .success-icon {
            width: 80px;
            height: 80px;
            background: #22c55e;
            color: white;
            font-size: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 24px;
          }
          .quote-container h1 {
            font-size: 28px;
            color: #2c3e50;
            margin-bottom: 8px;
          }
          .quote-container p {
            color: #666;
            margin-bottom: 32px;
          }
          .quote-summary {
            background: #f8f9fa;
            padding: 24px;
            border-radius: 12px;
            margin-bottom: 32px;
          }
          .quote-summary h3 {
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #888;
            margin-bottom: 8px;
          }
          .price-range {
            font-size: 36px;
            font-weight: 700;
            color: #8b7355;
          }
          .quote-note {
            font-size: 13px;
            color: #888;
            margin: 8px 0 0 !important;
          }
          .next-steps {
            text-align: left;
            background: #f0f9ff;
            padding: 24px;
            border-radius: 12px;
            margin-bottom: 32px;
          }
          .next-steps h4 {
            color: #0369a1;
            margin-bottom: 16px;
          }
          .next-steps ol {
            margin: 0;
            padding-left: 20px;
            color: #444;
          }
          .next-steps li {
            margin-bottom: 8px;
          }
          .back-home {
            display: inline-block;
            padding: 14px 32px;
            background: #2c3e50;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="quote-page">
      <div className="quote-container">
        <div className="quote-header">
          <Link href="/" className="back-link">← Back</Link>
          <h1>Get an Instant Quote</h1>
          <p>Answer a few questions for an estimated price</p>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(step / 4) * 100}%` }} />
          <div className="progress-steps">
            {[1, 2, 3, 4].map(s => (
              <div key={s} className={`progress-step ${step >= s ? 'active' : ''}`}>
                {s}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="step-content">
              <h2>What service do you need?</h2>
              <div className="options-grid services">
                {serviceCategories.map(service => (
                  <button
                    key={service.id}
                    type="button"
                    className={`option-card ${selectedService === service.id ? 'selected' : ''}`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <span className="option-icon">{service.icon}</span>
                    <span className="option-name">{service.name}</span>
                    <span className="option-price">From £{service.basePrice}</span>
                  </button>
                ))}
              </div>
              <button 
                type="button" 
                className="next-btn"
                disabled={!selectedService}
                onClick={() => setStep(2)}
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="step-content">
              <h2>Property size?</h2>
              <div className="options-grid">
                {propertySizes.map(size => (
                  <button
                    key={size.id}
                    type="button"
                    className={`option-card ${selectedSize === size.id ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size.id)}
                  >
                    <span className="option-name">{size.name}</span>
                  </button>
                ))}
              </div>
              <div className="step-buttons">
                <button type="button" className="back-btn" onClick={() => setStep(1)}>Back</button>
                <button 
                  type="button" 
                  className="next-btn"
                  disabled={!selectedSize}
                  onClick={() => setStep(3)}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="step-content">
              <h2>How urgent is this?</h2>
              <div className="options-grid urgency">
                {urgencyOptions.map(urgency => (
                  <button
                    key={urgency.id}
                    type="button"
                    className={`option-card ${selectedUrgency === urgency.id ? 'selected' : ''}`}
                    onClick={() => setSelectedUrgency(urgency.id)}
                  >
                    <span className="option-name">{urgency.name}</span>
                    {urgency.discount && <span className="discount-badge">{urgency.discount}</span>}
                  </button>
                ))}
              </div>

              {quote && (
                <div className="live-quote">
                  <h3>Estimated Price</h3>
                  <div className="price-range">£{quote.minPrice} - £{quote.maxPrice}</div>
                  <p>Final price confirmed after assessment</p>
                </div>
              )}

              <div className="step-buttons">
                <button type="button" className="back-btn" onClick={() => setStep(2)}>Back</button>
                <button 
                  type="button" 
                  className="next-btn"
                  disabled={!selectedUrgency}
                  onClick={() => setStep(4)}
                >
                  Get My Quote
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="step-content">
              <h2>Your Details</h2>
              
              {quote && (
                <div className="live-quote compact">
                  <span>Your Quote:</span>
                  <strong>£{quote.minPrice} - £{quote.maxPrice}</strong>
                </div>
              )}

              <div className="form-group">
                <label>Job Description (optional)</label>
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Tell us more about the work needed..."
                  rows={3}
                />
              </div>

              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    required
                    placeholder="you@email.com"
                  />
                </div>
                <div className="form-group">
                  <label>Phone *</label>
                  <input
                    type="tel"
                    value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                    required
                    placeholder="07xxx xxx xxx"
                  />
                </div>
              </div>

              <div className="step-buttons">
                <button type="button" className="back-btn" onClick={() => setStep(3)}>Back</button>
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={!contact.name || !contact.email || !contact.phone}
                >
                  Get Quote & Book
                </button>
              </div>

              <p className="privacy-note">
                We'll only use your details to contact you about this quote. 
                <Link href="/privacy">Privacy Policy</Link>
              </p>
            </div>
          )}
        </form>
      </div>

      <style jsx>{`
        .quote-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 40px 20px;
        }
        .quote-container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.1);
        }
        .quote-header {
          text-align: center;
          margin-bottom: 32px;
        }
        .back-link {
          display: inline-block;
          color: #666;
          text-decoration: none;
          margin-bottom: 16px;
        }
        .quote-header h1 {
          font-size: 28px;
          color: #2c3e50;
          margin-bottom: 8px;
        }
        .quote-header p {
          color: #888;
        }
        .progress-bar {
          position: relative;
          height: 4px;
          background: #e0e0e0;
          border-radius: 2px;
          margin-bottom: 40px;
        }
        .progress-fill {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background: #8b7355;
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        .progress-steps {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
        }
        .progress-step {
          width: 24px;
          height: 24px;
          background: #e0e0e0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
          color: #888;
        }
        .progress-step.active {
          background: #8b7355;
          color: white;
        }
        .step-content h2 {
          font-size: 20px;
          color: #2c3e50;
          margin-bottom: 24px;
          text-align: center;
        }
        .options-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 32px;
        }
        .options-grid.services {
          grid-template-columns: repeat(2, 1fr);
        }
        .options-grid.urgency {
          grid-template-columns: 1fr;
        }
        .option-card {
          padding: 16px;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          background: white;
          cursor: pointer;
          transition: all 0.2s;
          text-align: center;
        }
        .option-card:hover {
          border-color: #8b7355;
        }
        .option-card.selected {
          border-color: #8b7355;
          background: #faf8f5;
        }
        .option-icon {
          font-size: 28px;
          display: block;
          margin-bottom: 8px;
        }
        .option-name {
          font-weight: 600;
          color: #2c3e50;
          display: block;
        }
        .option-price {
          font-size: 13px;
          color: #888;
          display: block;
          margin-top: 4px;
        }
        .discount-badge {
          display: inline-block;
          background: #22c55e;
          color: white;
          font-size: 11px;
          padding: 2px 8px;
          border-radius: 10px;
          margin-top: 8px;
        }
        .live-quote {
          background: linear-gradient(135deg, #8b7355, #a0896d);
          color: white;
          padding: 24px;
          border-radius: 12px;
          text-align: center;
          margin-bottom: 24px;
        }
        .live-quote.compact {
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .live-quote h3 {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.8;
          margin-bottom: 8px;
        }
        .live-quote .price-range {
          font-size: 32px;
          font-weight: 700;
        }
        .live-quote p {
          font-size: 13px;
          opacity: 0.8;
          margin-top: 8px;
        }
        .step-buttons {
          display: flex;
          gap: 12px;
        }
        .back-btn, .next-btn, .submit-btn {
          flex: 1;
          padding: 14px 24px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .back-btn {
          background: #f5f5f5;
          border: none;
          color: #666;
        }
        .next-btn, .submit-btn {
          background: #8b7355;
          border: none;
          color: white;
        }
        .next-btn:disabled, .submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .next-btn:not(:disabled):hover, .submit-btn:not(:disabled):hover {
          background: #6b5a45;
        }
        .form-group {
          margin-bottom: 16px;
        }
        .form-group label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #444;
          margin-bottom: 6px;
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 12px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 15px;
          transition: border-color 0.2s;
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: #8b7355;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .privacy-note {
          font-size: 12px;
          color: #888;
          text-align: center;
          margin-top: 16px;
        }
        .privacy-note a {
          color: #8b7355;
        }
        @media (max-width: 640px) {
          .options-grid.services {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
