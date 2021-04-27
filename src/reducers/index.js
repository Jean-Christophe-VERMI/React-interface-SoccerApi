import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import allCompetitions from './allCompetitions';
import premierLeague from './premierLeague';
import laLiga from './laLiga';
import serieA from './serieA';
import ligue1 from './ligue1';
import bundesliga from './bundesliga';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
}

const rootReducer = combineReducers({
  allCompetitions,
  premierLeague,
  laLiga,
  serieA,
  ligue1,
  bundesliga,
});

export default persistReducer(persistConfig, rootReducer);