'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown, Check, FileText, Palette, Code, Rocket, Search } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const phases = [
  {
    number: '01',
    icon: Search,
    title: 'Architectural Audit',
    timeline: 'Week 1–2',
    description: 'We map the technical logic and tokenomics before we write a single line of code.',
    clientInput: 'Access to existing protocol data, tokenomics vision, technical constraints, security requirements',
    deliverables: [
      'Technical architecture blueprint',
      'Tokenomics simulation report',
      'Protocol logic flowchart',
      'Security requirement mapping',
      'Ecosystem incentive design',
      'Project engineering roadmap',
    ],
    tools: ['Notion', 'Figma', 'Miro', 'Tokenomics.ai'],
  },
  {
    number: '02',
    icon: FileText,
    title: 'Ecosystem Engineering',
    timeline: 'Week 2–4',
    description: 'Building the immutable core. Solidity contracts and backend infrastructure.',
    clientInput: 'Approval of logic flows, multi-sig signer selection, treasury management policy',
    deliverables: [
      'Smart contract architecture',
      'Referral engine logic',
      'Backend API schema',
      'Database normalization plan',
      'Incentive distribution logic',
      'Initial Solidity contract suite',
    ],
    tools: ['Solidity', 'Hardhat', 'PostgreSQL', 'Node.js'],
  },
  {
    number: '03',
    icon: Palette,
    title: 'High-Intent Interface',
    timeline: 'Week 4–7',
    description: 'Bridging technical complexity with institutional-grade dashboard UI.',
    clientInput: 'UI feedback rounds, brand asset delivery, user flow validation',
    deliverables: [
      'Institutional dashboard UI',
      'Interactive Web3 prototypes',
      'Design system documentation',
      'Real-time data visualizations',
      'Responsive dApp layout',
      'Technical frontend architecture',
    ],
    tools: ['Figma', 'Spline', 'React', 'D3.js'],
  },
  {
    number: '04',
    icon: Code,
    title: 'Full-Stack Implementation',
    timeline: 'Week 7–11',
    description: 'Rigorous coding, node-balancing, and internal security auditing.',
    clientInput: 'Beta testing participation, technical documentation review, final approvals',
    deliverables: [
      'Production-ready Next.js app',
      'Optimized backend infrastructure',
      'Integrated smart contracts',
      'Automated unit testing suite',
      'Internal security audit report',
      'On-chain data indexing layer',
    ],
    tools: ['Next.js', 'Ethers.js', 'Vercel', 'GitHub', 'Sentry'],
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Audit & Deployment',
    timeline: 'Week 11–12',
    description: 'Final verification and mainnet scaling.',
    clientInput: 'Mainnet deployment approval, audit report review, post-launch scaling coordination',
    deliverables: [
      'Third-party audit coordination',
      'Mainnet protocol deployment',
      'Production server scaling',
      'Technical support handoff',
      'Protocol monitoring dashboard',
      'Ongoing engineering support',
    ],
    tools: ['CertiK', 'Hacken', 'Vercel', 'AWS', 'Grafana'],
  },
]

const faqs = [
  {
    question: 'How long does a complex ecosystem build take?',
    answer: 'A standard Web3 engineering project—including smart contracts and backend—typically runs 12 weeks. Large-scale enterprise architectures or cross-chain protocols may extend to 20+ weeks depending on complexity.',
  },
  {
    question: 'Which blockchain networks do you support?',
    answer: 'We specialize in EVM-compatible chains including Ethereum, BSC, Polygon, and Arbitrum. For non-EVM chains like Solana or Sui, we provide specialized architectural consultation and engineering through our partner network.',
  },
  {
    question: 'How do you handle security?',
    answer: 'Security is our first principle. We conduct internal unit testing and formal verification on all smart contracts. We also coordinate with leading third-party audit firms to ensure your code is battle-tested before mainnet deployment.',
  },
  {
    question: 'What happens if we need to scale after launch?',
    answer: 'Our architectures are built for scale from Day 1. We use node-balanced backends and scalable cloud infrastructure. We also offer technical retainers for ongoing performance tuning and infrastructure management.',
  },
  {
    question: 'How do you handle project communication?',
    answer: 'We use Notion for technical documentation, Slack for real-time engineering coordination, and GitHub for version control. You have direct access to our lead architects—no project managers filtering the technical details.',
  },
]

export default function ProcessPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
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

      const phases = document.querySelectorAll('.phase-section')
      phases.forEach((phase) => {
        gsap.from(phase, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: phase,
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
        {/* Header */}
        <div ref={headerRef} className="mb-20">
          <span className="font-mono text-label text-foreground/50 tracking-widest uppercase block mb-4">
            Our Process
          </span>
          <h1 className="font-display text-display-md md:text-display-lg text-foreground mb-6">
            How We Build
            <br />
            <span className="text-accent">$10M Websites</span>
          </h1>
          <p className="text-body-lg text-foreground/60 max-w-2xl">
            Every project follows our proven 10-week framework. No shortcuts. 
            No surprises. Just systematic excellence.
          </p>
        </div>

        {/* Phases */}
        <div className="space-y-24 mb-32">
          {phases.map((phase, index) => (
            <section key={index} className="phase-section">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left Column - Phase Info */}
                <div className="lg:col-span-4">
                  <div className="sticky top-32">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                        <phase.icon className="w-6 h-6 text-accent" />
                      </div>
                      <span className="font-mono text-label text-foreground/40">{phase.number}</span>
                    </div>
                    <span className="font-mono text-label text-accent block mb-2">{phase.timeline}</span>
                    <h2 className="font-display text-display-sm text-foreground mb-4">{phase.title}</h2>
                    <p className="text-body text-foreground/60">{phase.description}</p>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="lg:col-span-8 space-y-8">
                  {/* Client Input */}
                  <div className="p-6 border border-border rounded-lg">
                    <h3 className="font-mono text-label text-foreground/50 uppercase tracking-widest mb-3">What We Need From You</h3>
                    <p className="text-body text-foreground/70">{phase.clientInput}</p>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h3 className="font-mono text-label text-foreground/50 uppercase tracking-widest mb-4">Deliverables</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {phase.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-body text-foreground/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {phase.tools.map((tool, i) => (
                      <span key={i} className="px-3 py-1 bg-surface-dark border border-border rounded-full font-mono text-label text-foreground/50">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              {index < phases.length - 1 && (
                <div className="mt-16 flex items-center justify-center">
                  <div className="w-px h-16 bg-border" />
                </div>
              )}
            </section>
          ))}
        </div>

        {/* FAQ Section */}
        <section className="mb-32">
          <div className="text-center mb-12">
            <span className="font-mono text-label text-foreground/50 tracking-widest uppercase block mb-4">
              FAQ
            </span>
            <h2 className="font-display text-display-sm text-foreground">
              Common Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-dark/50 transition-colors"
                >
                  <span className="font-display text-heading-sm text-foreground pr-8">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-foreground/50 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-body text-foreground/60">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 border-t border-border">
          <h2 className="font-display text-display-sm text-foreground mb-4">
            Ready to start your project?
          </h2>
          <p className="text-body text-foreground/60 mb-8 max-w-xl mx-auto">
            Book a free strategy call. We will walk you through exactly how we would approach your specific situation.
          </p>
          <Link href="/contact" className="btn-primary group">
            Book Your Free Call
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </section>
      </div>
    </div>
  )
}
