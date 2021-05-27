import { userTypes } from '../reducers/userReducer';

export const getUser = (user) => ({
  type: userTypes.GET_USER,
  payload: user,
});
