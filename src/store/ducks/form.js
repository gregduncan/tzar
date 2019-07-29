// ACTION TYPE CONSTANTS
export const REGISTER = 'REGISTER';
export const UPDATE_COMPONENT = 'UPDATE_COMPONENT';

// ACTION CREATORS
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
