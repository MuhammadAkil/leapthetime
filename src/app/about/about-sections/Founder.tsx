'use client'

import Image from 'next/image'
// import Founders from '@/images/avif/Founders.avif'

export default function Founder() {
  return (
    <section className="body-font mt-32 text-gray-600">
      <div className="container mx-auto flex flex-col gap-4 py-24 md:flex-row">
        {/* Text Section */}
        <div className="flex flex-col md:w-1/2">
          <h1 className="title-font py-10 text-2xl font-medium text-white sm:text-3xl">
            LeapTheLimit <br />
            <span className="text-[#006FE8]">Founders</span>
          </h1>
          <h1 className="title-font mb-4 w-[90%] py-10 text-xl font-medium text-white sm:text-2xl">
            Mouhammad Jayousi and Abed Kwasmi have been friends and
            collaborators since their days in primary school. United by a shared
            entrepreneurial spirit, they dreamed of building their own creations
            but lacked the coding skills to bring them to life.
          </h1>
          <h2 className="title-font w-[90%] py-6 text-xl font-medium text-white sm:text-2xl">
            Fast forward more than a decade, Mouhammad has become a visionary
            technologist, while Abed mastered the art of computer engineering.
            Their passion for building technology that empowers anyone to
            achieve the impossible remains the driving force behind
            LeapTheLimit.
          </h2>
        </div>

        {/* Image Section */}
        <div className="relative md:w-1/2">
          {/* Shadow Container */}
          <div
            className="absolute -left-[46px] top-[205px] h-[600px] w-full rounded-xl 
               shadow-[rgba(0,0,0,0.2)_0px_30px_60px,rgba(0,0,0,0.05)_0px_15px_30px,rgba(0,0,0,0.05)_0px_5px_10px,rgba(204,215,255,0.25)_0px_0px_100px_inset]"
          ></div>

          {/* Image Container */}
          <div className="relative z-10 w-full">
            <Image
              src="/images/avif/Founders.avif"
              alt="AI for everyone"
              className="w-full rounded-xl border object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
