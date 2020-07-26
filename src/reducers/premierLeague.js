import {
  DISPATCH_PREMIER_LEAGUE,
} from '../actions/competitions';

export const initialState = {
  allMatchs: [],
};

const premierLeague = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISPATCH_PREMIER_LEAGUE: 
      return {
        ...state,
        allMatchs: action.matchsPremierLeague,
      };
    default:
      return state;
  }
};

export default premierLeague;