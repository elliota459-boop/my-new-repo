'use client'

import { useEffect, useRef } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, TrendingUp, Users, CheckCircle, ChevronRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const caseStudies = {
  1: {
    name: 'Unicorn Stake Ecosystem',
    industry: 'DeFi / Blockchain',
    service: 'Full-Stack Web3 Infrastructure',
    metric: '28%',
    metricLabel: 'TVL growth tracked after launch',
    client: 'Unicorn Stake',
    duration: '14 weeks',
    team: 'Core engineering pod',
    visualColor: 'from-teal-600/30 via-cyan-500/10 to-slate-950',
    proofNote: 'Metric shown against the client baseline during the post-launch review window. Public details are limited to protect product operations.',
    challenge: 'The client required a high-performance, decentralized staking ecosystem on BSC with a complex 10-level referral architecture. They needed more than just a frontend; they required a robust, audited smart contract suite and a backend capable of handling high-frequency reward distributions.',
    solution: 'We architected the staking, referral, backend, and dashboard layers as one connected product. The work focused on Solidity contract structure, reward distribution reliability, backend event handling, and a dashboard experience that made wallet states and user actions easier to understand.',
    results: [
      { stat: '28%', label: 'TVL growth tracked after launch', icon: TrendingUp },
      { stat: 'Wallet', label: 'Dashboard states clarified', icon: Users },
      { stat: 'Review', label: 'Internal risk pass completed', icon: CheckCircle },
    ],
    testimonial: {
      quote: "IBNAY didn't just build a site; they built an entire financial engine. Their understanding of complex referral logic and blockchain security is unmatched.",
      author: 'Ecosystem Lead',
      title: 'Founder',
      company: 'Unicorn Stake',
    },
    deliverables: [
      'Solidity smart contract suite',
      '10-level referral engine',
      'High-performance Node.js backend',
      'DeFi staking dashboard',
      'Automated reward distribution',
      'Security audit coordination',
    ],
    owned: [
      'Smart contract architecture',
      'Backend reward logic',
      'Dashboard UX and frontend',
      'Launch handoff and audit coordination',
    ],
    evidencePanels: [
      { title: 'Referral Architecture', detail: 'Mapped 10-level referral behavior, reward triggers, and user-facing wallet states.' },
      { title: 'Backend Operations', detail: 'Designed event handling and distribution workflows for high-frequency reward activity.' },
    ],
    nextProject: { id: 2, name: 'ShagunPro Agri-Fintech' },
  },
  2: {
    name: 'ShagunPro Agri-Fintech',
    industry: 'Fintech / Agriculture',
    service: 'Ecosystem & Backend Architecture',
    metric: '15%',
    metricLabel: 'workflow stabilization',
    client: 'ShagunPro',
    duration: '16 weeks',
    team: 'Backend and contract pod',
    visualColor: 'from-emerald-600/30 via-teal-500/10 to-slate-950',
    proofNote: 'Public case-study details focus on the technical workflow because operational data is client-owned.',
    challenge: 'ShagunPro needed a bridge between sustainable agriculture and decentralized finance. The challenge was building a complex ecosystem that could tokenize physical animal feed products and integrate a mining-based reward system.',
    solution: 'We focused on the core engineering: the backend and Solidity contracts. We built a robust BEP-20 token ecosystem with a 12-month mining lock and an integrated shopping point system, ensuring complete architectural integrity as committed.',
    results: [
      { stat: '15%', label: 'workflow improvement reported', icon: TrendingUp },
      { stat: 'Token', label: 'distribution logic delivered', icon: TrendingUp },
      { stat: 'Verify', label: 'contract handoff prepared', icon: CheckCircle },
    ],
    testimonial: {
      quote: "IBNAY delivered exactly what they committed: a complex, working ecosystem that bridged our physical products with the blockchain.",
      author: 'Project Director',
      title: 'CEO',
      company: 'ShagunPro',
    },
    deliverables: [
      'BEP-20 Token development',
      'Staking & Mining contracts',
      'Complex backend infrastructure',
      'Tokenization engine',
      'Ecosystem integration API',
      'Secure wallet authentication',
    ],
    owned: [
      'BEP-20 contract development',
      'Backend ecosystem architecture',
      'Mining and lock workflow',
      'Wallet authentication integration',
    ],
    evidencePanels: [
      { title: 'Token Workflow', detail: 'Defined token, mining, lock, and shopping-point behavior across the backend.' },
      { title: 'Agrifintech Bridge', detail: 'Connected physical product logic to the digital reward and wallet experience.' },
    ],
    nextProject: { id: 3, name: 'AgriTrade DeFi' },
  },
  3: {
    name: 'AgriTrade DeFi',
    industry: 'Crypto / Trading',
    service: 'Decentralized Exchange Infrastructure',
    metric: '12%',
    metricLabel: 'flow improvement tracked',
    client: 'AgriTrade',
    duration: '10 weeks',
    team: 'Product engineering pod',
    visualColor: 'from-amber-600/30 via-orange-500/10 to-slate-950',
    proofNote: 'The public metric is framed as a tracked product-flow improvement rather than a guaranteed trading outcome.',
    challenge: 'AgriTrade required a next-gen trading platform that could handle instant settlements and auto-matching queues without the overhead of traditional centralized exchanges.',
    solution: 'We built a high-intent trading ecosystem powered by immutable smart contracts. The platform features an automated matching engine and a multi-level referral reward system for community-driven growth.',
    results: [
      { stat: '12%', label: 'flow improvement tracked', icon: TrendingUp },
      { stat: 'Queue', label: 'matching logic delivered', icon: TrendingUp },
      { stat: 'States', label: 'transaction UX clarified', icon: Users },
    ],
    testimonial: {
      quote: "The auto-matching queues and settlement states made the product easier to operate and explain. IBNAY brought structure to a complex build.",
      author: 'Technical Lead',
      title: 'CTO',
      company: 'AgriTrade',
    },
    deliverables: [
      'Matching engine architecture',
      'Instant settlement logic',
      'Referral reward system',
      'On-chain data indexing',
      'Trading dashboard UI',
      'Smart contract auditing',
    ],
    owned: [
      'Matching engine architecture',
      'Settlement flow structure',
      'Trading dashboard UX',
      'On-chain data integration planning',
    ],
    evidencePanels: [
      { title: 'Matching Flow', detail: 'Structured automated queue behavior and trade-state transitions.' },
      { title: 'Settlement UX', detail: 'Mapped transaction feedback so users could understand pending, settled, and failed states.' },
    ],
    nextProject: { id: 4, name: 'Enterprise AI (NDA)' },
  },
  4: {
    name: 'Enterprise AI & EdTech (NDA)',
    industry: 'AI / Scalable Systems',
    service: 'Proprietary AI Modeling',
    metric: 'NDA',
    metricLabel: 'confidential systems delivery',
    client: 'Confidential',
    duration: 'Ongoing',
    team: 'Confidential delivery pod',
    visualColor: 'from-teal-600/20 via-slate-600/20 to-background-card',
    proofNote: 'Specific metrics, screens, and client identifiers are intentionally withheld under NDA.',
    challenge: 'Under strict NDA, we tackle the most complex architectural challenges in AI and EdTech. These projects involve large-scale data modeling and proprietary machine learning infrastructures.',
    solution: 'We supported confidential product systems where architecture, access control, performance, and protected knowledge workflows mattered more than public-facing marketing. Public details are intentionally limited, but the engagement reflects our ability to work inside sensitive product environments.',
    results: [
      { stat: 'NDA', label: 'public details protected', icon: CheckCircle },
      { stat: 'Scale', label: 'systems architecture support', icon: CheckCircle },
      { stat: 'Roles', label: 'access patterns mapped', icon: Users },
    ],
    testimonial: {
      quote: "IBNAY's ability to handle highly complex, proprietary AI systems while maintaining strict confidentiality is why we choose them for our core infrastructure.",
      author: 'Confidential Client',
      title: 'VP Engineering',
      company: 'Confidential AI Team',
    },
    deliverables: [
      'Proprietary AI modeling',
      'Large-scale data pipelines',
      'Scalable EdTech infrastructure',
      'Enterprise security protocols',
      'Custom ML algorithms',
      'High-intent user ecosystems',
    ],
    owned: [
      'System architecture support',
      'Data-flow planning',
      'Role and access patterns',
      'Confidential product delivery',
    ],
    evidencePanels: [
      { title: 'Protected Product Work', detail: 'Kept public disclosure limited while describing the type of system responsibility.' },
      { title: 'Architecture Support', detail: 'Focused on scalable workflows, role behavior, and technical delivery discipline.' },
    ],
    nextProject: { id: 1, name: 'Unicorn Stake Ecosystem' },
  },
}

function CaseStudyVisual({ caseStudy }: { caseStudy: typeof caseStudies[keyof typeof caseStudies] }) {
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.visualColor}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(245,245,247,0.16),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(44,191,174,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />
      <div className="absolute inset-x-6 top-24 hidden max-w-4xl rounded-xl border border-white/10 bg-background/30 p-5 backdrop-blur-sm md:block lg:left-20 lg:right-auto lg:w-[52rem]">
        <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="h-2.5 w-2.5 rounded-full bg-warm" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/25" />
          <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-foreground/45">
            Verified context panel
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {caseStudy.owned.slice(0, 4).map((item, index) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent">0{index + 1}</span>
              <div className="mt-3 h-2 rounded-full bg-foreground/15" />
              <p className="mt-3 text-sm text-foreground/70">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function CaseStudyPage() {
  const params = useParams()
  const id = parseInt(params.id as string)
  const caseStudy = caseStudies[id as keyof typeof caseStudies]

  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!caseStudy) return

    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(heroRef.current?.querySelectorAll('.animate-in') || [], {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      })

      // Content sections
      const sections = contentRef.current?.querySelectorAll('.section-animate')
      sections?.forEach((section) => {
        gsap.from(section, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        })
      })

      // Results counter animation
      gsap.from(resultsRef.current?.querySelectorAll('.result-card') || [], {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: resultsRef.current,
          start: 'top 75%',
        },
      })
    })

    return () => ctx.revert()
  }, [caseStudy])

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-20">
        <div className="w-full px-6 md:px-12 lg:px-20 text-center">
          <h1 className="font-display text-display-md text-foreground mb-4">Case Study Not Found</h1>
          <Link href="/work" className="btn-primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Work
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0">
          <CaseStudyVisual caseStudy={caseStudy} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-20 pt-32">
          {/* Back Link */}
          <Link 
            href="/work" 
            className="animate-in inline-flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-label">All Projects</span>
          </Link>

          <div className="max-w-4xl">
            {/* Meta */}
            <div className="animate-in flex flex-wrap items-center gap-4 mb-6">
              <span className="font-mono text-label text-accent">{caseStudy.industry}</span>
              <span className="w-1 h-1 rounded-full bg-foreground/30" />
              <span className="font-mono text-label text-foreground/50">{caseStudy.service}</span>
            </div>

            {/* Title */}
            <h1 className="animate-in font-display text-display-md md:text-display-lg text-foreground mb-6">
              {caseStudy.name}
            </h1>

            {/* Big Metric */}
            <div className="animate-in flex items-baseline gap-4">
              <span className="font-display text-display-xl text-accent">{caseStudy.metric}</span>
              <span className="font-mono text-label text-foreground/60">{caseStudy.metricLabel}</span>
            </div>
            <p className="animate-in mt-4 max-w-2xl text-sm leading-relaxed text-foreground/55">
              {caseStudy.proofNote}
            </p>
          </div>

          {/* Project Stats Bar */}
          <div className="animate-in mt-16 pt-8 border-t border-border/50">
            <div className="grid grid-cols-3 gap-8 max-w-2xl">
              <div>
                <span className="font-mono text-label text-foreground/40 block mb-1">Client</span>
                <span className="font-display text-heading-sm text-foreground">{caseStudy.client}</span>
              </div>
              <div>
                <span className="font-mono text-label text-foreground/40 block mb-1">Duration</span>
                <span className="font-display text-heading-sm text-foreground">{caseStudy.duration}</span>
              </div>
              <div>
                <span className="font-mono text-label text-foreground/40 block mb-1">Team</span>
                <span className="font-display text-heading-sm text-foreground">{caseStudy.team}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={contentRef} className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Challenge */}
            <div className="section-animate">
              <span className="font-mono text-label text-foreground/40 tracking-widest uppercase block mb-4">
                The Challenge
              </span>
              <h2 className="font-display text-display-sm text-foreground mb-6">
                What Was Broken
              </h2>
              <p className="text-body-lg text-foreground/60 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="section-animate">
              <span className="font-mono text-label text-foreground/40 tracking-widest uppercase block mb-4">
                Our Solution
              </span>
              <h2 className="font-display text-display-sm text-foreground mb-6">
                How We Fixed It
              </h2>
              <p className="text-body-lg text-foreground/60 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Results Section */}
          <div ref={resultsRef} className="section-animate mb-24 py-16 px-8 md:px-12 bg-surface-dark rounded-2xl border border-border">
            <span className="font-mono text-label text-accent tracking-widest uppercase block mb-4 text-center">
              The Results
            </span>
            <h2 className="font-display text-display-sm text-foreground mb-12 text-center">
              Measurable Impact
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="result-card text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <result.icon className="w-8 h-8 text-accent" />
                  </div>
                  <span className="font-display text-display-sm text-foreground block mb-2">
                    {result.stat}
                  </span>
                  <span className="font-mono text-label text-foreground/50">
                    {result.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Ownership */}
          <div className="section-animate mb-24">
            <span className="font-mono text-label text-foreground/40 tracking-widest uppercase block mb-4">
              What We Owned
            </span>
            <h2 className="font-display text-display-sm text-foreground mb-8">
              Scope of Responsibility
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.owned.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border border-border rounded-lg bg-background-card/40">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-body text-foreground/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="section-animate mb-24">
            <span className="font-mono text-label text-foreground/40 tracking-widest uppercase block mb-4">
              What We Delivered
            </span>
            <h2 className="font-display text-display-sm text-foreground mb-8">
              Deliverables
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border border-border rounded-lg">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-body text-foreground/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Evidence Context */}
          <div className="section-animate mb-24">
            <span className="font-mono text-label text-foreground/40 tracking-widest uppercase block mb-4">
              Evidence Context
            </span>
            <h2 className="font-display text-display-sm text-foreground mb-8">
              What Can Be Shared Publicly
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.evidencePanels.map((panel, index) => (
                <div key={index} className={`relative min-h-[260px] rounded-lg overflow-hidden border border-border bg-gradient-to-br ${caseStudy.visualColor}`}>
                  <div className="absolute inset-0 bg-background/45" />
                  <div className="relative z-10 flex h-full flex-col justify-between p-6">
                    <span className="font-mono text-label text-accent">Evidence 0{index + 1}</span>
                    <div>
                      <h3 className="font-display text-heading-md text-foreground mb-3">{panel.title}</h3>
                      <p className="text-body text-foreground/65">{panel.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="section-animate mb-24">
            <div className="max-w-3xl mx-auto text-center py-16 px-8 border-y border-border">
              <blockquote className="font-display text-heading-md md:text-display-sm text-foreground leading-relaxed mb-8">
                &ldquo;{caseStudy.testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="font-display text-accent">
                    {caseStudy.testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-display text-heading-sm text-foreground">
                    {caseStudy.testimonial.author}
                  </div>
                  <div className="font-mono text-label text-foreground/50">
                    {caseStudy.testimonial.title}, {caseStudy.testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Project */}
          <div className="section-animate">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-t border-border">
              <div>
                <span className="font-mono text-label text-foreground/40 tracking-widest uppercase block mb-2">
                  Next Case Study
                </span>
                <h3 className="font-display text-heading-md text-foreground">
                  {caseStudy.nextProject.name}
                </h3>
              </div>
              <Link
                href={`/work/${caseStudy.nextProject.id}`}
                className="btn-outline group"
              >
                View Project
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-display-sm text-foreground mb-4">
            Want results like these?
          </h2>
          <p className="text-body-lg text-foreground/60 mb-8 max-w-xl mx-auto">
            Let&apos;s discuss how we can build a website that becomes your most valuable sales asset.
          </p>
          <Link href="/contact" className="btn-primary group inline-flex">
            Start Your Project
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  )
}
