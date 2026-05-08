import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About IBNAY | Web Design & Development Agency',
  description: 'IBNAY is a web design and development agency specializing in SEO-ready websites, custom web apps, ecommerce, Web3 products, and rescue rebuilds. We help businesses get found and convert.',
  keywords: 'web design agency, website development company, about IBNAY, web development team, digital agency',
  openGraph: {
    title: 'About IBNAY | Web Design & Development Agency',
    description: 'Learn about IBNAY - a web agency that builds websites and apps that actually work. SEO, custom development, Web3, and rescue projects.',
    type: 'website',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}