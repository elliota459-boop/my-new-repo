'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    name: 'Unicorn Stake Ecosystem',
    industry: 'DeFi / Blockchain',
    metric: 'TVL growth tracked after launch',
    proof: 'Measured against the client baseline during the post-launch review window.',
    description: 'Engineered a comprehensive referral staking architecture on BSC. From Solidity smart contracts to high-frequency backend systems, we delivered a fully automated DeFi ecosystem.',
    color: 'from-violet-600/25 via-purple-500/10 to-slate-900',
    size: 'large',
    signals: ['BSC staking', 'Referral logic', 'Reward backend'],
    unsplashImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'ShagunPro Agri-Fintech',
    industry: 'Fintech / Web3',
    metric: 'Backend and token workflow stabilized',
    proof: 'Focused on contract, backend, and product-token flow handoff.',
    description: 'Developed the entire backend and smart contract infrastructure for a multi-layered agri-fintech ecosystem, integrating product tokenization and mining rewards.',
    color: 'from-violet-600/25 via-purple-500/10 to-slate-900',
    size: 'small',
    signals: ['BEP-20 token', 'Mining lock', 'Shopping points'],
    unsplashImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'AgriTrade DeFi',
    industry: 'Crypto / Trading',
    metric: 'Matching and settlement flow delivered',
    proof: 'Built around automated queue logic and transaction-state clarity.',
    description: 'Architected a decentralized trading platform featuring auto-matching queues and instant settlements for a global user base.',
    color: 'from-amber-600/25 via-orange-500/10 to-slate-900',
    size: 'small',
    signals: ['Queue engine', 'Instant settlement', 'Wallet states'],
    unsplashImage: 'https://images.unsplash.com/photo-1512941937309-5a1b86471316?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Enterprise AI & EdTech (NDA)',
    industry: 'AI / Scalable Systems',
    metric: 'Confidential systems work under NDA',
    proof: 'Public details intentionally limited to protect client IP.',
    description: 'Under strict NDA, we developed complex AI-driven modeling and large-scale EdTech infrastructures. These represent our tier-1 engineering capabilities beyond standard Web3 builds.',
    color: 'from-violet-600/20 via-slate-600/20 to-background-card',
    size: 'large',
    signals: ['Data flows', 'Role systems', 'NDA delivery'],
    unsplashImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop'
  },
]

function ProjectVisual({ project, compact = false }: { project: typeof projects[number], compact?: boolean }) {
  return (
    <div className={`absolute inset-0`}>
      <Image
        src={project.unsplashImage}
        alt={`${project.name} project preview`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,245,247,0.14),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(90,79,207,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)]" />
      <div className="absolute inset-6 rounded-lg border border-white/10 bg-background/35 p-4 backdrop-blur-sm">
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="h-2.5 w-2.5 rounded-full bg-warm" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/25" />
          <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-foreground/45">
            {project.industry}
          </span>
        </div>
        <div className="mt-5 grid gap-3">
          {project.signals.map((signal, index) => (
            <div key={signal} className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-mono text-[10px] text-accent">
                0{index + 1}
              </span>
              <span className="h-2 flex-1 rounded-full bg-foreground/15" />
              <span className="hidden max-w-[46%] truncate font-mono text-[10px] uppercase tracking-wider text-foreground/55 sm:block">
                {signal}
              </span>
            </div>
          ))}
        </div>
        {!compact && (
          <div className="absolute bottom-4 left-4 right-4 rounded border border-accent/20 bg-accent/10 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-accent-light">
            {project.proof}
          </div>
        )}
      </div>
    </div>
  )
}

export function SelectedWork() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
        },
      })

      // Grid items animation
      const items = gridRef.current?.querySelectorAll('.project-card')
      if (items) {
        gsap.from(items, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-background"
      id="work"
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-mono text-label text-foreground/50 tracking-widest uppercase block mb-4">
              Selected Work
            </span>
            <h2 className="font-display text-display-sm md:text-display-md text-foreground">
              Projects That
              <br />
              <span className="text-accent">Made It Live</span>
            </h2>
          </div>
          <Link 
            href="/work" 
            className="text-link mt-6 md:mt-0"
          >
            View Web2 and Web3 Work
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Asymmetric Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Row 1: Large left, Small right */}
          <div className="project-card md:row-span-2 group">
            <Link href={`/work/${projects[0].id}`} className="block">
              <div className={`relative aspect-[4/5] rounded-lg overflow-hidden img-zoom border border-border bg-gradient-to-br ${projects[0].color}`}>
                <ProjectVisual project={projects[0]} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-body text-foreground/80 mb-4">{projects[0].description}</p>
                  <span className="text-link text-sm">View Case Study <ArrowUpRight className="w-4 h-4" /></span>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-heading-md text-foreground group-hover:text-accent transition-colors">
                    {projects[0].name}
                  </h3>
                  <span className="font-mono text-label text-accent">{projects[0].industry}</span>
                </div>
                <p className="font-mono text-label text-foreground/60 mt-2">{projects[0].metric}</p>
              </div>
            </Link>
          </div>

          <div className="project-card group">
            <Link href={`/work/${projects[1].id}`} className="block">
              <div className={`relative aspect-[16/10] rounded-lg overflow-hidden img-zoom border border-border bg-gradient-to-br ${projects[1].color}`}>
                <ProjectVisual project={projects[1]} compact />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm leading-relaxed text-foreground/80">{projects[1].description}</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-heading-sm text-foreground group-hover:text-accent transition-colors">
                    {projects[1].name}
                  </h3>
                  <span className="font-mono text-label text-accent">{projects[1].industry}</span>
                </div>
                <p className="font-mono text-label text-foreground/60 mt-1">{projects[1].metric}</p>
              </div>
            </Link>
          </div>

          <div className="project-card group">
            <Link href={`/work/${projects[2].id}`} className="block">
              <div className={`relative aspect-[16/10] rounded-lg overflow-hidden img-zoom border border-border bg-gradient-to-br ${projects[2].color}`}>
                <ProjectVisual project={projects[2]} compact />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm leading-relaxed text-foreground/80">{projects[2].description}</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-heading-sm text-foreground group-hover:text-accent transition-colors">
                    {projects[2].name}
                  </h3>
                  <span className="font-mono text-label text-accent">{projects[2].industry}</span>
                </div>
                <p className="font-mono text-label text-foreground/60 mt-1">{projects[2].metric}</p>
              </div>
            </Link>
          </div>

          {/* Row 3: Full width */}
          <div className="project-card md:col-span-2 group">
            <Link href={`/work/${projects[3].id}`} className="block">
              <div className={`relative aspect-[21/9] rounded-lg overflow-hidden img-zoom border border-border bg-gradient-to-br ${projects[3].color}`}>
                <ProjectVisual project={projects[3]} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-body text-foreground/80 max-w-xl">{projects[3].description}</p>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-heading-md text-foreground group-hover:text-accent transition-colors">
                    {projects[3].name}
                  </h3>
                  <span className="font-mono text-label text-accent">{projects[3].industry}</span>
                </div>
                <p className="font-mono text-label text-foreground/60 mt-2">{projects[3].metric}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
