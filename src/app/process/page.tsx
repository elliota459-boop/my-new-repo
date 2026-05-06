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
    title: 'Project Reality Check',
    timeline: 'Week 1-2',
    description: 'We inspect what exists, clarify what must be built, and separate reusable work from risky assumptions.',
    clientInput: 'Existing website, Figma file, repository, AI-generated build, product notes, business goals, blockers, deadline, and must-have features',
    deliverables: [
      'Project rescue audit',
      'Feature and page map',
      'Technical risk report',
      'Reuse versus rebuild recommendation',
      'Launch scope definition',
      'Project engineering roadmap',
    ],
    tools: ['Notion', 'Figma', 'GitHub', 'Miro'],
  },
  {
    number: '02',
    icon: FileText,
    title: 'Product Architecture',
    timeline: 'Week 2-4',
    description: 'We design the full system before production work: UX flows, frontend structure, backend, database, integrations, and Web3 logic where needed.',
    clientInput: 'Approval of user flows, content direction, required integrations, admin workflows, and launch priorities',
    deliverables: [
      'UX and conversion flow',
      'Frontend component plan',
      'Backend API schema',
      'Database normalization plan',
      'Integration requirements',
      'Web3 contract architecture when needed',
    ],
    tools: ['Next.js', 'Node.js', 'PostgreSQL', 'Solidity'],
  },
  {
    number: '03',
    icon: Palette,
    title: 'Interface and Content System',
    timeline: 'Week 4-7',
    description: 'We turn the architecture into a website or app that creates clarity, trust, and action from the first screen.',
    clientInput: 'UI feedback, brand assets, offer details, testimonials or proof, product screenshots, and launch copy approvals',
    deliverables: [
      'High-intent website UI',
      'Interactive web app prototypes',
      'Design system documentation',
      'SEO-aligned page structure',
      'Responsive website and dApp layouts',
      'Technical frontend architecture',
    ],
    tools: ['Figma', 'React', 'Tailwind', 'Framer Motion'],
  },
  {
    number: '04',
    icon: Code,
    title: 'Full-Stack Development',
    timeline: 'Week 7-11',
    description: 'We build the production frontend, backend, database, integrations, smart contracts, admin tools, and deployment pipeline.',
    clientInput: 'Beta testing participation, technical documentation review, content lock, and final approvals',
    deliverables: [
      'Production-ready Next.js app',
      'Optimized backend infrastructure',
      'Integrated payments, APIs, or smart contracts',
      'Automated testing suite',
      'Internal security review',
      'Analytics and monitoring layer',
    ],
    tools: ['Next.js', 'Ethers.js', 'Vercel', 'GitHub', 'Sentry'],
  },
  {
    number: '05',
    icon: Rocket,
    title: 'QA, Deployment and Launch Support',
    timeline: 'Week 11-12',
    description: 'Final testing, production deployment, analytics setup, security checks, and launch support.',
    clientInput: 'Production approval, domain/DNS access, third-party account access, launch timing, and post-launch support priorities',
    deliverables: [
      'QA and launch checklist',
      'Production deployment',
      'Server and app monitoring',
      'Technical handoff documentation',
      'Post-launch support plan',
      'Ongoing engineering support',
    ],
    tools: ['Vercel', 'AWS', 'Netlify', 'Grafana'],
  },
]

const faqs = [
  {
    question: 'Can you take over a half-built website or app?',
    answer: 'Yes. We regularly take over unfinished websites, AI-generated builds, messy repositories, and projects started by another freelancer or agency. We audit first, then tell you what to keep, fix, rebuild, or cut from launch scope.',
  },
  {
    question: 'Do you build both Web2 and Web3 products?',
    answer: 'Yes. We build traditional websites, SaaS MVPs, dashboards, ecommerce systems, APIs, and backend infrastructure, plus Web3 products such as dApps, smart contracts, wallet flows, token systems, and DeFi dashboards.',
  },
  {
    question: 'How long does a full web agency build take?',
    answer: 'A focused website or MVP can launch in 4-8 weeks. More complex web apps, dashboards, dApps, or rescue projects usually take 8-12 weeks depending on code quality, scope, integrations, and approval speed.',
  },
  {
    question: 'Can you fix something made with AI tools?',
    answer: 'Yes. AI-generated apps often look impressive but miss architecture, security, database logic, responsive polish, and deployment reliability. We can convert that prototype into a production-ready web product.',
  },
  {
    question: 'How do you handle project communication?',
    answer: 'We use Notion for documentation, Slack or WhatsApp for fast coordination, and GitHub for code. You get direct technical clarity instead of vague agency updates.',
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
        <div ref={headerRef} className="mb-20">
          <span className="font-mono text-label text-foreground/50 tracking-widest uppercase block mb-4">
            Our Process
          </span>
          <h1 className="font-display text-display-md md:text-display-lg text-foreground mb-6">
            How We Turn
            <br />
            <span className="text-accent">Unfinished Ideas Into Live Products</span>
          </h1>
          <p className="text-body-lg text-foreground/60 max-w-2xl">
            A clear web agency process for custom websites, web apps, Web3 products, dApps, and rescue projects that need a reliable path to launch.
          </p>
        </div>

        <div className="space-y-24 mb-32">
          {phases.map((phase, index) => (
            <section key={index} className="phase-section">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
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

                <div className="lg:col-span-8 space-y-8">
                  <div className="p-6 border border-border rounded-lg">
                    <h3 className="font-mono text-label text-foreground/50 uppercase tracking-widest mb-3">What We Need From You</h3>
                    <p className="text-body text-foreground/70">{phase.clientInput}</p>
                  </div>

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

                  <div className="flex flex-wrap gap-2">
                    {phase.tools.map((tool, i) => (
                      <span key={i} className="px-3 py-1 bg-surface-dark border border-border rounded-full font-mono text-label text-foreground/50">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {index < phases.length - 1 && (
                <div className="mt-16 flex items-center justify-center">
                  <div className="w-px h-16 bg-border" />
                </div>
              )}
            </section>
          ))}
        </div>

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

        <section className="text-center py-16 border-t border-border">
          <h2 className="font-display text-display-sm text-foreground mb-4">
            Ready to get the project moving?
          </h2>
          <p className="text-body text-foreground/60 mb-8 max-w-xl mx-auto">
            Send the idea, site, repo, or prototype. We will show you the fastest responsible path to a live product.
          </p>
          <Link href="/contact" className="btn-primary group">
            Get Your Build Plan
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </section>
      </div>
    </div>
  )
}
