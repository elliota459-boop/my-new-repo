'use client'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const preloaderRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Faster simulation for real agency feel
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 30 + 15 // Increased step size
      })
    }, 80) // Reduced interval

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const tl = gsap.timeline()
      
      tl.to(progressRef.current, {
        opacity: 0,
        duration: 0.2,
      })
      .to(textRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: 'power2.in',
      }, '-=0.1')
      .to(preloaderRef.current, {
        clipPath: 'inset(0 0 100% 0)',
        duration: 0.6, // Faster exit
        ease: 'power4.inOut',
        onComplete: () => {
          setIsLoading(false)
        }
      })
    }
  }, [progress])

  if (!isLoading) return null

  return (
    <div
      ref={preloaderRef}
      className="preloader"
      style={{ clipPath: 'inset(0 0 0% 0)' }}
    >
      <div ref={textRef} className="text-center">
        <div className="font-display text-3xl md:text-4xl text-foreground tracking-tight">
          IBNAY
        </div>
        <div className="font-mono text-label text-foreground/50 mt-2">
          Digital Studio
        </div>
      </div>
      
      <div ref={progressRef} className="preloader-bar">
        <div 
          className="preloader-progress"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      
      <div ref={progressRef} className="font-mono text-label text-foreground/40 mt-4">
        {Math.min(Math.round(progress), 100)}%
      </div>
    </div>
  )
}
