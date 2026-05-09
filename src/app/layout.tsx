import type { Metadata } from 'next'
import './globals.css'
import { SmoothScroll } from '@/components/SmoothScroll'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { GoogleAnalytics, GoogleAnalyticsNoScript, MetaPixel } from '@/components/Analytics'
import { ScrollProgress } from '@/components/ScrollProgress'
import { AnimationProvider } from '@/components/AnimationProvider'
import { ClientEngagementLayer } from '@/components/ClientEngagementLayer'

export const metadata: Metadata = {
  title: {
    default: 'IBNAY | Website Design & Development Agency',
    template: '%s | IBNAY',
  },
  description: 'IBNAY is a website design and development agency. We build new websites, fix broken ones, and rescue half-built projects. Custom websites, web apps, ecommerce, and Web3 — one team, full stack, shipped right.',
  keywords: 'website design agency, website development company, web design agency, custom website design, website redesign, fix broken website, website rescue, web application development, SaaS MVP, ecommerce development, website agency India, website agency Estonia, Next.js developer, React developer, Web3 development, project rescue, broken website repair, website not working fix',
  metadataBase: new URL('https://ibnayiftribe.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/brand/logo.png',
  },
  openGraph: {
    title: 'IBNAY | Website Design & Development Agency',
    description: 'We build new websites, fix broken ones, and rescue half-built projects. Custom websites, web apps, ecommerce, and Web3 — one team, full stack.',
    type: 'website',
    url: 'https://ibnayiftribe.com',
    siteName: 'IBNAY',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IBNAY | Website Design & Development Agency',
    description: 'We build new websites, fix broken ones, and rescue half-built projects. One team, full stack.',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'IBNAY',
  alternateName: 'IBNAY Digital Studio',
  url: 'https://ibnayiftribe.com',
  logo: 'https://ibnayiftribe.com/brand/logo.png',
  description:
    'Website design and development agency. We build new websites, redesign existing ones, rescue half-built projects, and develop custom web applications and Web3 products.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Tartu mnt 67/1-13b',
    addressLocality: 'Tallinn',
    addressRegion: 'Harju maakond',
    postalCode: '10115',
    addressCountry: 'EE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+917861010850',
    contactType: 'customer service',
    availableLanguage: ['English'],
    email: 'info@ibnayiftribe.com',
  },
  sameAs: [
    'https://www.linkedin.com/in/dr-shahbaaz-azmi-618a95152',
    'https://instagram.com/ibnay_iftribe',
  ],
  areaServed: [
    { '@type': 'Country', name: 'Estonia' },
    { '@type': 'Country', name: 'India' },
    { '@type': 'GeoShape', name: 'Worldwide' },
  ],
  priceRange: '$$$',
  serviceType: [
    'Website Design',
    'Website Development',
    'Website Redesign',
    'Broken Website Repair',
    'Project Rescue',
    'Web Application Development',
    'SaaS MVP Development',
    'Ecommerce Development',
    'Web3 Development',
    'Smart Contract Development',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
        <MetaPixel />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased">
        <GoogleAnalyticsNoScript />
        <ScrollProgress />
        <ClientEngagementLayer />
        <AnimationProvider>
          <SmoothScroll>
            <Navigation />
            <main>
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </AnimationProvider>
      </body>
    </html>
  )
}
