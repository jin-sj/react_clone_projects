import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC7NJ15IpJ1q7yxm-EgLDuG6-x0SMHrP0U",
  authDomain: "instagram-clone-f7670.firebaseapp.com",
  databaseURL: "https://instagram-clone-f7670.firebaseio.com",
  projectId: "instagram-clone-f7670",
  storageBucket: "instagram-clone-f7670.appspot.com",
  messagingSenderId: "942196513272",
  appId: "1:942196513272:web:72ea5428819a8076be1e0d",
  measurementId: "G-QCLR6P8H19",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
