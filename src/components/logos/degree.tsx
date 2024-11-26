import React from 'react'

interface LogoProps {
  width?: string // Optional width of the logo
  height?: string // Optional height of the logo
  fill?: string // Optional fill color
  className?: string // Optional additional class names
}

const Career: React.FC<LogoProps> = ({
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
      <path
        d="m288.96 349.54 127.04-57.441v107.9c0 26.465-21.535 48-48 48l-224 0.003906c-26.465 0-48-21.535-48-48v-107.9l127.02 57.441c10.414 4.7188 21.52 7.1211 32.977 7.1211s22.543-2.3828 32.961-7.1055zm202.27-157.54c0-19.105-10.816-35.871-28.223-43.727l-187.23-84.656c-12.559-5.6797-26.992-5.6797-39.551 0l-187.23 84.656c-17.406 7.8711-28.223 24.625-28.223 43.727 0 19.105 10.816 35.871 28.223 43.727l187.23 84.656c6.2891 2.8477 13.023 4.2734 19.777 4.2734s13.488-1.4258 19.777-4.2734l172.22-77.871v109.49c0 8.832 7.1836 16 16.016 16s16-7.168 16-16v-129.09c7.1211-8.4336 11.215-19.215 11.215-30.91z"
        fill={fill}
      />
    </svg>
  )
}

export default Career
