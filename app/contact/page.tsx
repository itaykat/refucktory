"use client"

import { useEffect } from "react"

export default function ContactPage() {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script')
    script.src = '//embed.typeform.com/next/embed.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="//embed.typeform.com/next/embed.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Home
          </a>
        </div>

        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Request a Quote</h1>

        </div>

        {/* Typeform Embed */}
        <div className="max-w-4xl mx-auto ">
          <div
            data-tf-live="01JZJX105PNYKEJHA2R51DSGZ5"
            className="min-h-[600px] border border-border/40 rounded-lg overflow-hidden shadow-lg"
          ></div>
        </div>
      </div>
    </div>
  )
}
