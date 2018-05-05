/**
 * Created by mamdouh on 06/02/17.
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(
  <Provider store={{subscribe: function(){}, dispatch: function(){}, getState: function(){}}}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
