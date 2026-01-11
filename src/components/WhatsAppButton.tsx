'use client'

import { useState } from 'react'

const serviceTemplates = {
  plumbing: "Hi, I need help with a plumbing issue.",
  electrical: "Hi, I need help with an electrical issue.",
  handyman: "Hi, I need a handyman for some repairs.",
  locksmith: "Hi, I need emergency locksmith services.",
  cleaning: "Hi, I'm interested in cleaning services.",
  gardens: "Hi, I need garden maintenance help.",
  emergency: "URGENT: I need emergency assistance!",
  general: "Hi, I'd like to enquire about your services.",
}

export function WhatsAppButton() {
  const [showMenu, setShowMenu] = useState(false)
  const phoneNumber = '447459345456'

  const openWhatsApp = (template: keyof typeof serviceTemplates) => {
    const message = encodeURIComponent(serviceTemplates[template])
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank')
    setShowMenu(false)
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="whatsapp-btn"
        aria-label="Contact us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </button>

      {/* Service Selection Menu */}
      {showMenu && (
        <div className="whatsapp-menu">
          <div className="whatsapp-menu-header">
            <span>How can we help?</span>
            <button onClick={() => setShowMenu(false)} aria-label="Close menu">×</button>
          </div>
          <div className="whatsapp-menu-options">
            <button onClick={() => openWhatsApp('emergency')} className="whatsapp-option emergency">
              🚨 Emergency Help
            </button>
            <button onClick={() => openWhatsApp('plumbing')} className="whatsapp-option">
              🔧 Plumbing Issue
            </button>
            <button onClick={() => openWhatsApp('electrical')} className="whatsapp-option">
              ⚡ Electrical Issue
            </button>
            <button onClick={() => openWhatsApp('locksmith')} className="whatsapp-option">
              🔐 Locksmith
            </button>
            <button onClick={() => openWhatsApp('handyman')} className="whatsapp-option">
              🔨 Handyman
            </button>
            <button onClick={() => openWhatsApp('cleaning')} className="whatsapp-option">
              ✨ Cleaning
            </button>
            <button onClick={() => openWhatsApp('gardens')} className="whatsapp-option">
              🌿 Gardens
            </button>
            <button onClick={() => openWhatsApp('general')} className="whatsapp-option">
              💬 General Enquiry
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .whatsapp-btn {
          position: fixed;
          bottom: 100px;
          right: 24px;
          width: 56px;
          height: 56px;
          background: #25D366;
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .whatsapp-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 25px rgba(37, 211, 102, 0.5);
        }
        .whatsapp-btn svg {
          width: 28px;
          height: 28px;
        }
        .whatsapp-menu {
          position: fixed;
          bottom: 170px;
          right: 24px;
          width: 280px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.15);
          z-index: 1001;
          overflow: hidden;
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .whatsapp-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          background: #25D366;
          color: white;
          font-weight: 600;
        }
        .whatsapp-menu-header button {
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          line-height: 1;
        }
        .whatsapp-menu-options {
          padding: 8px;
          max-height: 350px;
          overflow-y: auto;
        }
        .whatsapp-option {
          display: block;
          width: 100%;
          padding: 12px 16px;
          text-align: left;
          background: none;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          color: #333;
          transition: background 0.2s;
        }
        .whatsapp-option:hover {
          background: #f5f5f5;
        }
        .whatsapp-option.emergency {
          background: #fee2e2;
          color: #dc2626;
          font-weight: 600;
        }
        .whatsapp-option.emergency:hover {
          background: #fecaca;
        }
      `}</style>
    </>
  )
}
