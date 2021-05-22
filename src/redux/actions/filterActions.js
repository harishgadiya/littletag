import { filterType } from '../reducers/filterReducers';
// import firebase from '../../config/firebase-config';

const setGender = (data) => ({
  type: filterType.SET_GENDER,
  payload: data,
});

export const setBrand = (data) => ({
  type: filterType.SET_BRAND,
  payload: data,
});

export default setGender;
