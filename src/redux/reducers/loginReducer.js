const initialState = {
  openLoginPopup: false,
};

export const loginTypes = {
  OPEN_LOGIN_POPUP: 'OPEN_LOGIN_POPUP',
  CLOSE_LOGIN_POPUP: 'CLOSE_LOGIN_POPUP',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginTypes.OPEN_LOGIN_POPUP:
      return { ...state, openLoginPopup: true };
    case loginTypes.CLOSE_LOGIN_POPUP:
      return { ...state, openLoginPopup: false };
    default:
      return state;
  }
};

export default loginReducer;
