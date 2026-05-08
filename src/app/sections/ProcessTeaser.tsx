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
    title: 'Discovery & Scope',
    timeline: 'Week 1-2',
    description: 'We audit what exists, clarify what must be built, and define the architecture. For rescues, we identify what to keep, fix, or rebuild before writing new code.',
  },
  {
    number: '02',
    icon: Map,
    title: 'Architecture & Design',
    timeline: 'Week 2-4',
    description: 'We design the UI system and map the technical stack: frontend components, API structure, database schema, auth flows, and third-party integrations.',
  },
  {
    number: '03',
    icon: Palette,
    title: 'Build & Iterate',
    timeline: 'Week 4-8',
    description: 'We write production code, build responsive interfaces, connect the backend, integrate payments or wallets, and test everything end-to-end before you see it.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deploy & Handoff',
    timeline: 'Week 8-12',
    description: 'We deploy to production, set up monitoring, write technical documentation, and train your team. The code is yours, clean, and ready for the next developer.',
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
        <div className="mb-16 md:mb-20">
          <span className="font-mono text-label text-foreground/50 tracking-widest uppercase block mb-4">
            How We Work
          </span>
          <h2 className="font-display text-display-sm md:text-display-md text-foreground mb-6">
            From Idea
            <br />
            <span className="text-accent">To Live Product</span>
          </h2>
          <p className="text-body-lg text-foreground/60 max-w-xl">
            No vague phases or vanity deliverables. We scope the work, design the system, write the code, test it, deploy it, and hand it over. You see progress every week.
          </p>
        </div>

        <div
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="process-step relative p-8 border border-border rounded-lg group hover:border-accent/50 transition-colors duration-300"
            >
              <span className="font-mono text-label text-foreground/20 absolute top-6 right-6">
                {step.number}
              </span>

              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <step.icon className="w-5 h-5 text-accent" />
              </div>

              <span className="font-mono text-label text-foreground/40 block mb-3">
                {step.timeline}
              </span>

              <h3 className="font-display text-heading-sm text-foreground mb-3 group-hover:text-accent transition-colors">
                {step.title}
              </h3>

              <p className="text-body text-foreground/60">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-border" />
                </div>
              )}
            </div>
          ))}
        </div>

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
