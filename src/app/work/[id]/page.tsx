'use client'

import { useEffect, useRef } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, ExternalLink, TrendingUp, Users, Clock, CheckCircle, ChevronRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const caseStudies = {
  1: {
    name: 'Unicorn Stake Ecosystem',
    industry: 'DeFi / Blockchain',
    service: 'Full-Stack Web3 Infrastructure',
    metric: '28%',
    metricLabel: 'Growth in Active TVL',
    client: 'Unicorn Stake',
    duration: '14 weeks',
    team: '6 specialists',
    heroImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1600&h=900',
    challenge: 'The client required a high-performance, decentralized staking ecosystem on BSC with a complex 10-level referral architecture. They needed more than just a frontend; they required a robust, audited smart contract suite and a backend capable of handling high-frequency reward distributions.',
    solution: 'We architected an institutional-grade ecosystem from the ground up. Our approach involved proprietary Solidity smart contract optimization, a scalable node-balanced backend, and a high-intent UI designed for maximum conversion. This project represents one of our "basic" architectural frameworks.',
    results: [
      { stat: '28%', label: 'TVL Growth Rate', icon: TrendingUp },
      { stat: '12k+', label: 'Active Wallet Users', icon: Users },
      { stat: '0%', label: 'Contract Vulnerabilities', icon: CheckCircle },
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
    gallery: [
      'https://images.unsplash.com/photo-1639762681057-3282c3c97622?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800&h=600',
    ],
    nextProject: { id: 2, name: 'ShagunPro Agri-Fintech' },
  },
  2: {
    name: 'ShagunPro Agri-Fintech',
    industry: 'Fintech / Agriculture',
    service: 'Ecosystem & Backend Architecture',
    metric: '15%',
    metricLabel: 'Operational Efficiency',
    client: 'ShagunPro',
    duration: '16 weeks',
    team: '5 specialists',
    heroImage: 'https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?auto=format&fit=crop&q=80&w=1600&h=900',
    challenge: 'ShagunPro needed a bridge between sustainable agriculture and decentralized finance. The challenge was building a complex ecosystem that could tokenize physical animal feed products and integrate a mining-based reward system.',
    solution: 'We focused on the core engineering: the backend and Solidity contracts. We built a robust BEP-20 token ecosystem with a 12-month mining lock and an integrated shopping point system, ensuring complete architectural integrity as committed.',
    results: [
      { stat: '15%', label: 'Business Increase', icon: TrendingUp },
      { stat: '₹1L+', label: 'Token Distribution', icon: TrendingUp },
      { stat: 'Audit+', label: 'Contract Verified', icon: CheckCircle },
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
    gallery: [
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800&h=600',
    ],
    nextProject: { id: 3, name: 'AgriTrade DeFi' },
  },
  3: {
    name: 'AgriTrade DeFi',
    industry: 'Crypto / Trading',
    service: 'Decentralized Exchange Infrastructure',
    metric: '12%',
    metricLabel: 'Trading Velocity',
    client: 'AgriTrade',
    duration: '10 weeks',
    team: '4 specialists',
    heroImage: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=1600&h=900',
    challenge: 'AgriTrade required a next-gen trading platform that could handle instant settlements and auto-matching queues without the overhead of traditional centralized exchanges.',
    solution: 'We built a high-intent trading ecosystem powered by immutable smart contracts. The platform features an automated matching engine and a multi-level referral reward system for community-driven growth.',
    results: [
      { stat: '12%', label: 'Velocity Increase', icon: TrendingUp },
      { stat: '$4M+', label: 'Volume Traded', icon: TrendingUp },
      { stat: '12k+', label: 'Active Users', icon: Users },
    ],
    testimonial: {
      quote: "The auto-matching queues and instant settlements changed how our users trade. IBNAY's architecture is world-class.",
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
    gallery: [
      'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1644362799333-898490a61214?auto=format&fit=crop&q=80&w=800&h=600',
    ],
    nextProject: { id: 4, name: 'Enterprise AI (NDA)' },
  },
  4: {
    name: 'Enterprise AI & EdTech (NDA)',
    industry: 'AI / Scalable Systems',
    service: 'Proprietary AI Modeling',
    metric: '8%',
    metricLabel: 'Retention Increase',
    client: 'Confidential',
    duration: 'Ongoing',
    team: '12 specialists',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600&h=900',
    challenge: 'Under strict NDA, we tackle the most complex architectural challenges in AI and EdTech. These projects involve large-scale data modeling and proprietary machine learning infrastructures.',
    solution: 'While our public-facing crypto builds represent our "basic" frameworks, our NDA work pushes the boundaries of engineering. We build the high-intent systems that power tomorrow\'s market leaders.',
    results: [
      { stat: '8%', label: 'Retention Lift', icon: TrendingUp },
      { stat: 'Scale', label: 'Enterprise Ready', icon: CheckCircle },
      { stat: 'NDA', label: 'Secure Architecture', icon: CheckCircle },
    ],
    testimonial: {
      quote: "IBNAY's ability to handle highly complex, proprietary AI systems while maintaining strict confidentiality is why we choose them for our core infrastructure.",
      author: 'Confidential Client',
      title: 'VP Engineering',
      company: 'Global AI Leader',
    },
    deliverables: [
      'Proprietary AI modeling',
      'Large-scale data pipelines',
      'Scalable EdTech infrastructure',
      'Enterprise security protocols',
      'Custom ML algorithms',
      'High-intent user ecosystems',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=600',
    ],
    nextProject: { id: 1, name: 'Unicorn Stake Ecosystem' },
  },
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
          <Image
            src={caseStudy.heroImage}
            alt={caseStudy.name}
            fill
            className="object-cover"
            priority
          />
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

          {/* Gallery */}
          <div className="section-animate mb-24">
            <span className="font-mono text-label text-foreground/40 tracking-widest uppercase block mb-4">
              Project Gallery
            </span>
            <h2 className="font-display text-display-sm text-foreground mb-8">
              Screenshots
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.gallery.map((image, index) => (
                <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
                  <Image
                    src={image}
                    alt={`${caseStudy.name} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
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
