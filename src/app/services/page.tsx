'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  Globe, 
  Palette, 
  TrendingUp, 
  Lightbulb, 
  Check,
  Layers,
  Cpu,
  Wallet,
  Coins,
  Shield,
  Zap,
  Code,
  Smartphone,
  Clock,
  Sparkles,
  ArrowUpRight
} from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { ScrollReveal, FloatingElement, StaggerContainer, StaggerItem } from '@/components'

gsap.registerPlugin(ScrollTrigger)

const web2Services = [
  {
    id: 'custom-web-development',
    icon: Globe,
    title: 'Website Design and Development',
    subtitle: 'For businesses that need to be found, understood, and contacted',
    description: 'We design and develop SEO-ready business websites, service pages, landing pages, ecommerce sites, and custom web applications with clear positioning, fast performance, mobile polish, contact forms, analytics, and conversion-focused structure handled by one team.',
    features: [
      'Custom Website Design',
      'SEO Website Development',
      'Lead Generation Landing Pages',
      'Service Page Content Structure',
      'Website Redesign and Rebuilds',
      'Next.js and React Frontends',
      'Contact, CRM, and Email Integrations',
      'Analytics and Conversion Tracking'
    ],
    deliverables: [
      'SEO-Ready Website',
      'Conversion Page Map',
      'Reusable Component System',
      'Lead Capture Forms',
      'Analytics and Handoff Documentation'
    ],
    pricing: '$8,000 - $45,000+',
    timeline: '4-10 weeks',
    testimonial: {
      quote: 'The new website finally explained our offer in seconds. We stopped sounding like everyone else and started getting better-fit enquiries.',
      author: 'Ecosystem Lead',
      role: 'Founder',
      company: 'Unicorn Stake'
    }
  },
  {
    id: 'ai-product-rescue',
    icon: Cpu,
    title: 'Website Redesign and Project Rescue',
    subtitle: 'For websites that look done but do not work, rank, or convert',
    description: 'Already have a slow website, confusing landing page, broken WordPress build, messy repository, no-code site, Figma design, or AI-generated app? We audit what exists, keep what is useful, rebuild what is fragile, and move the project toward a trustworthy launch.',
    features: [
      'Website Content and UX Audit',
      'SEO Structure Review',
      'AI-Generated Website Cleanup',
      'Broken Website Rebuilds',
      'Speed and Mobile Repair',
      'Frontend and Backend Refactoring',
      'Form and Tracking Fixes',
      'Launch Blocker Removal'
    ],
    deliverables: [
      'Rescue Audit Report',
      'Rebuilt Website or Codebase',
      'Critical Bug Resolution',
      'SEO and Conversion Fix List',
      'Launch Readiness Checklist'
    ],
    pricing: '$5,000 - $60,000+',
    timeline: '2-12 weeks',
    testimonial: {
      quote: 'We had an AI-built website that looked polished but created no trust. IBNAY rebuilt the message, flow, and technical base.',
      author: 'VP Engineering',
      role: 'CTO',
      company: 'Confidential AI Leader'
    }
  },
  {
    id: 'backend-infrastructure',
    icon: Palette,
    title: 'Custom Web App and Backend Development',
    subtitle: 'For businesses that need more than pages',
    description: 'We engineer the systems behind serious websites and web apps: SaaS MVPs, dashboards, portals, booking flows, ecommerce logic, APIs, databases, admin tools, authentication, payments, automations, integrations, and scalable deployment.',
    features: [
      'SaaS MVP Development',
      'Dashboard and Portal Development',
      'REST and GraphQL API Development',
      'PostgreSQL and Supabase Architecture',
      'Authentication and Role Permissions',
      'Payment and Subscription Systems',
      'Admin Operations Dashboards',
      'Third-Party Integrations',
      'DevOps and CI/CD Pipelines',
      'Security and Performance Hardening'
    ],
    deliverables: [
      'Backend Architecture Blueprint',
      'Production API Layer',
      'Database Schema',
      'Admin Workflow',
      'Scaling and Maintenance Roadmap'
    ],
    pricing: '$25,000 - $120,000+',
    timeline: '6-16 weeks',
    testimonial: {
      quote: 'They did the serious backend work our previous team avoided. The product finally felt stable enough to sell.',
      author: 'Marcus Rodriguez',
      role: 'CMO',
      company: 'Apex Capital'
    }
  },
  {
    id: 'performance-engineering',
    icon: TrendingUp,
    title: 'SEO and Conversion Website Optimization',
    subtitle: 'For websites getting traffic but not enough qualified leads',
    description: 'We improve existing websites around Google search intent, speed, clarity, trust, page hierarchy, user psychology, and form friction so visitors understand the offer and take the next step.',
    features: [
      'Technical Website Audits',
      'SEO Page and Keyword Mapping',
      'Core Web Vitals Improvement',
      'Buyer Psychology Content Maps',
      'Landing Page Conversion Optimization',
      'Checkout and Form Friction Reduction',
      'Trust Signal and Proof Placement',
      'Analytics and Event Tracking',
      '90-Day Improvement Roadmap'
    ],
    deliverables: [
      'Website Growth Audit',
      'Optimized User Journeys',
      'Performance and SEO Roadmap',
      'Analytics Infrastructure',
      'Quarterly Performance Tuning'
    ],
    pricing: '$6,000 - $35,000+',
    timeline: '3-8 weeks',
    testimonial: {
      quote: 'The site finally explained what we do in seconds. Speed improved, leads improved, and the team stopped apologizing for the website.',
      author: 'Technical Lead',
      role: 'CTO',
      company: 'AgriTrade'
    }
  }
]

const web3Services = [
  {
    id: 'solidity-protocols',
    icon: Shield,
    title: 'Custom Solidity Protocols',
    subtitle: 'Secure on-chain logic for products people can actually use',
    description: 'We engineer smart contracts for DeFi flows, token launches, DAOs, NFT utilities, staking, rewards, and custom Web3 products, then connect them to usable dashboards and backend infrastructure.',
    features: [
      'Advanced Solidity Protocol Design',
      'Proprietary Staking & Yield Logic',
      'DAO Governance Architecture',
      'Multi-Sig & Treasury Infrastructure',
      'Gas-Optimized Contract Suites',
      'Formal Verification & Testing',
      'Third-Party Audit Coordination',
      'Cross-Chain Protocol Bridges'
    ],
    deliverables: [
      'Technical Protocol Blueprint',
      'Optimized Smart Contracts',
      'Automated Test Suites',
      'Security Audit Reports',
      'Mainnet Deployment Scripts'
    ],
    pricing: '$35,000 – $100,000+',
    timeline: '6–12 weeks',
    testimonial: {
      quote: 'Their contracts handled $50M in volume without a single vulnerability. Institutional-grade work.',
      author: 'Ecosystem Lead',
      role: 'Founder',
      company: 'DeFi Protocol'
    }
  },
  {
    id: 'institutional-dashboards',
    icon: Layers,
    title: 'dApp Frontends & Wallet Experiences',
    subtitle: 'Web3 interfaces that feel clear instead of risky',
    description: 'High-performance dApp interfaces for users, admins, and communities. We connect wallet authentication, smart contract calls, backend data, charts, transaction states, and trust-building UX.',
    features: [
      'Real-time On-Chain Data Feeds',
      'Complex Transaction Handling',
      'Multi-Wallet Auth Infrastructure',
      'High-Frequency Data Visualization',
      'Responsive Mobile-First dApps',
      'Sub-Second Dashboard Latency',
      'Integrated Referral Management',
      'Custom Analytics Pipelines'
    ],
    deliverables: [
      'High-Intent UI/UX Framework',
      'React/Next.js Frontend Suite',
      'On-Chain Integration Layer',
      'Performance-Tuned Dashboard',
      'Technical User Documentation'
    ],
    pricing: '$40,000 – $120,000+',
    timeline: '8–16 weeks',
    testimonial: {
      quote: 'The dashboard feels like Web2 but powers a complex Web3 engine. Flawless user experience.',
      author: 'Technical Director',
      role: 'CTO',
      company: 'AgriTrade'
    }
  },
  {
    id: 'ecosystem-tokenomics',
    icon: Coins,
    title: 'Token Systems & Web3 Product Architecture',
    subtitle: 'The logic before the launch',
    description: 'Before code becomes expensive, we map token flows, wallet roles, reward logic, admin controls, launch phases, user risks, and technical dependencies so the product has a real operating system.',
    features: [
      'Mathematical Token Modeling',
      'Multi-Level Referral Engines',
      'Automated Distribution Logic',
      'Dynamic Yield Architectures',
      'Governance Incentive Design',
      'Liquidity Technical Strategy',
      'On-Chain Incentive Audits',
      'Ecosystem Simulation Reports'
    ],
    deliverables: [
      'Tokenomics Logic Model',
      'Referral Engine Architecture',
      'Distribution Protocol Design',
      'Economic Sustainability Report',
      'Growth Incentive Roadmap'
    ],
    pricing: '$30,000 – $80,000',
    timeline: '6–10 weeks',
    testimonial: {
      quote: 'IBNAY delivered a complex referral system that actually worked as committed. Pure engineering.',
      author: 'Project Lead',
      role: 'CEO',
      company: 'ShagunPro'
    }
  }
]

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'web2' | 'web3'>('web2')
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
        },
      })

      const sections = document.querySelectorAll('.service-section')
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
  }, [activeTab])

  const currentServices = activeTab === 'web2' ? web2Services : web3Services

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Header with Transformation Story */}
        <ScrollReveal className="mb-16">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="font-mono text-sm text-accent-light">Website, SEO, Web App and Web3 Expertise</span>
          </motion.div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 max-w-4xl">
            Website Services For
            <span className="text-accent block">Search, Trust and Qualified Leads</span>
          </h1>
          <p className="text-xl text-foreground-muted max-w-2xl leading-relaxed mb-8">
            People searching on Google do not want a generic marketing agency. They want a clear answer to a real problem: build my website, redesign my site, improve my leads, fix my broken build, or develop my web app. These services are structured around those buying moments.
          </p>
          
          {/* Transformation Metrics */}
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <div>
                <div className="font-display text-2xl text-foreground">40+</div>
                <div className="font-mono text-sm text-foreground-subtle">Search Pages Mapped</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-warm/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-warm" />
              </div>
              <div>
                <div className="font-display text-2xl text-foreground">4-12</div>
                <div className="font-mono text-sm text-foreground-subtle">Weeks to Launch</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="font-display text-2xl text-foreground">98%</div>
                <div className="font-mono text-sm text-foreground-subtle">Clarity Focus</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 p-1 bg-background-elevated rounded-full w-fit mb-12 border border-border">
          <motion.button
            onClick={() => setActiveTab('web2')}
            className={`px-6 py-3 rounded-full font-mono text-sm transition-all duration-300 ${
              activeTab === 'web2'
                ? 'bg-accent text-white'
                : 'text-foreground-muted hover:text-foreground'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Web2 Services
          </motion.button>
          <motion.button
            onClick={() => setActiveTab('web3')}
            className={`px-6 py-3 rounded-full font-mono text-sm transition-all duration-300 ${
              activeTab === 'web3'
                ? 'bg-accent text-white'
                : 'text-foreground-muted hover:text-foreground'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Web3 Services
          </motion.button>
        </div>

        {/* Tab Description with Visual */}
        <ScrollReveal className="mb-16">
          <div className="p-8 border border-border rounded-2xl bg-background-card relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 flex items-start gap-6">
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                {activeTab === 'web2' ? (
                  <Globe className="w-8 h-8 text-accent" />
                ) : (
                  <Layers className="w-8 h-8 text-accent" />
                )}
              </motion.div>
              <div>
                <h2 className="font-display text-2xl text-foreground mb-3">
                  {activeTab === 'web2' ? 'Website Design, SEO and Web App Development' : 'Web3, Smart Contract, and dApp Development'}
                </h2>
                <p className="text-foreground-muted text-lg leading-relaxed max-w-2xl">
                  {activeTab === 'web2' 
                    ? 'SEO-ready websites, service pages, landing pages, website redesigns, custom web apps, dashboards, ecommerce builds, backend systems, and rescue work for unfinished or AI-generated projects.'
                    : 'Smart contracts, dApps, wallet flows, token systems, DeFi dashboards, NFT utilities, and blockchain integrations built with security-first development and clear user experience.'}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="space-y-24">
          {currentServices.map((service, index) => (
            <section 
              key={service.id}
              id={service.id}
              className="service-section"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Main Content - Left Side */}
                <div className="lg:col-span-8">
                  {/* Service Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <span className="font-mono text-label text-foreground/40 uppercase tracking-widest block mb-1">
                        {activeTab === 'web2' ? 'Web2 Service' : 'Web3 Service'}
                      </span>
                      <h2 className="font-display text-display-sm text-foreground">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {/* Subtitle & Description */}
                  <p className="font-display text-heading-md text-accent/80 mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-body-lg text-foreground/60 mb-8 max-w-2xl">
                    {service.description}
                  </p>

                  {/* Features Grid */}
                  <div className="mb-8">
                    <h3 className="font-mono text-label text-foreground/50 uppercase tracking-widest mb-4">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-surface-dark/50 rounded-lg border border-border">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-body text-foreground/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h3 className="font-mono text-label text-foreground/50 uppercase tracking-widest mb-4">
                      Deliverables
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((item, i) => (
                        <span 
                          key={i} 
                          className="px-4 py-2 bg-surface-dark border border-border rounded-full font-mono text-label text-foreground/60"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar - Right Side */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Investment Card */}
                  <div className="p-6 border border-border rounded-xl bg-surface-dark">
                    <div className="flex items-center gap-2 mb-4">
                      <Wallet className="w-5 h-5 text-accent" />
                      <span className="font-mono text-label text-foreground/50 uppercase tracking-widest">
                        Investment
                      </span>
                    </div>
                    <span className="font-display text-heading-lg text-foreground block mb-2">
                      {service.pricing}
                    </span>
                    <div className="flex items-center gap-2 text-foreground/40">
                      <Clock className="w-4 h-4" />
                      <span className="font-mono text-label">{service.timeline}</span>
                    </div>
                  </div>

                  {/* Testimonial Card */}
                  <div className="p-6 bg-accent/5 border border-accent/20 rounded-xl">
                    <p className="font-display text-heading-sm text-foreground mb-6 leading-relaxed">
                      &ldquo;{service.testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="font-display text-accent text-sm">
                          {service.testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-display text-heading-sm text-foreground">
                          {service.testimonial.author}
                        </div>
                        <div className="font-mono text-label text-foreground/50">
                          {service.testimonial.role}, {service.testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link 
                    href="/contact" 
                    className="btn-primary w-full justify-center group"
                  >
                    Discuss Your Project
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Divider */}
              {index < currentServices.length - 1 && (
                <div className="mt-24 pt-24 border-t border-border" />
              )}
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center py-16 border-t border-border">
          <h2 className="font-display text-display-sm text-foreground mb-4">
            Not sure what you need?
          </h2>
          <p className="text-body text-foreground/60 mb-8 max-w-xl mx-auto">
            Send us what you have. We&apos;ll assess the idea, current website, repo, or AI-generated prototype and recommend the fastest responsible path to launch.
          </p>
          <Link href="/contact" className="btn-primary group inline-flex">
            Get a Launch Plan
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
