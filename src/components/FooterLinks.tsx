import Link from 'next/link'

export default function FooterLinks() {
  // First set of links
  const firstLinks = [
    'AI',
    'For Business',
    'For Government',
    'For Education',
    'For Healthcare',
  ]

  // Second set of links
  const secondLinks = [
    'Company',
    'About LeapTheLimit',
    'Newsroom',
    'Contact',
    'Careers',
  ]

  // Third set of links
  const thirdLinks = [
    'Resources',
    'Blog',
    'Trending',
    'Academy',
    'Help Center',
    'Research Lab',
  ]

  // Fourth set of links
  const fourthLinks = ['Socials', 'LinkedIn', 'Instagram', 'YouTube', 'X']

  return (
    <div className=" mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left">
      {/* First set of links */}
      <div className="w-full px-4 md:w-1/2 lg:w-1/4">
        <nav className="mb-3 list-none">
          {firstLinks.map((link, idx) => (
            <li key={idx} className="pb-5">
              <Link
                className="text-gray-300 hover:text-gray-400 hover:underline"
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
      <div className="w-full px-4 md:w-1/2 lg:w-1/4">
        <nav className="mb-10 list-none">
          {secondLinks.map((link, idx) => (
            <li key={idx} className="pb-5">
              <Link
                className="text-gray-300 hover:text-gray-400 hover:underline"
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
      <div className="w-full px-4 md:w-1/2 lg:w-1/4">
        <nav className="mb-10 list-none">
          {thirdLinks.map((link, idx) => (
            <li key={idx} className="pb-5">
              <Link
                className="text-gray-300 hover:text-gray-400 hover:underline"
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
      <div className="w-full px-4 md:w-1/2 lg:w-1/4">
        <nav className="mb-10 list-none">
          {fourthLinks.map((link, idx) => (
            <li key={idx} className="pb-5">
              <Link
                className="text-gray-300 hover:text-gray-400 hover:underline"
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
