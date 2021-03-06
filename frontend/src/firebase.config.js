import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT,
  databaseURL: process.env.REACT_APP_BUCKET
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage(firebase.app());
const db = firebase.firestore(firebase.app());

export { storage, db };