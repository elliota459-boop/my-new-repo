'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { TiltCard3D } from '@/components'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    number: '01',
    title: 'Full-Stack Web3 Engineering',
    description: 'We don\'t just build frontends. We architect entire decentralized ecosystems. High-performance technical infrastructures tailored for institutional-grade reliability.',
    href: '/services#web-design',
  },
  {
    number: '02',
    title: 'Smart Contract & Solidity',
    description: 'Custom protocol development, tokenomics modeling, and rigorous security auditing. We build immutable logic that powers the next generation of DeFi and Agri-Fintech.',
    href: '/services#brand-strategy',
  },
  {
    number: '03',
    title: 'Ecosystem Architecture',
    description: 'Building more than a product—we build the reason users stay. Referral engines, mining locks, and automated distribution systems designed for scalable growth.',
    href: '/services#conversion',
  },
  {
    number: '04',
    title: 'Complex Backend Infrastructure',
    description: 'Node-balanced, high-frequency backend systems that bridge the gap between physical business logic and on-chain transparency.',
    href: '/services#consulting',
  },
]

export function ServicesOverview() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

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

      const cards = cardsRef.current?.querySelectorAll('.service-card')
      if (cards) {
        gsap.from(cards, {
          y: 50,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
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
      id="services"
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div ref={headerRef} className="mb-16 md:mb-20">
          <span className="font-mono text-label text-foreground/50 tracking-widest uppercase block mb-4">
            What We Build
          </span>
          <h2 className="font-display text-display-sm md:text-display-md text-foreground">
            Services That
            <br />
            <span className="text-accent">Drive Growth</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <TiltCard3D tiltAmount={8} className="h-full">
                <Link
                  href={service.href}
                  className="service-card group relative p-8 md:p-10 border border-border rounded-lg block overflow-hidden h-full bg-background-card"
                >
                {/* Animated Background Gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Animated Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-lg border border-accent/0"
                  whileHover={{ borderColor: 'rgba(var(--accent), 0.5)' }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Number with float animation */}
                <motion.span 
                  className="font-mono text-label text-foreground/30 absolute top-8 right-8"
                  whileHover={{ y: -4, color: 'rgba(var(--accent), 0.6)' }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {service.number}
                </motion.span>
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.h3 
                    className="font-display text-heading-md text-foreground mb-4"
                    whileHover={{ color: 'rgb(var(--accent))' }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-body text-foreground/60 mb-8 max-w-md">
                    {service.description}
                  </p>
                  
                  {/* Hover Reveal with animated arrow */}
                  <div className="flex items-center gap-2 text-foreground/40 group-hover:text-accent transition-colors">
                    <span className="font-mono text-label">Learn More</span>
                    <motion.div
                      initial={{ opacity: 0, x: -8, rotate: -45 }}
                      whileHover={{ opacity: 1, x: 0, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                </Link>
              </TiltCard3D>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <Link 
              href="/services" 
              className="btn-outline group inline-flex items-center gap-2"
            >
              Explore All Services
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
