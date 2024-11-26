'use client'
import { Container } from '@/components/Container'
import Link from 'next/link'
import Image from 'next/image'
import coverImage from '@/images/avif/cover.webp'
import React from 'react'

interface Blog {
  slug: string
  title: string
  description: string
  publishedAt: string
}

const blogList: Blog[] = [
  {
    slug: 'ai-in-education',
    title: 'AI in Education',
    description:
      'Learn how artificial intelligence is reshaping education by personalizing learning experiences for students.',
    publishedAt: '2024-11-10',
  },
  {
    slug: 'ai-for-business-growth',
    title: 'AI for Business Growth',
    description:
      'Unlock the potential of AI in business by driving efficiency, reducing costs, and enhancing customer experiences.',
    publishedAt: '2024-11-15',
  },
  {
    slug: 'ai-in-healthcare',
    title: 'AI in Healthcare',
    description:
      'Explore the role of AI in healthcare, from early diagnosis to treatment personalization, transforming patient outcomes.',
    publishedAt: '2024-11-20',
  },
  {
    slug: 'ai-for-government-innovation',
    title: 'AI for Government Innovation',
    description:
      'See how AI is modernizing government operations, improving citizen services, and enhancing decision-making.',
    publishedAt: '2024-11-25',
  },
  {
    slug: 'beyond-basic-automation',
    title: 'Beyond Basic Automation',
    description:
      'Explore the future of AI as it surpasses basic automation, revolutionizing industries with advanced capabilities.',
    publishedAt: '2024-11-01',
  },
  {
    slug: 'secure-and-transparent',
    title: 'Secure and Transparent',
    description:
      'Discover how AI ensures data privacy and transparency, empowering businesses to build trust with users.',
    publishedAt: '2024-11-05',
  },
]

function InfoCard({
  title,
  description,
  slug,
  publishedAt,
}: {
  title: string
  description: string
  slug: string
  publishedAt: string
}) {
  return (
    <div className="p-4 md:w-1/2 xl:w-1/3">
      <div className="rounded-lg p-6">
        <div className="mb-4 h-40 w-full overflow-hidden rounded-lg">
          <Image
            src={coverImage}
            alt={title}
            className="h-full w-full object-cover"
            width={160}
            height={160}
          />
        </div>
        <h2 className="title-font mb-2 text-lg font-medium text-white">
          {title}
        </h2>
        <p className="line-clamp-2 w-full overflow-hidden text-sm leading-relaxed text-[#ffffff96]">
          {description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <Link
            href={`/blog/${slug}`}
            passHref
            className=" inline-block text-sm font-medium text-[--primary-color] underline hover:text-indigo-700"
          >
            Read More
          </Link>
          <p className="text-[#ffffff96]"> {publishedAt}</p>
        </div>
      </div>
    </div>
  )
}

export default function Blog() {
  const recentBlogs = blogList.slice(0, 2)

  const [searchTerm, setSearchTerm] = React.useState('')
  const [filteredBlogs, setFilteredBlogs] = React.useState(blogList)

  const handleSearch = () => {
    const result = blogList.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredBlogs(result)
  }

  return (
    <Container className="pb-16 pt-20 lg:py-32">
      <section className="body-font h-auto max-w-[1223px] overflow-visible rounded-xl border border-solid border-white/15 text-gray-600 shadow-lg backdrop-blur-lg">
        <div className="container mx-auto px-6 py-12 lg:py-16">
          <div className="flex w-full flex-col flex-wrap items-center text-center mb-12">
            <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
              Featured Blog
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 p-4">
            <div className="relative col-span-2 group">
              <Link
                href={`/blog/${blogList[0].slug}`}
                passHref
                className="relative block"
              >
                <Image
                  src={coverImage}
                  alt="Large Image"
                  className="h-auto w-full rounded-xl object-cover"
                  width={800}
                  height={1000}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-black/30 p-6 text-white rounded-xl transition-opacity duration-300 group-hover:bg-black/50">
                  <h3 className="absolute bottom-4 left-4 text-2xl font-semibold">{blogList[0].title}</h3>
                  <p className="absolute top-4 left-4 text-sm">{blogList[0].publishedAt}</p>
                </div>
              </Link>
            </div>

            <div className="grid grid-rows-2 gap-6">
              {recentBlogs.map((blog) => (
                <div className="relative group" key={blog.slug}>
                  <Link
                    href={`/blog/${blog.slug}`}
                    passHref
                    className="relative block"
                  >
                    <Image
                      src={coverImage}
                      alt={blog.title}
                      className="h-auto w-full rounded-xl object-cover"
                      width={400}
                      height={300}
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/30 p-4 text-white rounded-xl transition-opacity duration-300 group-hover:bg-black/50">
                      <h3 className="text-2xl font-semibold">{blog.title}</h3>
                      <p className="absolute top-4 right-4 text-sm">{blog.publishedAt}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="my-8 flex items-center justify-center pr-6 pt-6 space-x-4">
  <input
    type="text"
    placeholder="Search Blog by title..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full md:w-80 py-1 px-5 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out"
  />
  <button
    onClick={handleSearch}
    className="py-1 px-5 bg-blue-600 text-sm text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
  >
    Search
  </button>
</div>


          <div className="mt-12">
            <div className="flex flex-wrap -m-2 justify-center gap-4">
              {filteredBlogs.map((blog) => (
                <InfoCard
                  key={blog.slug}
                  slug={blog.slug}
                  title={blog.title}
                  publishedAt={blog.publishedAt}
                  description={blog.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}
