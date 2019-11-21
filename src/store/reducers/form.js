import { REGISTER, UPDATE_COMPONENT } from '../constants/actionTypes';

const initialState = {
  components: [],
  ruleValue: undefined,
  loadTime: '',
  count: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER: {
      return {
        ...state,
        components: action.payload.tree,
        loadTime: action.payload.loadTime,
        count: action.payload.count
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
