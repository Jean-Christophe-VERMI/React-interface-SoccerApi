import {
  DISPATCH_LALIGA,
} from '../actions/competitions';

export const initialState = {
  allMatchs: [],
};

const laLiga = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISPATCH_LALIGA: 
      return {
        ...state,
        allMatchs: action.matchsLaLiga,
      };
    default:
      return state;
  }
};

export default laLiga;