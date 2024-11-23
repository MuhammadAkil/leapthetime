'use client'

import { SlimLayout } from '@/components/SlimLayout'

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
      <div className="custom-shadow bg-white/9 border-[fixed lg:backdrop-blur-[25px]] z-[100] flex w-full flex-col items-center justify-center rounded-xl border border-b border-[#ffffff1a] bg-black p-8 py-3 backdrop-blur-[25px] md:p-12 lg:bg-transparent">
        <h1 className="text-primary-color mt-3 text-3xl font-semibold ">404</h1>
        <h2 className="mt-3 text-lg font-semibold text-white">
          Page not found
        </h2>
        <p className="mt-3 text-center text-sm text-gray-700">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
      </div>
      {/* <Button href="/" className="mt-10">
        Go back home
      </Button> */}
    </SlimLayout>
  )
}
