import React from 'react'

interface LogoProps {
  width?: string // Optional width of the logo
  height?: string // Optional height of the logo
  fill?: string // Optional fill color
  className?: string // Optional additional class names
}

const EBook: React.FC<LogoProps> = ({
  width = '50px', // Default width
  height = '50px', // Default height
  fill = '#000', // Default fill color
  className = '', // Default to no extra classes
}) => {
  return (
    <svg
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={fill}>
        <path d="m342.61 417.28h-27.734c-1.2812 0-2.9883 0.42578-3.8398 1.2812-0.42578 0.42578-0.85156 0.42578-1.2812 0.85156-1.707 1.707-3.8398 2.9883-5.9727 4.6914-10.238 8.1055-23.039 12.801-36.266 12.801h-23.039c-13.227 0-26.027-4.6914-36.266-12.801-2.1328-1.707-3.8398-2.9883-5.9727-5.1211-1.2812-1.2812-2.9883-2.1328-4.6914-2.1328h-27.734c2.5586-1.2812 5.1211-2.5586 7.6797-3.8398 17.066-10.238 36.266-15.785 56.32-15.785h45.652c19.625 0 39.254 5.5469 56.32 15.785 1.7031 1.707 4.2656 2.9883 6.8242 4.2695z" />
        <path d="m249.17 90.453v293.55h-15.785c-22.613 0-44.375 5.9727-63.574 17.922-17.066 10.238-36.266 15.785-56.32 15.785h-70.824v-308.91h70.828c22.613 0 44.375-6.3984 63.574-17.922 17.066-10.238 36.266-15.785 56.32-15.785 8.5312 0 15.781 6.8281 15.781 15.359z" />
        <path d="m469.33 108.8v308.91h-70.824c-19.625 0-39.254-5.5469-56.32-15.785-19.199-11.52-40.961-17.922-63.574-17.922h-15.785v-293.55c0-8.5352 7.2539-15.359 15.785-15.359 19.625 0 39.254 5.5469 56.32 15.785 19.199 11.52 40.961 17.922 63.574 17.922z" />
      </g>
    </svg>
  )
}

export default EBook