import { combineReducers } from 'redux';

import checkout from './checkoutReducer';
import products from './productListingReducers';
import filterReducer from './filterReducers';
import user from './userReducer';
import wishlist from './wishlistReducer';
import login from './loginReducer';
import orderDetail from './orderDetailsReducer';

export default combineReducers({
  checkout,
  products,
  filterReducer,
  user,
  wishlist,
  login,
  orderDetail
});
