'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { FileX, RefreshCw, ArrowLeft } from 'lucide-react'

export default function CaseStudyError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Case study error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-accent/10 flex items-center justify-center">
          <FileX className="w-10 h-10 text-accent" />
        </div>

        {/* Title */}
        <h1 className="font-display text-display-sm text-foreground mb-4">
          Case Study Not Available
        </h1>

        {/* Description */}
        <p className="text-body-lg text-foreground/60 mb-8">
          We couldn&apos;t load this case study. It may have been moved or is temporarily unavailable.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/work"
            className="btn-primary group"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            View All Work
          </Link>
          <button
            onClick={reset}
            className="btn-outline"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </button>
        </div>
      </div>
    </div>
  )
}
