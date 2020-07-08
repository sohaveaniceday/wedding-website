import React from 'react'
import { Navbar } from './Navbar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CampImage from '../images/camp.png'
import { getClassName, Icon } from '@sohaveaniceday/component-library'

const Home = () => {
  const links = [
    { name: 'RSVP', path: '/rsvp' },
    { name: 'Contact', path: '/contact' },
  ]

  const Home = () => <>home</>
  const Rsvp = () => <>rsvp</>
  const Contact = () => <>contact</>
  const About = () => <>about</>

  return (
    <Router>
      <div className='h-screen bg-orange-100'>
        <Navbar
          links={links}
          backgroundColor='orange-200'
          linkColor='orange-700'
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
                'bg-orange-700',
                'focus:outline-none',
                'h-10',
                'w-10',
                'flex',
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

export default Home
