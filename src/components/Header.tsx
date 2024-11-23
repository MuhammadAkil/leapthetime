'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'
import AI from '@/images/avif/hope-ai.avif'
import StarLogo from '@/images/avif/leap_the _time_logo.avif'
import Image from 'next/image'
import { title } from 'process'

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
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
  const megaMenuData = [
    {
      title: 'AI',
      content: [
        { tname: 'For Business', link: 'for-business' },
        { tname: 'For Government', link: 'for-government' },
        { tname: 'For Education', link: 'for-education' },
        { tname: 'For Healthcare', link: 'for-healthcare' },
      ],
    },
    {
      title: 'Company',
      content: [
        { tname: 'About', link: 'about' },
        { tname: 'Contact', link: 'contact' },
        { tname: 'Careers', link: 'careers' },
        { tname: 'Newsroom', link: 'newsroom' },
      ],
    },
    {
      title: 'Resources',
      content: [
        { tname: 'Academy', link: '/academy' },
        { tname: 'e-Book', link: '/e-book' },
        { tname: 'Blog', link: '/blog' },
        { tname: 'Trending', link: '/trending' },
        { tname: 'Research Lab', link: '/research-lab' },
        { tname: 'Help Center', link: '/help-center' },
      ],
    },
    {
      title: 'Workshops',
      content: [],
    },
  ]

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
            className="absolute inset-x-0 top-full mt-[0.8rem] flex h-[90svh] w-full origin-top flex-col overflow-y-scroll bg-black p-4 text-lg tracking-tight text-white shadow-xl ring-1 ring-slate-900/5"
          >
            {megaMenuData.map((section, index) => (
              <div
                key={index}
                className="mt-3 flex flex-col divide-y divide-slate-300/40"
              >
                <p className="text-gray-custom my-5 text-sm font-semibold">
                  {section.title}
                </p>
                {
                  section.content.length > 0
                    ? section.content.map((item, idx) => (
                        <MobileNavLink key={idx} href={item.link}>
                          {item.tname}
                          {/* <hr className="m-2 border-slate-300/40" /> */}
                        </MobileNavLink>
                      ))
                    : ''
                  // <p className="text-sm italic text-gray-400">
                  //   No items available.
                  // </p>
                }
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
          icon: '🛠️',
          description: 'Drive Growth',
          link: 'for-business',
        },
        {
          title: 'AI',
          name: 'For Government',
          icon: '📦',
          description: 'Smarter Policy Decision',
          link: 'for-government',
        },
        {
          title: 'AI',
          name: 'For Education',
          icon: '🔧',
          description: 'Empower students and teachers',
          link: 'for-education',
        },
        {
          title: 'AI',
          name: 'For Healthcare',
          icon: '🛠️',
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
          icon: '🤖',
          description: 'Learn who we are',
          link: 'about',
        },
        {
          name: 'Contact',
          icon: '🔍',
          description: 'Get in touch',
          link: 'contact',
        },
        {
          name: 'Careers',
          icon: '🤖',
          description: 'Explore open positions',
          link: 'careers',
        },
        {
          name: 'Newsroom',
          icon: '🔍',
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
          icon: '🤖',
          description: 'Upskill your team',
          link: '/academy',
        },
        {
          name: 'e-Book',
          icon: '🔍',
          description: 'Download & learn',
          link: '/e-book',
        },
        {
          name: 'Blog',
          icon: '🔍',
          description: 'Insights & inspiration',
          link: '/blog',
        },
        {
          name: 'Trending',
          icon: '🔍',
          description: 'Hot topics in AI',
          link: '/trending',
        },
        {
          name: 'Research Lab',
          icon: '🔍',
          description: 'Explore our breakthroughs',
          link: '/research-lab',
        },
        {
          name: 'Help Center',
          icon: '🔍',
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
              <Image
                src={StarLogo}
                alt="logo"
                className="w-8 rounded-xl object-cover"
              />

              <h1 className="text-xl text-white">LeapTheLimit</h1>
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
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
