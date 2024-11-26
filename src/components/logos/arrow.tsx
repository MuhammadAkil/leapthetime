import React from 'react'

interface LogoProps {
  width?: string // Optional width of the logo
  height?: string // Optional height of the logo
  fill?: string // Optional fill color
  className?: string // Optional additional class names
}

const Arrow: React.FC<LogoProps> = ({
  width = '24px', // Default width
  height = '24px', // Default height
  fill = '#000', // Default fill color
  className = '', // Default to no extra classes
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default Arrow
