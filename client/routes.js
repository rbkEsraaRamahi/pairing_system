/**
 * Created by azoz on 03/04/17.
 */
import React from 'react'
import {Router, Route, IndexRoute, browserHistory, browserHistory as history} from 'react-router'
import Dashboard from './src/index'
import Pairs from './src/components/Pairs'
import Student from './src/components/addStudent'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Dashboard} />
    <Route path='/student' component={Student} />
    <Route path='/groups' component={Pairs} />
    <Route path='/pairs' component={null} />
    <Route path='/reports' component={null} />
    <Route path='/assessments' component={null} />
    <Route path='/cohorts' component={null} />
    <Route path='/projects' component={null} />

  </Router>
)

export default routes
