import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import rootReducer from '../reducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const enhancers = composeEnhancers(
  applyMiddleware(
    
  ),
);


export const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

export const persistor = persistStore(store);


export default { store, persistor } ;