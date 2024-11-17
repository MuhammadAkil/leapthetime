'use client'
import React from 'react'

// components/Footer.js

import Link from 'next/link'
import FooterLinks from './FooterLinks'

export default function Footer() {
  return (
    <footer className="body-font   bg-black text-gray-600">
      <div className="gradient-border"></div>
      <div className="container  mx-auto flex max-w-7xl flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
          <Link
            href="/"
            className="title-font flex items-center justify-center font-medium text-white md:justify-start"
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
            <span className="ml-3 text-xl">LeapTheLimit</span>
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            All rights reserved, the LeapTheLimit. logo and trademarks may not
            be used or reproduced consent of the owner.
          </p>
        </div>
        <div className="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left">
          {/* {['CATEGORIES', 'CATEGORIES', 'CATEGORIES', 'CATEGORIES'].map(
            (category, index) => (
              <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/4">
                <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
                  {category}
                </h2>
                <nav className="mb-10 list-none">
                  {[
                    'AI',
                    'For Business',
                    'For Government',
                    'For Education',
                    'For Healthcare',
                  ].map((link, idx) => (
                    <li key={idx}>
                      <Link
                        className="text-gray-600 hover:text-gray-800"
                        href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                        passHref
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </nav>
              </div>
            ),
          )} */}
          <FooterLinks />
        </div>
      </div>
      <div className="border-t border-[#ffffff1a] py-5">
        <div className="container mx-auto flex max-w-7xl flex-col flex-wrap justify-between px-5 py-4 sm:flex-row">
          <div className="mt-2 inline-flex justify-center  sm:mt-0 sm:justify-start">
            {/* {['facebook', 'twitter', 'instagram', 'linkedin'].map(
              (platform, idx) => (
                <a key={idx} href="#" className="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d={
                        platform === 'facebook'
                          ? 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'
                          : platform === 'twitter'
                            ? 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'
                            : platform === 'instagram'
                              ? 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'
                              : 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM2 9h4v12H2z'
                      }
                    ></path>
                  </svg>
                </a>
              ),
            )} */}
            <ul className="flex gap-5">
              <li>
                <Link href={'/'}>Terms of Services</Link>
              </li>
              <li>
                <Link href={'/'}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <p className="text-center text-sm text-gray-500 sm:text-left">
            © 2024 LeapTheLimit Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
