'use client'

import Link from 'next/link'

export default function FooterLinks() {
  // First set of links
  const firstLinks = [
    'For Business',
    'For Government',
    'For Education',
    'For Healthcare',
  ]

  // Second set of links
  const secondLinks = ['About LeapTheLimit', 'Newsroom', 'Contact', 'Careers']

  // Third set of links
  const thirdLinks = [
    'Blog',
    'Trending',
    'Academy',
    'Help Center',
    'Research Lab',
  ]

  // Fourth set of links
  const fourthLinks = ['LinkedIn', 'Instagram', 'YouTube', 'X']

  return (
    <div className="mt-10 flex flex-grow flex-wrap text-left md:mt-0">
      {/* First set of links */}
      <div className="w-1/2 lg:w-1/4">
        <h6 className="rounded-y-full mb-6  border-l-2 !border-[#363636] ps-2 text-[14px] font-medium leading-[20px] text-white">
          Product
        </h6>
        <nav className="mb-10 list-none">
          {firstLinks.map((link, idx) => (
            <li key={idx} className="pb-5">
              <Link
                className="whitespace-pre text-[13px] leading-[20px] text-[#ffffffb3] hover:text-white hover:underline"
                href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                passHref
              >
                {link}
              </Link>
            </li>
          ))}
        </nav>
      </div>

      {/* Second set of links */}
      <div className="w-1/2 lg:w-1/4">
        <h6 className="rounded-y-full mb-6  border-l-2 !border-[#363636] ps-2 text-[14px] font-medium leading-[20px] text-white">
          Company
        </h6>
        <nav className="mb-10 list-none">
          {secondLinks.map((link, idx) => (
            <li key={idx} className="pb-5">
              <Link
                className="whitespace-pre text-[13px] leading-[20px]	text-[#ffffffb3] hover:text-white hover:underline"
                href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                passHref
              >
                {link}
              </Link>
            </li>
          ))}
        </nav>
      </div>

      {/* Third set of links */}
      <div className="w-1/2 lg:w-1/4">
        <h6 className="rounded-y-full mb-6 border-l-2 !border-[#363636] ps-2 text-[14px] font-medium leading-[20px] text-white">
          Resources
        </h6>
        <nav className="mb-10 list-none">
          {thirdLinks.map((link, idx) => (
            <li key={idx} className="pb-5">
              <Link
                className="whitespace-pre text-[13px] leading-[20px]	text-[#ffffffb3] hover:text-white hover:underline"
                href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                passHref
              >
                {link}
              </Link>
            </li>
          ))}
        </nav>
      </div>

      {/* Fourth set of links */}
      <div className="w-1/2 lg:w-1/4">
        <h6 className="rounded-y-full mb-6  border-l-2 !border-[#363636] ps-2 text-[14px] font-medium leading-[20px] text-white">
          Follow Us
        </h6>
        <nav className="mb-10 list-none">
          {fourthLinks.map((link, idx) => (
            <li key={idx} className="pb-5">
              <Link
                className="whitespace-pre text-[13px] leading-[20px]	text-[#ffffffb3] hover:text-white hover:underline"
                href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                passHref
              >
                {link}
              </Link>
            </li>
          ))}
        </nav>
      </div>
    </div>
  )
}
