'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

interface MegaMenuItem {
  name?: string
  icon?: string
  description?: string
}

interface MegaMenuContent {
  content: MegaMenuItem[]
  images: (string | StaticImageData)[]
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  megaMenuContent: MegaMenuContent
}

export function NavLink({ href, children, megaMenuContent }: NavLinkProps) {
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setIsHovered(false)
    }, 100)
  }

  const imageCount = megaMenuContent.images.length

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={href}
        className="inline-block rounded-lg px-2 py-1 text-sm text-[#ffffff96]"
      >
        {children}
      </Link>

      {isHovered && (
        <div className="max-w-auto absolute left-0 top-full z-50 !w-[550px] opacity-100 shadow-lg transition-all duration-200">
          <div className="custom-shadow !w-[650px] rounded-lg border border-[#7d7d7d] bg-black px-4 py-4 text-black shadow-lg !backdrop-blur-[25px]">
            {/* Grid for Content and Images */}
            <div
              className={`grid  gap-4   ${
                imageCount > 0
                  ? 'items-start justify-center md:grid-cols-2'
                  : 'grid-cols-1'
              }`}
            >
              {/* Content Grid */}
              <div className="col-span-2 md:col-span-1">
                <div className="grid grid-cols-2 gap-2">
                  {megaMenuContent.content.map((item, index) => (
                    <div
                      key={index}
                      className="col-span-1 flex !w-full flex-col items-start justify-between gap-14"
                    >
                      {/* Display content (icon, name, description) if available */}
                      {item.name && (
                        <div className="flex cursor-pointer  items-start gap-1 rounded-lg p-4 py-1 pe-4 ps-1 hover:bg-white/30">
                          <div className="text-xl">{item.icon}</div>
                          <div className="flex flex-col">
                            <div className="text-sm font-semibold text-white">
                              {item.name}
                            </div>
                            <small className="whitespace-nowrap text-[10px] font-normal text-white">
                              {item.description}
                            </small>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Grid */}
              <div className="col-span-1 ms-5 flex items-center justify-center ps-7">
                <div
                  className={`flex gap-2 ${
                    imageCount >= 2
                      ? 'items-center justify-center'
                      : 'grid-cols-1'
                  }`}
                >
                  {megaMenuContent.images.map((image, index) =>
                    typeof image === 'string' ? (
                      <img key={index} src={image} alt={`Image ${index + 1}`} />
                    ) : (
                      <Image
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="z-[9999999] h-40 w-64 rounded-xl object-cover"
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
