'use client'

import { useEffect, useState } from 'react'
import { Container } from '@/components/Container'
import Image from 'next/image'
import coverImage from '@/images/avif/cover.webp'
import { useParams } from 'next/navigation' 
import Link from 'next/link'

export default function BlogDetails() {
  const [blogData, setBlogData] = useState<{
    title: string
    subtitle: string
    content: string
  } | null>(null)

  const params = useParams() 
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug 

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (slug) {
      const blogContent: {
        [key: string]: {
          title: string
          subtitle: string
          content: string
          publishedAt: string
        }
      } = {
        'ai-in-education': {
          title: 'AI in Education',
          subtitle: 'Revolutionizing Learning Experiences',
          content:
            'Artificial Intelligence is reshaping education by tailoring learning to individual student needs. From AI tutors to intelligent grading systems, explore how these tools are making education more accessible, personalized, and engaging for learners of all ages.',
          publishedAt: '2024-11-10',
        },
        'ai-for-business-growth': {
          title: 'AI for Business Growth',
          subtitle: 'Driving Efficiency and Innovation',
          content:
            'Businesses are leveraging AI to streamline operations, optimize supply chains, and deliver superior customer experiences. Discover real-world examples of how AI is helping companies innovate, scale, and achieve unprecedented growth in competitive markets.',
          publishedAt: '2024-11-15',
        },
        'ai-in-healthcare': {
          title: 'AI in Healthcare',
          subtitle: 'Transforming Patient Outcomes',
          content:
            'The healthcare industry is embracing AI for early diagnosis, treatment personalization, and operational efficiency. Learn how AI-powered tools are improving patient care, reducing costs, and enabling medical professionals to save lives with greater precision.',
          publishedAt: '2024-11-20',
        },
        'ai-for-government-innovation': {
          title: 'AI for Government Innovation',
          subtitle: 'Modernizing Public Services',
          content:
            'Governments worldwide are integrating AI to enhance citizen services, improve decision-making, and tackle complex societal challenges. From smart city solutions to efficient policy implementations, explore how AI is shaping the future of public administration.',
          publishedAt: '2024-11-25',
        },
        'beyond-basic-automation': {
          title: 'Beyond Basic Automation',
          subtitle: 'Master Next-level AI',
          content:
            'Artificial Intelligence is no longer limited to repetitive tasks. Learn how cutting-edge AI tools are enhancing creativity, decision-making, and efficiency in industries across the globe. From predictive analytics to autonomous systems, discover the real potential of next-generation AI solutions.',
          publishedAt: '2024-11-01',
        },
        'secure-and-transparent': {
          title: 'Secure and Transparent',
          subtitle: 'Your Data, Your Rules',
          content:
            'In a world where data security is paramount, AI is stepping up to offer unparalleled transparency. This blog explores the innovations that ensure user privacy while maintaining full control over your data. Learn how secure AI practices are fostering trust and accountability in the digital landscape.',
          publishedAt: '2024-11-05',
        },
      }

      setBlogData(blogContent[slug]) 
    }
  }, [slug])

  if (!isClient) {
    return null 
  }

  if (!blogData) {
    return <div>Loading...</div> 
  }

  return (
    <Container className="pb-16 pt-20 lg:py-32">
      <article className="body-font h-auto max-w-[1223px] overflow-visible !rounded-xl border border-solid border-white/15 text-gray-600 shadow-[rgba(0,0,0,0.25)_0px_30px_60px_0px,_rgba(0,0,0,0.25)_0px_15px_30px_0px,_rgba(0,0,0,0.25)_0px_5px_10px_0px,_rgba(204,215,255,0.15)_0px_0px_100px_0px_inset] backdrop-blur-[25px]">
        <div className="container mx-auto max-w-[800px] px-5 py-14">
           <h2 className="text-start font-display text-3xl tracking-tight text-white mb-16 sm:text-4xl">
            Blog.
          </h2>
          <h2 className="text-start font-display text-3xl tracking-tight text-white sm:text-4xl">
            {blogData.title}
          </h2>
          <p className="text-start text-lg text-white">{blogData.subtitle}</p>

          <div className="mt-6">
            <Image
              src={coverImage}
              alt="Cover Image"
              className="h-auto w-full rounded-lg object-cover shadow-md"
              width={800}
              height={600}
            />
          </div>
          <div className='p-14'>
          <p className="text-start text-white mt-4">
             {new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})}
          </p>
          <div className="mt-8 text-base text-white">
            <p>{blogData.content}</p>
          </div>
          <div className="mt-8 text-base text-white">
            <p>{blogData.content}</p>
          </div>
          <h2 className="mt-8 text-start font-display text-2xl tracking-tight text-white sm:text-3xl">
            {blogData.title}
          </h2>
          <div className="mt-4 text-base text-white">
            <p>{blogData.content}</p>
            </div>
          </div>
           <Link
          href="/blog"
          passHref
          className=" m-5 inline-flex items-center rounded-full bg-gradient-to-r from-black to-blue-500 px-6 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 hover:from-gray-800 hover:to-blue-600 hover:shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="-rotate-90 fill-current text-white"
          >
            <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"></path>
          </svg>{' '}
          Back to Blog
        </Link>
        </div>
      </article>
    </Container>
  )
}
