const initialState = {
  userId: '',
  productItems: [],
  productCount: 0,
};

export const wishlistTypes = {
  GET_ALL_WISHLIST_PRODUCTS: 'GET_ALL_WISHLIST_PRODUCTS',
  CLEAR_PRODUCTS_FROM_WISHLIST: 'CLEAR_PRODUCTS_FROM_WISHLIST',
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case wishlistTypes.GET_ALL_WISHLIST_PRODUCTS:
      return { ...state, ...action.payload };
    case wishlistTypes.CLEAR_PRODUCTS_FROM_WISHLIST:
      return { ...state, ...initialState };
    default:
      return state;
  }
};

export default wishlistReducer;
