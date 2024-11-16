'use client'
import { useState } from 'react'
import Link from 'next/link'

export function NavLink({
  href,
  children,
  megaMenuContent,
}: {
  href: string
  children: React.ReactNode
  megaMenuContent: {
    name?: string
    icon?: string
    image?: string
    description: string
  }[]
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={href}
        className="inline-block rounded-lg px-2 py-1 text-sm text-[#ffffff96] "
      >
        {children}
      </Link>

      {/* Mega Menu */}
      {isHovered && (
        <div className="mega-menu absolute left-0 top-full z-10 mt-2 w-full rounded-lg bg-white p-4 text-black shadow-lg md:w-[350px]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {megaMenuContent.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-2xl">{item.icon}</div>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="mb-2 h-16 w-16 rounded-full object-cover"
                  />
                )}
                <div className="text-lg font-semibold">{item.name}</div>
                <div className="text-sm">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
