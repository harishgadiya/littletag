import { firebaseDB } from '../config/firebase-config';
import { cleanCheckoutProducts } from '../redux/actions/checkoutActions';
import { closeLoginPopup } from '../redux/actions/loginActions';
import { deleteUserAdress, getUser, logoutUserAction } from '../redux/actions/userActions';
import { cleanWishlistProducts } from '../redux/actions/wishlistActions';
import { loadState, saveState } from '../redux/localStorage';
import { cleanObject } from '../utils/common';
import { errorFn } from './commonAPIs';
import fetchProducts from '../redux/actions/productListingAction';
import { DB_TABLE_NAMES } from '../utils/constants';

const users = firebaseDB.child(DB_TABLE_NAMES.USERS);
const subscribers = firebaseDB.child(DB_TABLE_NAMES.SUBSCRIBERS);

export const createUser = (dispatch, userData) => {
  users.on('value', (snapshot) => {
    let userFlag = false;
    if (snapshot.val() !== null) {
      const users = snapshot.val();
      Object.keys(users).forEach((key) => {
        if (users[key]?.email === userData.email) {
          userFlag = true;
          fetchUser(dispatch, userData.email);
        }
      });
    }
    if (!userFlag) {
      users.push(cleanObject(userData), errorFn).then(() => {
        fetchUser(dispatch, userData.email);
      });
    }
  });
};

export const fetchUser = (dispatch, userEmail, userId) => {
  (userEmail || userId) &&
    users.on('value', (snapshot) => {
      const users = snapshot.val();
      let user = {};
      if (users) {
        Object.keys(users).forEach((key) => {
          if ((userEmail && users[key]?.email === userEmail) || (userId && key === userId)) {
            user = { ...users[key], id: key };
          }
        });
        if (user?.addressList) {
          user.addressList = Object.keys(user?.addressList).map((key) => ({ ...user?.addressList[key], id: key }));
        }
        if (user?.addressList?.length === 1) {
          user.selectedAddress = user?.addressList?.[0].id;
        }
        if (JSON.stringify(loadState()) !== JSON.stringify(user)) {
          saveState(user);
        }
        dispatch(getUser({ ...user }));
        dispatch(closeLoginPopup());
      }
      dispatch(getUser({ ...user }));
      dispatch(closeLoginPopup());
    });
};

export const addAddress = (dispatch, userEmail, data, userId) => {
  if (userId) {
    if (data.id) {
      const addressId = data.id;
      delete data.id;
      firebaseDB
        .child(`users/${userId}/addressList/${addressId}`)
        .set(data, errorFn)
        .then(() => fetchUser(dispatch, userEmail));
    } else {
      firebaseDB
        .child(`users/${userId}/addressList`)
        .push(data, errorFn)
        .then(() => fetchUser(dispatch, userEmail));
    }
  }
};

export const deleteAddress = (dispatch, userEmail, userId, addressId) => {
  userId &&
    addressId &&
    firebaseDB
      .child(`users/${userId}/addressList/${addressId}`)
      .remove(errorFn)
      .then(() => {
        fetchUser(dispatch, userEmail);
        dispatch(deleteUserAdress(addressId));
      });
};

export const updateUserInfo = (dispatch, userEmail, userId, data) => {
  userId &&
    users
      .child(userId)
      .set(cleanObject(data), errorFn)
      .then(() => fetchUser(dispatch, userEmail));
};

export const logoutUser = (dispatch) => {
  saveState(null);
  dispatch(logoutUserAction());
  dispatch(cleanWishlistProducts());
  dispatch(cleanCheckoutProducts());
  fetchProducts()(dispatch);
};

export const saveSelectedAddress = (dispatch, userId, selectedAddress) => {
  userId &&
    users
      .child(`${userId}/selectedAddress`)
      .set(selectedAddress, errorFn)
      .then(() => fetchUser(dispatch, null, userId));
};

export const addSubscriber = (email) => {
  subscribers.push(email, errorFn);
};
