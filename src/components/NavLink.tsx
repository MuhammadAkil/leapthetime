'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

interface MegaMenuItem {
  name?: string
  icon?: string
  description?: string
  title?: string
  link?: string
}

interface MegaMenuContent {
  content: MegaMenuItem[]
  images: (string | StaticImageData)[]
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  megaMenuContent?: MegaMenuContent // Make it optional
}

export function NavLink({ href, children, megaMenuContent }: NavLinkProps) {
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    if (megaMenuContent) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (megaMenuContent) {
      timerRef.current = setTimeout(() => {
        setIsHovered(false)
      }, 100)
    }
  }

  const imageCount = megaMenuContent?.images.length || 0

  return (
    <div
      className=""
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={href}
        className={`relative inline-block rounded-lg px-2 py-1 text-sm ${
          isHovered ? 'text-white' : 'text-[#ffffff96]'
        } hover:text-white`}
      >
        {children}
      </Link>

      {isHovered && megaMenuContent && (
        <div className="max-w-auto absolute left-[21%] top-[3rem] z-50 !w-[550px] opacity-100 shadow-lg !backdrop-blur-[25px] transition-all duration-200">
          <div className="custom-shadow min-w-[700px] rounded-lg border border-[#7d7d7d] bg-black px-4 py-4 !text-black shadow-lg !backdrop-blur-[25px]">
            <div
              className={`grid gap-4 px-4 pb-20 pt-6 ${
                imageCount > 0
                  ? 'items-start justify-center md:grid-cols-3'
                  : 'grid-cols-1'
              }`}
            >
              {/* Content Grid */}
              <div className="col-span-2">
                <div className="grid grid-cols-2 gap-10">
                  {megaMenuContent.content.map((item, index) => (
                    <div
                      key={index}
                      className="col-span-1 flex !w-full flex-col items-start justify-between gap-14"
                    >
                      {item.name && (
                        <div className="flex cursor-pointer flex-col rounded-lg">
                          {/* Title */}
                          <div className="text-gray-custom ps-[3rem] text-sm font-normal">
                            {item.title}
                          </div>

                          <Link href={`${item?.link}`} passHref>
                            <div className="flex cursor-pointer gap-3 rounded p-1 hover:bg-white/30">
                              {/* Icon */}
                              <span className="flex h-[36px] items-center justify-center rounded-md border border-[#7d7d7d] p-1.5 text-sm">
                                {item.icon}
                              </span>

                              {/* Name and Description */}
                              <div className="flex flex-col gap-0">
                                <div className="-my-[2px] text-sm font-semibold text-gray-300">
                                  {item.name}
                                </div>
                                <small className="text-gray-custom whitespace-nowrap text-[12px] font-normal">
                                  {item.description}
                                </small>
                              </div>
                            </div>
                          </Link>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Grid */}
              <div className="col-span-1 flex items-center justify-center">
                <div
                  className={`flex gap-2 ${
                    imageCount >= 2
                      ? 'items-center justify-center'
                      : 'grid-cols-1'
                  }`}
                >
                  {megaMenuContent.images.map((image, index) =>
                    typeof image === 'string' ? (
                      <Image
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="h-40 w-52"
                      />
                    ) : (
                      <Image
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        className=" h-36 w-48 rounded-xl object-cover"
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
