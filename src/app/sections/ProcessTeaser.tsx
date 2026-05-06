'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Search, Map, Palette, Rocket } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Architectural Audit',
    timeline: 'Week 1–2',
    description: 'We audit your technical requirements, tokenomics, and competitive landscape. We define the logic before we write a single line of code.',
  },
  {
    number: '02',
    icon: Map,
    title: 'Protocol & Ecosystem',
    timeline: 'Week 2–4',
    description: 'We architect the smart contracts and backend infrastructure. Every referral engine and distribution logic is mapped for absolute integrity.',
  },
  {
    number: '03',
    icon: Palette,
    title: 'High-Intent Interface',
    timeline: 'Week 4–7',
    description: 'We design the user layer to bridge the gap between technical complexity and intuitive interaction. UI that creates immediate trust.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deployment & Scaling',
    timeline: 'Week 7–12',
    description: 'Final security audits, on-chain deployment, and infrastructure scaling. We launch ecosystems that are built to last.',
  },
]

export function ProcessTeaser() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = stepsRef.current?.querySelectorAll('.process-step')
      if (items) {
        gsap.from(items, {
          x: -40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stepsRef.current,
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
      className="section-padding bg-background overflow-hidden"
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <span className="font-mono text-label text-foreground/50 tracking-widest uppercase block mb-4">
            Our Process
          </span>
          <h2 className="font-display text-display-sm md:text-display-md text-foreground mb-6">
            How a Complex Ecosystem
            <br />
            <span className="text-accent">Gets Engineered</span>
          </h2>
          <p className="text-body-lg text-foreground/60 max-w-xl">
            Every project follows our rigorous engineering framework. From protocol design to final security audit, we deliver systematic excellence.
          </p>
        </div>

        {/* Horizontal Steps */}
        <div 
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => (
            <div 
              key={index}
              className="process-step relative p-8 border border-border rounded-lg group hover:border-accent/50 transition-colors duration-300"
            >
              {/* Number */}
              <span className="font-mono text-label text-foreground/20 absolute top-6 right-6">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <step.icon className="w-5 h-5 text-accent" />
              </div>

              {/* Timeline */}
              <span className="font-mono text-label text-foreground/40 block mb-3">
                {step.timeline}
              </span>

              {/* Title */}
              <h3 className="font-display text-heading-sm text-foreground mb-3 group-hover:text-accent transition-colors">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-body text-foreground/60">
                {step.description}
              </p>

              {/* Connector Line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-border" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link 
            href="/process" 
            className="btn-outline group inline-flex"
          >
            See The Full Process
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
