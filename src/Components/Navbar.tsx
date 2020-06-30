import React, { useState, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type LinkProps = {
  name: string
  path: string
}

type NavbarProps = {
  links?: LinkProps[]
  logo?: ReactNode
}

export const Navbar = ({ links, logo }: NavbarProps) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className='bg-gray-800'>
      <div className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              className='inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white'
              aria-label='Main menu'
              aria-expanded='false'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className='block w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className='hidden w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='flex items-center justify-center flex-1 sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0'>{logo}</div>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex'>
                {links &&
                  links.map((link) => {
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        className='px-3 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700'
                      >
                        {link.name}
                      </Link>
                    )
                  })}
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <button
              className='p-1 text-gray-400 transition duration-150 ease-in-out border-2 border-transparent rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700'
              aria-label='Notifications'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                />
              </svg>
            </button>
            <div className='relative ml-3'>
              <div>
                <button
                  className='flex text-sm transition duration-150 ease-in-out border-2 border-transparent rounded-full focus:outline-none focus:border-white'
                  id='user-menu'
                  aria-label='User menu'
                  aria-haspopup='true'
                >
                  <img
                    className='w-8 h-8 rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {navbarOpen && (
        <div className='sm:hidden'>
          <div className='px-2 pt-2 pb-3'>
            {links &&
              links.map((link) => {
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className='block px-3 py-2 text-base font-medium text-white transition duration-150 ease-in-out bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700'
                  >
                    {link.name}
                  </Link>
                )
              })}
          </div>
        </div>
      )}
    </nav>
  )
}
