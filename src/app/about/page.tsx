'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Award, Star, TrendingUp } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const values = [
  {
    title: 'Engineering Over Aesthetics',
    description: 'We refuse to build frontends that lack technical integrity. Every line of Solidity, every backend node, and every pixel must serve a functional architectural purpose.',
  },
  {
    title: 'Architectural Integrity',
    description: 'No black-box code or opaque logic. We deliver transparent, audited ecosystems where every distribution and referral mechanism is mapped for systematic reliability.',
  },
  {
    title: 'Client as Partner',
    description: 'We don\'t work for you — we work with you. Your domain expertise combined with our full-stack engineering capabilities creates market-leading ecosystems.',
  },
  {
    title: 'Functional ROI',
    description: 'A beautiful dashboard that fails on the blockchain is useless. We measure success by TVL growth, trading velocity, and the absolute stability of your infrastructure.',
  },
]

const team = [
  {
    name: 'Ibrahim Nayeem',
    role: 'Founder & Lead Architect',
    bio: '15 years engineering complex digital ecosystems. Specialized in full-stack architecture and high-intent system design.',
    initials: 'IN',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Ecosystem Strategist',
    bio: 'Ex-McKinsey digital consultant. Expert in tokenomics modeling and decentralized business logic.',
    initials: 'SM',
  },
  {
    name: 'David Chen',
    role: 'Lead Solidity Engineer',
    bio: 'Blockchain architect with 12 years experience. Obsessed with contract security and gas optimization.',
    initials: 'DC',
  },
  {
    name: 'Priya Sharma',
    role: 'Full-Stack Developer',
    bio: 'Infrastructure specialist. Expert in node-balanced backends and high-frequency data distribution.',
    initials: 'PS',
  },
]

const awards = [
  { name: 'Solidity Audits', count: '100% Secure Track Record' },
  { name: 'TVL Milestones', count: '$50M+ Under Management' },
  { name: 'Technical Kudos', count: 'Tier-1 Engineering Partner' },
  { name: 'Clutch', count: 'Top Web3 Agency 2024' },
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
        {/* Manifesto */}
        <section ref={manifestoRef} className="about-section mb-32">
          <span className="font-mono text-label text-foreground/50 tracking-widest uppercase block mb-4">
            Our Manifesto
          </span>
          <h1 className="font-display text-display-md md:text-display-lg text-foreground mb-8 max-w-4xl">
            We got tired of "Web Agencies" that shy away from backend complexity.
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <p className="text-body-lg text-foreground/60 leading-relaxed">
              IBNAY was founded on a simple belief: architectural integrity is the only foundation for growth. 
              Too many agencies deliver beautiful frontends that collapse under real-world technical stress. Too many 
              ecosystems are built on opaque logic, leading to systemic failure and lost capital.
            </p>
            <p className="text-body-lg text-foreground/60 leading-relaxed">
              We exist to bridge that gap. Every project we engineer is measured by its technical robustness: 
              did it function exactly as committed? Is the infrastructure scalable? If the answer isn&apos;t yes, 
              it doesn&apos;t leave our lab.
            </p>
          </div>
        </section>

        {/* Origin Story */}
        <section className="about-section mb-32 py-20 border-y border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="font-mono text-label text-foreground/50 tracking-widest uppercase block mb-4">
                Origin Story
              </span>
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-display text-display-sm text-foreground mb-8">
                Built for founders who care about what&apos;s under the hood.
              </h2>
              <div className="space-y-6 text-body text-foreground/60">
                <p>
                  In 2019, after witnessing yet another multi-million dollar protocol launch fail due to 
                  poor backend architecture, our founder Ibrahim Nayeem realized the industry needed 
                  engineers, not just designers. The market was flooded with "creative studios" that 
                  didn&apos;t understand a single line of Solidity.
                </p>
                <p>
                  IBNAY started as a specialized consultancy with a radical proposition: we only build 
                  working, audited ecosystems. That focus attracted exactly the right 
                  clients — serious Web3 founders who valued technical security over awards.
                </p>
                <p>
                  Today, we&apos;re a team of 12 full-stack engineers and ecosystem strategists. We&apos;ve 
                  grown exclusively through referrals from clients who&apos;ve seen our "basic" 
                  frameworks outperform enterprise-tier competitors. We don&apos;t have a sales team. We 
                  don&apos;t need one.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
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

        {/* Team */}
        <section className="about-section mb-32">
          <span className="font-mono text-label text-foreground/50 tracking-widest uppercase block mb-4">
            The Team
          </span>
          <h2 className="font-display text-display-sm text-foreground mb-12">
            Real People, Real Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="aspect-square bg-surface-dark rounded-lg flex items-center justify-center mb-4 border border-border group-hover:border-accent/50 transition-colors">
                  <span className="font-display text-4xl text-accent/50">{member.initials}</span>
                </div>
                <h3 className="font-display text-heading-sm text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="font-mono text-label text-accent mb-3">
                  {member.role}
                </p>
                <p className="text-body text-foreground/60">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="about-section mb-32 py-20 bg-surface-dark rounded-2xl">
          <div className="w-full px-8 md:px-12">
            <div className="text-center mb-12">
              <span className="font-mono text-label text-foreground/50 tracking-widest uppercase block mb-4">
                Recognition
              </span>
              <h2 className="font-display text-display-sm text-foreground">
                Awards & Recognition
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-heading-sm text-foreground mb-2">
                    {award.name}
                  </h3>
                  <p className="font-mono text-label text-foreground/50">
                    {award.count}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-section text-center">
          <h2 className="font-display text-display-sm text-foreground mb-4">
            Ready to work with us?
          </h2>
          <p className="text-body text-foreground/60 mb-8 max-w-xl mx-auto">
            Let&apos;s talk about your project and see if we&apos;re the right fit for each other.
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
