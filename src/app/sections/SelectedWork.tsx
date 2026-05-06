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
    metric: '↑ 28% Growth in Active TVL',
    description: 'Engineered a comprehensive referral staking architecture on BSC. From Solidity smart contracts to high-frequency backend systems, we delivered a fully automated DeFi ecosystem.',
    image: 'https://images.pexels.com/photos/8145328/pexels-photo-8145328.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: 'from-teal-600/20 to-cyan-600/20',
    size: 'large',
  },
  {
    id: 2,
    name: 'ShagunPro Agri-Fintech',
    industry: 'Fintech / Web3',
    metric: '↑ 15% Operational Efficiency',
    description: 'Developed the entire backend and smart contract infrastructure for a multi-layered agri-fintech ecosystem, integrating product tokenization and mining rewards.',
    image: 'https://images.pexels.com/photos/5230983/pexels-photo-5230983.jpeg?auto=compress&cs=tinysrgb&w=900',
    color: 'from-emerald-600/20 to-teal-600/20',
    size: 'small',
  },
  {
    id: 3,
    name: 'AgriTrade DeFi',
    industry: 'Crypto / Trading',
    metric: '↑ 12% Trading Velocity',
    description: 'Architected a decentralized trading platform featuring auto-matching queues and instant settlements for a global user base.',
    image: 'https://images.pexels.com/photos/6158761/pexels-photo-6158761.jpeg?auto=compress&cs=tinysrgb&w=900',
    color: 'from-amber-600/20 to-orange-600/20',
    size: 'small',
  },
  {
    id: 4,
    name: 'Enterprise AI & EdTech (NDA)',
    industry: 'AI / Scalable Systems',
    metric: '↑ 8% Platform Retention',
    description: 'Under strict NDA, we developed complex AI-driven modeling and large-scale EdTech infrastructures. These represent our tier-1 engineering capabilities beyond standard Web3 builds.',
    image: 'https://images.pexels.com/photos/7777679/pexels-photo-7777679.jpeg?auto=compress&cs=tinysrgb&w=1600',
    color: 'from-teal-600/20 to-slate-600/20',
    size: 'large',
  },
]

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
              <span className="text-accent">That Made It Live</span>
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
                <Image
                  src={projects[0].image}
                  alt={projects[0].name}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
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
                <Image
                  src={projects[1].image}
                  alt={projects[1].name}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-body-sm text-foreground/80">{projects[1].description}</p>
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
                <Image
                  src={projects[2].image}
                  alt={projects[2].name}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-body-sm text-foreground/80">{projects[2].description}</p>
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
                <Image
                  src={projects[3].image}
                  alt={projects[3].name}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
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
