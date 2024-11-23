'use client'

import { Button } from '@/components/Button'

export default function Careers() {
  return (
    // <section className="body-font mt-32 text-gray-600">
    //   <div className="container mx-auto flex flex-col gap-4 py-24 md:flex-row">
    //     {/* Text Section */}
    //     <div className="flex flex-col md:w-1/2">
    //       <h1 className="title-font py-10 text-2xl font-medium text-white sm:text-3xl">
    //         LeapTheLimit <br />
    //         <span className="text-[#006FE8]">Founders</span>
    //       </h1>
    //       <h1 className="title-font mb-4 w-[90%] py-10 text-xl font-medium text-white sm:text-2xl">
    //         Mouhammad Jayousi and Abed Kwasmi have been friends and
    //         collaborators since their days in primary school. United by a shared
    //         entrepreneurial spirit, they dreamed of building their own creations
    //         but lacked the coding skills to bring them to life.
    //       </h1>
    //       <h2 className="title-font w-[90%] py-6 text-xl font-medium text-white sm:text-2xl">
    //         Fast forward more than a decade, Mouhammad has become a visionary
    //         technologist, while Abed mastered the art of computer engineering.
    //         Their passion for building technology that empowers anyone to
    //         achieve the impossible remains the driving force behind
    //         LeapTheLimit.
    //       </h2>
    //     </div>

    //     {/* Image Section */}
    //     <div className="relative md:w-1/2">
    //       {/* Shadow Container */}
    //       <div
    //         className="absolute -left-[46px] top-[205px] h-[600px] w-full rounded-xl
    //            shadow-[rgba(0,0,0,0.2)_0px_30px_60px,rgba(0,0,0,0.05)_0px_15px_30px,rgba(0,0,0,0.05)_0px_5px_10px,rgba(204,215,255,0.25)_0px_0px_100px_inset]"
    //       ></div>

    //       {/* Image Container */}
    //       <div className="relative z-10 w-full">
    //         <Image
    //           src={Founders}
    //           alt="AI for everyone"
    //           className="w-full rounded-xl border object-cover"
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   {/* Our Vision */}
    //   <div className="container mx-auto flex flex-col items-center justify-center gap-8 py-24">
    //     <div className="relative flex flex-col items-center text-center">
    //       {/* Dashed Border */}
    //       <div className="relative flex h-20 items-center justify-center rounded-md border-4 border-dashed border-[#006FE8] p-8 lg:w-[25rem] lg:p-16">
    //         {/* Corners with Colors */}
    //         <div className="absolute -left-2 -top-2 h-4 w-4 rounded-full bg-white"></div>
    //         <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-white"></div>
    //         <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-white"></div>
    //         <div className="absolute -bottom-2 -right-2 h-4 w-4 rounded-full bg-white"></div>

    //         <h1 className="whitespace-nowrap text-3xl font-bold text-white lg:text-6xl">
    //           Our Vision
    //         </h1>
    //       </div>

    //       <h2 className="mt-16  text-2xl font-medium text-white sm:text-3xl">
    //         Democratize artificial intelligence,
    //         <br className="hidden lg:block" /> making it accessible to everyone,
    //         <br className="hidden lg:block" /> without compromise.
    //       </h2>
    //     </div>
    //   </div>
    //   </section>

    <div className="mx-auto mt-32  text-center ">
      <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
        Let's build the future of AI
        <span className="text-primary-color">.</span> Together
        <span className="text-primary-color">.</span>
      </h2>
      <p className="mt-4 text-lg tracking-tight text-white">
        At LeapTheLimit, we believe in the power of collaboration to drive
        cutting-edge AI solutions. We foster a supportive and dynamic
        environment where innovation thrives. If you share our passion for
        making AI accessible, we want you on our team!
      </p>
      <p className="mt-4 text-lg tracking-tight text-white">
        Even if your perfect role isn't listed, we're always eager to connect
        with talented individuals! Send us your resume and a brief introduction
        to careers@leapthelimit.com
      </p>
      <Button
        href="mailto:hi@leapthelimit.com?subject=Integrating%20AI%20into%20My%20Workplace"
        color="white"
        className="mt-10 hover:bg-white/80"
      >
        Browse open positions
      </Button>
    </div>
  )
}
