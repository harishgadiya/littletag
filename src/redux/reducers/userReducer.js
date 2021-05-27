const initialState = {
  id: '-M_pl-ROumWgiSZRuwMZ',
  name: '',
  email: '',
  mobileNumber: '',
  alternateNumber: '',
  addressList: [],
};

export const userTypes = {
  GET_USER: 'GET_USER',
  UPDATE_USER: 'ADD_USER',
  ADD_USER_ADDRESS: 'ADD_USER_ADDRESS',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.GET_USER:
      return { ...state, ...action.payload };
    case userTypes.ADD_USER_ADDRESS:
      return { ...state, addressList: action.payload };
    default:
      return state;
  }
};

export default userReducer;
