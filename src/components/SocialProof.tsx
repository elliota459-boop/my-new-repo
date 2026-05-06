'use client'

import { useEffect, useState } from 'react'
import { CheckCircle, X } from 'lucide-react'

const notifications = [
  { name: 'Sarah from TechVenture', action: 'booked a strategy call', time: '2 minutes ago' },
  { name: 'Marcus from Apex Capital', action: 'requested a quote', time: '12 minutes ago' },
  { name: 'Emily from Meridian Health', action: 'downloaded the audit checklist', time: '28 minutes ago' },
  { name: 'Someone from San Francisco', action: 'viewed case studies', time: 'Just now' },
  { name: 'James from Nova Commerce', action: 'started a project inquiry', time: '45 minutes ago' },
]

export function SocialProofNotifications() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    if (isDismissed) return

    // Show first notification after 10 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true)
    }, 10000)

    // Rotate notifications every 8 seconds
    const rotationInterval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length)
        setIsVisible(true)
      }, 500)
    }, 8000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(rotationInterval)
    }
  }, [isDismissed])

  if (isDismissed) return null

  const current = notifications[currentIndex]

  return (
    <div 
      className={`fixed bottom-24 left-4 z-40 max-w-sm bg-surface-dark border border-border rounded-lg p-4 shadow-2xl transition-all duration-500 md:bottom-8 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <button
        onClick={() => setIsDismissed(true)}
        className="absolute top-2 right-2 text-foreground/30 hover:text-foreground transition-colors"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex items-start gap-3 pr-6">
        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
          <CheckCircle className="w-4 h-4 text-accent" />
        </div>
        <div>
          <p className="text-body-sm text-foreground">
            <span className="font-medium">{current.name}</span>{' '}
            {current.action}
          </p>
          <p className="font-mono text-label text-foreground/40 mt-1">
            {current.time}
          </p>
        </div>
      </div>
    </div>
  )
}

// Scarcity indicator component
export function ScarcityIndicator() {
  const [spotsLeft, setSpotsLeft] = useState(2)

  useEffect(() => {
    // Simulate spots being taken occasionally
    const interval = setInterval(() => {
      if (Math.random() > 0.7 && spotsLeft > 0) {
        setSpotsLeft(prev => Math.max(0, prev - 1))
      }
    }, 30000) // Check every 30 seconds

    return () => clearInterval(interval)
  }, [spotsLeft])

  if (spotsLeft === 0) return null

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-full">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
      </span>
      <span className="font-mono text-label text-accent">
        Only {spotsLeft} project spots left this month
      </span>
    </div>
  )
}

// Trust badge component
export function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-4">
      {[
        { label: '150+ Projects', sublabel: 'Delivered' },
        { label: '$120M+', sublabel: 'Revenue Generated' },
        { label: '98%', sublabel: 'Client Retention' },
        { label: '4.9/5', sublabel: 'Average Rating' },
      ].map((badge, index) => (
        <div key={index} className="text-center px-4 border-r border-border last:border-0">
          <div className="font-display text-heading-sm text-foreground">{badge.label}</div>
          <div className="font-mono text-label text-foreground/50">{badge.sublabel}</div>
        </div>
      ))}
    </div>
  )
}
