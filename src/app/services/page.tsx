'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  Globe, 
  Palette, 
  TrendingUp, 
  Check,
  Layers,
  Cpu,
  Wallet,
  Coins,
  Shield,
  Clock,
  Sparkles
} from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components'

gsap.registerPlugin(ScrollTrigger)

const web2Services = [
  {
    id: 'custom-web-development',
    icon: Globe,
    title: 'Website Design and Development',
    subtitle: 'Custom websites built with clean code and clear UX',
    description: 'We design and build business websites, service pages, landing pages, and ecommerce sites with responsive design, fast performance, component-based architecture, and content management your team can actually use. One team handles the design, frontend, and deployment.',
    features: [
      'Custom UI/UX Design',
      'Responsive Website Development',
      'Landing Pages',
      'Service and Product Pages',
      'Website Redesign and Rebuilds',
      'Next.js and React Frontends',
      'CMS and Content Management',
      'Performance and Accessibility'
    ],
    deliverables: [
      'Production Website',
      'Component Library',
      'Content Management Setup',
      'Contact Forms',
      'Deployment and Documentation'
    ],
    pricing: '$8,000 - $45,000+',
    timeline: '4-10 weeks',
    testimonial: {
      quote: 'The website finally loads in under a second, works on mobile, and our team can update the content without calling a developer.',
      author: 'Ecosystem Lead',
      role: 'Founder',
      company: 'Unicorn Stake'
    }
  },
  {
    id: 'ai-product-rescue',
    icon: Cpu,
    title: 'Website Redesign and Project Rescue',
    subtitle: 'For half-built, broken, or abandoned projects that need to ship',
    description: 'Already have a slow website, broken WordPress build, messy repository, no-code site, Figma design, or AI-generated prototype? We audit the code, identify what is usable, rebuild what is fragile, and move the project toward a production-ready launch.',
    features: [
      'Codebase Architecture Audit',
      'Broken Website Rebuilds',
      'AI-Generated Prototype Cleanup',
      'Speed and Mobile Repair',
      'Frontend and Backend Refactoring',
      'Form and API Fixes',
      'Database and Auth Repair',
      'Launch Blocker Removal'
    ],
    deliverables: [
      'Technical Audit Report',
      'Rebuilt Website or Codebase',
      'Critical Bug Resolution',
      'Performance Improvements',
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
    subtitle: 'Full-stack products with real architecture',
    description: 'We build SaaS MVPs, dashboards, portals, booking flows, ecommerce backends, APIs, databases, admin tools, authentication, payments, and deployment pipelines. The frontend and backend are built as one system, not two separate projects.',
    features: [
      'SaaS MVP Development',
      'Dashboard and Portal Development',
      'REST and GraphQL APIs',
      'PostgreSQL and Database Architecture',
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
      'Admin Dashboard',
      'Deployment and Scaling Plan'
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
    title: 'Performance & Architecture Optimization',
    subtitle: 'For slow, fragile, or hard-to-maintain products',
    description: 'We audit and improve existing websites and apps for speed, code quality, database structure, responsive design, security, and deployment reliability. We fix what is broken and document what is working so your next developer can pick it up.',
    features: [
      'Technical Website Audits',
      'Code Quality Review',
      'Core Web Vitals Improvement',
      'Database Query Optimization',
      'Responsive Design Fixes',
      'Security Hardening',
      'Third-Party Integration Cleanup',
      'Deployment Pipeline Repair',
      '90-Day Improvement Roadmap'
    ],
    deliverables: [
      'Technical Audit Report',
      'Refactored Codebase',
      'Performance Improvements',
      'Security Fixes',
      'Handoff Documentation'
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
    subtitle: 'Smart contracts built, tested, and deployed',
    description: 'We write and audit smart contracts for DeFi, staking, token launches, DAOs, and custom Web3 products. Then we connect them to usable dashboards and backend infrastructure that actually works.',
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
    title: 'dApp Frontends & Wallet Integration',
    subtitle: 'Web3 interfaces connected to real backend infrastructure',
    description: 'We build dApp interfaces for users and admins with wallet authentication, smart contract interaction, on-chain data visualization, transaction handling, and responsive design across all devices.',
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
            <span className="font-mono text-sm text-accent-light">Website, Web App and Web3 Development</span>
          </motion.div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 max-w-4xl">
            Website Design, Development
            <span className="text-accent block">&amp; Rescue Services</span>
          </h1>
          <p className="text-xl text-foreground-muted max-w-2xl leading-relaxed mb-8">
            We build websites, web applications, backend systems, and Web3 products. One team handles the design, frontend, backend, database, smart contracts, and deployment. No handoffs, no gaps.
          </p>
          
          {/* Transformation Metrics */}
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <div>
                <div className="font-display text-2xl text-foreground">40+</div>
                <div className="font-mono text-sm text-foreground-subtle">Projects Shipped</div>
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
                <div className="font-mono text-sm text-foreground-subtle">Clean Handoffs</div>
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
                  {activeTab === 'web2' ? 'Website Design and Web App Development' : 'Web3, Smart Contract, and dApp Development'}
                </h2>
                <p className="text-foreground-muted text-lg leading-relaxed max-w-2xl">
                  {activeTab === 'web2' 
                    ? 'Custom websites, landing pages, web app MVPs, dashboards, ecommerce builds, backend systems, APIs, and rescue work for unfinished or AI-generated projects.'
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

        {/* FAQ Section */}
        <div className="mt-32 border-t border-border pt-16">
          <div className="max-w-3xl mx-auto">
            <span className="font-mono text-label text-foreground/50 tracking-widest uppercase block mb-4">
              Common Questions
            </span>
            <h2 className="font-display text-display-sm text-foreground mb-12">
              Website & Development FAQs
            </h2>
            <div className="space-y-0 divide-y divide-border">
              {[
                {
                  q: 'How much does a website cost?',
                  a: 'A professional custom website typically starts from $8,000. The final cost depends on the number of pages, design complexity, whether you need a CMS, ecommerce, forms, integrations, or a custom backend. We provide a detailed quote after a free 30-minute project review.',
                },
                {
                  q: 'Can you fix a website that was built by someone else?',
                  a: 'Yes. Website rescue and rebuild is one of our core services. We audit the existing codebase, identify what is working and what is broken, and either repair or rebuild it cleanly. We work with WordPress sites, abandoned agency projects, AI-generated prototypes, and half-built custom codebases.',
                },
                {
                  q: 'How long does it take to build a website?',
                  a: 'A standard business website or landing page typically takes 4–8 weeks from kickoff to launch. A full web application, SaaS MVP, or ecommerce platform takes 8–16 weeks depending on complexity. We give you a realistic timeline in our project scope document before work begins.',
                },
                {
                  q: 'What is the difference between a website redesign and a website rebuild?',
                  a: 'A redesign keeps the existing code structure and updates the visual design, layout, and content. A rebuild replaces the codebase entirely — usually because the existing structure is too fragile, slow, or hard to maintain. After our audit, we recommend which approach saves more time and budget.',
                },
                {
                  q: 'Do I need to hire a web designer and a web developer separately?',
                  a: 'Not with IBNAY. We are a full-stack website agency — one team handles UI/UX design, frontend development, backend engineering, database setup, and deployment. This means no handoffs between vendors, no gaps in responsibility, and one point of contact throughout the project.',
                },
                {
                  q: 'Do you only build Web3 and blockchain websites?',
                  a: 'No. Web3 is one service line alongside our core website and web application work. We build professional business websites, service pages, ecommerce stores, SaaS MVPs, dashboards, and portals. Web3 is available for clients who need it but is not a requirement.',
                },
              ].map((item, i) => (
                <details key={i} className="group py-6 cursor-pointer">
                  <summary className="flex items-center justify-between gap-4 list-none">
                    <h3 className="font-display text-heading-sm text-foreground group-open:text-accent transition-colors">{item.q}</h3>
                    <span className="w-6 h-6 rounded-full border border-border flex items-center justify-center flex-shrink-0 group-open:border-accent group-open:text-accent transition-colors text-foreground/40 font-mono text-sm">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-body text-foreground/60 leading-relaxed max-w-2xl">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center py-16 border-t border-border">
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
