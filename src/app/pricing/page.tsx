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
    name: 'Ecosystem Foundation',
    icon: Zap,
    description: 'For projects requiring a secure, working Web3 ecosystem with core backend logic.',
    price: 'Custom Architecture',
    timeline: '8-10 weeks',
    highlight: false,
    features: [
      'Custom Solidity Smart Contract',
      'Node.js Backend Infrastructure',
      'Institutional-Grade Dashboard',
      'Multi-Level Referral Engine',
      'Security Unit Testing',
      'Mainnet Deployment Support',
      '30 Days Technical Support',
    ],
    cta: 'Consult with Architect',
    href: '/contact?plan=foundation',
  },
  {
    name: 'Institutional Protocol',
    icon: Building2,
    description: 'For high-volume ecosystems requiring complex distribution and advanced security.',
    price: 'Protocol Design',
    timeline: '12-16 weeks',
    highlight: true,
    badge: 'Most Technical',
    features: [
      'Everything in Foundation, plus:',
      'Complex Yield/Staking Logic',
      'Node-Balanced Architecture',
      'Automated Distribution Engine',
      'Real-time Data Indexing',
      'Third-Party Audit Coordination',
      'Custom Tokenomics Math Model',
      '90 Days Technical Support',
    ],
    cta: 'Discuss Your Idea',
    href: '/contact?plan=protocol',
  },
  {
    name: 'Enterprise Architecture',
    icon: Rocket,
    description: 'For large-scale AI, EdTech, or cross-chain ecosystems under strict NDA.',
    price: 'Enterprise Scale',
    timeline: '20+ weeks',
    highlight: false,
    features: [
      'Everything in Protocol, plus:',
      'Proprietary AI Data Pipelines',
      'Large-Scale Infrastructure',
      'Cross-Chain Interoperability',
      'Enterprise SSO & IAM Auth',
      'Dedicated DevOps Pipeline',
      '24/7 Monitoring & Response',
      'Ongoing Technical Retainer',
    ],
    cta: 'Connect with Us',
    href: '/contact?plan=enterprise',
  },
]

const faqs = [
  {
    question: 'Why is your pricing higher than "Web Agencies"?',
    answer: 'Most web agencies build frontends. We engineer financial and technical ecosystems. Our pricing reflects the depth of our Solidity engineering, node-balanced backends, and institutional-grade security. We build systems that handle millions in TVL—cheap frontends cost you more in security breaches and systemic failure.',
  },
  {
    question: 'What technical support is included?',
    answer: 'Support includes infrastructure monitoring, smart contract maintenance, node updates, and high-priority technical assistance. We don\'t just fix "bugs"; we ensure your ecosystem remains stable as it scales on-chain.',
  },
  {
    question: 'How do you handle security audits?',
    answer: 'We conduct internal unit testing and formal verification on all smart contracts. For institutional projects, we coordinate with tier-1 third-party auditing firms (e.g., CertiK, Hacken) to ensure your protocol logic is immutable and secure.',
  },
  {
    question: 'Do you work under NDA?',
    answer: 'Yes. A significant portion of our portfolio—including proprietary AI modeling and large-scale enterprise infrastructures—is built under strict NDA. We are comfortable handling sensitive technical data for global market leaders.',
  },
  {
    question: 'How are technical milestones structured?',
    answer: 'We typically structure engineering in 4 phases: 1. Architectural Blueprint, 2. Protocol/Backend Engineering, 3. User Dashboard Integration, 4. Security Audit & Deployment. Payments are released upon successful technical validation of each phase.',
  },
]

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="w-full px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="font-mono text-sm text-accent-light">Transparent Pricing</span>
          </motion.div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Architectural
            <span className="block text-accent">Consultation</span>
          </h1>
          <p className="text-xl text-foreground-muted leading-relaxed">
            We don&apos;t offer "off-the-shelf" pricing because we don&apos;t build off-the-shelf ecosystems. 
            Every project is architected from the ground up to meet your specific technical requirements.
          </p>
        </ScrollReveal>

        {/* Pricing Cards */}
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
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-accent text-white text-sm font-mono rounded-full">
                      {tier.badge}
                    </span>
                  </div>
                )}

                {/* Icon & Name */}
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    tier.highlight ? 'bg-accent/20' : 'bg-accent/10'
                  }`}>
                    <tier.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-2">{tier.name}</h3>
                  <p className="text-foreground-subtle text-sm">{tier.description}</p>
                </div>

                {/* Price */}
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

                {/* Features */}
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

                {/* CTA */}
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

        {/* FAQ Section */}
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

        {/* Bottom CTA */}
        <ScrollReveal className="text-center mt-20 pt-16 border-t border-border">
          <h3 className="font-display text-2xl text-foreground mb-4">
            Not sure which plan is right?
          </h3>
          <p className="text-foreground-muted mb-8 max-w-xl mx-auto">
            Book a free strategy call. We'll analyze your needs and recommend the best investment for your goals.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            Book Free Strategy Call
            <ArrowRight className="w-5 h-5" />
          </Link>
        </ScrollReveal>
      </div>
    </div>
  )
}
