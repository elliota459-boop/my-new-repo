import dynamic from 'next/dynamic'
import { Hero } from './sections/Hero'
import { TrustBar } from './sections/TrustBar'
import { ProblemStatement } from './sections/ProblemStatement'

const SelectedWork = dynamic(() => import('./sections/SelectedWork').then((mod) => mod.SelectedWork))
const Differentiator = dynamic(() => import('./sections/Differentiator').then((mod) => mod.Differentiator))
const MetricsStrip = dynamic(() => import('./sections/MetricsStrip').then((mod) => mod.MetricsStrip))
const ServicesOverview = dynamic(() => import('./sections/ServicesOverview').then((mod) => mod.ServicesOverview))
const FeaturedCaseStudy = dynamic(() => import('./sections/FeaturedCaseStudy').then((mod) => mod.FeaturedCaseStudy))
const Testimonials = dynamic(() => import('./sections/Testimonials').then((mod) => mod.Testimonials))
const ProcessTeaser = dynamic(() => import('./sections/ProcessTeaser').then((mod) => mod.ProcessTeaser))
const ContactCTA = dynamic(() => import('./sections/ContactCTA').then((mod) => mod.ContactCTA))

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemStatement />
      <SelectedWork />
      <Differentiator />
      <MetricsStrip />
      <ServicesOverview />
      <FeaturedCaseStudy />
      <Testimonials />
      <ProcessTeaser />
      <ContactCTA />
    </>
  )
}
