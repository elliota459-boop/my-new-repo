import type { Metadata } from 'next'
import './globals.css'
import { SmoothScroll } from '@/components/SmoothScroll'
import { Preloader } from '@/components/Preloader'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ExitIntentModal } from '@/components/ExitIntentModal'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import { SocialProofNotifications } from '@/components/SocialProof'
import { GoogleAnalytics, GoogleAnalyticsNoScript, MetaPixel } from '@/components/Analytics'
import { ScrollProgress } from '@/components/ScrollProgress'
import { VelocityScroll } from '@/components/VelocityScroll'
import { AnimationProvider } from '@/components/AnimationProvider'

export const metadata: Metadata = {
  title: 'IBNAY Digital Studio | Websites That Win Clients',
  description: 'We do not build websites. We build the reason clients choose you over everyone else. Premium digital experiences for brands ready to lead.',
  keywords: 'web design agency, digital experience studio, conversion-focused websites, brand strategy, web development',
  openGraph: {
    title: 'IBNAY Digital Studio | Websites That Win Clients',
    description: 'We build websites that function as the highest-performing sales asset a business owns.',
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
        <Preloader />
        <ExitIntentModal />
        <StickyMobileCTA />
        <SocialProofNotifications />
        <AnimationProvider>
          <SmoothScroll>
            <Navigation />
            <VelocityScroll>
              <main>
                {children}
              </main>
            </VelocityScroll>
            <Footer />
          </SmoothScroll>
        </AnimationProvider>
      </body>
    </html>
  )
}
