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
    id: 'web3-engineering',
    icon: Globe,
    title: 'Full-Stack Web3 Engineering',
    subtitle: 'Institutional-grade ecosystems built for scale',
    description: 'We build high-performance, decentralized ecosystems using Next.js, Solidity, and custom Node.js backends. Every line of code is engineered for institutional-grade reliability, moving beyond generic frontends to complete technical integrity.',
    features: [
      'Custom Solidity Smart Contracts (EVM)',
      'High-Frequency Node.js Backends',
      'Proprietary Distribution Engines',
      'Gas-Optimized Protocol Logic',
      'Institutional-Grade UI/UX Dashboards',
      'Secure Multi-Sig Infrastructure',
      'Real-time On-Chain Data Indexing',
      '99.9% Infrastructure Uptime Guarantee'
    ],
    deliverables: [
      'Complete Technical Architecture',
      'Audited Smart Contract Suite',
      'Scalable Backend API',
      'High-Intent User Dashboard',
      'Deployment & Security Roadmap'
    ],
    pricing: '$45,000 – $150,000+',
    timeline: '10–16 weeks',
    testimonial: {
      quote: 'They built a complex financial engine that handles $50M+ in volume. Their engineering depth is unmatched.',
      author: 'Ecosystem Lead',
      role: 'Founder',
      company: 'Unicorn Stake'
    }
  },
  {
    id: 'backend-infrastructure',
    icon: Cpu,
    title: 'Complex Backend Infrastructure',
    subtitle: 'Scalable systems for AI and Enterprise',
    description: 'Specialized backend engineering for high-load platforms. From Node-balanced architectures to proprietary AI data pipelines and large-scale EdTech systems.',
    features: [
      'Microservices Architecture',
      'Node-Balanced Server Clusters',
      'Custom AI Data Modeling (NDA)',
      'High-Throughput PostgreSQL/Supabase',
      'Enterprise Authentication (SSO/IAM)',
      'Real-time WebSocket Clusters',
      'Automated DevOps & CI/CD Pipelines',
      'Proprietary Encryption Protocols'
    ],
    deliverables: [
      'Production-Ready Infrastructure',
      'Architecture Documentation',
      'Security Audit Report',
      'Scaling Roadmap',
      '24/7 Monitoring Integration'
    ],
    pricing: '$60,000 – $200,000+',
    timeline: '12–24 weeks',
    testimonial: {
      quote: 'Flawless execution on our core infrastructure. They handle complexity where other agencies quit.',
      author: 'VP Engineering',
      role: 'CTO',
      company: 'Confidential AI Leader'
    }
  },
  {
    id: 'tokenomics-strategy',
    icon: Palette,
    title: 'Tokenomics & Ecosystem Strategy',
    subtitle: 'Engineering the logic of decentralized growth',
    description: 'We don\'t just design logos; we architect the economic incentives that drive your ecosystem. Our strategy phase defines the math and logic before the first line of code is written.',
    features: [
      'Tokenomics Modeling & Simulation',
      'Referral & Incentive Engine Logic',
      'Ecosystem Sustainability Audits',
      'Market Entry Technical Strategy',
      'Governance Framework Design',
      'Liquidity & Staking Mechanisms',
      'Cross-Chain Interoperability Logic',
      'Institutional Pitch Decks (Technical)'
    ],
    deliverables: [
      'Ecosystem Logic Blueprint',
      'Tokenomics Math Model',
      'Technical Strategy Document',
      'Governance Protocol Design',
      'Milestone-Based Growth Roadmap'
    ],
    pricing: '$25,000 – $60,000',
    timeline: '4–8 weeks',
    testimonial: {
      quote: 'Their strategy work alone was worth 10x the investment. They defined our competitive moat.',
      author: 'Marcus Rodriguez',
      role: 'CMO',
      company: 'Apex Capital'
    }
  },
  {
    id: 'performance-engineering',
    icon: TrendingUp,
    title: 'Performance Growth Engineering',
    subtitle: 'Optimizing the technical layer of conversion',
    description: 'We treat conversion as an engineering problem. We analyze the technical friction points in your ecosystem and re-architect the experience for maximum throughput.',
    features: [
      'Technical Conversion Audits',
      'Low-Latency Performance Tuning',
      'User Psychology Architectural Maps',
      'Landing Page Performance Engineering',
      'On-Chain Friction Reduction',
      'High-Precision A/B Testing Suites',
      'Real-time Analytics Architectures',
      '90-Day KPI Engineering Support'
    ],
    deliverables: [
      'Engineering Growth Audit',
      'Optimized Protocol Interfaces',
      'Performance Roadmap',
      'Analytics Infrastructure',
      'Quarterly Performance Tuning'
    ],
    pricing: '$20,000 – $50,000',
    timeline: '6–10 weeks',
    testimonial: {
      quote: 'Our trading velocity increased by 12% in 30 days after their architectural tuning.',
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
    subtitle: 'Secure, audited on-chain architecture',
    description: 'We engineer secure smart contracts for complex DeFi mechanisms, DAOs, and token launches. Every protocol is battle-tested and optimized for gas efficiency and systematic security.',
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
    title: 'Institutional Dashboards',
    subtitle: 'Bridging technical complexity and UI',
    description: 'High-performance user interfaces for complex ecosystems. We connect institutional-grade backends to intuitive, high-intent dashboards that drive user retention.',
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
    title: 'Ecosystem & Tokenomics',
    subtitle: 'Engineering sustainable economic logic',
    description: 'We architect the mathematical foundation of your ecosystem. From supply dynamics to referral multi-level rewards, we ensure your project is built for long-term technical sustainability.',
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
            <span className="font-mono text-sm text-accent-light">Web2 & Web3 Expertise</span>
          </motion.div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 max-w-4xl">
            From
            <span className="text-foreground-muted"> "Nice Website" </span>
            to
            <span className="text-accent block"> Revenue Machine</span>
          </h1>
          <p className="text-xl text-foreground-muted max-w-2xl leading-relaxed mb-8">
            Most agencies deliver beautiful decoration. We deliver measurable business results. 
            Every service is engineered to increase your revenue, not just your awards count.
          </p>
          
          {/* Transformation Metrics */}
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <div>
                <div className="font-display text-2xl text-foreground">312%</div>
                <div className="font-mono text-sm text-foreground-subtle">Avg. Lead Increase</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-warm/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-warm" />
              </div>
              <div>
                <div className="font-display text-2xl text-foreground">10-12</div>
                <div className="font-mono text-sm text-foreground-subtle">Weeks to Launch</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="font-display text-2xl text-foreground">98%</div>
                <div className="font-mono text-sm text-foreground-subtle">Client Retention</div>
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
                  {activeTab === 'web2' ? 'Traditional Web Services' : 'Blockchain & Decentralized Services'}
                </h2>
                <p className="text-foreground-muted text-lg leading-relaxed max-w-2xl">
                  {activeTab === 'web2' 
                    ? 'High-performance websites, web applications, and conversion optimization for businesses that want measurable ROI. Every project includes analytics setup and 90-day performance tracking.'
                    : 'Smart contracts, dApps, NFT projects, and DeFi protocols with security-first development. Battle-tested code, comprehensive auditing, and gas-optimized deployments.'}
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
            Book a free strategy call. We&apos;ll assess your situation and recommend the right services for your goals.
          </p>
          <Link href="/contact" className="btn-primary group inline-flex">
            Book Free Consultation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
