'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (pathname && displayChildren !== children) {
      setIsAnimating(true)
      
      // Snappier transitions for higher intent feel
      const tl = gsap.timeline({
        onComplete: () => {
          setDisplayChildren(children)
          setIsAnimating(false)
        }
      })

      // Exit animation (Faster)
      tl.to(containerRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: 'power2.in'
      })
      .to(overlayRef.current, {
        scaleY: 1,
        duration: 0.3,
        ease: 'power3.inOut'
      }, '-=0.1')
      .to(lineRef.current, {
        scaleX: 1,
        duration: 0.2,
        ease: 'power2.out'
      }, '-=0.2')
      .set(containerRef.current, { opacity: 1, y: 0 })
      .to(overlayRef.current, {
        scaleY: 0,
        duration: 0.4,
        ease: 'power3.out',
        transformOrigin: 'top'
      })
      .to(lineRef.current, {
        scaleX: 0,
        duration: 0.3,
        ease: 'power2.in',
        transformOrigin: 'right'
      }, '-=0.2')
      .fromTo(containerRef.current, 
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
        '-=0.1'
      )
    }
  }, [pathname, children, displayChildren])

  return (
    <>
      <div ref={containerRef} style={{ opacity: isAnimating ? 0 : 1 }}>
        {displayChildren}
      </div>
      
      {/* Overlay */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 z-[9998] bg-background pointer-events-none"
        style={{ transform: 'scaleY(0)', transformOrigin: 'bottom' }}
      />
      
      {/* Accent line */}
      <div 
        ref={lineRef}
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[9999]"
        style={{ transform: 'scaleX(0)', transformOrigin: 'left' }}
      />
    </>
  )
}
