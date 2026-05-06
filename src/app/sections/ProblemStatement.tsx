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
            The Reality
          </span>

          {/* Headline */}
          <h2 className="font-display text-display-sm md:text-display-md text-background mb-8 leading-tight">
            Most Web3 projects are 
            <br />
            frontends with no integrity.
          </h2>

          {/* Body Text */}
          <div className="space-y-6 text-body-lg text-background/70 max-w-2xl mx-auto">
            <p>
              Beautiful UI is easy. But building a complex, working ecosystem that actually functions as committed? That is rare. Most "web agencies" shy away from the backend complexity that drives real business results.
            </p>
            <p className="text-background">
              The problem isn&apos;t your token. It&apos;s your architecture.
            </p>
            <p>
              We engineer full-stack infrastructures from the smart contract layer to the user dashboard, ensuring your ecosystem is as robust as it is intuitive.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
