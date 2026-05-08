'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { FloatingElement, GlowEffect, StaggerContainer, StaggerItem } from '@/components'
import { fadeInUp } from '@/lib/animations'

gsap.registerPlugin(ScrollTrigger)

export function ContactCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current?.children || [], {
        y: 60,
        opacity: 0,
        duration: 0.9,
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
      className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden"
    >
      {/* Background Elements with Framer Motion */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement
          className="absolute top-1/4 left-1/4 w-96 h-96"
          amplitude={20}
          duration={6}
          delay={0}
        >
          <div className="w-full h-full bg-accent/5 rounded-full blur-3xl" />
        </FloatingElement>
        <FloatingElement
          className="absolute bottom-1/4 right-1/4 w-96 h-96"
          amplitude={25}
          duration={7}
          delay={1}
        >
          <div className="w-full h-full bg-accent/5 rounded-full blur-3xl" />
        </FloatingElement>
        <FloatingElement
          className="absolute top-1/2 right-1/3 w-64 h-64"
          amplitude={15}
          duration={5}
          delay={2}
        >
          <div className="w-full h-full bg-accent/3 rounded-full blur-3xl" />
        </FloatingElement>
        <div className="absolute inset-0 noise" />
      </div>

      <div className="w-full px-6 md:px-12 lg:px-20 py-32 relative z-10">
        <div
          ref={contentRef}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Scarcity Badge with Framer Motion */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-accent"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <span className="font-mono text-label text-accent">
              Website strategy reviews are limited each month
            </span>
          </motion.div>

          {/* Headline */}
          <h2 className="font-display text-display-sm md:text-display-md lg:text-display-lg text-foreground mb-6 leading-tight">
            Your website should answer
            <br />
            <span className="text-accent">the questions buyers already have</span>
            <br />
            before they leave.
          </h2>

          {/* Subheadline */}
          <p className="text-body-lg text-foreground/60 mb-12 max-w-2xl mx-auto">
            Send your current website, idea, Figma, repo, or broken build. We will review the message, SEO structure, UX friction, technical risks, and lead path, then tell you what to fix first.
          </p>

          {/* CTA Block */}
          <div className="flex flex-col items-center gap-8">
            <GlowEffect glowColor="rgba(var(--accent), 0.4)" intensity="medium">
              <Link
                href="/contact"
                className="btn-primary text-lg px-12 py-5 group"
              >
                <motion.span
                  className="flex items-center gap-2"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  Get My Website Plan
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
            </GlowEffect>

            {/* Alternative Contact Methods */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-foreground/50">
              <span className="font-mono text-label">Or reach us directly:</span>
              <a
                href="mailto:info@ibnayiftribe.com"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@ibnayiftribe.com
              </a>
              <a
                href="tel:+917861010850"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 78610 10850
              </a>
            </div>

            {/* Response Time */}
            <p className="font-mono text-label text-foreground/40">
              Typically respond within 4 business hours
            </p>
          </div>

          {/* Trust Strip with Framer Motion Stagger */}
          <div className="mt-20 pt-10 border-t border-border">
            <StaggerContainer className="flex flex-wrap justify-center gap-8 text-foreground/40" staggerDelay={0.15}>
              <StaggerItem>
                <motion.span
                  className="flex items-center gap-2 cursor-default"
                  whileHover={{ scale: 1.05, color: 'rgba(var(--foreground), 0.7)' }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-accent"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  />
                  SEO-ready website builds
                </motion.span>
              </StaggerItem>
              <StaggerItem>
                <motion.span
                  className="flex items-center gap-2 cursor-default"
                  whileHover={{ scale: 1.05, color: 'rgba(var(--foreground), 0.7)' }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-accent"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  Redesign and rescue work
                </motion.span>
              </StaggerItem>
              <StaggerItem>
                <motion.span
                  className="flex items-center gap-2 cursor-default"
                  whileHover={{ scale: 1.05, color: 'rgba(var(--foreground), 0.7)' }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-accent"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                  Web apps and Web3 delivery
                </motion.span>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
