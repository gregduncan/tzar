import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import ducks from './ducks';

const middleware = applyMiddleware(promise, thunk);

export default createStore(ducks, middleware);
