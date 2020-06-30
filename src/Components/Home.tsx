import React from 'react'
import { Navbar } from './Navbar'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const Home = () => {
  const links = [
    { name: 'RSVP', path: 'rsvp' },
    { name: 'Contact', path: 'contact' },
  ]
  const customHistory = createBrowserHistory()

  return (
    <Router history={customHistory}>
      <Navbar links={links} logo='wedding' />
      <Switch>
        <Route exact path='/'>
          <div>home</div>
        </Route>
        <Route path='/rsvp'>
          <div>rsvp</div>
        </Route>
        <Route path='/contact'>
          <div>contact</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default Home
