'use client'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Metadata } from 'next'
import StarLogo from '@/images/avif/leap_the _time_logo.avif'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-5">
      <Link
        href="/"
        aria-label="Home"
        className="flex items-center justify-center gap-1"
      >
        <Image
          src={StarLogo}
          alt="logo"
          className="w-28 rounded-xl object-cover"
        />
      </Link>
      <h1 className="text-center text-5xl font-semibold leading-[6rem] tracking-tight text-white lg:w-[30ch]">
        We're on a mission to make Artificial Intelligence accessible
      </h1>
    </div>
    // </Container>
  )
}
