import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CampImage from '../images/camp.png'
import {
  getClassName,
  Icon,
  Transition,
  Button,
} from '@sohaveaniceday/component-library'
import { Home } from './Home'
import BushImage from '../images/bush.png'
import { colorScheme } from '../static'

export const Routes = () => {
  const [showIntro, setShowIntro] = useState(true)
  const links = [
    { name: 'RSVP', path: '/rsvp' },
    {
      name: 'Contact',
      path: '/contact',
    },
  ]

  const Rsvp = () => <>rsvp</>
  const Contact = () => <>contact</>
  const About = () => <>about</>

  return (
    <Router>
      <div
        className={getClassName([
          'h-full',
          [showIntro, ['max-h-screen', 'overflow-hidden'], 'min-h-screen'],
          'bg-orange-100',
        ])}
      >
        <Transition show={showIntro}>
          <div className='absolute z-30 w-full h-screen overflow-y-hidden'>
            <div
              className={getClassName([
                'absolute',
                'flex',
                'inline-block',
                'h-full',
                'w-full',
                'z-50',
              ])}
            >
              <button
                onClick={() => setShowIntro(false)}
                className='m-auto bg-blue-200'
              >
                enter
              </button>
            </div>

            <Transition
              // enter='ease-out duration-300'
              // enterFrom='opacity-0'
              // enterTo='opacity-100'
              leave='ease-in-out duration-1000'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <img
                src={BushImage}
                alt='bush'
                className='absolute z-40 object-cover h-full'
                // style={{ width: '100%' }}
              />
            </Transition>
          </div>
        </Transition>
        <Navbar
          links={links}
          backgroundColor='orange-200'
          linkColor={colorScheme.medium}
          linkHoverColor={colorScheme.darkLight}
          logo={
            <Link to=''>
              <div className='flex flex-inline'>
                <div className='my-auto'>Camp Ruci</div>
                <img src={CampImage} alt='camp' className='h-8' />
              </div>
            </Link>
          }
          rightOptions={
            <Link
              to={'/about'}
              className={getClassName([
                'text-white',
                'rounded-full',
                `bg-${colorScheme.medium}`,
                'focus:outline-none',
                'h-10',
                'w-10',
                'flex',
                `hover:bg-${colorScheme.darkLight}`,
                'justifty-center',
              ])}
            >
              <Icon iconName='help' cssClasses={['m-auto', 'h-5', 'w-5']} />
            </Link>
          }
        />
        <Switch>
          <Route path='/rsvp' component={Rsvp} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  )
}
