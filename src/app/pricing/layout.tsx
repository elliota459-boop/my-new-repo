import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design Pricing | IBNAY Development Packages',
  description: 'Transparent pricing for web design and development. Website launch from $8,000, product build from $15,000, rescue and rebuild from $12,000. No hidden fees.',
  keywords: 'web design pricing, website development cost, web app pricing, ecommerce pricing, Web3 development cost',
  openGraph: {
    title: 'Web Design Pricing | IBNAY',
    description: 'Clear pricing for professional web design and development. From SEO websites to custom web apps - know the cost upfront.',
    type: 'website',
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}