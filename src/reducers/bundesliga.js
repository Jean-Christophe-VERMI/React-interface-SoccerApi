import {
  DISPATCH_BUNDESLIGA,
} from '../actions/competitions';

export const initialState = {
  allMatchs: [],
};

const bundesliga = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISPATCH_BUNDESLIGA: 
      return {
        ...state,
        allMatchs: action.matchsBundesliga,
      };
    default:
      return state;
  }
};

export default bundesliga;