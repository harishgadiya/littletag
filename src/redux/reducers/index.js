import { combineReducers } from 'redux';

import checkout from './checkoutReducer';
import products from './productListingReducers';
import filterReducer from './filterReducers';

export default combineReducers({
  checkout,
  products,
  filterReducer,
});
