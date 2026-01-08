'use client'

export function TrustBadges() {
  return (
    <section className="trust-badges-section">
      <div className="trust-badges-inner">
        <h3 className="trust-badges-title">Accredited & Certified</h3>
        <div className="trust-badges-grid">
          <div className="trust-badge">
            <div className="badge-icon gas-safe">
              <span className="badge-text">Gas Safe</span>
            </div>
            <span className="badge-label">Registered</span>
            <span className="badge-number">#548721</span>
          </div>
          <div className="trust-badge">
            <div className="badge-icon niceic">
              <span className="badge-text">NICEIC</span>
            </div>
            <span className="badge-label">Approved</span>
            <span className="badge-number">Contractor</span>
          </div>
          <div className="trust-badge">
            <div className="badge-icon dbs">
              <span className="badge-text">DBS</span>
            </div>
            <span className="badge-label">Checked</span>
            <span className="badge-number">All Staff</span>
          </div>
          <div className="trust-badge">
            <div className="badge-icon insurance">
              <span className="badge-text">£10M</span>
            </div>
            <span className="badge-label">Insured</span>
            <span className="badge-number">Public Liability</span>
          </div>
          <div className="trust-badge">
            <div className="badge-icon fmb">
              <span className="badge-text">FMB</span>
            </div>
            <span className="badge-label">Member</span>
            <span className="badge-number">Federation</span>
          </div>
          <div className="trust-badge">
            <div className="badge-icon checkatrade">
              <span className="badge-text">9.8</span>
            </div>
            <span className="badge-label">Checkatrade</span>
            <span className="badge-number">Rating</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .trust-badges-section {
          background: linear-gradient(135deg, #1a252f 0%, #2c3e50 100%);
          padding: 60px 24px;
        }
        .trust-badges-inner {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .trust-badges-title {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #a0896d;
          margin-bottom: 32px;
        }
        .trust-badges-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .trust-badges-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 640px) {
          .trust-badges-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .trust-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .badge-icon {
          width: 72px;
          height: 72px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: white;
        }
        .badge-text {
          font-size: 14px;
          text-align: center;
        }
        .badge-icon.gas-safe {
          background: linear-gradient(135deg, #0066cc, #004499);
        }
        .badge-icon.niceic {
          background: linear-gradient(135deg, #e63946, #c1121f);
        }
        .badge-icon.dbs {
          background: linear-gradient(135deg, #2d6a4f, #1b4332);
        }
        .badge-icon.insurance {
          background: linear-gradient(135deg, #7c3aed, #5b21b6);
        }
        .badge-icon.fmb {
          background: linear-gradient(135deg, #0891b2, #0e7490);
        }
        .badge-icon.checkatrade {
          background: linear-gradient(135deg, #f59e0b, #d97706);
        }
        .badge-label {
          font-size: 14px;
          font-weight: 600;
          color: white;
        }
        .badge-number {
          font-size: 12px;
          color: rgba(255,255,255,0.6);
        }
      `}</style>
    </section>
  )
}
