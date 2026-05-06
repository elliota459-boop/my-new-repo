'use client'

import { useEffect, useRef } from 'react'
import { Target, BarChart3, Compass } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const differentiators = [
  {
    icon: Target,
    headline: 'Ecosystem Architecture',
    copy: 'We don\'t just build frontends. We architect entire financial and technical ecosystems. From Solidity smart contracts to complex backend infrastructures, we ensure your business logic is immutable and scalable.',
  },
  {
    icon: BarChart3,
    headline: 'High-Intent Engineering',
    copy: 'Every line of code is written to drive conversion and performance. We focus on low-latency systems and secure smart contracts that function as high-performing assets, not just digital brochures.',
  },
  {
    icon: Compass,
    headline: 'Quantifiable Results',
    copy: 'Our builds aren\'t just "beautiful"—they\'re profitable. We measure success through TVL growth, trading velocity, and operational efficiency. If it doesn\'t move the needle, it doesn\'t get built.',
  },
]

export function Differentiator() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.diff-card')
      if (cards) {
        gsap.from(cards, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="font-mono text-label text-foreground/50 tracking-widest uppercase block mb-4">
            How We Think
          </span>
          <h2 className="font-display text-display-sm md:text-display-md text-foreground">
            The Difference
          </h2>
        </div>

        {/* 3 Column Grid */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {differentiators.map((item, index) => (
            <div 
              key={index}
              className="diff-card group"
            >
              <div className="mb-8">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                  <item.icon className="w-5 h-5 text-foreground/70 group-hover:text-accent transition-colors" />
                </div>
              </div>
              <h3 className="font-display text-heading-md text-foreground mb-4 group-hover:text-accent transition-colors">
                {item.headline}
              </h3>
              <p className="text-body text-foreground/60 leading-relaxed">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
