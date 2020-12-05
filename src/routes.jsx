import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Main from './Main'
import Schedule from './components/Schedule'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/cart' component={Main}/>
      <Route path='/schedule' component={Schedule}/>
      <Redirect from='/home' to='/schedule' />
    </Switch>
  </main>
)

export default Routes