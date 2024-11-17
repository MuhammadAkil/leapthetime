import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-black py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Unlock smarter conversations with LeapTheLimit. Start now and
            enhance your support, boost efficiency, and engage users like never
            before.
          </p>
          <Button href="/register" color="white" className="mt-10">
            Request Demo
          </Button>
        </div>
      </Container>
    </section>
  )
}
