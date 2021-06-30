const initialState = {
  userId: '',
  productItems: [],
  productCount: 0,
};

export const checkoutTypes = {
  ADD_PRODUCT_TO_CHECKOUT: 'ADD_PRODUCT_TO_CHECKOUT',
  REMOVE_PRODUCT_TO_CHECKOUT: 'REMOVE_PRODUCT_TO_CHECKOUT',
  CLEAR_PRODUCTS_FROM_CHECKOUT: 'CLEAR_PRODUCTS_FROM_CHECKOUT',
  GET_ALL_CHECKOUT_PRODUCTS: 'GET_ALL_CHECKOUT_PRODUCTS',
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case checkoutTypes.ADD_PRODUCT_TO_CHECKOUT:
      return { ...state, products: action.payload, productCount: action?.payload?.length };
    case checkoutTypes.GET_ALL_CHECKOUT_PRODUCTS:
      return { ...state, ...action.payload };
    case checkoutTypes.CLEAR_PRODUCTS_FROM_CHECKOUT:
      return { ...state, ...initialState };
    default:
      return state;
  }
};

export default checkoutReducer;
