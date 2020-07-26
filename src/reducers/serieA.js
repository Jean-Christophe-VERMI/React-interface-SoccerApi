import {
  DISPATCH_SERIEA,
} from '../actions/competitions';

export const initialState = {
  allMatchs: [],
};

const serieA = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISPATCH_SERIEA: 
      return {
        ...state,
        allMatchs: action.matchsSeriea,
      };
    default:
      return state;
  }
};

export default serieA;