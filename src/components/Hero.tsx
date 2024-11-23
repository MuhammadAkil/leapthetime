'use client'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <Button
        href="/register"
        className="my-5 flex items-center gap-2 text-[#ffffff96]"
      >
        <span>Check our latest </span>
        <span className="inline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-[#ffffff96]"
          >
            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
          </svg>
        </span>
      </Button>
      <h1 className="gradient-text mx-auto max-w-4xl font-display text-[1.5rem] font-medium tracking-tight text-slate-900 sm:text-8xl lg:text-5xl">
        Supercharge <br /> Your Productivity
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-[#ffffff96]">
        LeapTheLimit empowers teams to achieve more with Faster AI{' '}
      </p>

      {/* <TextAnimation /> */}
      <div className="mt-10 flex justify-center gap-x-6">
        <Button
          href="/register"
          className="group-active:fill-curren hover-text-white flex w-[280px] items-center gap-2 !p-3 text-[#ffffff96]"
          variant="outline"
        >
          Request a demo
        </Button>
      </div>
    </Container>
  )
}
