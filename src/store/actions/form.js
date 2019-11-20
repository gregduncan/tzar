import { REGISTER, UPDATE_COMPONENT } from '../constants/actionTypes';

export const register = components => {
  return dispatch => {
    dispatch({ type: REGISTER, payload: components });
  };
};

export const componentDidChange = value => {
  return dispatch => {
    dispatch({ type: UPDATE_COMPONENT, payload: value });
  };
};
