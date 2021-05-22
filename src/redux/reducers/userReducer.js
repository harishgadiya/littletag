const initialState = {
  name: '',
  email: '',
  mobileNumber: '',
  alternateNumber: '',
  addressList: [],
};

export const userTypes = {
  ADD_USER: 'ADD_USER',
  UPDATE_USER: 'ADD_USER',
  ADD_USER_ADDRESS: 'ADD_USER_ADDRESS',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.ADD_USER_ADDRESS:
      return { ...state, addressList: action.payload };
    default:
      return state;
  }
};

export default userReducer;
