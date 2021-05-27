import { checkoutTypes } from '../reducers/checkoutReducer';

export const addProductToCheckout = () => ({
  type: checkoutTypes.ADD_PRODUCT_TO_CHECKOUT,
  payload: 1,
});

export const getAllCheckoutProduct = (data) => ({
  type: checkoutTypes.GET_ALL_CHECKOUT_PRODUCTS,
  payload: data,
});
