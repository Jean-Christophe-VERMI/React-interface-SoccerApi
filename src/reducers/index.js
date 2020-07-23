import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import dashboard from './dashboard';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
}

const rootReducer = combineReducers({
  // dashboard,
});

export default persistReducer(persistConfig, rootReducer);