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
  title: 'IBNAY | Web Design, Development & SEO-Ready Websites',
  description: 'IBNAY is a web design and development agency building SEO-ready websites, lead generation landing pages, custom web apps, ecommerce systems, Web3 dApps, and rescue rebuilds for businesses that need more qualified enquiries.',
  keywords: 'web design agency, web development agency, website development company, custom website design, SEO website development, lead generation website, conversion focused website, website redesign agency, ecommerce website development, custom web application development, SaaS MVP development, web app development company, Web3 development agency, dApp development company, smart contract development, AI generated website rescue, unfinished website rebuild',
  openGraph: {
    title: 'IBNAY | Web Design, Development & SEO-Ready Websites',
    description: 'We build websites and web products that explain the offer clearly, earn trust quickly, and turn the right visitors into leads.',
    type: 'website',
  },
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
