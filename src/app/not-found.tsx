'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import StarLogo from '@/images/avif/leap_the _time_logo.avif'

export default function NotFound() {
  return (
    <SlimLayout>
      {/* <div className="flex items-center md:gap-x-12">
        <Link href="#" aria-label="Home" className="flex items-center gap-1">
          <Image
            src={StarLogo}
            alt="logo"
            className="w-8 rounded-xl object-cover"
          />

          <h1 className="text-xl text-white">LeapTheLimit</h1>
        </Link>
      </div> */}
      <p className="mt-20 text-sm font-medium text-gray-700">404</p>
      <h1 className="mt-3 text-lg font-semibold text-gray-900">
        Page not found
      </h1>
      <p className="mt-3 text-sm text-gray-700">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Button href="/" className="mt-10">
        Go back home
      </Button>
    </SlimLayout>
  )
}
