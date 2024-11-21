'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FooterLinks from './FooterLinks'
import StarLogo from '@/images/avif/leap_the _time_logo.avif'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <footer className="body-font bg-black text-gray-600">
      <div className="gradient-border"></div>
      <div className="container mx-auto flex max-w-7xl flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
          <Link
            href="/"
            aria-label="Home"
            className="title-font flex items-center justify-center font-medium text-white md:justify-start"
          >
            <Image
              src={StarLogo}
              alt="logo"
              className="w-8 rounded-xl object-cover"
            />
            <h1 className="text-xl text-white">LeapTheLimit</h1>
          </Link>
        </div>
        <div className="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-0 md:text-left">
          <FooterLinks />
        </div>
      </div>
      <div className="border-t border-[#ffffff1a] py-5">
        <div className="container mx-auto flex max-w-7xl flex-col flex-wrap justify-evenly px-5 py-4 sm:flex-row">
          <div className="mt-2 inline-flex justify-center sm:mt-0 sm:justify-start">
            <div className="divide-2 flex items-center gap-3 divide-x !divide-[#363636]">
              <Link
                href="/"
                className=" text-sm text-[#ffffffb3] hover:text-white lg:px-3"
              >
                Terms of Services
              </Link>
              <Link
                href="/"
                className=" text-xs text-[#ffffffb3] hover:text-white lg:px-3"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-sx flex items-center gap-1 px-3 text-sm text-[#ffffffb3]"
              >
                English{' '}
                <svg
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-[#ffffffb3]"
                >
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-[#ffffffb3] sm:text-left lg:mt-0 ">
            © 2024 LeapTheLimit Inc.
          </p>
        </div>
      </div>
      {isVisible && (
        <button
          className={`custom-shadow gradient-text-left fixed bottom-[5rem] right-4 flex items-center gap-1 rounded-full border bg-black px-4 py-[2px] text-white transition-opacity duration-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          To the top
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current text-white"
          >
            <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"></path>
          </svg>
        </button>
      )}
    </footer>
  )
}
