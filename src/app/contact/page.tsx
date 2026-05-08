'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Mail, Phone, MessageCircle, Check, Clock, Calendar, Shield } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projectTypes = [
  'New Website',
  'Website Redesign',
  'Landing Page',
  'Web App / SaaS MVP',
  'Ecommerce Platform',
  'Web3 dApp / Smart Contract',
  'Half-Built Project Rescue',
  'AI-Generated Prototype Cleanup',
  'Backend / API Development',
  'Other',
]

const budgetRanges = [
  'Under $25K',
  '$25K - $50K',
  '$50K - $100K',
  '$100K - $250K',
  '$250K+',
]

const enquiryInbox = 'info@ibnayiftribe.com'
const primaryPhoneHref = '+917861010850'
const primaryPhoneDisplay = '+91 78610 10850'
const googleAdsConversionTarget = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_TARGET

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const headerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

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

      gsap.from(formRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        if (googleAdsConversionTarget && typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {
            'send_to': googleAdsConversionTarget,
            'value': 1,
          })
        }
      } else {
        throw new Error('Submission failed')
      }
    } catch {
      setSubmitError(`Something went wrong. Please try again or email us directly at ${enquiryInbox}.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-20">
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-accent/10 flex items-center justify-center">
              <Check className="w-10 h-10 text-accent" />
            </div>
            <h1 className="font-display text-display-md text-foreground mb-6">
              Message Received
            </h1>
            <p className="text-body-lg text-foreground/60 mb-8">
              Thank you for reaching out. We will review your project details and get back to you within 4 business hours with our initial thoughts and next steps.
            </p>
            <p className="font-mono text-label text-foreground/40">
              In the meantime, feel free to explore our work or learn more about our process.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Side - Copy */}
          <div ref={headerRef}>
            <span className="font-mono text-label text-foreground/50 tracking-widest uppercase block mb-4">
              Get In Touch
            </span>
            <h1 className="font-display text-display-md md:text-display-lg text-foreground mb-6">
              Tell Us What You Need
              <br />
              <span className="text-accent">To Build</span>
            </h1>
            <p className="text-body-lg text-foreground/60 mb-12 max-w-md">
              Send your current project, idea, Figma file, repository, or half-built product. We will review what is feasible, what the architecture should look like, and how to get it to production.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-heading-sm text-foreground">Fast Response</h3>
                  <p className="text-body text-foreground/60">You will hear from us within 4 hours on business days</p>
                </div>
              </div>

              <a href={`mailto:${enquiryInbox}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-heading-sm text-foreground group-hover:text-accent transition-colors">Email Us</h3>
                  <p className="text-body text-foreground/60">{enquiryInbox}</p>
                </div>
              </a>

              <a href={`tel:${primaryPhoneHref}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-heading-sm text-foreground group-hover:text-accent transition-colors">Call Us</h3>
                  <p className="text-body text-foreground/60">{primaryPhoneDisplay}</p>
                </div>
              </a>

              <a href="https://wa.me/917861010850" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-heading-sm text-foreground group-hover:text-accent transition-colors">WhatsApp</h3>
                  <p className="text-body text-foreground/60">Quick questions welcome</p>
                </div>
              </a>
            </div>

            {/* Scarcity Note */}
            <div className="p-6 border border-accent/30 bg-accent/5 rounded-lg">
              <p className="font-mono text-label text-accent">
                We take on a limited number of projects each month so every build gets the attention it needs.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
              data-netlify="true"
              name="contact"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="enquiryInbox" value={enquiryInbox} />
              <p className="hidden">
                <label>
                  Do not fill this out if you are human: <input name="bot-field" />
                </label>
              </p>
              {/* Name */}
              <div>
                <label htmlFor="name" className="font-mono text-label text-foreground/50 uppercase tracking-widest block mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-4 bg-surface-dark border border-border rounded-lg text-foreground placeholder-foreground/30 focus:border-accent focus:outline-none transition-colors"
                  placeholder="John Smith"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="font-mono text-label text-foreground/50 uppercase tracking-widest block mb-3">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-4 bg-surface-dark border border-border rounded-lg text-foreground placeholder-foreground/30 focus:border-accent focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="font-mono text-label text-foreground/50 uppercase tracking-widest block mb-3">
                  Company / Brand Name
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-4 bg-surface-dark border border-border rounded-lg text-foreground placeholder-foreground/30 focus:border-accent focus:outline-none transition-colors"
                  placeholder="Acme Inc."
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="font-mono text-label text-foreground/50 uppercase tracking-widest block mb-3">
                  What do you need help with?
                </label>
                <select
                  id="projectType"
                  required
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-4 bg-surface-dark border border-border rounded-lg text-foreground focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="font-mono text-label text-foreground/50 uppercase tracking-widest block mb-3">
                  Budget Range
                </label>
                <select
                  id="budget"
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-4 bg-surface-dark border border-border rounded-lg text-foreground focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select your budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="font-mono text-label text-foreground/50 uppercase tracking-widest block mb-3">
                  Tell us what is not working yet
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-4 bg-surface-dark border border-border rounded-lg text-foreground placeholder-foreground/30 focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Share your website link if you have one. Tell us what you want: more Google leads, a redesign, better content, faster pages, a web app, ecommerce, Web3, or rescue work. Include deadlines, blockers, competitors, and must-have features."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary justify-center py-5 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Get My Website Plan
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              {submitError && (
                <p className="rounded-lg border border-error/30 bg-error/10 px-4 py-3 text-sm text-foreground/80" role="alert">
                  {submitError}
                </p>
              )}

              {/* Trust Points */}
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-foreground/40">
                  <Clock className="w-4 h-4" />
                  <span className="font-mono text-label">Response within 4 hours</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/40">
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono text-label">Free 30-min project review</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/40">
                  <Shield className="w-4 h-4" />
                  <span className="font-mono text-label">No commitment required</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
