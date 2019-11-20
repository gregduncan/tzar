import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import store from './store';
import { Benchmark, Home } from './routes';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/benchmark" component={Benchmark} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
