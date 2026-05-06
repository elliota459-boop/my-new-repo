'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { X, ArrowRight, Gift } from 'lucide-react'

export function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if already shown in this session
    if (sessionStorage.getItem('exitIntentShown')) {
      setHasShown(true)
      return
    }

    let mouseY = 0
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseY = e.clientY
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse is leaving through the top of the page
      if (e.clientY < 10 && mouseY < 100 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
        sessionStorage.setItem('exitIntentShown', 'true')
      }
    }

    // Only track on desktop
    if (!window.matchMedia('(pointer: coarse)').matches) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/90 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg bg-surface-dark border border-border rounded-2xl p-8 md:p-12 animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/50 hover:text-foreground hover:border-accent transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
          <Gift className="w-8 h-8 text-accent" />
        </div>

        {/* Content */}
        <h2 className="font-display text-display-sm text-foreground mb-4">
          Before You Go...
        </h2>
        <p className="text-body-lg text-foreground/60 mb-6">
          Get our free <strong className="text-foreground">Website Conversion Audit</strong> — 
          a 15-point checklist that reveals exactly why your current site isn&apos;t converting.
        </p>

        {/* Value props */}
        <ul className="space-y-3 mb-8">
          {[
            'Identify conversion killers in 5 minutes',
            'See what top-performing sites do differently',
            'Get actionable fixes (no designer needed)',
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-body text-foreground/70">
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link 
          href="/contact?offer=audit"
          className="btn-primary w-full justify-center group"
          onClick={() => setIsVisible(false)}
        >
          Get The Free Audit
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>

        <p className="text-center font-mono text-label text-foreground/40 mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  )
}
