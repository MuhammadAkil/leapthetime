'use client'

import { Fragment, useState } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'
import AI from '@/images/avif/hope-ai.avif'
import StarLogo from '@/images/avif/leap_the _time_logo.avif'
import Logo from '@/images/avif/leapTheTimeLogo.avif'

import Image from 'next/image'
import Career from '../components/logos/career'
import Government from './logos/government-policies'
import Degree from './logos/degree'
import IconBa from './logos/iconba'
import NewsRoom from './logos/news-room'
import EBook from './logos/e-book'
import Trending from './logos/trending'
import ResearchLab from './logos/research-lab'
import HelpCenter from './logos/help-center'
import Alliance from './logos/alliance'
import GrowthBusiness from './logos/growth-business'
import WriteBook from './logos/write-book'
import QuestionMark from './logos/question-mark'
import Arrow from './logos/arrow'
function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="text-gray-custom block w-full p-2 hover:text-white"
    >
      {children}
    </Link>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  const [openSection, setOpenSection] = useState<number | null>(null)

  const megaMenuData = [
    {
      title: 'AI',
      content: [
        { name: 'For Business', link: 'for-business' },
        { name: 'For Government', link: 'for-government' },
        { name: 'For Education', link: 'for-education' },
        { name: 'For Healthcare', link: 'for-healthcare' },
      ],
    },
    {
      title: 'Company',
      content: [
        { name: 'About', link: 'about' },
        { name: 'Contact', link: 'contact' },
        { name: 'Careers', link: 'careers' },
        { name: 'Newsroom', link: 'newsroom' },
      ],
    },
    {
      title: 'Resources',
      content: [
        { name: 'Academy', link: '/academy' },
        { name: 'e-Book', link: '/e-book' },
        { name: 'Blog', link: '/blog' },
        { name: 'Trending', link: '/trending' },
        { name: 'Research Lab', link: '/research-lab' },
        { name: 'Help Center', link: '/help-center' },
      ],
    },
    {
      title: 'Workshops',
      content: [],
    },
  ]

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index)
  }

  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute left-[-16px] top-full mt-[0.8rem] flex h-[90svh] w-[106%] origin-top flex-col overflow-y-scroll bg-black p-4 text-lg tracking-tight text-white shadow-xl ring-1 ring-slate-900/5"
          >
            {megaMenuData.map((section, index) => (
              <div key={index} className="mt-3">
                <button
                  className="flex w-full justify-between rounded px-3 py-2 text-left text-sm font-semibold"
                  onClick={() => toggleSection(index)}
                >
                  {section.title}
                  <Arrow
                    className={`h-5 w-5 transform transition-transform duration-300 ${
                      openSection === index ? 'rotate-180' : 'rotate-0'
                    }`}
                  />

                  {/* <span>{openSection === index ? '-' : '+'}</span> */}
                </button>
                {openSection === index && (
                  <div className="mt-2 space-y-2 pl-4">
                    {section.content.length > 0 ? (
                      section.content.map((item, idx) => (
                        <MobileNavLink key={idx} href={item.link}>
                          {item.name}
                          {/* <hr className="border-slate-300/40" /> */}
                        </MobileNavLink>
                      ))
                    ) : (
                      <p className="text-sm text-gray-400">
                        No content available.
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  const megaMenuData = {
    Products: {
      content: [
        {
          title: 'AI',
          name: 'For Business',
          icon: <GrowthBusiness width="24" height="24" fill="#006FE8" />,
          description: 'Drive Growth',
          link: 'for-business',
        },
        {
          title: 'AI',
          name: 'For Government',
          icon: <Government width="24" height="24" fill="#006FE8" />,
          description: 'Smarter Policy Decision',
          link: 'for-government',
        },
        {
          title: 'AI',
          name: 'For Education',
          icon: <Degree width="24" height="24" fill="#006FE8" />,
          description: 'Empower students and teachers',
          link: 'for-education',
        },
        {
          title: 'AI',
          name: 'For Healthcare',
          icon: <IconBa width="24" height="24" fill="#006FE8" />,
          description: 'Accelerate Diagnosis, Improve Accuracy',
          link: 'for-healthcare',
        },
      ],
      images: [],
    },
    Company: {
      content: [
        {
          name: 'About',
          icon: <QuestionMark width="24" height="24" fill="#006FE8" />,
          description: 'Learn who we are',
          link: 'about',
        },
        {
          name: 'Contact',
          icon: <Alliance width="24" height="24" fill="#006FE8" />,
          description: 'Get in touch',
          link: 'contact',
        },
        {
          name: 'Careers',
          icon: <Career width="24" height="24" fill="#006FE8" />,
          description: 'Explore open positions',
          link: 'careers',
        },
        {
          name: 'Newsroom',
          icon: <NewsRoom width="24" height="24" fill="#006FE8" />,
          description: 'Latest announcements',
          link: 'newsroom',
        },
      ],
      images: [AI],
    },
    Resources: {
      content: [
        {
          name: 'Academy',
          icon: <Degree width="24" height="24" fill="#006FE8" />,
          description: 'Upskill your team',
          link: '/academy',
        },
        {
          name: 'e-Book',
          icon: <EBook width="24" height="24" fill="#006FE8" />,
          description: 'Download & learn',
          link: '/e-book',
        },
        {
          name: 'Blog',
          icon: <WriteBook width="24" height="24" fill="#006FE8" />,
          description: 'Insights & inspiration',
          link: '/blog',
        },
        {
          name: 'Trending',
          icon: <Trending width="24" height="24" fill="#006FE8" />,
          description: 'Hot topics in AI',
          link: '/trending',
        },
        {
          name: 'Research Lab',
          icon: <ResearchLab width="24" height="24" fill="#006FE8" />,
          description: 'Explore our breakthroughs',
          link: '/research-lab',
        },
        {
          name: 'Help Center',
          icon: <HelpCenter width="24" height="24" fill="#006FE8" />,
          description: 'Find answers fast',
          link: '/help-center',
        },
      ],
      images: [],
    },
    Workshops: {
      content: [
        //  {
        //    name: 'AI Workshop 1',
        //    icon: '🤖',
        //    description: 'Learn advanced AI techniques',
        //    link: '/workshop',
        //  },
        //  {
        //    name: 'AI Workshop 2',
        //    icon: '🔍',
        //    description: 'Introduction to AI tools',
        //    link: '/workshop',
        //  },
      ],
      images: [],
    },
  }

  return (
    <header className="fixed z-[100] w-full border-b border-[#ffffff1a] bg-black py-3 lg:bg-transparent lg:backdrop-blur-[25px]">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link
              href="/"
              aria-label="Home"
              className="flex items-center gap-1"
            >
              <Image src={StarLogo} alt="logo" className="w-8  object-cover" />
              <Image src={Logo} alt="logo" className="w-[150px] object-cover" />
            </Link>
          </div>
          <div className="flex items-center md:gap-x-12">
            <div className="hidden text-[#ffffff96] md:flex md:gap-x-8">
              {/* <NavLink href="#features" megaMenuContent={megaMenuData.AI}>
                AI
              </NavLink> */}
              <NavLink href="#" megaMenuContent={megaMenuData.Products}>
                Products
              </NavLink>
              <NavLink href="#" megaMenuContent={megaMenuData.Company}>
                Company
              </NavLink>
              <NavLink href="#" megaMenuContent={megaMenuData?.Resources}>
                Resources
              </NavLink>
              <NavLink href="#">Workshops</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <Button
              href="/register"
              className="hidden items-center gap-2 lg:flex"
            >
              <span>Request Demo </span>
              <span className="inline hidden rotate-[-45deg] md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-white"
                >
                  <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
                </svg>
              </span>
            </Button>
            <div className="mr-[0.75rem] md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
