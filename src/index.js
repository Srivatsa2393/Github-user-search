import React from 'react';
import { render } from 'react-dom';
import materializeCSS from 'materialize-css/dist/css/materialize.min.css';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import routes from './routes';
import { loadRepos } from './actions/reposAction';

let currentValue;
function handleChange() {
  let previousValue = currentValue;
  currentValue = store.getState().user;

  if (previousValue !== currentValue) {
    store.dispatch(loadRepos(store.getState().user));
  }
}

const store = configureStore();
store.dispatch(loadRepos());
store.subscribe(handleChange);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
