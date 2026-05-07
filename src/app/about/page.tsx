'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Award } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const values = [
  {
    title: 'Leads Over Looking Busy',
    description: 'A website only matters when the right visitor can find it, understand it, trust it, and take action. We do not treat pretty screenshots as the finish line.',
  },
  {
    title: 'Answers Before Decoration',
    description: 'We define buyer questions, Google search intent, page structure, proof, forms, backend needs, and launch constraints before polishing pixels.',
  },
  {
    title: 'Rescue Without Ego',
    description: 'If a previous developer, agency, no-code tool, or AI build created something useful, we keep it. If it is fragile, we explain why and rebuild it cleanly.',
  },
  {
    title: 'Websites and Systems Together',
    description: 'Modern businesses rarely need only pages. We build websites, web apps, dashboards, APIs, ecommerce flows, dApps, wallets, smart contracts, and launch systems as one connected product.',
  },
]

const capabilities = [
  { name: 'SEO Websites', count: 'Brand sites, landing pages, service pages' },
  { name: 'Web Applications', count: 'SaaS MVPs, dashboards, portals' },
  { name: 'Web3 Builds', count: 'dApps, wallets, smart contracts' },
  { name: 'Rescue Projects', count: 'Half-built and AI-generated products' },
]

export default function AboutPage() {
  const manifestoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = document.querySelectorAll('.about-section')
      sections.forEach((section) => {
        gsap.from(section, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <section ref={manifestoRef} className="about-section mb-32">
          <span className="font-mono text-label text-foreground/50 tracking-widest uppercase block mb-4">
            About IBNAY
          </span>
          <h1 className="font-display text-display-md md:text-display-lg text-foreground mb-8 max-w-4xl">
            We are a web design and development agency for businesses that need clarity, trust, and better leads.
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <p className="text-body-lg text-foreground/60 leading-relaxed">
              Some clients come with nothing but a business idea. Some come with an old website that does not rank. Some come with traffic but no enquiries. Others have a beautiful design with no backend, a developer who disappeared, a WordPress site that breaks, or an AI-made app that looks finished but cannot be trusted.
            </p>
            <p className="text-body-lg text-foreground/60 leading-relaxed">
              IBNAY exists for that moment. We build and rebuild SEO-ready websites, service pages, landing pages, SaaS MVPs, dashboards, ecommerce, APIs, smart contracts, wallet flows, dApps, and the launch systems around them.
            </p>
          </div>
        </section>

        <section className="about-section mb-32 py-20 border-y border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="font-mono text-label text-foreground/50 tracking-widest uppercase block mb-4">
                What Makes Us Different
              </span>
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-display text-display-sm text-foreground mb-8">
                We care about the parts of the website that decide whether it ships.
              </h2>
              <div className="space-y-6 text-body text-foreground/60">
                <p>
                  A normal brand studio may stop at copy, colors, and sections. A normal development shop may build features without understanding trust, search intent, or buyer psychology. We combine both sides because modern websites need both.
                </p>
                <p>
                  That means your offer must be clear, your pages must target high-intent searches, your visitor must feel safe, your forms must work, your backend must be stable, your dApp must explain risk, and your launch must have monitoring, analytics, and handoff documentation.
                </p>
                <p>
                  We are especially useful when a project is already in motion but stuck. We can enter the existing system, audit it calmly, and turn a confusing build into a practical launch plan.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section mb-32">
          <span className="font-mono text-label text-foreground/50 tracking-widest uppercase block mb-4">
            Our Values
          </span>
          <h2 className="font-display text-display-sm text-foreground mb-12">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-8 border border-border rounded-lg group hover:border-accent/50 transition-colors">
                <h3 className="font-display text-heading-md text-foreground mb-4 group-hover:text-accent transition-colors">
                  {value.title}
                </h3>
                <p className="text-body text-foreground/60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section mb-32 py-20 bg-surface-dark rounded-2xl">
          <div className="w-full px-8 md:px-12">
            <div className="text-center mb-12">
              <span className="font-mono text-label text-foreground/50 tracking-widest uppercase block mb-4">
                Capability Map
              </span>
              <h2 className="font-display text-display-sm text-foreground">
                What We Can Own
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {capabilities.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-heading-sm text-foreground mb-2">
                    {item.name}
                  </h3>
                  <p className="font-mono text-label text-foreground/50">
                    {item.count}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section text-center">
          <h2 className="font-display text-display-sm text-foreground mb-4">
            Have a project that needs to move?
          </h2>
          <p className="text-body text-foreground/60 mb-8 max-w-xl mx-auto">
            Send us what you have. We will tell you whether to start fresh, redesign, improve SEO, rebuild, or rescue the current work.
          </p>
          <Link href="/contact" className="btn-primary group">
            Start a Conversation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </section>
      </div>
    </div>
  )
}
