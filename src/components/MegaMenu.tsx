'use client'

import React from 'react'

const DropdownButton = () => {
  return (
    <div className="group relative inline-block text-left">
      {/* Button */}
      <button className="inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Menu
      </button>

      {/* Dropdown Menu */}
      <div className="absolute right-0 mt-2 hidden w-48 origin-top-right rounded-md opacity-0 shadow-lg transition-all duration-200 group-hover:block group-hover:opacity-100">
        <div className="shadow-xs rounded-md bg-white">
          <ul className="py-1">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Option 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Option 2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Option 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DropdownButton
