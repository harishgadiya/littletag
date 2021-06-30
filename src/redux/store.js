import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['products', 'filterReducer'],
};
const newRootReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));

export const persistor = persistStore(store);

export default { store, persistor };
