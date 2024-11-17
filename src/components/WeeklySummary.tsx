'use client'
import Image from 'next/image'
import backgroundImage from '@/images/screenshots/ai-chat.png'
import { Button } from './Button'

export default function WeeklySummary() {
  return (
    <div className=" flex items-center justify-center py-20 md:px-12 lg:px-0 lg:py-32">
      <div className="relative">
        <div className="inset-0 h-auto max-w-[1560px] transform cursor-pointer overflow-hidden rounded-lg  object-cover shadow-lg  transition-all duration-300 ease-out hover:scale-105">
          <Image
            className="border-gray rounded-xl hover:border"
            src={backgroundImage}
            alt=""
            unoptimized
          />
        </div>
        <div className=" absolute  right-10 top-10  flex w-[320px] flex-wrap">
          <div className="border-1 flex w-[320px] flex-col overflow-hidden !rounded-[2.5rem] border border-[#7d7d7d]  !bg-white/10 p-6 shadow-lg !backdrop-blur-[25px] ">
            <div className="relative my-5 h-[80px] rounded-lg !bg-white/10 p-5 !backdrop-blur-lg">
              <div className="absolute -top-1 right-10 mx-auto my-5 flex w-[70%] justify-center rounded-md !bg-white/10 p-9 !backdrop-blur-lg"></div>
              <div className="absolute right-14 top-4  my-5 flex justify-center rounded-md !bg-white/10 p-[0.8rem]  !backdrop-blur-lg">
                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <small className="text-[8px] text-white">#36</small>
                    <small className="text-[6px] text-white">
                      Task completed <br />
                      per team
                    </small>
                  </div>
                  <div className="flex flex-col">
                    <small className="text-[8px] text-white">
                      1:15 PM - 4:50 AM
                    </small>
                    <small className="text-[6px] text-white">
                      New York Office <br />
                      Tokyo Office
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="title-font mb-6 mt-6 text-xl font-medium tracking-widest text-white">
              Weekly Summary
            </h2>

            <p className="mb-5 flex items-center text-gray-400">
              AI was used in 50% of tasks this week. The team expressed 98%
              satisfaction with the AI-generated results and overall task
              completion.
            </p>

            <Button
              href="/register"
              className="my-5  flex items-center gap-2 text-[#ffffff96]"
            >
              <span className="p-1.5">Request demo now </span>
              <span className="inline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-[#ffffff96]"
                >
                  <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
