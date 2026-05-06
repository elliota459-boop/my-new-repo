'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ProblemStatement() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = contentRef.current?.children
      if (!elements) return

      gsap.from(elements, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-surface"
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div 
          ref={contentRef}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Label */}
          <span className="font-mono text-label text-background/50 tracking-widest uppercase block mb-8">
            The Problem Your Buyer Feels
          </span>

          {/* Headline */}
          <h2 className="font-display text-display-sm md:text-display-md text-background mb-8 leading-tight">
            Most websites look active
            <br />
            but do not create demand.
          </h2>

          {/* Body Text */}
          <div className="space-y-6 text-body-lg text-background/70 max-w-2xl mx-auto">
            <p>
              Your customer usually arrives with doubt, impatience, and too many open tabs. If your website does not answer what you do, who it is for, why you are safe to choose, and what happens next, they leave without enquiring.
            </p>
            <p className="text-background">
              The hidden cost is not just bad design. It is unanswered fear.
            </p>
            <p>
              IBNAY builds web agency content, UX, SEO structure, frontend, backend, and conversion paths around the questions real buyers search on Google before they are ready to talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
