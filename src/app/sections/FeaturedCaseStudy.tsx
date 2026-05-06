'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const caseStudy = {
  client: 'Unicorn Stake Ecosystem',
  industry: 'Web3 / DeFi Infrastructure',
  situation: 'The client required a high-performance, decentralized staking ecosystem on BSC with a complex 10-level referral architecture. They needed more than just a frontend; they required a robust, audited smart contract suite and a backend capable of handling high-frequency reward distributions.',
  approach: 'We architected an institutional-grade ecosystem from the ground up. Our approach involved proprietary Solidity smart contract optimization, a scalable node-balanced backend, and a high-intent UI designed for maximum conversion. This project represents one of our "basic" architectural frameworks, providing a foundation for even more complex enterprise systems.',
  results: [
    { metric: '+28%', label: 'increase in active TVL' },
    { metric: '12k+', label: 'active ecosystem users' },
    { metric: '0% Fail', label: 'transaction error rate' },
    { metric: '$10M+', label: 'agency-tier infrastructure' },
  ],
}

export function FeaturedCaseStudy() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-surface-dark"
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-violet-900/40 via-purple-900/30 to-indigo-900/40 rounded-lg border border-border overflow-hidden relative">
              {/* Mock UI */}
              <div className="absolute inset-8 bg-background/90 rounded-lg p-6 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-accent/20" />
                  <div className="flex-1 h-3 bg-foreground/10 rounded" />
                </div>
                <div className="space-y-3 flex-1">
                  <div className="h-4 bg-foreground/20 rounded w-3/4" />
                  <div className="h-4 bg-foreground/10 rounded w-full" />
                  <div className="h-4 bg-foreground/10 rounded w-5/6" />
                  <div className="h-4 bg-foreground/10 rounded w-4/5" />
                </div>
                <div className="mt-6 flex gap-3">
                  <div className="h-10 bg-accent/30 rounded flex-1" />
                  <div className="h-10 bg-foreground/10 rounded flex-1" />
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-lg shadow-2xl">
              <div className="font-display text-3xl">+28%</div>
              <div className="font-mono text-label opacity-80 mt-1">Growth in TVL</div>
            </div>
          </div>

          {/* Right: Content */}
          <div ref={contentRef}>
            {/* Client Info */}
            <div className="flex items-center gap-4 mb-8">
              <div className="font-display text-2xl text-foreground">{caseStudy.client}</div>
              <span className="font-mono text-label text-accent">{caseStudy.industry}</span>
            </div>

            {/* Label */}
            <span className="font-mono text-label text-foreground/50 tracking-widest uppercase block mb-4">
              Featured Case Study
            </span>

            {/* Sections */}
            <div className="space-y-8 mb-10">
              <div>
                <h4 className="font-display text-heading-sm text-foreground mb-3">The Architectural Challenge</h4>
                <p className="text-body text-foreground/60">{caseStudy.situation}</p>
              </div>
              
              <div>
                <h4 className="font-display text-heading-sm text-foreground mb-3">Our High-Intent Approach</h4>
                <p className="text-body text-foreground/60">{caseStudy.approach}</p>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {caseStudy.results.map((result, index) => (
                <div key={index}>
                  <div className="font-display text-heading-md text-accent">{result.metric}</div>
                  <div className="font-mono text-label text-foreground/50 mt-1">{result.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link 
              href="/work/1" 
              className="text-link"
            >
              Read The Full Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
