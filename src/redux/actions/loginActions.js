import { loginTypes } from '../reducers/loginReducer';

export const openLoginPopup = () => ({ type: loginTypes.OPEN_LOGIN_POPUP });
export const closeLoginPopup = () => ({ type: loginTypes.CLOSE_LOGIN_POPUP });
