'use client'

import { useEffect, useRef } from 'react'
import { Target, BarChart3, Compass } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const differentiators = [
  {
    icon: Target,
    headline: 'Built Around Search Intent',
    copy: 'We shape pages around the phrases buyers actually use: web design agency, website development company, website redesign, custom web app, ecommerce website, SEO website, and project rescue.',
  },
  {
    icon: BarChart3,
    headline: 'Answers Before Animation',
    copy: 'A visitor should understand your offer, proof, pricing logic, process, risk, and next step before they get distracted. We use design to support trust, not hide weak positioning.',
  },
  {
    icon: Compass,
    headline: 'Human Lead Psychology',
    copy: 'People enquire when they feel seen, safe, and understood. We write and structure content around their doubts, urgency, objections, comparison shopping, and fear of choosing the wrong team.',
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
        <div className="text-center mb-20">
          <span className="font-mono text-label text-foreground/50 tracking-widest uppercase block mb-4">
            Why It Converts
          </span>
          <h2 className="font-display text-display-sm md:text-display-md text-foreground">
            Content That Feels Like an Answer
          </h2>
        </div>

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
