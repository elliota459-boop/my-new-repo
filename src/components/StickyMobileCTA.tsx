'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Show after scrolling down a bit
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!isMobile || !isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-lg border-t border-border md:hidden">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="font-display text-sm text-foreground">Ready to start?</p>
          <p className="font-mono text-label text-foreground/50">2 spots left this month</p>
        </div>
        <Link 
          href="/contact"
          className="btn-primary py-3 px-5 text-sm whitespace-nowrap"
        >
          Book a Call
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  )
}
