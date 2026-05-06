'use client'

import { useEffect, useRef } from 'react'

interface VelocityScrollProps {
  children: React.ReactNode
  className?: string
}

export function VelocityScroll({ children, className = '' }: VelocityScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const currentSkew = useRef(0)
  const targetSkew = useRef(0)
  const lastScrollY = useRef(0)
  const rafId = useRef<number>()

  useEffect(() => {
    if (!containerRef.current) return

    const updateSkew = () => {
      const scrollY = window.scrollY
      const velocity = scrollY - lastScrollY.current
      lastScrollY.current = scrollY

      // Calculate target skew based on velocity (max 2 degrees)
      targetSkew.current = Math.max(-2, Math.min(2, velocity * 0.02))

      // Smooth interpolation
      currentSkew.current += (targetSkew.current - currentSkew.current) * 0.1

      if (containerRef.current) {
        containerRef.current.style.transform = `skewY(${currentSkew.current}deg)`
      }

      rafId.current = requestAnimationFrame(updateSkew)
    }

    rafId.current = requestAnimationFrame(updateSkew)

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className={`transition-transform will-change-transform ${className}`}>
      {children}
    </div>
  )
}
