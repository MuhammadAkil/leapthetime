'use client'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Metadata } from 'next'
import StarLogo from '@/images/avif/leap_the _time_logo.avif'
import Link from 'next/link'
import Image from 'next/image'
import Hero from './about-sections/Hero'
import GetStarted from './about-sections/GetStarted'
import Founder from './about-sections/Founder'
import Careers from './about-sections/Careers'
import AiForm from './about-sections/AiForm'

export default function About() {
  return (
    <section className="bg-black py-32">
      <Container className="mt-28">
        <Hero />
        <GetStarted />
        <Founder />
        <Careers />
        <AiForm />
      </Container>
    </section>
  )
}
