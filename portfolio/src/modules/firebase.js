import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBRcsKMQBKR5aHKPyVF69YZfBmyPh1yY94",
  authDomain: "portfolio-9658c.firebaseapp.com",
  projectId: "portfolio-9658c",
  storageBucket: "portfolio-9658c.appspot.com",
  messagingSenderId: "389994082139",
  appId: "1:389994082139:web:6c79d844bfb2ddaa5e747e",
  measurementId: "G-QQF4T48FJ8",
};

export default firebase.initializeApp(firebaseConfig);

// Firestore config
export const firestore = firebase.firestore();

// Firestorage config
export const storage = firebase.storage();
