'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  stagger?: number
  once?: boolean
}

export function TextReveal({ 
  children, 
  className = '', 
  delay = 0,
  stagger = 0.03,
  once = true 
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!containerRef.current || hasAnimated.current) return

    const words = containerRef.current.querySelectorAll('.word')
    
    const ctx = gsap.context(() => {
      gsap.fromTo(words,
        {
          y: 40,
          opacity: 0,
          rotateX: -40,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.6,
          stagger: stagger,
          ease: 'power3.out',
          delay: delay,
          scrollTrigger: once ? {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
            onEnter: () => {
              hasAnimated.current = true
            }
          } : undefined,
        }
      )
    })

    return () => ctx.revert()
  }, [delay, stagger, once])

  // Split text into words
  const words = children.split(' ')

  return (
    <div 
      ref={containerRef} 
      className={`${className}`}
      style={{ perspective: '1000px' }}
    >
      {words.map((word, index) => (
        <span
          key={index}
          className="word inline-block mr-[0.25em]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {word}
        </span>
      ))}
    </div>
  )
}

interface LineRevealProps {
  children: string
  className?: string
  delay?: number
}

export function LineReveal({ children, className = '', delay = 0 }: LineRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true,
        }
      })

      tl.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 0.8, ease: 'power3.out', delay }
      )
    })

    return () => ctx.revert()
  }, [delay])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <span className="relative z-10">{children}</span>
      <div
        ref={lineRef}
        className="absolute bottom-0 left-0 right-0 h-[0.1em] bg-accent/30"
      />
    </div>
  )
}

interface CharRevealProps {
  children: string
  className?: string
  delay?: number
}

export function CharReveal({ children, className = '', delay = 0 }: CharRevealProps) {
  const containerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const chars = containerRef.current.querySelectorAll('.char')

    const ctx = gsap.context(() => {
      gsap.fromTo(chars,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.02,
          ease: 'power3.out',
          delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
          }
        }
      )
    })

    return () => ctx.revert()
  }, [delay])

  const chars = children.split('')

  return (
    <span ref={containerRef} className={className}>
      {chars.map((char, index) => (
        <span key={index} className="char inline-block">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}
