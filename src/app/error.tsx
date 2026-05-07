'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, RefreshCw, ArrowLeft } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (error && error.message) {
      console.error('Application error:', error.message)
    }
  }, [error])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-accent/10 flex items-center justify-center">
          <AlertTriangle className="w-10 h-10 text-accent" />
        </div>

        {/* Title */}
        <h1 className="font-display text-display-sm text-foreground mb-4">
          Something Went Wrong
        </h1>

        {/* Description */}
        <p className="text-body-lg text-foreground/60 mb-4">
          We encountered an unexpected error. Our team has been notified and we&apos;re working on a fix.
        </p>

        {/* Error details (dev only) */}
        {process.env.NODE_ENV === 'development' && error?.message && (
          <div className="mb-8 p-4 bg-surface-dark rounded-lg border border-border text-left">
            <p className="font-mono text-label text-foreground/40 mb-2">Error details:</p>
            <p className="font-mono text-body-sm text-foreground/60 break-all">
              {error.message}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="btn-primary group"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </button>
          <Link 
            href="/"
            className="btn-outline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
