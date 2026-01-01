"use client"

import { useEffect } from "react"

type Props = {
  params: {
    path: string[]
  }
}

export default function LocksmithCatchAllPage({ params }: Props) {
  const suffix = Array.isArray(params.path) && params.path.length > 0 ? params.path.join("/") : ""
  const destination = suffix
    ? `https://emergency-locksmith.vercel.app/${suffix}`
    : "https://emergency-locksmith.vercel.app/"

  useEffect(() => {
    window.location.replace(destination)
  }, [destination])

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "2rem", textAlign: "center" }}>
      <div style={{ maxWidth: 520 }}>
        <h1 style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>Taking you to our emergency locksmith site…</h1>
        <p style={{ marginBottom: "1.5rem", color: "#555" }}>
          If you’re not redirected automatically, use the button below.
        </p>
        <a
          href={destination}
          style={{
            display: "inline-block",
            padding: "0.9rem 1.4rem",
            borderRadius: "0.5rem",
            background: "#0f172a",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Go to Emergency Locksmith
        </a>
      </div>
    </div>
  )
}
