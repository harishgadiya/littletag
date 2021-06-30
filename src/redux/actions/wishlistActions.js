import { wishlistTypes } from '../reducers/wishlistReducer';

export const getAllWishlistProduct = (data) => ({
  type: wishlistTypes.GET_ALL_WISHLIST_PRODUCTS,
  payload: data,
});

export const cleanWishlistProducts = () => ({ type: wishlistTypes.CLEAR_PRODUCTS_FROM_WISHLIST });
