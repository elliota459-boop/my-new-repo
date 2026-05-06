'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  speed?: number // 0.5 = subtle, 1 = normal, 2 = strong
  direction?: 'vertical' | 'horizontal'
}

export function ParallaxImage({ 
  src, 
  alt, 
  className = '', 
  speed = 0.5,
  direction = 'vertical'
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return

    const ctx = gsap.context(() => {
      const distance = 100 * speed
      
      if (direction === 'vertical') {
        gsap.fromTo(imageRef.current,
          { y: -distance / 2 },
          {
            y: distance / 2,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      } else {
        gsap.fromTo(imageRef.current,
          { x: -distance / 2 },
          {
            x: distance / 2,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [speed, direction])

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div ref={imageRef} className="relative w-full h-[120%] -mt-[10%]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  )
}

interface ParallaxContainerProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export function ParallaxContainer({ 
  children, 
  className = '', 
  speed = 0.3 
}: ParallaxContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(containerRef.current,
        { y: 50 * speed },
        {
          y: -50 * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    })

    return () => ctx.revert()
  }, [speed])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

// Skew on scroll based on velocity
export function SkewOnScroll({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)
  const currentSkew = useRef(0)
  const targetSkew = useRef(0)
  const rafId = useRef<number>()

  useEffect(() => {
    if (!containerRef.current) return

    const updateSkew = () => {
      const scrollY = window.scrollY
      const velocity = scrollY - lastScrollY.current
      lastScrollY.current = scrollY

      // Calculate target skew based on velocity
      targetSkew.current = Math.max(-3, Math.min(3, velocity * 0.05))

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
    <div ref={containerRef} className={`transition-transform ${className}`}>
      {children}
    </div>
  )
}

// Image reveal animation
interface ImageRevealProps {
  src: string
  alt: string
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function ImageReveal({ 
  src, 
  alt, 
  className = '',
  direction = 'up'
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !imageRef.current || !overlayRef.current) return

    const directions = {
      up: { y: '100%' },
      down: { y: '-100%' },
      left: { x: '100%' },
      right: { x: '-100%' },
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          once: true,
        }
      })

      tl.to(overlayRef.current, {
        ...directions[direction],
        duration: 1,
        ease: 'power3.inOut',
      })
      .from(imageRef.current, {
        scale: 1.3,
        duration: 1.2,
        ease: 'power3.out',
      }, 0)
    })

    return () => ctx.revert()
  }, [direction])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={imageRef} className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-background z-10"
      />
    </div>
  )
}
