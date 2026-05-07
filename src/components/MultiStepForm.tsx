'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check, Loader2 } from 'lucide-react'

const steps = [
  {
    id: 'basics',
    title: 'Project Basics',
    description: 'Tell us about your project',
  },
  {
    id: 'details',
    title: 'Project Details',
    description: 'What do you need help with?',
  },
  {
    id: 'budget',
    title: 'Investment',
    description: 'What\'s your budget range?',
  },
  {
    id: 'contact',
    title: 'Contact Info',
    description: 'How can we reach you?',
  },
]

const services = [
  'Custom Website Development',
  'Web App / SaaS MVP',
  'Web3 / dApp Development',
  'Smart Contract Development',
  'Half-Built Project Rescue',
  'AI-Generated App Cleanup',
  'Backend Infrastructure',
  'Other',
]

const budgets = [
  { value: '10k-25k', label: '$10,000 – $25,000' },
  { value: '25k-50k', label: '$25,000 – $50,000' },
  { value: '50k-100k', label: '$50,000 – $100,000' },
  { value: '100k+', label: '$100,000+' },
]

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    service: '',
    description: '',
    budget: '',
    timeline: '',
    email: '',
    phone: '',
  })

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center"
        >
          <Check className="w-10 h-10 text-accent" />
        </motion.div>
        <h3 className="font-display text-display-sm text-foreground mb-4">
          Message Sent!
        </h3>
        <p className="text-body text-foreground/60">
          We&apos;ll review your project details and get back to you with a practical launch path.
        </p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-label ${
                  index <= currentStep
                    ? 'bg-accent text-white'
                    : 'bg-surface-dark text-foreground/40 border border-border'
                }`}
              >
                {index < currentStep ? (
                  <Check className="w-4 h-4" />
                ) : (
                  index + 1
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-12 md:w-20 h-0.5 mx-1 md:mx-2 ${
                    index < currentStep ? 'bg-accent' : 'bg-border'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <span className="font-mono text-label text-accent">
            Step {currentStep + 1} of {steps.length}
          </span>
          <h3 className="font-display text-heading-md text-foreground mt-1">
            {steps[currentStep].title}
          </h3>
          <p className="text-body text-foreground/50">
            {steps[currentStep].description}
          </p>
        </div>
      </div>

      {/* Form Steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentStep === 0 && (
            <div className="space-y-4">
              <div>
                <label className="font-mono text-label text-foreground/60 block mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className="w-full px-4 py-3 bg-surface-dark border border-border rounded-lg focus:border-accent focus:outline-none text-foreground"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="font-mono text-label text-foreground/60 block mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => updateField('company', e.target.value)}
                  className="w-full px-4 py-3 bg-surface-dark border border-border rounded-lg focus:border-accent focus:outline-none text-foreground"
                  placeholder="Acme Inc."
                />
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <label className="font-mono text-label text-foreground/60 block mb-2">
                  Service Needed *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => updateField('service', service)}
                      className={`p-4 border rounded-lg text-left transition-all ${
                        formData.service === service
                          ? 'border-accent bg-accent/5'
                          : 'border-border hover:border-accent/50'
                      }`}
                    >
                      <span className="text-body text-foreground">{service}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="font-mono text-label text-foreground/60 block mb-2">
                  Project Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => updateField('description', e.target.value)}
                  className="w-full px-4 py-3 bg-surface-dark border border-border rounded-lg focus:border-accent focus:outline-none text-foreground h-32 resize-none"
                  placeholder="Tell us if we are starting from zero, rescuing an existing build, cleaning up an AI-made prototype, or adding Web3/backend features..."
                  required
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                <label className="font-mono text-label text-foreground/60 block mb-2">
                  Budget Range *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {budgets.map((budget) => (
                    <button
                      key={budget.value}
                      onClick={() => updateField('budget', budget.value)}
                      className={`p-4 border rounded-lg text-center transition-all ${
                        formData.budget === budget.value
                          ? 'border-accent bg-accent/5'
                          : 'border-border hover:border-accent/50'
                      }`}
                    >
                      <span className="font-display text-heading-sm text-foreground">{budget.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="font-mono text-label text-foreground/60 block mb-2">
                  Preferred Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => updateField('timeline', e.target.value)}
                  className="w-full px-4 py-3 bg-surface-dark border border-border rounded-lg focus:border-accent focus:outline-none text-foreground"
                >
                  <option value="">Select timeline...</option>
                  <option value="asap">ASAP (1-2 weeks)</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <label className="font-mono text-label text-foreground/60 block mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full px-4 py-3 bg-surface-dark border border-border rounded-lg focus:border-accent focus:outline-none text-foreground"
                  placeholder="john@company.com"
                  required
                />
              </div>
              <div>
                <label className="font-mono text-label text-foreground/60 block mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className="w-full px-4 py-3 bg-surface-dark border border-border rounded-lg focus:border-accent focus:outline-none text-foreground"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className={`flex items-center gap-2 px-4 py-2 font-mono text-label transition-colors ${
            currentStep === 0
              ? 'text-foreground/20 cursor-not-allowed'
              : 'text-foreground/60 hover:text-foreground'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {currentStep < steps.length - 1 ? (
          <button
            onClick={handleNext}
            className="btn-primary"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="btn-primary"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  )
}
