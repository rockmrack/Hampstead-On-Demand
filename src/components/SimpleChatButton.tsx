"use client"

import { useState } from "react"

export function SimpleChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Simple, guaranteed-visible chat button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            bottom: '120px',
            right: '24px',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#C19A5B',
            border: '4px solid white',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            cursor: 'pointer',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
          }}
        >
          💬
        </button>
      )}

      {/* Simple chat window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '120px',
            right: '24px',
            width: '400px',
            maxWidth: 'calc(100vw - 48px)',
            height: '600px',
            maxHeight: '80vh',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div style={{
            background: 'linear-gradient(to right, #2C3E50, #C19A5B)',
            color: 'white',
            padding: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '18px' }}>💬 Chat Assistant</div>
              <div style={{ fontSize: '12px', opacity: 0.9 }}>Online • Ready to help</div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
                padding: '0 8px',
              }}
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div style={{
            flex: 1,
            padding: '16px',
            overflowY: 'auto',
            backgroundColor: '#f5f5f5',
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}>
              <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Hi! 👋</div>
              <div style={{ fontSize: '14px', lineHeight: '1.5' }}>
                I'm your AI assistant. I can help you:
                <br />• Find services
                <br />• Get quotes
                <br />• Book appointments
                <br />• Answer questions
              </div>
            </div>

            <div style={{
              backgroundColor: '#C19A5B',
              color: 'white',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}>
              <a
                href="/services"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  display: 'block',
                  fontWeight: 'bold',
                }}
              >
                → Browse All Services
              </a>
            </div>

            <div style={{
              backgroundColor: '#C19A5B',
              color: 'white',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}>
              <a
                href="tel:07459345456"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  display: 'block',
                  fontWeight: 'bold',
                }}
              >
                📞 Call: 07459 345456
              </a>
            </div>
          </div>

          {/* Footer */}
          <div style={{
            padding: '12px',
            borderTop: '1px solid #ddd',
            backgroundColor: 'white',
            fontSize: '12px',
            textAlign: 'center',
            color: '#666',
          }}>
            Need immediate help? Call us!
          </div>
        </div>
      )}
    </>
  )
}
