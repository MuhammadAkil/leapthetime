import Link from 'next/link'
import { Button } from './Button'

interface InfoCardProps {
  icon?: JSX.Element
  title?: string
  description?: string
  address?: string
  phone?: string
  email?: string
  mapLink?: string
  mapButton?: string
}

export default function InfoCard({
  icon,
  title,
  description,
  address,
  phone,
  email,
  mapLink,
  mapButton,
}: InfoCardProps) {
  return (
    <div className=" p-4 md:w-[50%] ">
      <div className=" flex flex-col  rounded-lg p-6 shadow-lg">
        {title && (
          <h2 className="title-font mb-2 text-lg font-medium text-white">
            {title}
          </h2>
        )}
        <span className="flex w-full items-center gap-2 ">
          {description && (
            <p className="text-sm leading-relaxed text-gray-400 lg:w-[40ch]">
              {description}
              <Link
                href={`mailto:${email}`}
                className="ml-2 text-sm text-[#006FE8]"
              >
                {email}
              </Link>
            </p>
          )}
        </span>

        {address && (
          <address className="mt-2 text-sm leading-relaxed text-gray-400 lg:w-[40ch]">
            {address}
          </address>
        )}
        {phone && (
          <Link href={`tel:${phone}`} className="mt-2 text-sm text-indigo-300">
            {phone}
          </Link>
        )}
        {mapButton && mapLink && (
          <Button
            target="_blank"
            href={mapLink}
            className="mt-4 w-40 bg-[#006FE8] text-white hover:bg-[#006FE8]/80"
          >
            {mapButton}
          </Button>
        )}
      </div>
    </div>
  )
}
