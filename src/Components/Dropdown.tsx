import React from 'react'

const DropdownMenu = () => {
  return (
    <div className='absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg'>
      <div
        className='py-1 bg-white rounded-md shadow-xs'
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='user-menu'
      >
        <a
          href='#'
          className='block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100'
          role='menuitem'
        >
          Your Profile
        </a>
        <a
          href='#'
          className='block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100'
          role='menuitem'
        >
          Settings
        </a>
        <a
          href='#'
          className='block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100'
          role='menuitem'
        >
          Sign out
        </a>
      </div>
    </div>
  )
}
