import { CallToAction } from '@/components/CallToAction'
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
      <Hero />
      <WeeklySummary />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <WhyLeapTheLimit />
      <Integration />
      <UnstoppableWithAi />
      <TrustedClient />
    </>
  )
}
