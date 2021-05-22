const initialState = {
  products: [],
};

export const checkoutTypes = {
  ADD_PRODUCT_TO_CHECKOUT: 'ADD_PRODUCT_TO_CHECKOUT',
  REMOVE_PRODUCT_TO_CHECKOUT: 'REMOVE_PRODUCT_TO_CHECKOUT',
  CLEAR_PRODUCTS_TO_CHECKOUT: 'CLEAR_PRODUCTS_TO_CHECKOUT',
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case checkoutTypes.ADD_PRODUCT_TO_CHECKOUT:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default checkoutReducer;
