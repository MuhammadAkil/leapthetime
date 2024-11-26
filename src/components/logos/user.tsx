import React from 'react'

interface LogoProps {
  width?: string
  height?: string
  fill?: string
  className?: string
}

const User: React.FC<LogoProps> = ({
  width = '50px',
  height = '50px',
  fill = '#000',
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
    </svg>
  )
}

export default User
