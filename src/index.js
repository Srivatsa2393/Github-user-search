import React from 'react';
import { render } from 'react-dom';
import materializeCSS from 'materialize-css/dist/css/materialize.min.css';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
