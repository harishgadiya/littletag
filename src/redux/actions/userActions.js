import { userTypes } from '../reducers/userReducer';

export const getUser = (user) => ({
  type: userTypes.GET_USER,
  payload: user,
});

export const logoutUserAction = () => ({
  type: userTypes.LOGOUT_USER,
});

export const getPlacedOrderDetails = (placeOrderDetails) => ({
  type: userTypes.GET_PLACED_ORDER_DETAILS,
  payload: placeOrderDetails,
});

export const deleteUserAdress = (id) => ({
  type: userTypes.DELETE_ADDRESS,
  payload: id
});
