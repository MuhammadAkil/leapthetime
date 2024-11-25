'use client'

import { Container } from '@/components/Container'
import Link from 'next/link'
import Image from 'next/image'
import coverImage from '@/images/avif/cover.webp'

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
            href={`/blog/${slug}`} // Link to the dynamic blog details page using the slug
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
  return (
    <Container className="pb-16 pt-20 lg:py-32">
      <section className="body-font h-auto max-w-[1223px] overflow-visible !rounded-xl border border-solid border-white/15 text-gray-600 shadow-[rgba(0,0,0,0.25)_0px_30px_60px_0px,_rgba(0,0,0,0.25)_0px_15px_30px_0px,_rgba(0,0,0,0.25)_0px_5px_10px_0px,_rgba(204,215,255,0.15)_0px_0px_100px_0px_inset] backdrop-blur-[25px]">
        <div className="container mx-auto px-5 py-14">
          <div className="mb-4 flex w-full flex-col flex-wrap items-center p-6 lg:mb-20">
            <h2 className="text-center font-display text-3xl tracking-tight text-white sm:text-4xl">
              The Blog of &nbsp;LeapTheLimit
            </h2>
          </div>

          <div className="-m-2 flex flex-wrap">
            {blogList.map((blog) => (
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
      </section>
    </Container>
  )
}
