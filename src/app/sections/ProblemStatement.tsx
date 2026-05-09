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
            The Real Problem
          </span>

          {/* Headline */}
          <h2 className="font-display text-display-sm md:text-display-md text-background mb-8 leading-tight">
            Most websites look finished
            <br />
            but cannot actually ship.
          </h2>

          {/* Body Text */}
          <div className="space-y-6 text-body-lg text-background/70 max-w-2xl mx-auto">
            <p>
              AI tools, templates, and cheap freelancers can make something that looks like a website. But without clean architecture, working backend, proper auth, responsive design, and a deployment pipeline, you have a screenshot, not a product.
            </p>
            <p className="text-background">
              The real cost is not just bad design. It is months of lost time and a codebase no one wants to touch.
            </p>
            <p>
              IBNAY designs and builds the full stack: frontend, backend, APIs, databases, smart contracts, and deployment. Whether you need a brand new professional website or you need someone to fix and rescue what already exists — we turn your idea or half-built project into something that actually works and can grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
