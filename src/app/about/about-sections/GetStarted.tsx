'use client'

// import { Button } from '@/components/Button'
// import { Container } from '@/components/Container'
// import { Metadata } from 'next'
import Image from 'next/image'
import AboutUs from '@/images/avif/about-us.avif'

export default function GetStarted() {
  return (
    <section className="body-font mt-32 text-gray-600">
      <div className="container mx-auto flex flex-col gap-4 py-24 md:flex-row">
        <div className=" flex flex-col py-24  md:mb-0 md:w-1/2 ">
          <h1 className="title-font mb-4 py-10 text-2xl font-medium text-white sm:text-3xl">
            At LeapTheLimit, we believe that artificial intelligence (AI) has
            the power to transform the way we work, learn, and create.
          </h1>
          <h2 className="title-font py-8 text-2xl font-medium text-white sm:text-3xl">
            We aim to break down the barriers to AI adoption, empowering
            individuals and businesses of all sizes to harness this
            revolutionary technology.
          </h2>
        </div>
        <div className="">
          <Image
            src={AboutUs}
            alt="AI for everyone"
            className="w-full rounded-xl object-cover"
          />
        </div>
      </div>
      {/* Our Vision */}
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 py-24">
        <div className="relative flex flex-col items-center text-center">
          {/* Dashed Border */}
          <div className="relative flex h-20 items-center justify-center rounded-md border-4 border-dashed border-[#006FE8] p-8 lg:w-[25rem] lg:p-16">
            {/* Corners with Colors */}
            <div className="absolute -left-2 -top-2 h-4 w-4 rounded-full bg-white"></div>
            <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-white"></div>
            <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-white"></div>
            <div className="absolute -bottom-2 -right-2 h-4 w-4 rounded-full bg-white"></div>

            {/* Text Inside the Border */}
            <h1 className="whitespace-nowrap text-3xl font-bold text-white lg:text-6xl">
              Our Vision
            </h1>
          </div>

          {/* Subheading Below */}
          <h2 className="mt-16  text-2xl font-medium text-white sm:text-3xl">
            Democratize artificial intelligence,
            <br className="hidden lg:block" /> making it accessible to everyone,
            <br className="hidden lg:block" /> without compromise.
          </h2>
        </div>
      </div>
    </section>
  )
}
