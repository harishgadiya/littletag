import { orderType } from '../reducers/orderDetailsReducer';

export const setOrderDetails = (data) => {
  return {
    type: orderType.FETCH_ORDER_SUCCESS,
    payload: data,
  };
};

export const fetchOrders = () => ({
  type: orderType.FETCH_ORDER_LOADING,
});
