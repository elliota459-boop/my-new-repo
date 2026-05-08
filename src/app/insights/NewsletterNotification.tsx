'use client'

import { useSearchParams } from 'next/navigation'
import { ScrollReveal } from '@/components'

export function NewsletterNotification() {
  const searchParams = useSearchParams()
  const newsletterSuccess = searchParams.get('newsletter') === 'success'

  if (!newsletterSuccess) return null

  return (
    <ScrollReveal className="mb-8">
      <div className="max-w-md mx-auto p-6 rounded-2xl bg-success/10 border border-success/20">
        <h3 className="font-display text-lg text-success mb-2">Thanks for subscribing!</h3>
        <p className="text-sm text-foreground-muted">
          You'll receive our weekly build notes with practical insights for web and Web3 founders.
        </p>
      </div>
    </ScrollReveal>
  )
}
