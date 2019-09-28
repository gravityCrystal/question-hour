import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Main from './components/Main'
import Results from './components/Results'
import ScrollToTop from './components/ScrollTop'

export default (props) => (
  console.log(props),
  <HashRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path='/'  render={(props) => <Main {...props} /> }/>
        <Route exact path='/dashboard' render={(props) => <Dashboard {...props} /> }/>
        <Route exact path='/results' render={(props) => (<Results  {...props} />)} /> 
      </Switch>
    </ScrollToTop>
  </HashRouter>
)