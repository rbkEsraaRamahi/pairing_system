/**
 * Created by azoz on 03/04/17.
 */
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './src/index';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
);

export default routes;
