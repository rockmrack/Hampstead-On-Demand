'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const services = {
  plumbing: { name: 'Plumbing', icon: '🔧', price: 85 },
  electrical: { name: 'Electrical', icon: '⚡', price: 95 },
  handyman: { name: 'Handyman', icon: '🛠️', price: 65 },
  cleaning: { name: 'Cleaning', icon: '🧹', price: 40 },
  locksmith: { name: 'Locksmith', icon: '🔐', price: 95 },
  gardening: { name: 'Gardening', icon: '🌿', price: 55 },
}

type ServiceId = keyof typeof services

const timeSlots = [
  '08:00 - 10:00', '10:00 - 12:00', '12:00 - 14:00',
  '14:00 - 16:00', '16:00 - 18:00', '18:00 - 20:00'
]

export default function BookingPage({ params }: { params: { serviceId: string } }) {
  const router = useRouter()
  const service = services[params.serviceId as ServiceId]
  
  const [step, setStep] = useState(1)
  const [booking, setBooking] = useState({
    date: '',
    time: '',
    address: '',
    postcode: '',
    description: '',
    name: '',
    email: '',
    phone: '',
    urgent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Generate available dates (next 14 days, excluding Sundays)
  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      if (date.getDay() !== 0) { // Exclude Sundays
        dates.push(date)
      }
    }
    return dates
  }

  const availableDates = getAvailableDates()

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  if (!service) {
    return (
      <div className="booking-page">
        <div className="not-found">
          <h1>Service Not Found</h1>
          <Link href="/services">Browse all services</Link>
        </div>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="booking-page">
        <div className="success-container">
          <div className="success-icon">✓</div>
          <h1>Booking Confirmed!</h1>
          <p>Your {service.name.toLowerCase()} appointment has been scheduled.</p>
          
          <div className="booking-summary">
            <h3>Booking Details</h3>
            <div className="summary-row">
              <span>Service:</span>
              <span>{service.icon} {service.name}</span>
            </div>
            <div className="summary-row">
              <span>Date:</span>
              <span>{new Date(booking.date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
            </div>
            <div className="summary-row">
              <span>Time:</span>
              <span>{booking.time}</span>
            </div>
            <div className="summary-row">
              <span>Address:</span>
              <span>{booking.address}, {booking.postcode}</span>
            </div>
          </div>

          <p className="confirmation-note">
            A confirmation email has been sent to {booking.email}.<br/>
            Our team will call you 30 minutes before arrival.
          </p>

          <div className="success-actions">
            <Link href="/" className="btn btn-primary">Return Home</Link>
            <a href="tel:07459345456" className="btn btn-outline">Questions? Call Us</a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="booking-page">
      <div className="booking-header">
        <Link href="/services" className="back-link">← Back to Services</Link>
        <div className="service-badge">
          <span className="service-icon">{service.icon}</span>
          <span>Book {service.name}</span>
        </div>
      </div>

      <div className="booking-container">
        <div className="progress-bar">
          <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>1. Date & Time</div>
          <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>2. Location</div>
          <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>3. Details</div>
          <div className={`progress-step ${step >= 4 ? 'active' : ''}`}>4. Confirm</div>
        </div>

        {/* Step 1: Date & Time */}
        {step === 1 && (
          <div className="booking-step">
            <h2>Select Date & Time</h2>
            
            <div className="date-selector">
              <h3>Choose a Date</h3>
              <div className="dates-grid">
                {availableDates.map((date, idx) => (
                  <button
                    key={idx}
                    className={`date-btn ${booking.date === date.toISOString().split('T')[0] ? 'selected' : ''}`}
                    onClick={() => setBooking({ ...booking, date: date.toISOString().split('T')[0] })}
                  >
                    <span className="date-day">{date.toLocaleDateString('en-GB', { weekday: 'short' })}</span>
                    <span className="date-num">{date.getDate()}</span>
                    <span className="date-month">{date.toLocaleDateString('en-GB', { month: 'short' })}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="time-selector">
              <h3>Choose a Time Slot</h3>
              <div className="times-grid">
                {timeSlots.map((slot, idx) => (
                  <button
                    key={idx}
                    className={`time-btn ${booking.time === slot ? 'selected' : ''}`}
                    onClick={() => setBooking({ ...booking, time: slot })}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="urgent-toggle">
              <label className="toggle-label">
                <input
                  type="checkbox"
                  checked={booking.urgent}
                  onChange={(e) => setBooking({ ...booking, urgent: e.target.checked })}
                />
                <span className="toggle-text">
                  🚨 This is urgent (+£25 priority fee)
                </span>
              </label>
            </div>

            <button 
              className="btn btn-primary continue-btn"
              disabled={!booking.date || !booking.time}
              onClick={() => setStep(2)}
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2: Location */}
        {step === 2 && (
          <div className="booking-step">
            <h2>Your Location</h2>
            
            <div className="form-group">
              <label>Address *</label>
              <input
                type="text"
                placeholder="123 Example Street"
                value={booking.address}
                onChange={(e) => setBooking({ ...booking, address: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Postcode *</label>
              <input
                type="text"
                placeholder="NW3 2QY"
                value={booking.postcode}
                onChange={(e) => setBooking({ ...booking, postcode: e.target.value.toUpperCase() })}
              />
            </div>

            <div className="coverage-note">
              <span className="coverage-icon">✓</span>
              We cover all NW postcodes and surrounding areas
            </div>

            <div className="step-buttons">
              <button className="btn btn-outline" onClick={() => setStep(1)}>Back</button>
              <button 
                className="btn btn-primary"
                disabled={!booking.address || !booking.postcode}
                onClick={() => setStep(3)}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Details */}
        {step === 3 && (
          <div className="booking-step">
            <h2>Job Details & Contact</h2>
            
            <div className="form-group">
              <label>Describe the job *</label>
              <textarea
                placeholder="Please describe what needs to be done..."
                value={booking.description}
                onChange={(e) => setBooking({ ...booking, description: e.target.value })}
                rows={4}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  value={booking.name}
                  onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Phone *</label>
                <input
                  type="tel"
                  placeholder="07123 456789"
                  value={booking.phone}
                  onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={booking.email}
                onChange={(e) => setBooking({ ...booking, email: e.target.value })}
              />
            </div>

            <div className="step-buttons">
              <button className="btn btn-outline" onClick={() => setStep(2)}>Back</button>
              <button 
                className="btn btn-primary"
                disabled={!booking.description || !booking.name || !booking.phone || !booking.email}
                onClick={() => setStep(4)}
              >
                Review Booking
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Confirm */}
        {step === 4 && (
          <div className="booking-step">
            <h2>Confirm Your Booking</h2>
            
            <div className="booking-review">
              <div className="review-section">
                <h4>Service</h4>
                <p>{service.icon} {service.name}</p>
              </div>
              
              <div className="review-section">
                <h4>Date & Time</h4>
                <p>{new Date(booking.date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
                <p>{booking.time}</p>
              </div>
              
              <div className="review-section">
                <h4>Location</h4>
                <p>{booking.address}</p>
                <p>{booking.postcode}</p>
              </div>
              
              <div className="review-section">
                <h4>Job Description</h4>
                <p>{booking.description}</p>
              </div>
              
              <div className="review-section">
                <h4>Contact</h4>
                <p>{booking.name}</p>
                <p>{booking.phone}</p>
                <p>{booking.email}</p>
              </div>
            </div>

            <div className="price-summary">
              <div className="price-row">
                <span>Call-out fee ({service.name})</span>
                <span>£{service.price}</span>
              </div>
              {booking.urgent && (
                <div className="price-row urgent">
                  <span>Priority booking</span>
                  <span>£25</span>
                </div>
              )}
              <div className="price-row total">
                <span>Total Due</span>
                <span>£{service.price + (booking.urgent ? 25 : 0)}</span>
              </div>
              <p className="price-note">Additional work quoted on site. No hidden fees.</p>
            </div>

            <div className="step-buttons">
              <button className="btn btn-outline" onClick={() => setStep(3)}>Back</button>
              <button 
                className="btn btn-primary confirm-btn"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .booking-page {
          min-height: 100vh;
          background: #f8f9fa;
          padding: 100px 24px 60px;
        }
        .booking-header {
          max-width: 700px;
          margin: 0 auto 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .back-link {
          color: #666;
          text-decoration: none;
          font-size: 14px;
        }
        .service-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: white;
          padding: 8px 16px;
          border-radius: 24px;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .service-icon {
          font-size: 20px;
        }
        .booking-container {
          max-width: 700px;
          margin: 0 auto;
          background: white;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        .progress-bar {
          display: flex;
          margin-bottom: 40px;
          border-bottom: 2px solid #eee;
          padding-bottom: 16px;
        }
        .progress-step {
          flex: 1;
          text-align: center;
          font-size: 13px;
          color: #999;
          position: relative;
        }
        .progress-step.active {
          color: #8b7355;
          font-weight: 600;
        }
        .booking-step h2 {
          font-size: 24px;
          color: #2c3e50;
          margin-bottom: 32px;
        }
        .date-selector, .time-selector {
          margin-bottom: 32px;
        }
        .date-selector h3, .time-selector h3 {
          font-size: 14px;
          color: #666;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .dates-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 8px;
        }
        @media (max-width: 600px) {
          .dates-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .date-btn {
          padding: 12px 8px;
          background: #f5f5f5;
          border: 2px solid transparent;
          border-radius: 8px;
          cursor: pointer;
          text-align: center;
          transition: all 0.2s;
        }
        .date-btn:hover {
          border-color: #8b7355;
        }
        .date-btn.selected {
          background: #8b7355;
          color: white;
          border-color: #8b7355;
        }
        .date-day {
          display: block;
          font-size: 11px;
          text-transform: uppercase;
          opacity: 0.7;
        }
        .date-num {
          display: block;
          font-size: 18px;
          font-weight: 700;
          margin: 4px 0;
        }
        .date-month {
          display: block;
          font-size: 11px;
          opacity: 0.7;
        }
        .times-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .time-btn {
          padding: 14px;
          background: #f5f5f5;
          border: 2px solid transparent;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
        }
        .time-btn:hover {
          border-color: #8b7355;
        }
        .time-btn.selected {
          background: #8b7355;
          color: white;
          border-color: #8b7355;
        }
        .urgent-toggle {
          margin: 32px 0;
          padding: 16px;
          background: #fff3cd;
          border-radius: 8px;
        }
        .toggle-label {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }
        .toggle-label input {
          width: 20px;
          height: 20px;
        }
        .toggle-text {
          font-weight: 500;
        }
        .continue-btn {
          width: 100%;
          padding: 16px;
        }
        .btn {
          padding: 14px 28px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          display: inline-block;
          border: none;
          font-size: 15px;
        }
        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .btn-primary {
          background: #8b7355;
          color: white;
        }
        .btn-primary:hover:not(:disabled) {
          background: #7a644a;
        }
        .btn-outline {
          background: transparent;
          border: 2px solid #ddd;
          color: #666;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #333;
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 14px;
          border: 2px solid #eee;
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
          gap: 16px;
        }
        @media (max-width: 500px) {
          .form-row { grid-template-columns: 1fr; }
        }
        .coverage-note {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px;
          background: #e8f5e9;
          border-radius: 8px;
          color: #2e7d32;
          font-size: 14px;
          margin-bottom: 32px;
        }
        .step-buttons {
          display: flex;
          gap: 16px;
          margin-top: 32px;
        }
        .step-buttons .btn-primary {
          flex: 1;
        }
        .booking-review {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 24px;
        }
        .review-section {
          padding: 12px 0;
          border-bottom: 1px solid #eee;
        }
        .review-section:last-child {
          border-bottom: none;
        }
        .review-section h4 {
          font-size: 12px;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 4px;
        }
        .review-section p {
          margin: 2px 0;
          color: #333;
        }
        .price-summary {
          background: #2c3e50;
          color: white;
          padding: 24px;
          border-radius: 12px;
          margin-bottom: 24px;
        }
        .price-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
        }
        .price-row.urgent {
          color: #ffc107;
        }
        .price-row.total {
          font-size: 20px;
          font-weight: 700;
          border-top: 1px solid rgba(255,255,255,0.2);
          margin-top: 12px;
          padding-top: 16px;
        }
        .price-note {
          font-size: 12px;
          opacity: 0.7;
          margin-top: 12px;
        }
        .confirm-btn {
          font-size: 16px;
        }
        .success-container {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
          background: white;
          padding: 48px 32px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
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
        .success-container h1 {
          color: #22c55e;
          margin-bottom: 8px;
        }
        .booking-summary {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 24px;
          margin: 32px 0;
          text-align: left;
        }
        .booking-summary h3 {
          margin-bottom: 16px;
          color: #2c3e50;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #eee;
        }
        .summary-row:last-child {
          border-bottom: none;
        }
        .confirmation-note {
          color: #666;
          font-size: 14px;
          margin-bottom: 32px;
        }
        .success-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
        }
        .not-found {
          text-align: center;
          padding: 100px 24px;
        }
      `}</style>
    </div>
  )
}
