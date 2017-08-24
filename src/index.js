// import materializeCSS from 'materialize-css/dist/css/materialize.min.css';
//import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import AboutPage from './components/about/AboutPage';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/about" component={AboutPage} />
    </Router>
  </Provider>,
  document.querySelector('.container')
);
