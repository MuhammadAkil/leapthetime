import { Inter, Lexend, Montserrat } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { Header } from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s - LeapTheLimit ',
    default: 'LeapTheLimit  - AI For The Workplace',
  },
  description: 'LeapTheLimit empowers teams to achieve more with faster AI',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        montserrat.variable,
      )}
    >
      <body className="flex h-full flex-col">
        <Header />
        <main className="!bg-[#000]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
