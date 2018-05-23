/**
 * Created by azoz on 03/04/17.
 */
import React from 'react'
import {Router, Route, IndexRoute, browserHistory, browserHistory as history} from 'react-router'
import Dashboard from './src/index'
import Pairs from './src/components/Pairs'
import Student from './src/components/addStudent'
import Groups from './src/components/Groups'
import Pairing from './src/components/pairingList.jsx';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Dashboard}>
    <Route path='/student' component={Student} />
    <Route path='/pairing' component={Pairing} />
    <Route path='/pairs' component={Pairs} />
    <Route path='/groups' component={Groups} />
    <Route path='/assessments' component={null} />
    <Route path='/cohorts' component={null} />
    <Route path='/projects' component={null} />
    </Route>
  </Router>
)

export default routes
