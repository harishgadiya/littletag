import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: 'AIzaSyCb8263LItI0guaKCcY2BDXaSzVvJ61NjE',
  authDomain: 'littletags-cfec2.firebaseapp.com',
  projectId: 'littletags-cfec2',
  storageBucket: 'littletags-cfec2.appspot.com',
  messagingSenderId: '917678110473',
  appId: '1:917678110473:web:271806a43f4727027985d8',
  measurementId: 'G-CLTDG4GJ0K',
});
// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = app.auth();

export default firebase;
