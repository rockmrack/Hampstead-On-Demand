"use client"

import { useEffect } from "react"
import { AlertTriangle } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html>
      <body>
        <div style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          padding: "1.5rem",
          fontFamily: "system-ui, sans-serif"
        }}>
          <AlertTriangle style={{ height: "64px", width: "64px", color: "#dc2626" }} />
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "1.875rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
              Critical Error
            </h1>
            <p style={{ color: "#6b7280", maxWidth: "28rem" }}>
              A critical error occurred. Please refresh the page or try again later.
            </p>
          </div>
          <button
            onClick={reset}
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "0.375rem",
              cursor: "pointer",
              fontSize: "1rem"
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  )
}
