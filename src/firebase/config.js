import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAPUPLqdD6CdZmmvbVUtuZGt8yg7fMk_yU",
    authDomain: "matti-d63aa.firebaseapp.com",
    projectId: "matti-d63aa",
    storageBucket: "matti-d63aa.appspot.com",
    messagingSenderId: "500153493488",
    appId: "1:500153493488:web:a5a84cbca7ba8bd12a9f35",
    measurementId: "G-1M01192NTY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };