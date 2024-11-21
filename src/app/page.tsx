// 'use client'

import { CallToAction } from '@/components/CallToAction'
import Footer from '@/components/Footer'
// import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Integration } from '@/components/Integrations'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { TrustedClient } from '@/components/TrustedClient'
import { UnstoppableWithAi } from '@/components/UnstoppableWithAi'
import WeeklySummary from '@/components/WeeklySummary'
import { WhyLeapTheLimit } from '@/components/WhyLeapTheLimit'

export default function Home() {
  return (
    <>
      <Header />
      <main className="!bg-[#000]">
        <Hero />
        <WeeklySummary />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <WhyLeapTheLimit />
        <Integration />
        <UnstoppableWithAi />
        <TrustedClient />
      </main>
      <Footer />
    </>
  )
}
