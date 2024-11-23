'use client'

import { Container } from '@/components/Container'
import Image from 'next/image'
import Blog from '@/images/avif/blog.avif'
import Link from 'next/link'

export default function blog() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-black py-32"
    >
      <Container className="">
        <div className="max-w-auto flex flex-col items-center justify-center ">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            The Blog of &nbsp;LeapTheLimit
          </h2>

          <div className="mt-14 flex w-full max-w-[900px] flex-col items-start justify-start gap-3 lg:flex-row">
            <Link
              href="blog-details"
              color="white"
              className="mt-5 flex items-center justify-center text-3xl hover:underline"
            >
              <Image
                className="] w-full  rounded-lg text-center"
                src={Blog}
                alt={''}
              />
            </Link>
            <div>
              <p className="mt-4 w-[19ch] text-3xl tracking-tight text-white">
                Beginner's Guide to Gemini AI: Easy Steps to Get Started
              </p>

              <p className="text-gray-custom mt-2 text-xl font-medium">
                Mar 15, 2024
              </p>

              {/* <Button href="/register" color="white" className="mt-10">
                Request Demo
              </Button> */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
