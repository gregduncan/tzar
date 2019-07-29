import { combineReducers } from 'redux';

import form from './form';

const appReducer = combineReducers({
  form
});

// eslint-disable-next-line
const initialState = appReducer({}, {});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
