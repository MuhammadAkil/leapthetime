'use client'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import IntegrationGrid from './IntegrationGrid'

export function Integration() {
  return (
    <Container className="">
      <section className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <h1 className="title-font mb-4 text-3xl font-medium text-[#ffffff96] sm:text-4xl">
              Smart integrations at <br /> your fingertips
            </h1>
            <p className="mb-8 leading-relaxed lg:w-[50ch]">
              Be on top of things and get practical assistance for smart
              decision-making.
            </p>
          </div>
          <div className="">
            <IntegrationGrid />
            {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
          </div>
        </div>
      </section>
    </Container>
  )
}
