import React from 'react'
import BushImage from '../images/bush.png'

export const Intro = () => {
  return (
    <div className='absolute z-40 w-full h-screen overflow-y-hidden'>
      <img
        src={BushImage}
        alt='bush'
        className='absolute z-50 object-cover h-full'
        // style={{ width: '100%' }}
      />
    </div>
  )
}
