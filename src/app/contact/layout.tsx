import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact IBNAY | Start Your Web Project',
  description: 'Ready to build a website or web app? Contact IBNAY for web design, development, and custom applications. Get a project plan and quote.',
  keywords: 'contact web designer, website development quote, web app development contact, custom website contact',
  openGraph: {
    title: 'Contact IBNAY | Start Your Web Project',
    description: 'Get in touch to discuss your web design or development project. Free consultation and project planning.',
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