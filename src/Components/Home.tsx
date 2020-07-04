import React from 'react'
import { Navbar } from './Navbar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Home = () => {
  const links = [
    { name: 'RSVP', path: '/rsvp' },
    { name: 'Contact', path: '/contact' },
  ]

  const Home = () => <>home</>
  const Rsvp = () => <>rsvp</>
  const Contact = () => <>contact</>

  return (
    <Router>
      <Navbar links={links} logo={<Link to=''>wedding</Link>} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rsvp' component={Rsvp} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </Router>
  )
}

export default Home
