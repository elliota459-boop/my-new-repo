'use client'

import dynamic from 'next/dynamic'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'

const ExitIntentModal = dynamic(() => import('@/components/ExitIntentModal').then((mod) => mod.ExitIntentModal), {
  ssr: false,
})
const SocialProofNotifications = dynamic(() => import('@/components/SocialProof').then((mod) => mod.SocialProofNotifications), {
  ssr: false,
})

export function ClientEngagementLayer() {
  return (
    <>
      <ExitIntentModal />
      <StickyMobileCTA />
      <SocialProofNotifications />
    </>
  )
}
