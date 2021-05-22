import { checkoutTypes } from '../reducers/checkoutReducer';

export const addProductToCheckout = () => ({
  type: checkoutTypes.ADD_PRODUCT_TO_CHECKOUT,
  payload: 1,
});
