import {
  DISPATCH_ALL_MATCHS,
} from '../actions/competitions';

export const initialState = {
  allMatchs: [],
};

const allCompetitions = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISPATCH_ALL_MATCHS: 
      return {
        ...state,
        allMatchs: action.allMatchs,
      };
    default:
      return state;
  }
};

export default allCompetitions;