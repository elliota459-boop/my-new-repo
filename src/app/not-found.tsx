'use client'

import Link from 'next/link'
import { ArrowLeft, Search } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(containerRef.current?.querySelectorAll('.animate-in') || [], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-background flex items-center justify-center px-6"
    >
      <div className="text-center max-w-xl">
        {/* 404 Number */}
        <div className="animate-in mb-8">
          <span className="font-display text-[150px] md:text-[200px] leading-none text-foreground/10 select-none">
            404
          </span>
        </div>

        {/* Icon */}
        <div className="animate-in w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
          <Search className="w-8 h-8 text-accent" />
        </div>

        {/* Title */}
        <h1 className="animate-in font-display text-display-sm text-foreground mb-4">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="animate-in text-body-lg text-foreground/60 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back on track.
        </p>

        {/* Suggested Links */}
        <div className="animate-in flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link 
            href="/"
            className="btn-primary group"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <Link 
            href="/work"
            className="btn-outline"
          >
            View Our Work
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="animate-in pt-8 border-t border-border">
          <p className="font-mono text-label text-foreground/40 mb-4">
            You might be looking for:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { label: 'Services', href: '/services' },
              { label: 'Process', href: '/process' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/60 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
