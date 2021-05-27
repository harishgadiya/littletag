const initialState = {
  userId: '',
  productItems: [],
};

export const checkoutTypes = {
  ADD_PRODUCT_TO_CHECKOUT: 'ADD_PRODUCT_TO_CHECKOUT',
  REMOVE_PRODUCT_TO_CHECKOUT: 'REMOVE_PRODUCT_TO_CHECKOUT',
  CLEAR_PRODUCTS_TO_CHECKOUT: 'CLEAR_PRODUCTS_TO_CHECKOUT',
  GET_ALL_CHECKOUT_PRODUCTS: 'GET_ALL_CHECKOUT_PRODUCTS',
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case checkoutTypes.ADD_PRODUCT_TO_CHECKOUT:
      return { ...state, products: action.payload };
    case checkoutTypes.GET_ALL_CHECKOUT_PRODUCTS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default checkoutReducer;
