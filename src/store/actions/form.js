import { REGISTER, UPDATE_COMPONENT } from '../constants/actionTypes';

export const componentDidMount = dataComponent => {
  return (dispatch, getState) => {
    const components = [...getState().form.components];
    components.push(dataComponent);
    dispatch({ type: REGISTER, payload: components });
  };
};

export const componentDidChange = (shortCode, value) => {
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
