import { REGISTER, UPDATE_COMPONENT } from '../constants/actionTypes';

export const componentDidMount = dataComponent => {
  return (dispatch, getState) => {
    const components = [...getState().form.components];
    dataComponent.Visible = !dataComponent.Rules;
    components.push(dataComponent);
    dispatch({ type: REGISTER, payload: components });
  };
};

export const componentDidChange = value => {
  return dispatch => {
    dispatch({ type: UPDATE_COMPONENT, payload: value });
  };
};
