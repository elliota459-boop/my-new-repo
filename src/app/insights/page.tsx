'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, Tag, Sparkles } from 'lucide-react'
import { ScrollReveal } from '@/components'

const categories = [
  'All',
  'Design',
  'Development',
  'Web3',
  'Strategy',
  'Case Studies',
]

const articles = [
  {
    title: 'Why Most Agency Websites Fail to Convert (And How to Fix Yours)',
    excerpt: 'We analyzed 200+ agency websites and found 7 common conversion killers. Here\'s the data-driven breakdown of what\'s costing you clients.',
    category: 'Strategy',
    readTime: '8 min read',
    date: 'Dec 15, 2024',
    featured: true,
  },
  {
    title: 'The $2M Website: How We Redesigned a SaaS Platform for Maximum Growth',
    excerpt: 'A deep dive into our process for Vertex AI, from discovery to 312% increase in demo requests.',
    category: 'Case Studies',
    readTime: '12 min read',
    date: 'Dec 10, 2024',
    featured: false,
  },
  {
    title: 'Smart Contract Security: The Complete 47-Point Audit Checklist',
    excerpt: 'The same checklist we use for $50M+ DeFi protocols. Don\'t deploy without checking these critical vulnerabilities.',
    category: 'Web3',
    readTime: '15 min read',
    date: 'Dec 5, 2024',
    featured: false,
  },
  {
    title: 'Dark Mode Design: Why Pure Black is Killing Your UX',
    excerpt: 'The science behind eye strain, contrast ratios, and why #0A0A0F beats #000000 every time.',
    category: 'Design',
    readTime: '6 min read',
    date: 'Nov 28, 2024',
    featured: false,
  },
  {
    title: 'Next.js 15 vs Nuxt 3: Performance Benchmarks for 2025',
    excerpt: 'Real-world testing data from 50 production sites. Which framework delivers better Core Web Vitals?',
    category: 'Development',
    readTime: '10 min read',
    date: 'Nov 20, 2024',
    featured: false,
  },
  {
    title: 'Tokenomics 101: Designing Sustainable Economics for Web3 Projects',
    excerpt: 'The difference between pump-and-dump schemes and projects that retain 90%+ of holders after launch.',
    category: 'Web3',
    readTime: '14 min read',
    date: 'Nov 15, 2024',
    featured: false,
  },
]

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="w-full px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <ScrollReveal className="max-w-3xl mb-12">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="font-mono text-sm text-accent-light">Insights & Case Studies</span>
          </motion.div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Knowledge That
            <span className="block text-accent">Drives Results</span>
          </h1>
          <p className="text-xl text-foreground-muted leading-relaxed">
            Deep dives into design psychology, development best practices, and Web3 strategy. 
            No fluff—just actionable insights from 150+ projects.
          </p>
        </ScrollReveal>

        {/* Categories */}
        <ScrollReveal className="flex flex-wrap gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                index === 0 
                  ? 'bg-accent text-white' 
                  : 'bg-background-elevated text-foreground-muted border border-border hover:border-accent/50'
              }`}
            >
              {category}
            </button>
          ))}
        </ScrollReveal>

        {/* Featured Article */}
        <ScrollReveal className="mb-16">
          <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-accent/10 via-background-elevated to-background border border-accent/20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-accent/20 text-accent text-sm font-mono rounded-full">
                  Featured
                </span>
                <span className="text-foreground-subtle font-mono text-sm">
                  {articles[0].category}
                </span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                {articles[0].title}
              </h2>
              
              <p className="text-lg text-foreground-muted mb-6 leading-relaxed">
                {articles[0].excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-foreground-subtle mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="font-mono text-sm">{articles[0].readTime}</span>
                </div>
                <span className="font-mono text-sm">{articles[0].date}</span>
              </div>
              
              <Link 
                href="#" 
                className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-medium transition-colors"
              >
                Read Article
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(1).map((article, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.article 
                className="group h-full p-6 rounded-xl bg-background-card border border-border hover:border-border-light transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Tag className="w-4 h-4 text-accent" />
                  <span className="font-mono text-sm text-accent">{article.category}</span>
                </div>
                
                <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-accent-light transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-foreground-muted text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-foreground-subtle mt-auto">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-mono text-xs">{article.readTime}</span>
                  </div>
                  <span className="font-mono text-xs">{article.date}</span>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>

        {/* Newsletter CTA */}
        <ScrollReveal className="mt-20 p-8 md:p-12 rounded-2xl bg-background-elevated border border-border">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-2xl text-foreground mb-4">
              Get Weekly Insights
            </h3>
            <p className="text-foreground-muted mb-6">
              Join 3,000+ founders and marketers. One actionable insight every Friday. No spam.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-accent"
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
