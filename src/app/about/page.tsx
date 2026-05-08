'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Award } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const values = [
  {
    title: 'Ship Over Screenshots',
    description: 'A design file is not a product. We do not celebrate mockups. We celebrate clean code, passing tests, successful deployments, and products your team can actually use.',
  },
  {
    title: 'Architecture Before Polish',
    description: 'We design the data model, API contracts, auth flows, and component system before worrying about animation speed. A beautiful product that crashes in production is not a product.',
  },
  {
    title: 'Rescue Without Ego',
    description: 'If a previous developer, agency, no-code tool, or AI build created something useful, we keep it. If it is fragile, we explain why and rebuild it cleanly. No blame, just progress.',
  },
  {
    title: 'One Team, Whole Stack',
    description: 'Designers who understand state management. Developers who understand user experience. We build websites, web apps, APIs, smart contracts, and deployment pipelines as one connected system.',
  },
]

const capabilities = [
  { name: 'Websites', count: 'Brand sites, landing pages, service pages' },
  { name: 'Web Applications', count: 'SaaS MVPs, dashboards, portals' },
  { name: 'Web3 Products', count: 'dApps, wallets, smart contracts' },
  { name: 'Rescue Work', count: 'Half-built and AI-generated projects' },
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
            We are a design and engineering studio that builds websites, web apps, and Web3 products.
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <p className="text-body-lg text-foreground/60 leading-relaxed">
              Some clients come with a business idea and need a product built from scratch. Others have a half-built MVP, a broken WordPress site, an abandoned agency project, or an AI-generated prototype that looks finished but has no real backend. Some just need a team that can handle design, frontend, backend, and deployment without handing off between three different vendors.
            </p>
            <p className="text-body-lg text-foreground/60 leading-relaxed">
              IBNAY exists for that moment. We design and build websites, landing pages, SaaS MVPs, dashboards, ecommerce backends, APIs, smart contracts, wallet flows, dApps, and the deployment systems around them. One team. One codebase. One point of contact.
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
                We care about the parts that decide whether a product actually ships.
              </h2>
              <div className="space-y-6 text-body text-foreground/60">
                <p>
                  A design agency might stop at mockups. A dev shop might ship features without thinking about user experience. We do both because modern products need both. The interface and the infrastructure are the same product.
                </p>
                <p>
                  That means your UI must be intuitive, your API must be reliable, your database must scale, your auth must be secure, your smart contracts must be tested, your deployment must be automated, and your documentation must exist so the next developer can pick it up without calling us.
                </p>
                <p>
                  We are especially useful when a project is already in motion but stuck. We enter the existing codebase, audit it honestly, and turn a confusing build into a practical path to production.
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
            Have a project that needs to ship?
          </h2>
          <p className="text-body text-foreground/60 mb-8 max-w-xl mx-auto">
            Send us what you have. We will tell you whether to start fresh, redesign, rebuild, or rescue the current codebase.
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
