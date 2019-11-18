import { REGISTER, UPDATE_COMPONENT } from '../constants/actionTypes';

const initialState = {
  components: [],
  ruleValue: undefined
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
        ruleValue: action.payload
      };
    }

    default:
      return state;
  }
}
