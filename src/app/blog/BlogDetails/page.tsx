'use client'

import { Container } from '@/components/Container'
import Image from 'next/image'
import coverImage from '@/images/avif/cover.webp'
import Link from 'next/link'
export default function BlogDetails() {
  return (
    <Container className="pb-16 pt-20 lg:py-32">
      <section className="body-font p-6 sm:p-10 h-auto max-w-[1223px] mx-auto overflow-visible !rounded-xl border border-solid border-white/15 text-gray-600 shadow-[rgba(0,0,0,0.25)_0px_30px_60px_0px,_rgba(0,0,0,0.25)_0px_15px_30px_0px,_rgba(0,0,0,0.25)_0px_5px_10px_0px,_rgba(204,215,255,0.15)_0px_0px_100px_0px_inset] backdrop-blur-[25px]">
        <div className="container mx-auto px-4 sm:px-5 py-10 lg:py-14">
          <div className="flex w-full flex-col items-center lg:items-start mb-6 lg:mb-10">
            <h2 className="font-display text-center text-3xl tracking-tight text-white sm:text-4xl">
              Blog.
            </h2>
          </div>
          <div className="flex w-full flex-col items-center lg:items-start mb-12 lg:mb-16">
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl text-center lg:text-left">
              Learn How to Pre-render Pages
            </h3>
          </div>
          <div className="mb-8 w-full">
            <Image
              src={coverImage}
              alt="Cover Image"
              className="h-auto w-full rounded-lg object-cover shadow-md"
              width={800}
              height={600}
              priority
            />
          </div>
          <div className="text-white text-base leading-7 px-4 sm:px-10 lg:px-20">
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel
              fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities
              morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus
              aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.
            </p>
            <p className="mb-6">
              Venenatis cras sed felis eget velit. Consectetur libero id faucibus nisl tincidunt.
              Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat
              consequat mauris nunc congue nisi vitae. Id aliquet risus feugiat in ante metus dictum
              at tempor. Sed blandit libero volutpat sed cras. Sed odio morbi quis commodo odio
              aenean sed adipiscing. Velit euismod in pellentesque massa placerat. Mi bibendum neque
              egestas congue quisque egestas diam in arcu. Nisi lacus sed viverra tellus in. Nibh
              cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper
              viverra. Fringilla ut morbi tincidunt augue interdum velit euismod.
            </p>
            <p className="mb-6 font-bold">Lorem Ipsum</p>
            <p>
              Tristique senectus et netus et malesuada fames ac turpis. Ridiculous mus mauris vitae
              ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus
              rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique
              nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eros donec
              ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh.
              Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam
              vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non
              odio euismod lacinia at quis risus sed vulputate.
            </p>
          </div>
           <div className="flex justify-start mt-10">
            <Link
              href="/blog"
              passHref
            className="inline-block rounded-full bg-gradient-to-r from-black to-blue-500 px-6 py-2 text-sm font-medium text-white shadow-md hover:shadow-lg hover:from-gray-800 hover:to-blue-600 transition-all duration-200"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </Container>
  )
}
