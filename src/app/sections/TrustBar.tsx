'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

// Client logos as text representations (in production, these would be SVG logos)
const clients = [
  { name: 'Unicorn Stake', industry: 'DeFi' },
  { name: 'Shagun Pro', industry: 'Agri-Fintech' },
  { name: 'AgriTrade', industry: 'Crypto' },
  { name: 'Enterprise AI (NDA)', industry: 'Artificial Intelligence' },
  { name: 'Global EdTech (NDA)', industry: 'Education' },
  { name: 'Web3 Gaming (NDA)', industry: 'Gaming' },
  { name: 'Fintech Core (NDA)', industry: 'Banking' },
  { name: 'Supply Chain (NDA)', industry: 'Logistics' },
]

export function TrustBar() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="section-padding-sm bg-surface border-y border-border"
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Label */}
        <p className="font-mono text-label text-background/50 text-center mb-12 tracking-widest uppercase">
          Trusted by forward-thinking brands across 12 industries
        </p>

        {/* Logo Marquee */}
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10" />
          
          <div ref={trackRef} className="flex animate-marquee">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <motion.div 
                key={index}
                className="flex-shrink-0 mx-12 flex flex-col items-center cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div 
                  className="font-display text-2xl md:text-3xl text-background/80"
                  whileHover={{ color: 'rgb(var(--background))' }}
                  transition={{ duration: 0.2 }}
                >
                  {client.name}
                </motion.div>
                <motion.span 
                  className="font-mono text-label text-background/40 mt-1"
                  whileHover={{ color: 'rgba(var(--accent), 0.8)' }}
                  transition={{ duration: 0.2 }}
                >
                  {client.industry}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
