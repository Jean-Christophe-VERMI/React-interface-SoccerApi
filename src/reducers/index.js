import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import allCompetitions from './allCompetitions';
import premierLeague from './premierLeague';
import laLiga from './laLiga';
import serieA from './serieA';

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
});

export default persistReducer(persistConfig, rootReducer);