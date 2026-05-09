import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Start Your Web Project',
  description: 'Ready to build a new website, fix a broken one, or rescue a half-built project? Contact IBNAY for a free 30-minute project review. Website design, development, redesign, and rescue.',
  keywords: 'contact website agency, website design quote, fix broken website contact, website redesign inquiry, web development contact, website rescue quote, hire web designer, free website consultation',
  openGraph: {
    title: 'Contact IBNAY | Start Your Web Project',
    description: 'Build a new website, redesign an existing one, or rescue a broken project. Free 30-minute review, response within 4 hours.',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}