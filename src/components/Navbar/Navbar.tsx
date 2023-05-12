import React from 'react'
import Link from 'next/link'
import {
  MenuOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons'

type Props = {}

const Navbar: React.FC = (props: Props) => {
  return (
    <nav className="bg-white text-gray-700 border-b-2 border-gray-200">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side of the navbar */}
          <div className="flex-shrink-0 flex items-center">
            <button className="inline-flex items-center justify-center pt-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <MenuOutlined className="h-6 w-6" />
            </button>
          </div>

          {/* Middle of the navbar */}
          <div className="flex items-center justify-center flex-1">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-gray-700 hover:text-gray-800"
            >
              Brand
            </Link>
          </div>

          {/* Right side of the navbar */}
          <div className="flex items-center">
            <Link
              href="#"
              className="inline-flex items-center justify-center mx-2 pt-2 rounded-md text-gray-700 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <HeartOutlined className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center mx-2 pt-2 rounded-md text-gray-700 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <ShoppingCartOutlined className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center mx-2 pt-2 rounded-md text-gray-700 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <UserOutlined className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
