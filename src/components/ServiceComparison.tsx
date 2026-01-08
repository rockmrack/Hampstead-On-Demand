'use client'

import { useState } from 'react'

interface ComparisonItem {
  feature: string
  hampstead: string | boolean
  competitor1: string | boolean
  competitor2: string | boolean
}

const comparisonData: ComparisonItem[] = [
  { feature: 'Call-out fee', hampstead: 'FREE', competitor1: '£65-95', competitor2: '£50-75' },
  { feature: 'Response time', hampstead: '30-60 mins', competitor1: '2-4 hours', competitor2: 'Next day' },
  { feature: '24/7 emergency service', hampstead: true, competitor1: true, competitor2: false },
  { feature: 'Upfront fixed pricing', hampstead: true, competitor1: false, competitor2: true },
  { feature: 'Certified engineers', hampstead: true, competitor1: true, competitor2: 'Some' },
  { feature: 'Insurance cover', hampstead: '£10 million', competitor1: '£2 million', competitor2: '£1 million' },
  { feature: 'DBS checked staff', hampstead: true, competitor1: 'Some', competitor2: false },
  { feature: 'Same-day bookings', hampstead: true, competitor1: true, competitor2: false },
  { feature: 'Online booking', hampstead: true, competitor1: true, competitor2: false },
  { feature: 'Guarantee', hampstead: '12 months', competitor1: '90 days', competitor2: '30 days' },
  { feature: 'Weekend availability', hampstead: 'Sat & Sun', competitor1: 'Saturday only', competitor2: 'Weekdays only' },
  { feature: 'Google rating', hampstead: '4.8★', competitor1: '4.2★', competitor2: '3.9★' },
]

export default function ServiceComparison() {
  const [showAll, setShowAll] = useState(false)
  
  const displayData = showAll ? comparisonData : comparisonData.slice(0, 6)

  const renderValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <span className="check">✓</span>
      ) : (
        <span className="cross">✗</span>
      )
    }
    return value
  }

  return (
    <div className="comparison-wrapper">
      <h2>Why Choose Hampstead Maintenance?</h2>
      <p className="comparison-subtitle">See how we compare to other local providers</p>
      
      <div className="comparison-table-container">
        <table className="comparison-table">
          <thead>
            <tr>
              <th className="feature-col">Feature</th>
              <th className="provider-col hampstead-col">
                <span className="provider-name">Hampstead<br/>Maintenance</span>
                <span className="provider-tag">Our Service</span>
              </th>
              <th className="provider-col">
                <span className="provider-name">Large National<br/>Provider</span>
              </th>
              <th className="provider-col">
                <span className="provider-name">Local<br/>Independent</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {displayData.map((row, idx) => (
              <tr key={idx}>
                <td className="feature-cell">{row.feature}</td>
                <td className="value-cell hampstead-cell">{renderValue(row.hampstead)}</td>
                <td className="value-cell">{renderValue(row.competitor1)}</td>
                <td className="value-cell">{renderValue(row.competitor2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {comparisonData.length > 6 && (
        <button 
          className="show-more-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : `Show ${comparisonData.length - 6} More Features`}
        </button>
      )}

      <style jsx>{`
        .comparison-wrapper {
          padding: 60px 24px;
          background: #f8f9fa;
          text-align: center;
        }
        .comparison-wrapper h2 {
          font-size: 32px;
          color: #2c3e50;
          margin-bottom: 8px;
        }
        .comparison-subtitle {
          color: #666;
          margin-bottom: 40px;
        }
        .comparison-table-container {
          max-width: 900px;
          margin: 0 auto;
          overflow-x: auto;
        }
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        .comparison-table th {
          padding: 20px 16px;
          text-align: center;
          font-weight: 600;
          background: #2c3e50;
          color: white;
          vertical-align: bottom;
        }
        .feature-col {
          text-align: left !important;
          width: 35%;
        }
        .provider-col {
          width: 21.67%;
        }
        .provider-name {
          display: block;
          font-size: 13px;
          line-height: 1.3;
        }
        .provider-tag {
          display: inline-block;
          background: #22c55e;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 10px;
          margin-top: 8px;
          text-transform: uppercase;
        }
        .hampstead-col {
          background: #8b7355;
        }
        .comparison-table td {
          padding: 16px;
          border-bottom: 1px solid #eee;
          font-size: 14px;
        }
        .feature-cell {
          text-align: left;
          color: #333;
          font-weight: 500;
        }
        .value-cell {
          text-align: center;
          color: #555;
        }
        .hampstead-cell {
          background: #fef9f5;
          font-weight: 600;
          color: #8b7355;
        }
        .check {
          color: #22c55e;
          font-size: 18px;
          font-weight: 700;
        }
        .cross {
          color: #dc2626;
          font-size: 18px;
          font-weight: 700;
        }
        .show-more-btn {
          margin-top: 24px;
          padding: 12px 28px;
          background: #8b7355;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }
        .show-more-btn:hover {
          background: #7a644a;
        }
        @media (max-width: 700px) {
          .comparison-table th, .comparison-table td {
            padding: 12px 8px;
            font-size: 12px;
          }
          .feature-col { width: 40%; }
          .provider-col { width: 20%; }
          .provider-name { font-size: 11px; }
        }
      `}</style>
    </div>
  )
}
