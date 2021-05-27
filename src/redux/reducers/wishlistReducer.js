const initialState = {
  userId: '',
  productItems: [],
};

export const wishlistTypes = {
  GET_ALL_WISHLIST_PRODUCTS: 'GET_ALL_WISHLIST_PRODUCTS',
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case wishlistTypes.GET_ALL_WISHLIST_PRODUCTS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default wishlistReducer;
