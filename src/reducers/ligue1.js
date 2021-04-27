import {
  DISPATCH_LIGUE1,
} from '../actions/competitions';

export const initialState = {
  allMatchs: [],
};

const ligue1 = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISPATCH_LIGUE1: 
      return {
        ...state,
        allMatchs: action.matchsLigue1,
      };
    default:
      return state;
  }
};

export default ligue1;