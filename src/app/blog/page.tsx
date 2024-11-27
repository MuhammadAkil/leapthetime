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
  slug,
  title,
  publishedAt,
  description,
}: {
  slug: string;
  title: string;
  publishedAt: string;
  description: string;
}) {
  return (
    <div className="relative group p-3">
      <Link href={`/blog/${slug}`} passHref className="relative block">
        <Image
          src={coverImage}
          alt={title}
          className="h-[180px] w-full rounded-xl object-cover"
          width={260}  
          height={180}  
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/30 p-3 text-white rounded-xl transition-opacity duration-300 group-hover:bg-black/50">
          <h3 className="text-lg font-semibold">{title}</h3> 
          <p className="absolute bottom-2 left-4 text-xs">{publishedAt}</p>  
        </div>
      </Link>
    </div>
  );
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
        <div className="flex w-full flex-col flex-wrap mb-4">
  <div className="text-center">
    <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
      Blog.
    </h2>
  </div>
  <div className="mt-8 px-4">
  <div className="flex items-center justify-between">
    <h2 className="font-display text-left text-3xl tracking-tight text-white sm:text-4xl">
      Featured
    </h2>
   <div className="flex items-center">
  <input
    type="text"
    placeholder="Search Blog by title..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    }}
    className="w-full md:w-80 py-1 px-5 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out"
  />
</div>

  </div>
</div>

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
  <p className="absolute bottom-4 left-4 text-sm">{blog.publishedAt}</p>
</div>

                  </Link>
                </div>
              ))}
            </div>
          </div>
         <div className="mt-12">
 <div className="mt-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        </div>
      </section>
    </Container>
  )
}
