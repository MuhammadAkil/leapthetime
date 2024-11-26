'use client'

import { Container } from '@/components/Container'
import GrowthBusiness from './logos/growth-business'
import WhyBeyond from './logos/why-beyond-basic'
import WhySeamlessly from './logos/why-secure'
import WhySecure from './logos/why-secure'
import WhyMission from './logos/why-mission-diven'
import WhyCollaborate from './logos/why-collaborate'
import Alliance from './logos/alliance'
interface InfoCardProps {
  icon: JSX.Element
  title: string
  description: string
}

function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div className="p-4 md:w-1/2 xl:w-1/3">
      <div className="rounded-lg p-6">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
          {icon}
        </div>
        <h2 className="title-font mb-2 text-lg font-medium text-[#ffffff96]">
          {title}
        </h2>
        <p className="text-sm leading-relaxed text-[#ffffff96]">
          {description}
        </p>
      </div>
    </div>
  )
}

export function WhyLeapTheLimit() {
  return (
    <Container className="pb-16 pt-20 lg:py-32">
      <section className="body-font h-auto max-w-[1223px] overflow-visible !rounded-xl border border-solid border-white/15 text-gray-600 shadow-[rgba(0,0,0,0.25)_0px_30px_60px_0px,_rgba(0,0,0,0.25)_0px_15px_30px_0px,_rgba(0,0,0,0.25)_0px_5px_10px_0px,_rgba(204,215,255,0.15)_0px_0px_100px_0px_inset] backdrop-blur-[25px]">
        <div className="container mx-auto px-5 py-14">
          <div className="flex  w-full flex-col flex-wrap items-start p-6">
            <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
              Why LeapTheLimit?
            </p>
            <h1 className="title-font my-2 text-2xl font-medium text-[#ffffff96] sm:text-3xl lg:w-3/5">
              A Scalable AI Platform. Design, deploy, and manage effective AI
              agents for your team&apos;s unique needs
            </h1>
          </div>
          <span className="m-6 w-full min-w-[200px] rounded-full border p-[0.2rem] px-3 text-sm font-medium text-white">
            What Sets Us Apart
          </span>
          <div className="-m-2 flex flex-wrap">
            <InfoCard
              icon={<WhyBeyond fill="#006fe8" width="30" height="30" />}
              title="Beyond Basic Automation"
              description="We refuse to settle for AI assistants that do the bare minimum. Our AI agents tackle your tedious, boring tasks from start to finish—freeing you to focus on what truly matters."
            />
            <InfoCard
              icon={<WhySecure fill="#006fe8" width="30" height="30" />}
              title="Secure and Transparent"
              description="Your data is yours alone. Unlike 99% of AI solutions that sacrifice privacy for convenience, we implement rigorous security measures and transparent data practices, ensuring your information is always protected."
            />
            <InfoCard
              icon={<WhyMission fill="#006fe8" width="30" height="30" />}
              title="A Mission-Driven"
              description="We go beyond mere technology – our mission is to create AI that truly serves and empowers people. Be part of our journey towards an AI future that benefits everyone."
            />
          </div>
          <span className="m-6 min-w-[200px] rounded-full border p-[0.2rem] px-3 text-sm font-medium text-white">
            How we help
          </span>
          <div className="-m-2 flex flex-wrap">
            <InfoCard
              icon={<Alliance fill="#006fe8" width="30" height="30" />}
              title="Customize or Choose"
              description="Start with pre-built AI agents or tailor your own to perfectly match your team's needs."
            />
            <InfoCard
              icon={<WhySeamlessly fill="#006fe8" width="30" height="30" />}
              title="Seamlessly Integrate AI"
              description="Our intuitive platform makes integrating AI into your existing workflow a breeze."
            />
            <InfoCard
              icon={<WhyCollaborate fill="#006fe8" width="30" height="30" />}
              title="Collaborate and Achieve More"
              description="Deploy your AI solution across your team for collaborative success and maximized results."
            />
          </div>
        </div>
      </section>
    </Container>
  )
}
