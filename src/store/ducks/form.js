// ACTION TYPE CONSTANTS
export const REGISTER = 'REGISTER';
export const UPDATE_COMPONENT = 'UPDATE_COMPONENT';

// ACTION CREATORS
export const register = dataComponent => {
  return (dispatch, getState) => {
    const { components } = getState().form;
    components.push(dataComponent);
    dispatch({ type: REGISTER, payload: components });
  };
};

export const update = (shortCode, value) => {
  return (dispatch, getState) => {
    const components = getState().components;
    const payload = components.map(component => {
      if (component.ShortCode === shortCode) {
        component.Value = value;
      }
      return component;
    });
    dispatch({ type: UPDATE_COMPONENT, payload: payload });
  };
};

// REDUCER.
const initialState = {
  components: [],
  test: 'TZAR'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER: {
      return {
        ...state,
        components: action.payload
      };
    }

    case UPDATE_COMPONENT: {
      return {
        ...state,
        components: action.payload
      };
    }

    default:
      return state;
  }
}
