'use client'

// import { Button } from '@/components/Button'
// import { Container } from '@/components/Container'
// import { Metadata } from 'next'
import Image from 'next/image'
import aiLogo from '@/images/logos/ai-logo.svg'
import aiImage from '@/images/avif/form-disable.webp'
import { Button } from '@/components/Button'
import Link from 'next/link'

export default function AiForm() {
  return (
    <div className="mx-auto mt-40  text-center ">
      <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
        Get The Latest in AI form LeapTheLimit
      </h2>

      <Link
        href="https://forms.app/"
        color="white"
        className="mt-5 flex items-center justify-center text-3xl hover:underline"
      >
        <Image className="w-40 text-center" src={aiLogo} alt={''} />
      </Link>
      <div className="mt-5 flex items-center justify-center text-3xl hover:underline">
        {' '}
        <Image className="w-[250px] text-center" src={aiImage} alt={''} />
      </div>

      <p className="mt-4 text-[1.2em]  font-semibold text-[#979797]">
        This form is not accessible now
      </p>
      <Button className="mt-4 !rounded-full !bg-[#0dc4df] py-2 text-white hover:!bg-[#0dc4df]/80">
        + Create your own form
      </Button>
    </div>
  )
}
