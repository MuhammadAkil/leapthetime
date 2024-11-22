'use client'

import { Container } from '@/components/Container'
interface InfoCardProps {
  icon: JSX.Element
  title: string
  description: string
}

function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div className="p-4 md:w-1/2 xl:w-1/3">
      <div className="rounded-lg p-6">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
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
              icon={
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              }
              title="Beyond Basic Automation"
              description="We refuse to settle for AI assistants that do the bare minimum. Our AI agents tackle your tedious, boring tasks from start to finish—freeing you to focus on what truly matters."
            />
            <InfoCard
              icon={
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              }
              title="Secure and Transparent"
              description="Your data is yours alone. Unlike 99% of AI solutions that sacrifice privacy for convenience, we implement rigorous security measures and transparent data practices, ensuring your information is always protected."
            />
            <InfoCard
              icon={
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              }
              title="A Mission-Driven"
              description="We go beyond mere technology – our mission is to create AI that truly serves and empowers people. Be part of our journey towards an AI future that benefits everyone."
            />
          </div>
          <span className="m-6 min-w-[200px] rounded-full border p-[0.2rem] px-3 text-sm font-medium text-white">
            How we help
          </span>
          <div className="-m-2 flex flex-wrap">
            <InfoCard
              icon={
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                </svg>
              }
              title="Customize or Choose"
              description="Start with pre-built AI agents or tailor your own to perfectly match your team's needs."
            />
            <InfoCard
              icon={
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                </svg>
              }
              title="Seamlessly Integrate AI"
              description="Our intuitive platform makes integrating AI into your existing workflow a breeze."
            />
            <InfoCard
              icon={
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              }
              title="Collaborate and Achieve More"
              description="Deploy your AI solution across your team for collaborative success and maximized results."
            />
          </div>
        </div>
      </section>
    </Container>
  )
}
