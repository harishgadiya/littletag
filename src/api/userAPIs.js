import { firebaseDB } from '../config/firebase-config';
import { getUser } from '../redux/actions/userActions';
import { errorFn } from './commonAPIs';

const users = firebaseDB.child('users');

export const createUser = () => {
  users.push(
    {
      name: 'Durgesh Singh',
      mobileNumber: 9807025178,
      email: 'singh.durgesh2011@gmail.com',
      gender: 'male',
    },
    errorFn,
  );
};

export const fetchUser = (dispatch) => {
  users.on('value', (snapshot) => {
    if (snapshot.val() !== null) {
      const users = snapshot.val();
      let user = {};
      Object.keys(users).forEach((key) => {
        if (users[key]?.mobileNumber === 9807025178) {
          user = { ...users[key], id: key };
        }
      });
      if (user?.addressList) {
        user.addressList = Object.keys(user?.addressList).map((key) => ({ ...user?.addressList[key], id: key }));
      }
      dispatch(getUser({ ...user }));
    }
  });
};

export const addAddress = (data, userId) => {
  if (data.id) {
    const addressId = data.id;
    delete data.id;
    firebaseDB.child(`users/${userId}/addressList/${addressId}`).set(data, errorFn);
  } else {
    firebaseDB.child(`users/${userId}/addressList`).push(data, errorFn);
  }
};

export const deleteAddress = (userId, addressId) => {
  firebaseDB.child(`users/${userId}/addressList/${addressId}`).remove(errorFn);
};

export const updateUserInfo = (userId, data) => {
  users.child(userId).set(data, errorFn);
};
