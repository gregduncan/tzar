import { REGISTER, UPDATE_COMPONENT } from '../constants/actionTypes';

export const register = dataComponents => {
  return dispatch => {
    dispatch({ type: REGISTER, payload: JSON.parse(JSON.stringify(dataComponents)) });
  };
};

export const onChange = (shortCode, value) => {
  return (dispatch, getState) => {
    const components = getState().form.components;
    const payload = components.map(component => {
      if (component.ShortCode === shortCode && value) {
        component.Value = value;
        component.IsDirty = true;
      }
      return component;
    });
    dispatch({ type: UPDATE_COMPONENT, payload: payload });
  };
};
