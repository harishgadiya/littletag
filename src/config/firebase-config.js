import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyCb8263LItI0guaKCcY2BDXaSzVvJ61NjE',
  authDomain: 'littletags-cfec2.firebaseapp.com',
  projectId: 'littletags-cfec2',
  storageBucket: 'littletags-cfec2.appspot.com',
  messagingSenderId: '917678110473',
  appId: '1:917678110473:web:271806a43f4727027985d8',
  measurementId: 'G-CLTDG4GJ0K',
});
// Initialize Firebase
let app = null;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app(); // if already initialized, use that one
}
firebase.analytics();

export const auth = firebaseConfig.auth();

export const firebaseDB = app.database().ref();

export default firebase;
