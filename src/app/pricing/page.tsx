'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Check,
  ArrowRight,
  Zap,
  Building2,
  Rocket,
  HelpCircle,
  Sparkles
} from 'lucide-react'
import { ScrollReveal } from '@/components'

const tiers = [
  {
    name: 'Website Launch',
    icon: Zap,
    description: 'For businesses that need a custom website, landing page, service page system, or redesign that is clear, fast, and built to work on every device.',
    price: 'Custom Quote',
    timeline: '4-8 weeks',
    highlight: false,
    features: [
      'Custom UI/UX Design',
      'Responsive Website Development',
      'Landing and Service Pages',
      'Next.js / React Frontend',
      'Content Management Setup',
      'Contact Forms and Integrations',
      'Performance Optimization',
      'Launch and Handoff Support',
    ],
    cta: 'Plan My Website',
    href: '/contact?plan=website',
  },
  {
    name: 'Product Build',
    icon: Building2,
    description: 'For founders and teams building a SaaS MVP, dashboard, portal, ecommerce system, booking flow, dApp, or custom web application.',
    price: 'Build Scope',
    timeline: '8-12 weeks',
    highlight: true,
    badge: 'Most Common',
    features: [
      'Everything in Website Launch, plus:',
      'Frontend and Backend Development',
      'Database and API Architecture',
      'Admin Dashboard',
      'Payments, Auth, or Wallet Flows',
      'Web3 and Smart Contract Integration',
      'QA, Deployment, and Monitoring',
      '30 Days Post-Launch Support',
    ],
    cta: 'Discuss My Product',
    href: '/contact?plan=product',
  },
  {
    name: 'Rescue and Rebuild',
    icon: Rocket,
    description: 'For slow, confusing, half-built, broken, AI-generated, or previously outsourced websites and apps that need cleaner code, solid architecture, and a clear path to production.',
    price: 'Audit First',
    timeline: '2-10 weeks',
    highlight: false,
    features: [
      'Existing Codebase Audit',
      'Architecture Review',
      'AI Prototype Cleanup',
      'Website or App Rebuild',
      'Bug and Performance Fixes',
      'Backend Stabilization',
      'Deployment Pipeline Repair',
      'Launch Blocker Removal',
      'Technical Handoff Documentation',
    ],
    cta: 'Rescue My Build',
    href: '/contact?plan=rescue',
  },
]

const faqs = [
  {
    question: 'Why do you not show fixed package prices?',
    answer: 'A simple landing page, a SaaS dashboard, a Web3 dApp, and a broken AI-generated prototype are not the same problem. We price after understanding scope, risk, integrations, timeline, and what already exists.',
  },
  {
    question: 'Can you work with a small first phase?',
    answer: 'Yes. For uncertain projects, we often begin with a paid audit or launch plan. That gives you a clear technical roadmap before committing to a full build.',
  },
  {
    question: 'Do you only build Web3 projects?',
    answer: 'No. We build web2 websites, web apps, SaaS MVPs, ecommerce systems, dashboards, APIs, and backend infrastructure. Web3 is one of our strengths, not the only thing we do.',
  },
  {
    question: 'Can you take over from another developer or agency?',
    answer: 'Yes. We can audit the existing code, identify what is usable, repair or rebuild the weak parts, and prepare the project for launch without unnecessary drama.',
  },
  {
    question: 'Do you work under NDA?',
    answer: 'Yes. We can work under NDA for AI products, Web3 protocols, internal tools, enterprise dashboards, and products that are still confidential.',
  },
]

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="font-mono text-sm text-accent-light">Web Development Pricing</span>
          </motion.div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Priced Around
            <span className="block text-accent">What Needs to Ship</span>
          </h1>
          <p className="text-xl text-foreground-muted leading-relaxed">
            We scope around the real work: UI design, frontend components, backend APIs, database architecture, Web3 integration, deployment pipeline, testing, and post-launch support.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-24">
          {tiers.map((tier, index) => (
            <ScrollReveal key={tier.name} delay={index * 0.1}>
              <motion.div
                className={`relative h-full p-8 rounded-2xl border flex flex-col transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-background-elevated border-accent/50 shadow-lg shadow-accent/10'
                    : 'bg-background-card border-border hover:border-border-light'
                }`}
                whileHover={{ y: -8 }}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-accent text-white text-sm font-mono rounded-full">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    tier.highlight ? 'bg-accent/20' : 'bg-accent/10'
                  }`}>
                    <tier.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-2">{tier.name}</h3>
                  <p className="text-foreground-subtle text-sm">{tier.description}</p>
                </div>

                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl text-foreground">{tier.price}</span>
                    <span className="text-foreground-muted">project</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-foreground-subtle">
                    <Zap className="w-4 h-4" />
                    <span className="font-mono text-sm">{tier.timeline}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        i === 0 && feature.includes('Everything') ? 'text-foreground-subtle' : 'text-accent'
                      }`} />
                      <span className={`text-sm ${
                        i === 0 && feature.includes('Everything') ? 'text-foreground-subtle' : 'text-foreground-muted'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.href}
                  className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 mt-auto transition-all duration-300 ${
                    tier.highlight
                      ? 'bg-accent text-white hover:bg-accent-light'
                      : 'bg-foreground/5 text-foreground border border-border hover:bg-accent hover:text-white hover:border-accent'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl text-foreground text-center mb-12">
            Common Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-border rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-background-elevated transition-colors"
                >
                  <span className="font-display text-lg text-foreground pr-4">{faq.question}</span>
                  <HelpCircle className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`} />
                </button>

                {openFaq === index && (
                  <motion.div
                    className="px-6 pb-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                  >
                    <p className="text-foreground-muted leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="text-center mt-20 pt-16 border-t border-border">
          <h3 className="font-display text-2xl text-foreground mb-4">
            Not sure where your project fits?
          </h3>
          <p className="text-foreground-muted mb-8 max-w-xl mx-auto">
            Send us the current state. We will help you choose between a new SEO-ready website, redesign, web app build, rescue sprint, or phased launch.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            Get a Website Estimate
            <ArrowRight className="w-5 h-5" />
          </Link>
        </ScrollReveal>
      </div>
    </div>
  )
}
