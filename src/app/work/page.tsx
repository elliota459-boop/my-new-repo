'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LiftCard3D } from '@/components'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    name: 'Unicorn Stake Ecosystem',
    industry: 'DeFi / Blockchain',
    service: 'Full-Stack Web3 Infrastructure',
    metric: '↑ 28% Growth in Active TVL',
    description: 'Engineered a comprehensive referral staking architecture on BSC. From Solidity smart contracts to high-frequency backend systems.',
    image: 'https://images.pexels.com/photos/8145328/pexels-photo-8145328.jpeg?auto=compress&cs=tinysrgb&w=900',
    color: 'from-teal-600/30 to-cyan-600/30',
  },
  {
    id: 2,
    name: 'ShagunPro Agri-Fintech',
    industry: 'Fintech / Web3',
    service: 'Ecosystem & Backend Architecture',
    metric: '↑ 15% Operational Efficiency',
    description: 'Developed the entire backend and smart contract infrastructure for a multi-layered agri-fintech ecosystem.',
    image: 'https://images.pexels.com/photos/5230983/pexels-photo-5230983.jpeg?auto=compress&cs=tinysrgb&w=900',
    color: 'from-emerald-600/30 to-teal-600/30',
  },
  {
    id: 3,
    name: 'AgriTrade DeFi',
    industry: 'Crypto / Trading',
    service: 'Decentralized Exchange Infrastructure',
    metric: '↑ 12% Trading Velocity',
    description: 'Architected a decentralized trading platform featuring auto-matching queues and instant settlements.',
    image: 'https://images.pexels.com/photos/6158761/pexels-photo-6158761.jpeg?auto=compress&cs=tinysrgb&w=900',
    color: 'from-amber-600/30 to-orange-600/30',
  },
  {
    id: 4,
    name: 'Enterprise AI & EdTech (NDA)',
    industry: 'AI / Scalable Systems',
    service: 'Proprietary AI Modeling',
    metric: '↑ 8% Platform Retention',
    description: 'Under strict NDA, we developed complex AI-driven modeling and large-scale EdTech infrastructures.',
    image: 'https://images.pexels.com/photos/7777679/pexels-photo-7777679.jpeg?auto=compress&cs=tinysrgb&w=900',
    color: 'from-teal-600/30 to-slate-600/30',
  },
]

const filters = ['All', 'DeFi', 'Fintech', 'Crypto', 'AI', 'EdTech']

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.industry.includes(activeFilter))

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

      const cards = gridRef.current?.querySelectorAll('.project-card')
      if (cards) {
        gsap.from(cards, {
          y: 50,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%',
          },
        })
      }
    })

    return () => ctx.revert()
  }, [activeFilter])

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <span className="font-mono text-label text-foreground/50 tracking-widest uppercase block mb-4">
            Selected Work
          </span>
          <h1 className="font-display text-display-md md:text-display-lg text-foreground mb-6">
            Web2 and Web3 Builds
            <br />
            <span className="text-accent">That Made It Live</span>
          </h1>
          <p className="text-body-lg text-foreground/60 max-w-2xl">
            A mix of custom web applications, backend systems, dApps, Web3 infrastructure, AI platforms, and complex builds that moved from idea or rescue mode into production.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 font-mono text-label rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-accent border-accent text-white'
                  : 'border-border text-foreground/60 hover:border-accent hover:text-accent'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid with 3D Lift Effect */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <LiftCard3D key={project.id} liftAmount={12} className="project-card group">
              <Link
                href={`/work/${project.id}`}
                className="block p-6 rounded-xl bg-background-card border border-border hover:border-accent/50 transition-all duration-300"
              >
                <div className={`relative aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-gradient-to-br ${project.color}`}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    priority={project.id <= 3}
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-body text-foreground/80">{project.description}</p>
                  </div>
                </div>
                
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-heading-sm text-foreground group-hover:text-accent transition-colors mb-2">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-label text-accent">{project.industry}</span>
                      <span className="text-foreground/30">|</span>
                      <span className="font-mono text-label text-foreground/50">{project.service}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-foreground/30 group-hover:text-accent transition-colors" />
                </div>
                
                <p className="font-mono text-label text-foreground/60 mt-3">
                  {project.metric}
                </p>
              </Link>
            </LiftCard3D>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center py-16 border-t border-border">
          <h2 className="font-display text-display-sm text-foreground mb-4">
            Want results like these?
          </h2>
          <p className="text-body text-foreground/60 mb-8 max-w-xl mx-auto">
            Let&apos;s discuss how we can build, rebuild, or rescue the web product your business needs to launch.
          </p>
          <Link href="/contact" className="btn-primary group">
            Start or Rescue Your Project
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
