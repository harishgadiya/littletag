import { loadState } from '../localStorage';

const initialState = {
  id: '',
  name: '',
  email: '',
  mobileNumber: '',
  alternateNumber: '',
  isLogin: false,
  addressList: [],
  recentlyPlacedOrderDetails: {},
};

export const userTypes = {
  GET_USER: 'GET_USER',
  UPDATE_USER: 'ADD_USER',
  ADD_USER_ADDRESS: 'ADD_USER_ADDRESS',
  LOGOUT_USER: 'LOGOUT_USER',
  GET_PLACED_ORDER_DETAILS: 'GET_PLACED_ORDER_DETAILS',
  DELETE_ADDRESS: 'DELETE_ADDRESS',
};

const userReducer = (state = loadState() || initialState, action) => {
  switch (action.type) {
    case userTypes.GET_USER:
      return { ...state, ...action.payload, isLogin: true };
    case userTypes.ADD_USER_ADDRESS:
      return { ...state, addressList: action.payload };
    case userTypes.LOGOUT_USER:
      return { ...state, ...initialState };
    case userTypes.GET_PLACED_ORDER_DETAILS:
      return { ...state, recentlyPlacedOrderDetails: action.payload };
    case userTypes.DELETE_ADDRESS: 
      return {
        ...state,
        addressList: state.addressList.filter(address => address.id !== action.payload)
      }
    default:
      return state;
  }
};

export default userReducer;
