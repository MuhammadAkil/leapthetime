'use client'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function UnstoppableWithAi() {
  return (
    <Container className="custom-shadow mb-20 max-w-[1100px] rounded-lg border pb-16 pt-20 text-center backdrop-blur-[25px] lg:py-32">
      <h1 className=" gradient-text-left mx-auto max-w-6xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-8xl">
        Become unstoppable with AI by your side.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-[#ffffff96]">
        Let's create an AI-driven future that elevates your team and leaves the
        competition behind.
      </p>

      <div className="mt-10 flex justify-center gap-x-6">
        <Button
          href="/register"
          className="group-active:fill-curren flex w-[280px] items-center gap-2 !p-3 text-[#ffffff96]"
          variant="outline"
        >
          Get Started
        </Button>
      </div>
    </Container>
  )
}
