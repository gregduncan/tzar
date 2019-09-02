import { REGISTER, UPDATE_COMPONENT } from '../constants/actionTypes';

const initialState = {
  components: []
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
