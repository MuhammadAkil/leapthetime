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
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
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
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/login">Sign in</MobileNavLink>
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
          name: 'Product 1',
          icon: '🛠️',
          description: 'This is product 1',
        },
        {
          name: 'Product 2',
          icon: '📦',
          description: 'This is product 2',
        },
        {
          name: 'Product 3',
          icon: '🔧',
          description: 'This is product 3',
        },
        {
          name: 'Product 4',
          icon: '🛠️',
          description: 'This is product 4',
        },
        {
          name: 'Product 5',
          icon: '🔧',
          description: 'This is product 3',
        },
        {
          name: 'Product 6',
          icon: '🛠️',
          description: 'This is product 4',
        },
      ],
      images: [
        //  'https://via.placeholder.com/150?text=Product+1',
        //  'https://via.placeholder.com/150?text=Product+2',
        //  'https://via.placeholder.com/150?text=Product+3',
        //  'https://via.placeholder.com/150?text=Product+4',
      ],
    },
    AI: {
      content: [
        // {
        //   name: 'AI Tool 1',
        //   icon: '🤖',
        //   description: 'This is AI tool 1',
        // },
        // {
        //   name: 'AI Tool 2',
        //   icon: '🔍',
        //   description: 'This is AI tool 2',
        // },
      ],
      images: [
        AI,
        // 'https://via.placeholder.com/150?text=AI+Tool+1',
        // 'https://via.placeholder.com/150?text=AI+Tool+2',
        //  'https://via.placeholder.com/150?text=Product+3',
        //  'https://via.placeholder.com/150?text=Product+4',
      ],
    },
    Company: {
      content: [
        {
          name: 'About',
          icon: '🤖',
          description: 'Learn who we are',
        },
        {
          name: 'Contact',
          icon: '🔍',
          description: 'Get in touch',
        },
        {
          name: 'Careers',
          icon: '🤖',
          description: 'Explore open position',
        },
        {
          name: 'Newsroom',
          icon: '🔍',
          description: 'Latest annocuments',
        },
      ],
      images: [AI],
    },
    Resources: {
      content: [
        {
          name: 'AI Tool 1',
          icon: '🤖',
          description: 'This is AI tool 1',
        },
        {
          name: 'AI Tool 2',
          icon: '🔍',
          description: 'This is AI tool 2',
        },
      ],
      images: [AI],
    },
    Workshops: {
      content: [
        {
          name: 'AI Tool 1',
          icon: '🤖',
          description: 'This is AI tool 1',
        },
        {
          name: 'AI Tool 2',
          icon: '🔍',
          description: 'This is AI tool 2',
        },
      ],
      images: [AI],
    },
    // Add more categories if needed, following the same structure
  }

  return (
    <header className="fixed z-[100] w-full border-b border-[#ffffff1a] py-3 backdrop-blur-[25px]">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link
              href="#"
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
              <NavLink href="#features" megaMenuContent={megaMenuData.AI}>
                AI
              </NavLink>
              <NavLink href="#features" megaMenuContent={megaMenuData.Products}>
                Products
              </NavLink>
              <NavLink
                href="#testimonials"
                megaMenuContent={megaMenuData.Company}
              >
                Company
              </NavLink>
              <NavLink
                href="#pricing"
                megaMenuContent={megaMenuData?.Resources}
              >
                Resources
              </NavLink>
              <NavLink
                href="#pricing"
                megaMenuContent={megaMenuData?.Workshops}
              >
                Workshops
              </NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <Button href="/register" className="flex items-center gap-2">
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
